// pages/solutions.tsx
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
  ShoppingCart,
  Activity,
  CheckSquare,
  X,
  Sparkles,
  Repeat,
  Send,
  Plug,
  BarChart3,
  Brain,
} from 'lucide-react';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

const industryTabs = [
  'General',
  'Health & Wellness',
  'Legal & Finance',
  'Hospitality',
  'Ecommerce',
  'Creative Agencies',
];

const allSolutions: Record<string, { icon: any; title: string; description: string; tag?: string }[]> = {
  General: [
    { icon: MailCheck, title: 'Inbox Manager', description: 'Auto-classify and reply to common emails' },
    { icon: FileText, title: 'Form Filler', description: 'Auto-fill PDFs and upload to client folders' },
    { icon: CalendarClock, title: 'Auto Booking', description: 'Book meetings when someone fills a form' },
    { icon: ClipboardList, title: 'Client Tracker', description: 'Update status and send reminders' },
  ],
  'Health & Wellness': [
    { icon: UsersRound, title: 'Client Onboarding', description: 'Auto-send intro material and book first consult' },
    { icon: MailCheck, title: 'Reminder System', description: 'Send email or SMS reminders for appointments' },
    { icon: Activity, title: 'Progress Tracker', description: 'Log client progress and auto-update dashboards' },
    { icon: FileText, title: 'Form Automation', description: 'Fill in SOAP notes and store with date/tag' },
  ],
  'Legal & Finance': [
    { icon: FileText, title: 'Doc Generator', description: 'Create contracts from templates and e-sign' },
    { icon: Settings2, title: 'Client Portal', description: 'Auto-create Airtable record and Notion page per client' },
    { icon: MailCheck, title: 'Follow-Up Bot', description: 'Email clients with missing info or expired docs' },
    { icon: ClipboardList, title: 'Task Reporter', description: 'Log tasks completed for compliance' },
  ],
  Hospitality: [
    { icon: CalendarClock, title: 'Roster Bot', description: 'Auto-suggest rosters from availability sheets' },
    { icon: AlertCircle, title: 'Incident Logger', description: 'Staff log issues which are categorised for review' },
    { icon: ClipboardList, title: 'Inventory Tracker', description: 'Track stock levels and reorder automatically' },
    { icon: FileText, title: 'Staff Onboarder', description: 'Auto-send forms, guides, and training videos' },
  ],
  Ecommerce: [
    { icon: ShoppingCart, title: 'Abandoned Cart Bot', description: 'Follow up with offers to complete checkout' },
    { icon: MailCheck, title: 'Return Handler', description: 'Auto-respond to return/refund emails' },
    { icon: ClipboardList, title: 'Supplier Sync', description: 'Sync new inventory across Notion + Shopify' },
    { icon: BarChart3, title: 'Sales Tracker', description: 'Live dashboard showing sales + SKU performance' },
  ],
  'Creative Agencies': [
    { icon: Sparkles, title: 'Proposal Builder', description: 'Generate visual client proposals from form data' },
    { icon: CalendarClock, title: 'Booking Bot', description: 'Schedule shoots with reminders + briefs' },
    { icon: Plug, title: 'Multi-Tool Sync', description: 'Sync tasks, messages, and files across apps' },
    { icon: Bot, title: 'Client AI Assistant', description: 'Answer client FAQs using past project data' },
  ],
};

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('General');
  const [selectedCard, setSelectedCard] = useState<null | { title: string; description: string }>(null);
  const solutions = allSolutions[selectedIndustry] ?? [];

  return (
    <Layout>
      <section className="relative py-12 px-0 bg-[#fff0d5] overflow-hidden w-full">
        {/* Full-width SVG background */}
        <img
          src="/assets/illustrations/polygon-scatter-haikei-full.svg"
          alt="Decorative Scatter"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-[#04253e] mb-4 tracking-tight">Our Tools</h1>
          <p className="text-lg text-[#04253e] max-w-2xl mx-auto font-medium mb-12">
            We design solutions that combine AI agents, custom workflows, dashboards, and a plethora of app integrations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Brain, title: 'Agents', description: 'AI bots that can reply, sort messages, and act on premade logic or data to suit your needs' },
              { icon: Repeat, title: 'Workflows', description: 'Step-by-step task automations triggered by events or new data' },
              { icon: Send, title: 'Automations', description: 'Trigger emails, texts, or status updates automatically' },
              { icon: Plug, title: 'Integrations', description: 'Connect tools like Airtable, Gmail, Xero, Notion, and more' },
              { icon: BarChart3, title: 'Dashboards', description: 'Auto-generated reports and real-time views of key metrics' },
              { icon: Sparkles, title: 'AI Tools', description: 'Use LLMs to classify, summarise, and auto-reply based on your use case' },
            ].map(({ icon: Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-[#e5d8b8] hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out rounded-xl p-6 text-left"
              >
                <div className="mb-3 bg-[#edf2f7] text-[#04253e] w-10 h-10 flex items-center justify-center rounded-full">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-[#04253e] mb-1">{title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-4xl font-extrabold text-[#04253e] mb-6">Industry Use Cases</h2>
          <p className="text-[#04253e] text-md font-medium mb-10">
            Explore common automations across industries, or use them as a starting point to design your own.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
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

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {solutions.map(({ icon: Icon, title, description }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedCard({ title, description })}
                  className="bg-white border border-[#e5d8b8] hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out rounded-xl p-6 text-left cursor-pointer h-full flex flex-col justify-between min-h-[260px]"
                >
                  <div>
                    <div className="mb-3 bg-[#edf2f7] text-[#04253e] w-10 h-10 flex items-center justify-center rounded-full">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#04253e] mb-1">{title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modal */}
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
