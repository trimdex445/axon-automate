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

const allSolutions: Record<string, { icon: any; title: string; description: string }[]> = {
  General: [
    { icon: CalendarClock, title: 'Smart Job Dispatching', description: 'Automatically assign jobs based on staff availability or location. Send notifications to staff and update Sheets instantly.' },
    { icon: ClipboardList, title: 'Form-to-System Sync', description: 'Turn form submissions into CRM entries, invoices, or bookings with no manual data entry.' },
    { icon: FileText, title: 'Live Quote Generators', description: 'Clients enter job info → we generate and email them an estimate instantly based on your pricing logic.' },
    { icon: MailCheck, title: 'Email Sorting & Response Bots', description: 'Automatically tag, archive, or reply to inbound emails based on intent and client status.' },
    { icon: UsersRound, title: 'Lead Capture & Pipeline Sync', description: 'Auto-save leads from your site, tag them by type, and track status in your CRM or Sheets.' },
    { icon: Settings2, title: 'Tool-to-Tool Integrations', description: 'Connect platforms that don’t normally sync — Airtable → Xero, Gmail → Notion, or Calendly → Sheets.' },
  ],
  'Health & Wellness': [
    { icon: UsersRound, title: 'New Client Onboarding', description: 'Collect new client info via forms, store it securely, and trigger onboarding emails automatically.' },
    { icon: CalendarClock, title: 'Class Reminder Notifications', description: 'Send SMS or email reminders to clients about upcoming appointments or classes automatically.' },
    { icon: FileText, title: 'Payment Tracking + Receipts', description: 'Track payments and auto-send professional PDF receipts without lifting a finger.' },
    { icon: AlertCircle, title: 'Late Cancellation Responses', description: 'Automatically follow up with late/no-shows using templated email flows and penalty logic.' },
    { icon: ClipboardList, title: 'Client History Sync', description: 'Log key notes across systems to keep all client records up to date.' },
    { icon: Bot, title: 'Wellness Package Builders', description: 'Let clients build their own plan and receive auto-invoicing, reminders, and scheduling.' },
  ],
  'Legal & Finance': [
    { icon: FileText, title: 'Auto-Fill Contracts', description: 'Generate pre-filled contracts or letters from structured forms and send for signature.' },
    { icon: ClipboardList, title: 'Case File Task Tracking', description: 'Trigger task lists for each new case or project and assign automatically.' },
    { icon: Activity, title: 'Weekly Client Updates', description: 'Send automated weekly status reports to clients summarising progress and updates.' },
    { icon: MailCheck, title: 'Email Filing System', description: 'Sort and archive emails into client folders automatically based on content and tags.' },
    { icon: CalendarClock, title: 'Hearing & Deadline Reminders', description: 'Sync court hearing dates or deadlines to shared calendars and send countdown reminders.' },
    { icon: Bot, title: 'Compliance Automations', description: 'Trigger compliance checklists or alerts based on matter type or client data.' },
  ],
  Hospitality: [
    { icon: CalendarClock, title: 'Shift Scheduling Automation', description: 'Staff submit availability and get their schedules automatically via text/email.' },
    { icon: MailCheck, title: 'Booking Confirmation Flows', description: 'Auto-reply to online reservations with confirmation, links, and calendar invites.' },
    { icon: ShoppingCart, title: 'Inventory + Supplier Ordering', description: 'Monitor inventory levels and automatically reorder regular supplies when low.' },
    { icon: UsersRound, title: 'Staff Onboarding Bot', description: 'New hires receive documents, links, and checklist automatically.' },
    { icon: Bot, title: 'Review Requests', description: 'Guests receive a review follow-up email after dining or staying at your venue.' },
    { icon: FileText, title: 'Menu & Pricing Syncs', description: 'Update a Google Sheet to instantly refresh all menus/POS pricing displays.' },
  ],
  Ecommerce: [
    { icon: ShoppingCart, title: 'Order to Invoice + Shipping', description: 'Auto-generate and send invoice, packing slip and shipping instructions for each order.' },
    { icon: AlertCircle, title: 'Abandoned Cart Bot', description: 'Send reminders for incomplete carts with time-sensitive offers or prompts.' },
    { icon: Activity, title: 'Daily Sales Reports', description: 'Get a daily email summary of your orders, revenue and top-selling items.' },
    { icon: Settings2, title: 'System Sync Flows', description: 'Push data from your storefront → Airtable, Notion, QuickBooks, or Sheets.' },
    { icon: ClipboardList, title: 'Product Review Requests', description: 'Automatically follow up with recent buyers to collect product reviews.' },
    { icon: Bot, title: 'Customer Support Automations', description: 'Pre-scan inbound messages and route to team or auto-respond based on patterns.' },
  ],
  'Creative Agencies': [
    { icon: ClipboardList, title: 'Intake to Brief Generator', description: 'Turn client intake into a structured brief, notify your team, and create a new folder.' },
    { icon: CheckSquare, title: 'Approval Chains', description: 'Route assets through client/team approval stages automatically.' },
    { icon: MailCheck, title: 'Client Comms Scheduler', description: 'Ensure clients get an email every X days with progress or updates, even if nothing moved.' },
    { icon: Bot, title: 'Feedback Tracker', description: 'When a revision is received, trigger a follow-up task and mark the original as updated.' },
    { icon: FileText, title: 'Auto-Invoice per Milestone', description: 'Send an invoice when key project phases are reached or signed off.' },
    { icon: CalendarClock, title: 'Weekly Content Calendar Sync', description: 'Auto-push campaign deadlines or content calendars to everyone’s Google Cal.' },
  ],
};

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('General');
  const [selectedCard, setSelectedCard] = useState<null | { title: string; description: string }>(null);
  const solutions = allSolutions[selectedIndustry];

  return (
    <Layout>
      <section className="bg-[#fff0d5] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#04253e] mb-4">What We Automate</h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Explore some of our most common automation solutions — or filter by your industry.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
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

          <p className="text-md text-gray-600 mb-10">
            These are common workflows we build for <span className="font-semibold text-[#04253e]">{selectedIndustry}</span> businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {solutions.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCard({ title, description })}
                className="cursor-pointer bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 ease-in-out hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-10 h-10 mb-4 bg-[#edf2f7] rounded-full">
                  <Icon className="text-[#04253e] w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-[#04253e] uppercase tracking-wide mb-1">{title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
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

        {/* Modal */}
        <Transition show={!!selectedCard} as={Fragment}>
          <Dialog onClose={() => setSelectedCard(null)} className="relative z-50">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="transition-transform duration-200"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition-transform duration-200"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
              >
                <Dialog.Panel className="bg-white rounded-xl max-w-md w-full shadow-xl relative p-6">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <Dialog.Title className="text-xl font-semibold text-[#04253e] mb-2">
                    {selectedCard?.title}
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-700">
                    {selectedCard?.description}
                  </Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </section>
    </Layout>
  );
}
