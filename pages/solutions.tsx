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
  Brush
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

const borderColors: Record<string, string> = {
  General: 'border-[#04253e]',
  'Health & Wellness': 'border-[#26a69a]',
  'Legal & Finance': 'border-[#5e35b1]',
  Hospitality: 'border-[#1e88e5]',
  Ecommerce: 'border-[#fb8c00]',
  'Creative Agencies': 'border-[#d81b60]',
};

const allSolutions: Record<string, { icon: any; title: string; description: string; tag?: string }[]> = {
  // ... (unchanged solution objects)
};

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('General');
  const [selectedCard, setSelectedCard] = useState<null | { title: string; description: string }>(null);
  const solutions = allSolutions[selectedIndustry] ?? [];

  return (
    <Layout>
      <section
        className="py-12 px-4 bg-[#fff0d5]"
        style={{ backgroundImage: "url('/assets/illustrations/polygon-scatter-haikei-full.svg')", backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-[#04253e] mb-4 tracking-tight">Types of Solutions</h1>
          <p className="text-lg text-[#04253e] max-w-2xl mx-auto font-medium mb-12">
            We design solutions that combine AI agents, custom workflows, dashboards, and app integrations.
          </p>

          {/* Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {[{
              icon: Brain, title: 'Agents', description: 'AI bots that reply, sort messages, and act on logic or data'
            }, {
              icon: Repeat, title: 'Workflows', description: 'Step-by-step task automations triggered by events or forms'
            }, {
              icon: Send, title: 'Automations', description: 'Trigger emails, texts, or status updates automatically'
            }, {
              icon: Plug, title: 'Integrations', description: 'Connect tools like Airtable, Gmail, Xero, Notion, and more'
            }, {
              icon: BarChart3, title: 'Dashboards', description: 'Auto-generated reports and real-time views of key metrics'
            }, {
              icon: Sparkles, title: 'AI Tools', description: 'Use GPT to classify, summarise, and auto-reply based on input'
            }].map(({ icon: Icon, title, description }, idx) => (
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

          <h2 className="text-4xl font-extrabold text-[#04253e] mb-6">By Industry Use Case</h2>
          <p className="text-[#04253e] text-md font-medium mb-10">
            Explore common automations we've built across industries — or use them as a starting point.
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
