// components/PricingSection.tsx
import { motion } from "framer-motion";
import { FaWrench, FaCalendarAlt, FaUndo } from "react-icons/fa";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-24 bg-[#0B0C10] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Pricing & Plans
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            color: "green",
            title: "Essentials",
            price: "$400–$600 estimated",
            bullets: [
              "Simple one-off automations",
              "No hosting or ongoing fees",
              "Delivered with handoff guide",
            ],
            note: "Final pricing is tailored per quote.",
          },
          {
            color: "yellow",
            title: "Smart Workflow",
            price: "$700–$950 estimated",
            bullets: [
              "Multi-step or API-powered builds",
              "May require hosting or GPT usage",
              "Optional support upgrade",
            ],
            note: "Final pricing is tailored per quote.",
          },
          {
            color: "red",
            title: "Custom Systems",
            price: "Starts from $1,500",
            bullets: [
              "Scoped & designed via discovery call",
              "Tailored tools and integrations",
              "Support/hosting discussed on call",
            ],
            note: "Final pricing is scoped individually.",
          },
        ].map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-6 md:p-8 shadow-md transition hover:scale-[1.02] hover:shadow-lg duration-200"
          >
            <h3 className={`text-2xl font-bold mb-4 text-${plan.color}-400`}>
              ● {plan.title}
            </h3>
            <p className="text-lg font-semibold mb-4">{plan.price}</p>
            <ul className="text-gray-300 space-y-2 mb-4">
              {plan.bullets.map((b, idx) => (
                <li key={idx}>• {b}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              🗨 {plan.note}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fixes & Maintenance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-6 md:p-8 shadow-md"
      >
        <h3 className="text-2xl font-bold mb-4">🛠 Fixes & Maintenance</h3>
        <ul className="text-gray-300 space-y-3 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <FaWrench className="text-[#0FF1CE] mt-1" />
            Fixes for broken APIs or workflows: <strong>$60–$120</strong> depending on complexity
          </li>
          <li className="flex items-start gap-2">
            <FaCalendarAlt className="text-[#0FF1CE] mt-1" />
            Maintenance Plan: <strong>$29–$49/month</strong> — includes monthly checks, API patches, and light edits
          </li>
          <li className="flex items-start gap-2">
            <FaUndo className="text-[#0FF1CE] mt-1" />
            Refunds offered only for failed delivery or scope breach — not for post-delivery preference changes
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
