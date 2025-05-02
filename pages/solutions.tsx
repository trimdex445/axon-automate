import Layout from '@/components/Layout';
import {
  MailCheck,
  FileText,
  UsersRound,
  CalendarClock,
  Bot,
  ClipboardList,
  Settings2,
  AlertCircle,
  Briefcase,
  ShoppingCart,
  Activity,
  CheckSquare,
  X,
} from 'lucide-react';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const industryTabs = ['General', 'Health & Wellness', 'Legal & Finance', 'Hospitality', 'Ecommerce', 'Creative Agencies'];

const bgColors: Record<string, string> = {
  General: 'bg-[#fef9f2]',
  'Health & Wellness': 'bg-[#f0fff4]',
  'Legal & Finance': 'bg-[#f8f9fc]',
  Hospitality: 'bg-[#f0f9ff]',
  Ecommerce: 'bg-[#fffaf0]',
  'Creative Agencies': 'bg-[#f5f0ff]',
};

const allSolutions: Record<string, { icon: any; title: string; description: string; tag?: string }[]> = {
  General: [
    { icon: CalendarClock, title: 'Smart Job Dispatching', description: 'Automatically assign jobs based on staff availability or location. Send notifications to staff and update Sheets instantly.', tag: 'Core Flow' },
    { icon: ClipboardList, title: 'Form-to-System Sync', description: 'Turn form submissions into CRM entries, invoices, or bookings with no manual data entry.', tag: 'Form Automation' },
    { icon: FileText, title: 'Live Quote Generators', description: 'Clients enter job info → we generate and email them an estimate instantly based on your pricing logic.', tag: 'Popular' },
    { icon: MailCheck, title: 'Email Sorting & Response Bots', description: 'Automatically tag, archive, or reply to inbound emails based on intent and client status.', tag: 'AI-Enhanced' },
    { icon: UsersRound, title: 'Lead Capture & Pipeline Sync', description: 'Auto-save leads from your site, tag them by type, and track status in your CRM or Sheets.', tag: 'CRM Flow' },
    { icon: Settings2, title: 'Tool-to-Tool Integrations', description: 'Connect platforms that don’t normally sync — Airtable → Xero, Gmail → Notion, or Calendly → Sheets.', tag: 'Systems Sync' },
  ],
  'Health & Wellness': [
    { icon: UsersRound, title: 'New Client Onboarding', description: 'Collect new client info via forms, store it securely, and trigger onboarding emails automatically.', tag: 'Welcome Flow' },
    { icon: CalendarClock, title: 'Class Reminder Notifications', description: 'Send SMS or email reminders to clients about upcoming appointments or classes automatically.', tag: 'SMS Sync' },
    { icon: FileText, title: 'Payment Tracking + Receipts', description: 'Track payments and auto-send professional PDF receipts without lifting a finger.', tag: 'Billing' },
    { icon: AlertCircle, title: 'Late Cancellation Responses', description: 'Automatically follow up with late/no-shows using templated email flows and penalty logic.', tag: 'Retention' },
    { icon: ClipboardList, title: 'Client History Sync', description: 'Log key notes across systems to keep all client records up to date.', tag: 'Health Logs' },
    { icon: Bot, title: 'Wellness Package Builders', description: 'Let clients build their own plan and receive auto-invoicing, reminders, and scheduling.', tag: 'Custom Plans' },
  ],
  'Legal & Finance': [
    { icon: FileText, title: 'Auto-Fill Contracts', description: 'Generate pre-filled contracts or letters from structured forms and send for signature.', tag: 'Document Flow' },
    { icon: ClipboardList, title: 'Case File Task Tracking', description: 'Trigger task lists for each new case or project and assign automatically.', tag: 'Workflow' },
    { icon: Activity, title: 'Weekly Client Updates', description: 'Send automated weekly status reports to clients summarising progress and updates.', tag: 'Reporting' },
    { icon: MailCheck, title: 'Email Filing System', description: 'Sort and archive emails into client folders automatically based on content and tags.', tag: 'Inbox Sync' },
    { icon: CalendarClock, title: 'Hearing & Deadline Reminders', description: 'Sync court hearing dates or deadlines to shared calendars and send countdown reminders.', tag: 'Deadlines' },
    { icon: Bot, title: 'Compliance Automations', description: 'Trigger compliance checklists or alerts based on matter type or client data.', tag: 'Alerts' },
  ],
  Hospitality: [
    { icon: CalendarClock, title: 'Shift Scheduling Automation', description: 'Staff submit availability and get their schedules automatically via text/email.', tag: 'Staff Flow' },
    { icon: MailCheck, title: 'Booking Confirmation Flows', description: 'Auto-reply to online reservations with confirmation, links, and calendar invites.', tag: 'Booking Bot' },
    { icon: ShoppingCart, title: 'Inventory + Supplier Ordering', description: 'Monitor inventory levels and automatically reorder regular supplies when low.', tag: 'Stock Sync' },
    { icon: UsersRound, title: 'Staff Onboarding Bot', description: 'New hires receive documents, links, and checklist automatically.', tag: 'Team Setup' },
    { icon: Bot, title: 'Review Requests', description: 'Guests receive a review follow-up email after dining or staying at your venue.', tag: 'Feedback' },
    { icon: FileText, title: 'Menu & Pricing Syncs', description: 'Update a Google Sheet to instantly refresh all menus/POS pricing displays.', tag: 'POS Sync' },
  ],
  Ecommerce: [
    { icon: ShoppingCart, title: 'Order to Invoice + Shipping', description: 'Auto-generate and send invoice, packing slip and shipping instructions for each order.', tag: 'Logistics' },
    { icon: AlertCircle, title: 'Abandoned Cart Bot', description: 'Send reminders for incomplete carts with time-sensitive offers or prompts.', tag: 'Recovery' },
    { icon: Activity, title: 'Daily Sales Reports', description: 'Get a daily email summary of your orders, revenue and top-selling items.', tag: 'Reports' },
    { icon: Settings2, title: 'System Sync Flows', description: 'Push data from your storefront → Airtable, Notion, QuickBooks, or Sheets.', tag: 'Data Flow' },
    { icon: ClipboardList, title: 'Product Review Requests', description: 'Automatically follow up with recent buyers to collect product reviews.', tag: 'Social Proof' },
    { icon: Bot, title: 'Customer Support Automations', description: 'Pre-scan inbound messages and route to team or auto-respond based on patterns.', tag: 'Support Bot' },
  ],
  'Creative Agencies': [
    { icon: ClipboardList, title: 'Intake to Brief Generator', description: 'Turn client intake into a structured brief, notify your team, and create a new folder.', tag: 'Core Flow' },
    { icon: CheckSquare, title: 'Approval Chains', description: 'Route assets through client/team approval stages automatically.', tag: 'Collab' },
    { icon: MailCheck, title: 'Client Comms Scheduler', description: 'Ensure clients get an email every X days with progress or updates, even if nothing moved.', tag: 'Client Ready' },
    { icon: Bot, title: 'Feedback Tracker', description: 'When a revision is received, trigger a follow-up task and mark the original as updated.', tag: 'Smart Task' },
    { icon: FileText, title: 'Auto-Invoice per Milestone', description: 'Send an invoice when key project phases are reached or signed off.', tag: 'Auto Billing' },
    { icon: CalendarClock, title: 'Weekly Content Calendar Sync', description: 'Auto-push campaign deadlines or content calendars to everyone’s Google Cal.', tag: 'Schedule Sync' },
  ],
};

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('General');
  const [selectedCard, setSelectedCard] = useState<null | { title: string; description: string }>(null);
  const solutions = allSolutions[selectedIndustry];

  return (
    <Layout>
      <section className="py-20 px-4" style={{ backgroundColor: '#fff0d5' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-[#04253e] mb-2 tracking-tight">What We Automate</h1>
          <p className="text-lg text-[#04253e] max-w-2xl mx-auto font-medium">
            Explore some of our most powerful workflow automations — and filter by industry to see what's possible.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
            {industryTabs.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedIndustry === industry ? 'bg-[#04253e] text-white border-[#04253e]' : 'bg-white text-[#04253e] border-gray-300 hover:bg-gray-100'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-600 mb-10">
            These are common workflows we build for <span className="font-semibold text-[#04253e]">{selectedIndustry}</span> businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {solutions.map(({ icon: Icon, title, description, tag }, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCard({ title, description })}
                className={`${bgColors[selectedIndustry]} cursor-pointer p-6 min-h-[250px] rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 ease-in-out hover:scale-[1.02]`}
              >
                {tag && (
                  <span className="text-xs font-semibold text-[#04253e] bg-[#eaf4ff] rounded-full px-2 py-0.5 mb-2 inline-block">
                    {tag}
                  </span>
                )}
                <div className="flex items-center justify-center w-10 h-10 mb-3 bg-[#edf2f7] rounded-full">
                  <Icon className="text-[#04253e] w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#04253e] uppercase tracking-wide mb-1">{title}</h4>
                <p className="text-[15px] text-gray-700 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-xl font-semibold text-[#04253e] mb-2">Looking for something else?</h3>
            <p className="text-gray-600 mb-4">We build completely custom workflows too — just tell us what you're trying to automate.</p>
            <a href="/contact">
              <button className="bg-[#04253e] text-white py-2 px-6 rounded-md hover:bg-[#021722] transition">
                Book a Free Consultation
              </button>
            </a>
          </div>
        </div>

        <Transition show={!!selectedCard} as={Fragment}>
          <Dialog onClose={() => setSelectedCard(null)} className="relative z-50">
            <Transition.Child as={Fragment} enter="transition-opacity duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Transition.Child as={Fragment} enter="transition-transform duration-200" enterFrom="scale-95 opacity-0" enterTo="scale-100 opacity-100" leave="transition-transform duration-200" leaveFrom="scale-100 opacity-100" leaveTo="scale-95 opacity-0">
                <Dialog.Panel className="bg-white rounded-xl max-w-md w-full shadow-xl relative p-6">
                  <button onClick={() => setSelectedCard(null)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                  <Dialog.Title className="text-xl font-semibold text-[#04253e] mb-2">{selectedCard?.title}</Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-700">{selectedCard?.description}</Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </section>
    </Layout>
  );
}
