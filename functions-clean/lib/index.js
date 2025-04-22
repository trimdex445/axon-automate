"use strict";
// Updated for Sydney region (australia-southeast1) and 2nd Gen Functions with Secrets
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
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
function matchWorkflow(details) {
    const text = details.toLowerCase();
    if (text.includes("invoice") && text.includes("follow"))
        return pricingModel_1.pricingModel.invoice_follow_up;
    if (text.includes("calendar") || text.includes("booking"))
        return pricingModel_1.pricingModel.booking_workflow;
    if (text.includes("crm") && text.includes("sync"))
        return pricingModel_1.pricingModel.crm_sync;
    if (text.includes("ticket") || text.includes("support"))
        return pricingModel_1.pricingModel.support_bot;
    if (text.includes("form") && text.includes("sheet"))
        return pricingModel_1.pricingModel.form_sheet_bot;
    return null;
}
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
    const { name, email, details } = data;
    const matchedWorkflow = matchWorkflow(details);
    const isLargeScope = details.length > 500 || details.includes("multi") || details.includes("system") || details.includes("integration");
    let workflowSummary = "";
    let quoteType = "repeatable";
    let requiresDiscovery = false;
    if (matchedWorkflow) {
        workflowSummary = `\nMatched Workflow Type: ${matchedWorkflow.name}\nTools: ${matchedWorkflow.tools.join(", ")}\nTime Estimate: ${matchedWorkflow.time}\nHosting Required: ${matchedWorkflow.hosting ? "Yes" : "No"}\nMonthly Fee: $${matchedWorkflow.monthly}\nBase Price: $${matchedWorkflow.basePrice}\nNotes: ${matchedWorkflow.notes}`;
    }
    else {
        workflowSummary = `\nNo exact workflow match. Infer type and suggest quote based on similar examples. Base prices range from $400 to $900 depending on complexity.`;
        quoteType = "custom";
        requiresDiscovery = isLargeScope;
    }
    const openai = new openai_1.default({
        apiKey: exports.OPENAI_API_KEY.value(),
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
    await db.collection("plans").doc(event.params.docId).set(Object.assign(Object.assign({}, parsed.internal), { matchedWorkflow: (matchedWorkflow === null || matchedWorkflow === void 0 ? void 0 : matchedWorkflow.name) || null, tier: (matchedWorkflow === null || matchedWorkflow === void 0 ? void 0 : matchedWorkflow.tier) || null, expectedMargin: (matchedWorkflow === null || matchedWorkflow === void 0 ? void 0 : matchedWorkflow.expectedMargin) || null, quoteType,
        requiresDiscovery, relatedQuoteId: event.params.docId, createdAt: new Date() }));
    await db.collection("email_drafts").doc(event.params.docId).set({
        name,
        email,
        subject: "We've reviewed your quote request",
        body: parsed.publicReply,
        createdAt: new Date(),
        status: "draft",
    });
    const TELEGRAM_BOT_TOKEN_VALUE = exports.TELEGRAM_BOT_TOKEN.value();
    const telegramText = `📥 *New Quote from ${name}*\n\n🧠 *Roadmap:* ${parsed.internal.roadmap || "N/A"}\n🛠️ *Tools:* ${parsed.internal.tools || "-"}\n💰 *Cost:* ${parsed.internal.cost || "-"} | Profit: ${parsed.internal.profit || "-"}\n⏳ *Time:* ${parsed.internal.time || "-"}\n✅ *Feasibility:* ${parsed.internal.feasibility || "-"}`;
    await (0, node_fetch_1.default)(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN_VALUE}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID_VALUE,
            text: telegramText,
            parse_mode: "Markdown",
        }),
    });
});
//# sourceMappingURL=index.js.map