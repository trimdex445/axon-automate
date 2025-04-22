"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingModel = void 0;
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
//# sourceMappingURL=pricingModel.js.map