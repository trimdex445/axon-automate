import { motion } from "framer-motion";

const examples = [
  {
    title: "🏘️ Listing Description Workflow",
    description: "Automatically generates real estate listings from raw property inputs like features and room count.",
    benefit: "Saves ~3 hours/week per agent",
  },
  {
    title: "📰 Content Ideation Workflow",
    description: "Scans trends and auto-drafts outlines and headlines for social, blogs, or news articles.",
    benefit: "Saves 8+ hours weekly",
  },
  {
    title: "📅 Job Booking Workflow",
    description: "Auto-schedules trades or service jobs, confirms by SMS, and updates internal sheets.",
    benefit: "Eliminates 95% of admin call-backs",
  },
  {
    title: "📨 Support Response Workflow",
    description: "Handles common tickets using historical replies and logic trees — only escalates new issues.",
    benefit: "Handled 70% of tickets automatically",
  },
];

export default function RealExamplesSection() {
  return (
    <section
      id="examples"
      className="min-h-screen py-32 px-6 md:px-24 bg-gradient-to-b from-[#131417] to-[#121417] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Workflow Examples
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
