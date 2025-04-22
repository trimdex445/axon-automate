import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import OpenAI from "openai";
import fetch from "node-fetch";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import { getPricingForWorkflow } from "./pricingModel";

// 🔐 Secure secrets
export const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");
export const TELEGRAM_BOT_TOKEN = defineSecret("TELEGRAM_BOT_TOKEN");

const TELEGRAM_CHAT_ID_VALUE = "7971913812";
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1364127256670244904/14v6bkcUxV12UQIC3tI901FqGK5Ukn8Y-rXAkv5FZaQ8zf8tPpsPj6K34jnjWQrVwXtN";

initializeApp();
const db = getFirestore();

const sendDiscordMessage = async (message: string) => {
  await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: message,
      username: "Axon Bot",
    }),
  });
};

export const onNewQuoteClean = onDocumentCreated({
  region: "australia-southeast1",
  document: "quotes/{docId}",
  secrets: [OPENAI_API_KEY, TELEGRAM_BOT_TOKEN],
}, async (event) => {
  const snap = event.data;
  if (!snap) return;

  const data = snap.data() as {
    name: string;
    email: string;
    details: string;
    package: string;
    wantsSupport: string;
    hostingNeeds: string;
    timeline: string;
  };

  const { name, email, details, package: selectedPackage, wantsSupport, hostingNeeds, timeline } = data;

  // 🎯 Match a pricing category
  const matchedPricing = getPricingForWorkflow(details);
  const priceText =
    matchedPricing && matchedPricing.basePrice !== "TBD"
      ? `$${matchedPricing.basePrice}`
      : "TBD";

  const openai = new OpenAI({ apiKey: OPENAI_API_KEY.value() });

  const prompt = `
A client submitted the following automation request:
"""
${details}
"""

Client selections:
- Package: ${selectedPackage}
- Wants Support: ${wantsSupport}
- Hosting Needs: ${hostingNeeds}
- Timeline: ${timeline}

Internal pricing model match:
- Workflow: ${matchedPricing.name}
- Tier: ${matchedPricing.tier}
- Base Price: ${priceText}
- Dev Cost: ${matchedPricing.estDevCost || "N/A"}
- Estimated Margin: ${matchedPricing.expectedMargin || "N/A"}
- Estimated Time: ${matchedPricing.time || "N/A"}
- Hosting: ${matchedPricing.hosting ? "Yes" : "No"}
- Tools: ${matchedPricing.tools.join(", ")}
- Support Recommended: ${matchedPricing.supportRecommended ? "Yes" : "No"}

❗ Please base the cost in your response on the model above.
❗ If price is "TBD", state it as such. Do not suggest $3000+ prices unless explicitly indicated.

Return:
{
  "internal": {
    "roadmap": "...",
    "tools": "...",
    "cost": "...",
    "profit": "...",
    "time": "...",
    "feasibility": "...",
    "notes": "..."
  },
  "publicReply": "..."
}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a senior automation consultant at a premium AI consultancy." },
      { role: "user", content: prompt },
    ],
  });

  const response = completion.choices[0]?.message?.content;
  if (!response) return;

  let parsed;
  try {
    parsed = JSON.parse(response);
  } catch (err) {
    logger.error("❌ Failed to parse GPT response as JSON:", err);
    logger.error("Raw response:", response);
    return;
  }

  await db.collection("plans").doc(event.params.docId).set({
    ...parsed.internal,
    matchedPricing,
    relatedQuoteId: event.params.docId,
    createdAt: new Date(),
  });

  await db.collection("email_drafts").doc(event.params.docId).set({
    name,
    email,
    subject: "We've reviewed your quote request",
    body: parsed.publicReply,
    createdAt: new Date(),
    status: "draft",
  });

  const TELEGRAM_BOT_TOKEN_VALUE = TELEGRAM_BOT_TOKEN.value();

  const sharedMessage = `
📥 *New Quote from ${name}*

📦 *Package:* ${selectedPackage}
🔧 *Support:* ${wantsSupport}
☁️ *Hosting:* ${hostingNeeds}
⏳ *Timeline:* ${timeline}

🧠 *Roadmap:* ${parsed.internal.roadmap || "N/A"}
🛠️ *Tools:* ${parsed.internal.tools || "-"}
💰 *Cost:* ${parsed.internal.cost || "TBD"} | Profit: ${parsed.internal.profit || "-"}
⏳ *Time:* ${parsed.internal.time || "-"}
✅ *Feasibility:* ${parsed.internal.feasibility || "-"}
`;

  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN_VALUE}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID_VALUE,
      text: sharedMessage,
      parse_mode: "Markdown",
    }),
  });

  await sendDiscordMessage(sharedMessage);
});
