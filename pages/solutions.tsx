import Layout from '@/components/Layout';
import {
  FileText,
  CalendarCheck,
  UploadCloud,
  Bot,
  ClipboardList,
  LinkIcon,
} from 'lucide-react';

export default function SolutionsPage() {
  return (
    <Layout>
      <section className="bg-[#fff0d5] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero */}
          <h1 className="text-4xl font-bold text-[#04253e] mb-4">What We Automate</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            We build tailored automations that save time, reduce errors, and scale your workflow — whether you're a tradie, café, startup, or something in between.
          </p>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <FileText className="text-[#04253e] w-7 h-7 mb-3" />
              <h3 className="text-lg font-semibold text-[#04253e] mb-1">Automated Invoicing</h3>
              <p className="text-sm text-gray-600">
                Pull data from forms or jobs and auto-generate Xero or PDF invoices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <CalendarCheck className="text-[#04253e] w-7 h-7 mb-3" />
              <h3 className="text-lg font-semibold text-[#04253e] mb-1">Job Scheduling</h3>
              <p className="text-sm text-gray-600">
                Automatically assign and book jobs based on calendar availability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <UploadCloud className="text-[#04253e] w-7 h-7 mb-3" />
              <h3 className="text-lg font-semibold text-[#04253e] mb-1">Form-to-PDF</h3>
              <p className="text-sm text-gray-600">
                Turn digital forms into branded, auto-saved PDFs sent to staff or clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <ClipboardList className="text-[#04253e] w-7 h-7 mb-3" />
              <h3 className="text-lg font-semibold text-[#04253e] mb-1">Lead Capture & CRM Sync</h3>
              <p className="text-sm text-gray-600">
                Collect leads from your website or forms and sync them to your CRM or Sheets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <Bot className="text-[#04253e] w-7 h-7 mb-3" />
              <h3 className="text-lg font-semibold text-[#04253e] mb-1">Email Bots</h3>
              <p className="text-sm text-gray-600">
                Auto-reply to new enquiries, sort inboxes, or draft messages based on intent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <LinkIcon className="text-[#04253e] w-7 h-7 mb-3" />
              <h3 className="text-lg font-semibold text-[#04253e] mb-1">System Integrations</h3>
              <p className="text-sm text-gray-600">
                Connect tools like Airtable, Stripe, Notion, Gmail, Calendly, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Value Prop Trio Section */}
        <div className="mt-28 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-start">
            <div>
              <img src="/assets/illustrations/automation.svg" alt="Automation illustration" className="mx-auto mb-4 w-36 h-36" />
              <h3 className="text-lg font-bold text-[#04253e] mb-2">Your business on autopilot</h3>
              <p className="text-sm text-gray-600">
                From lead capture to client follow-ups, we automate repetitive tasks so your team can focus on real work.
              </p>
            </div>

            <div>
              <img src="/assets/illustrations/tools.svg" alt="Tool integrations" className="mx-auto mb-4 w-36 h-36" />
              <h3 className="text-lg font-bold text-[#04253e] mb-2">Built into the tools you already use</h3>
              <p className="text-sm text-gray-600">
                We integrate with Gmail, Sheets, Xero, Airtable, and more — so automations fit right into your daily workflow.
              </p>
            </div>

            <div>
              <img src="/assets/illustrations/teamwork.svg" alt="Team workflow" className="mx-auto mb-4 w-36 h-36" />
              <h3 className="text-lg font-bold text-[#04253e] mb-2">A system your team will love</h3>
              <p className="text-sm text-gray-600">
                Collaborate across tools with shared automations, notes, and synced data — no training needed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-xl font-semibold text-[#04253e] mb-2">Not seeing what you need?</h3>
          <p className="text-gray-600 mb-4">We design fully custom workflows based on your exact process.</p>
          <a href="/contact">
            <button className="bg-[#04253e] text-white py-2 px-6 rounded-md hover:bg-[#021722] transition">
              Book a Free Consultation
            </button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
