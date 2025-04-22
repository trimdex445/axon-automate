// Updated for Sydney region (australia-southeast1) and 2nd Gen Functions with Secrets

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import OpenAI from "openai";
import fetch from "node-fetch";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import { pricingModel } from "./pricingModel";

// 🔐 Secure secrets
export const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");
export const TELEGRAM_BOT_TOKEN = defineSecret("TELEGRAM_BOT_TOKEN");

const TELEGRAM_CHAT_ID_VALUE = "7971913812";

initializeApp();
const db = getFirestore();

function matchWorkflow(details: string) {
  const text = details.toLowerCase();
  if (text.includes("invoice") && text.includes("follow")) return pricingModel.invoice_follow_up;
  if (text.includes("calendar") || text.includes("booking")) return pricingModel.booking_workflow;
  if (text.includes("crm") && text.includes("sync")) return pricingModel.crm_sync;
  if (text.includes("ticket") || text.includes("support")) return pricingModel.support_bot;
  if (text.includes("form") && text.includes("sheet")) return pricingModel.form_sheet_bot;
  return null;
}

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
  };

  const { name, email, details } = data;
  const matchedWorkflow = matchWorkflow(details);
  const isLargeScope = details.length > 500 || details.includes("multi") || details.includes("system") || details.includes("integration");

  let workflowSummary = "";
  let quoteType = "repeatable";
  let requiresDiscovery = false;

  if (matchedWorkflow) {
    workflowSummary = `\nMatched Workflow Type: ${matchedWorkflow.name}\nTools: ${matchedWorkflow.tools.join(", ")}\nTime Estimate: ${matchedWorkflow.time}\nHosting Required: ${matchedWorkflow.hosting ? "Yes" : "No"}\nMonthly Fee: $${matchedWorkflow.monthly}\nBase Price: $${matchedWorkflow.basePrice}\nNotes: ${matchedWorkflow.notes}`;
  } else {
    workflowSummary = `\nNo exact workflow match. Infer type and suggest quote based on similar examples. Base prices range from $400 to $900 depending on complexity.`;
    quoteType = "custom";
    requiresDiscovery = isLargeScope;
  }

  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY.value(),
  });

  const prompt = `
A client submitted the following automation request:
"""
${details}
"""
${workflowSummary}

1. INTERNAL (for Axon team use only):
- Roadmap of steps and tools
- Estimated cost, hosting, time, and profit
- Feasibility rating
- Any internal notes

2. CLIENT-FACING REPLY (stored as a draft):
- Friendly confirmation that it's doable
- Vague possible solution
- General price range and optional hosting subscription
- Leave exact process/solution out

Return this as JSON:
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
}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a senior automation consultant at a premium AI consultancy.",
      },
      {
        role: "user",
        content: prompt,
      },
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
    matchedWorkflow: matchedWorkflow?.name || null,
    tier: matchedWorkflow?.tier || null,
    expectedMargin: matchedWorkflow?.expectedMargin || null,
    quoteType,
    requiresDiscovery,
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

  const telegramText = `📥 *New Quote from ${name}*\n\n🧠 *Roadmap:* ${parsed.internal.roadmap || "N/A"}\n🛠️ *Tools:* ${parsed.internal.tools || "-"}\n💰 *Cost:* ${parsed.internal.cost || "-"} | Profit: ${parsed.internal.profit || "-"}\n⏳ *Time:* ${parsed.internal.time || "-"}\n✅ *Feasibility:* ${parsed.internal.feasibility || "-"}`;

  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN_VALUE}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID_VALUE,
      text: telegramText,
      parse_mode: "Markdown",
    }),
  });
});