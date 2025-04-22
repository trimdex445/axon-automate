"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingModel = void 0;
exports.pricingModel = {
    form_sheet_bot: {
        name: "Form to Sheet Bot",
        basePrice: 400,
        estDevCost: 320,
        expectedMargin: "20%",
        time: "1–2 days",
        hosting: false,
        monthly: 0,
        tools: ["Google Forms", "Google Sheets"],
        tier: 1,
        notes: "Entry-level workflow for collecting and storing responses."
    },
    invoice_follow_up: {
        name: "Invoice Follow-Up Bot",
        basePrice: 450,
        estDevCost: 340,
        expectedMargin: "25%",
        time: "2–3 days",
        hosting: true,
        monthly: 15,
        tools: ["n8n", "Gmail API", "Xero/Stripe"],
        tier: 1,
        notes: "Detect unpaid invoices and send follow-ups on a schedule."
    },
    booking_workflow: {
        name: "Job Booking Workflow",
        basePrice: 600,
        estDevCost: 460,
        expectedMargin: "23%",
        time: "3–5 days",
        hosting: true,
        monthly: 29,
        tools: ["Google Calendar", "Twilio", "n8n"],
        tier: 2,
        notes: "Form-to-calendar workflow with auto-confirm and optional SMS."
    },
    crm_sync: {
        name: "CRM Sync Automation",
        basePrice: 700,
        estDevCost: 525,
        expectedMargin: "25%",
        time: "4–6 days",
        hosting: true,
        monthly: 29,
        tools: ["Notion", "Zapier", "Airtable"],
        tier: 2,
        notes: "Sync lead sources or form entries into CRM automatically."
    },
    support_bot: {
        name: "Support Ticket Workflow",
        basePrice: 900,
        estDevCost: 660,
        expectedMargin: "36%",
        time: "5–7 days",
        hosting: true,
        monthly: 49,
        tools: ["GPT", "Vector DB", "Webhook"],
        tier: 3,
        notes: "Reads support requests and replies or escalates intelligently."
    },
    // ... continued for all workflows
};
//# sourceMappingURL=pricingModel.js.map