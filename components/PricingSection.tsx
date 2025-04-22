import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="min-h-screen py-32 px-6 md:px-24 bg-[#0B0C10] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Pricing & Plans
      </motion.h2>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
        All automations are custom-built. The prices below are typical ranges based on past work.
        Your final quote may vary depending on scope, hosting, and support needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Essentials Package */}
        <div className="bg-[#1A1A1A] rounded-xl p-8 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">🟢 Essentials</h3>
          <p className="text-gray-300 mb-4">$400–$600 estimated</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
            <li>Simple one-off automations</li>
            <li>No hosting or ongoing fees</li>
            <li>Delivered with handoff guide</li>
          </ul>
          <p className="text-sm text-gray-500">💬 Final pricing is tailored per quote.</p>
        </div>

        {/* Smart Workflow Package */}
        <div className="bg-[#1A1A1A] rounded-xl p-8 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">🟡 Smart Workflow</h3>
          <p className="text-gray-300 mb-4">$700–$950 estimated</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
            <li>Multi-step or API-powered builds</li>
            <li>May require hosting or GPT usage</li>
            <li>Optional support upgrade</li>
          </ul>
          <p className="text-sm text-gray-500">💬 Final pricing is tailored per quote.</p>
        </div>

        {/* Custom Systems Package */}
        <div className="bg-[#1A1A1A] rounded-xl p-8 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">🔴 Custom Systems</h3>
          <p className="text-gray-300 mb-4">Starts from $1,500</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
            <li>Scoped & designed via discovery call</li>
            <li>Tailored tools and integrations</li>
            <li>Support/hosting discussed on call</li>
          </ul>
          <p className="text-sm text-gray-500">💬 Final pricing is scoped individually.</p>
        </div>
      </div>

      {/* Fixes & Maintenance */}
      <div className="bg-[#1A1A1A] rounded-xl p-8 md:p-10 text-gray-300 text-sm">
        <h4 className="text-xl font-semibold text-white mb-4">🔧 Fixes & Maintenance</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>🔁 Fixes for broken APIs or workflows: $60–$120 depending on complexity</li>
          <li>📆 Maintenance Plan: $29–$49/month — includes monthly checks, API patches, and light edits</li>
          <li>💸 Refunds offered only for failed delivery or scope breach — not for post-delivery preference changes</li>
        </ul>
      </div>
    </section>
  );
}
