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
} from 'lucide-react';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const industries = [
  'General',
  'Health & Wellness',
  'Legal & Finance',
  'Hospitality',
  'Ecommerce',
  'Creative Agencies',
];

const allSolutions: Record<string, { icon: any; title: string; description: string }[]> = {
  General: [
    {
      icon: CalendarClock,
      title: 'Smart Job Dispatching',
      description:
        'Automatically assign jobs based on staff availability or location. Send notifications to staff and update Sheets instantly.',
    },
    {
      icon: ClipboardList,
      title: 'Form-to-System Sync',
      description:
        'Turn form submissions into CRM entries, invoices, or bookings with no manual data entry.',
    },
    {
      icon: FileText,
      title: 'Live Quote Generators',
      description:
        'Clients enter job info → we generate and email them an estimate instantly based on your pricing logic.',
    },
    {
      icon: MailCheck,
      title: 'Email Sorting & Response Bots',
      description:
        'Automatically tag, archive, or reply to inbound emails based on intent and client status.',
    },
    {
      icon: UsersRound,
      title: 'Lead Capture & Pipeline Sync',
      description:
        'Auto-save leads from your site, tag them by type, and track status in your CRM or Sheets.',
    },
    {
      icon: Settings2,
      title: 'Tool-to-Tool Integrations',
      description:
        "Connect platforms that don't normally sync — Airtable → Xero, Gmail → Notion, or Calendly → Sheets.",
    },
  ],
  'Health & Wellness': [
    {
      icon: UsersRound,
      title: 'New Client Onboarding',
      description:
        'Collect new client info via forms, store it securely, and trigger onboarding emails automatically.',
    },
    {
      icon: CalendarClock,
      title: 'Class Reminder Notifications',
      description:
        'Send SMS or email reminders to clients about upcoming appointments or classes automatically.',
    },
    {
      icon: FileText,
      title: 'Payment Tracking + Receipts',
      description:
        'Track payments and auto-send professional PDF receipts without lifting a finger.',
    },
    {
      icon: AlertCircle,
      title: 'Late Cancellation Responses',
      description:
        'Automatically follow up with late/no-shows using templated email flows and penalty logic.',
    },
    {
      icon: ClipboardList,
      title: 'Client History Sync',
      description:
        'Log key notes across systems (e.g., intake → CRM → email) to keep all client records up to date.',
    },
    {
      icon: Bot,
      title: 'Wellness Package Builders',
      description:
        'Let clients build their own plan and receive auto-invoicing, reminders, and scheduling.',
    },
  ],
  'Legal & Finance': [
    {
      icon: FileText,
      title: 'Auto-Fill Contracts from Forms',
      description:
        'Client fills out form → we generate a pre-filled agreement or contract for review.',
    },
    {
      icon: ClipboardList,
      title: 'Smart Task Tracking',
      description:
        'Track to-dos, deadlines and case file statuses in one synced automation system.',
    },
    {
      icon: Activity,
      title: 'Weekly Case Summaries',
      description:
        'Receive an automated weekly report summarising open, updated, or overdue matters.',
    },
    {
      icon: Bot,
      title: 'Compliance Reminder Bots',
      description:
        'Auto-alert your team or clients about upcoming compliance deadlines and needed actions.',
    },
    {
      icon: MailCheck,
      title: 'Client Communication Sync',
      description:
        'Sync emails and forms into client folders with context-tagged history logs.',
    },
    {
      icon: CalendarClock,
      title: 'Court Date Calendar Sync',
      description:
        'Feed court schedules or appearances into Google Calendar + notify responsible parties.',
    },
  ],
  Hospitality: [
    {
      icon: CalendarClock,
      title: 'Shift Scheduling + Alerts',
      description:
        'Build schedules from staff availability and auto-notify staff via SMS or email.',
    },
    {
      icon: ShoppingCart,
      title: 'Weekly Sales Reports',
      description:
        'Auto-calculate and email summary reports from your POS or spreadsheet each week.',
    },
    {
      icon: MailCheck,
      title: 'Reservation Auto-Replies',
      description:
        'Instantly reply to form enquiries or bookings with confirmations, maps, and more.',
    },
    {
      icon: Bot,
      title: 'Guest Review Prompts',
      description:
        'Send automated follow-ups to recent guests asking for feedback or reviews.',
    },
    {
      icon: ClipboardList,
      title: 'Supply Order Automation',
      description:
        'Auto-send supply restock orders based on inventory levels or weekly thresholds.',
    },
    {
      icon: UsersRound,
      title: 'Staff Onboarding',
      description:
        'New hires receive a checklist with links, docs, and training steps as soon as they’re added.',
    },
  ],
  Ecommerce: [
    {
      icon: ShoppingCart,
      title: 'Order → Invoice → Delivery',
      description:
        'When an order is placed, generate an invoice and notify the delivery system automatically.',
    },
    {
      icon: AlertCircle,
      title: 'Abandoned Cart Follow-up',
      description:
        'Detect when carts are abandoned and auto-send a reminder with discounts or follow-up info.',
    },
    {
      icon: Activity,
      title: 'Daily Revenue Tracking',
      description:
        'Track total orders and revenue per day, and email a digest each morning.',
    },
    {
      icon: ClipboardList,
      title: 'Stock Alert Flows',
      description:
        'Get notified when inventory dips below a threshold — or auto-reorder from suppliers.',
    },
    {
      icon: FileText,
      title: 'Custom PDF Packing Slips',
      description:
        'Auto-generate printable packing slips with branding when an order is placed.',
    },
    {
      icon: Bot,
      title: 'Customer Support Assistant',
      description:
        'Pre-answer common support questions by scanning incoming emails and suggesting replies.',
    },
  ],
  'Creative Agencies': [
    {
      icon: ClipboardList,
      title: 'Client Intake → Brief Generator',
      description:
        'Turn intake forms into a structured, auto-formatted internal project brief.',
    },
    {
      icon: CheckSquare,
      title: 'Approval Workflows',
      description:
        'Route design or copy drafts through internal review flows with tracked approvals.',
    },
    {
      icon: FileText,
      title: 'Client Status Reports',
      description:
        'Auto-generate weekly project status updates and send them to each client on Friday.',
    },
    {
      icon: CalendarClock,
      title: 'Campaign Scheduling',
      description:
        'Use one form to populate social post queues, assign copywriting, and notify your team.',
    },
    {
      icon: Bot,
      title: 'Auto-Invoice by Project Stage',
      description:
        'Send partial invoices when milestones are completed or approved — with Stripe links.',
    },
    {
      icon: MailCheck,
      title: 'Client Feedback Loops',
      description:
        'Auto-email links to mockups or drafts with review tracking and escalation routing.',
    },
  ],
};

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('General');
  const [selectedCard, setSelectedCard] = useState<null | { title: string; description: string }>(null);
  const solutions = allSolutions[selectedIndustry];

  return (
    <Layout>
      <section className="bg-[#fff0d5] py-20 px-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#04253e] mb-4">What We Automate</h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Explore some of our most common automation solutions — or filter by your industry.
          </p>

          {/* Industry Filter Dropdown */}
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="py-2 px-4 mb-10 rounded-md border border-gray-300 bg-white text-[#04253e] font-medium transition-all"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {solutions.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCard({ title, description })}
                className="cursor-pointer bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl"
              >
                <Icon className="text-[#04253e] w-7 h-7 mb-3" />
                <h3 className="text-lg font-semibold text-[#04253e] mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
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

        {/* Modal Popup */}
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
                <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg">
                  <Dialog.Title className="text-lg font-semibold text-[#04253e] mb-2">
                    {selectedCard?.title}
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-600 mb-4">
                    {selectedCard?.description}
                  </Dialog.Description>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="mt-4 text-sm text-[#04253e] underline"
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </section>
    </Layout>
  );
}
