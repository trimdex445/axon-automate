import { motion } from "framer-motion";

const examples = [
  {
    title: "🏘️ Real Estate Describer Bot",
    description: "Auto-generates listing descriptions from raw input — converts 3x better than standard templates.",
    benefit: "Saves ~3 hours/week per agent",
  },
  {
    title: "📰 Content Outline Generator",
    description: "Scrapes trending news and drafts outlines. Used by media companies to speed up ideation.",
    benefit: "Saves 8+ hours weekly",
  },
  {
    title: "📅 Tradie Job Scheduler",
    description: "Books jobs, confirms with clients by SMS, and updates a shared job sheet.",
    benefit: "Eliminates 95% of admin call-backs",
  },
  {
    title: "📨 Support Ticket Responder",
    description: "Auto-replies to common tickets using past data and GPT logic. Escalates only unique issues.",
    benefit: "Handled 70% of tickets automatically",
  },
];

export default function RealExamplesSection() {
  return (
    <section
      id="examples"
      className="min-h-screen py-32 px-6 md:px-24 bg-[#0B0C10] bg-gradient-to-b from-[#131417] to-[#0B0C10] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Real Examples
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
        {examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 shadow-md transition hover:scale-[1.02] hover:shadow-lg duration-200"
          >
            <h3 className="text-2xl font-semibold mb-3">{example.title}</h3>
            <p className="text-gray-300 mb-3">{example.description}</p>
            <p className="text-green-400 text-sm font-medium">{example.benefit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
