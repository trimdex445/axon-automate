"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPricingForWorkflow = exports.pricingModel = void 0;
exports.pricingModel = {
    email_autoresponder: {
        name: "Email Autoresponder Bot",
        tier: "essentials",
        basePrice: 450,
        estDevCost: 320,
        expectedMargin: "28%",
        time: "2–3 days",
        hosting: false,
        tools: ["Gmail API", "OpenAI", "n8n"],
        requiresSupport: false,
        supportRecommended: false,
        apiRiskLevel: "moderate",
        fixFeeLikely: true,
        notes: "Simple trigger-based email replies based on form entries."
    },
    crm_syncer: {
        name: "CRM Contact Sync",
        tier: "smart",
        basePrice: 850,
        estDevCost: 620,
        expectedMargin: "27%",
        time: "4–5 days",
        hosting: true,
        tools: ["Airtable", "Zapier", "Google Sheets"],
        requiresSupport: true,
        supportRecommended: true,
        apiRiskLevel: "moderate",
        fixFeeLikely: true,
        notes: "Pushes lead data into CRM, cleans duplicates, syncs to Google Sheet."
    },
    booking_workflow: {
        name: "Job Booking Workflow",
        tier: "smart",
        basePrice: 750,
        estDevCost: 550,
        expectedMargin: "26%",
        time: "3–4 days",
        hosting: true,
        tools: ["Google Calendar", "Twilio", "n8n"],
        requiresSupport: true,
        supportRecommended: true,
        apiRiskLevel: "moderate",
        fixFeeLikely: true,
        notes: "Automates job booking, sends confirmation SMS, logs to sheet."
    },
    full_dashboard_builder: {
        name: "KPI Dashboard & Alerts",
        tier: "custom",
        basePrice: 1800,
        estDevCost: 1300,
        expectedMargin: "27%",
        time: "1–2 weeks",
        hosting: true,
        tools: ["Power BI", "Firebase", "Google Sheets"],
        requiresSupport: true,
        supportRecommended: true,
        apiRiskLevel: "high",
        fixFeeLikely: true,
        notes: "Interactive dashboard from multiple sources, includes Slack alerts."
    },
    invoice_followup: {
        name: "Invoice Reminder Flow",
        tier: "essentials",
        basePrice: 500,
        estDevCost: 370,
        expectedMargin: "26%",
        time: "2–3 days",
        hosting: false,
        tools: ["Xero", "Gmail API", "Zapier"],
        requiresSupport: false,
        supportRecommended: false,
        apiRiskLevel: "low",
        fixFeeLikely: false,
        notes: "Checks for overdue invoices and sends reminders via email."
    },
    onboarding_sequence: {
        name: "Client Onboarding Sequence",
        tier: "smart",
        basePrice: 880,
        estDevCost: 640,
        expectedMargin: "27%",
        time: "5 days",
        hosting: true,
        tools: ["Notion", "Zapier", "OpenAI"],
        requiresSupport: true,
        supportRecommended: true,
        apiRiskLevel: "moderate",
        fixFeeLikely: true,
        notes: "Automates client welcome flow: sends doc pack, sets calendar, adds to CRM."
    }
};
// 🧠 Matching Function
function getPricingForWorkflow(details) {
    const lower = details.toLowerCase();
    const keywords = [
        { key: "email_autoresponder", terms: ["email", "auto-reply", "gmail"] },
        { key: "crm_syncer", terms: ["crm", "contact", "lead", "hubspot"] },
        { key: "booking_workflow", terms: ["calendar", "booking", "job", "schedule", "sms"] },
        { key: "full_dashboard_builder", terms: ["dashboard", "kpi", "report", "power bi"] },
        { key: "invoice_followup", terms: ["invoice", "xero", "payment", "reminder"] },
        { key: "onboarding_sequence", terms: ["onboarding", "welcome", "crm", "client", "sequence"] },
    ];
    for (const { key, terms } of keywords) {
        if (terms.some(term => lower.includes(term))) {
            return Object.assign({ id: key }, exports.pricingModel[key]);
        }
    }
    return {
        id: "unknown",
        name: "Unmatched Workflow",
        tier: "custom",
        basePrice: "TBD",
        estDevCost: "TBD",
        expectedMargin: "TBD",
        time: "TBD",
        hosting: true,
        tools: [],
        requiresSupport: true,
        supportRecommended: true,
        apiRiskLevel: "unknown",
        fixFeeLikely: true,
        notes: "No direct match found. Needs manual review."
    };
}
exports.getPricingForWorkflow = getPricingForWorkflow;
//# sourceMappingURL=pricingModel.js.map