"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNewQuoteClean = exports.TELEGRAM_BOT_TOKEN = exports.OPENAI_API_KEY = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const openai_1 = __importDefault(require("openai"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const firestore_2 = require("firebase-functions/v2/firestore");
const params_1 = require("firebase-functions/params");
const firebase_functions_1 = require("firebase-functions");
const pricingModel_1 = require("./pricingModel");
// 🔐 Secure secrets
exports.OPENAI_API_KEY = (0, params_1.defineSecret)("OPENAI_API_KEY");
exports.TELEGRAM_BOT_TOKEN = (0, params_1.defineSecret)("TELEGRAM_BOT_TOKEN");
const TELEGRAM_CHAT_ID_VALUE = "7971913812";
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1364127256670244904/14v6bkcUxV12UQIC3tI901FqGK5Ukn8Y-rXAkv5FZaQ8zf8tPpsPj6K34jnjWQrVwXtN";
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
const sendDiscordMessage = async (message) => {
    await (0, node_fetch_1.default)(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: message,
            username: "Axon Bot",
        }),
    });
};
exports.onNewQuoteClean = (0, firestore_2.onDocumentCreated)({
    region: "australia-southeast1",
    document: "quotes/{docId}",
    secrets: [exports.OPENAI_API_KEY, exports.TELEGRAM_BOT_TOKEN],
}, async (event) => {
    var _a, _b;
    const snap = event.data;
    if (!snap)
        return;
    const data = snap.data();
    const { name, email, details, package: selectedPackage, wantsSupport, hostingNeeds, timeline } = data;
    // 🎯 Match a pricing category
    const matchedPricing = (0, pricingModel_1.getPricingForWorkflow)(details);
    const priceText = matchedPricing && matchedPricing.basePrice !== "TBD"
        ? `$${matchedPricing.basePrice}`
        : "TBD";
    const openai = new openai_1.default({ apiKey: exports.OPENAI_API_KEY.value() });
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
    const response = (_b = (_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content;
    if (!response)
        return;
    let parsed;
    try {
        parsed = JSON.parse(response);
    }
    catch (err) {
        firebase_functions_1.logger.error("❌ Failed to parse GPT response as JSON:", err);
        firebase_functions_1.logger.error("Raw response:", response);
        return;
    }
    await db.collection("plans").doc(event.params.docId).set(Object.assign(Object.assign({}, parsed.internal), { matchedPricing, relatedQuoteId: event.params.docId, createdAt: new Date() }));
    await db.collection("email_drafts").doc(event.params.docId).set({
        name,
        email,
        subject: "We've reviewed your quote request",
        body: parsed.publicReply,
        createdAt: new Date(),
        status: "draft",
    });
    const TELEGRAM_BOT_TOKEN_VALUE = exports.TELEGRAM_BOT_TOKEN.value();
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
    await (0, node_fetch_1.default)(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN_VALUE}/sendMessage`, {
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
//# sourceMappingURL=index.js.map