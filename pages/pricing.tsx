import Layout from '../components/Layout';

export default function Pricing() {
  return (
    <Layout>
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Pricing Options</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Simple Automations */}
          <div className="border border-[#e5d8b8] rounded-xl bg-white/50 p-6 shadow">
            <h2 className="text-xl font-bold mb-2 text-[#04253e]">Simple Automations</h2>
            <p className="mb-4 text-sm opacity-80">For quick, low-complexity automations that solve single problems.</p>
            <div className="bg-[#04253e] text-[#fff0d5] font-semibold text-center py-2 rounded mb-6">NZD $150–$300</div>

            <ul className="space-y-2 text-sm">
              <li>✅ Single input → single output flows</li>
              <li>✅ Form-to-email / sheet syncs</li>
              <li>✅ Triggered follow-ups</li>
              <li>✅ Basic data formatting</li>
              <li>❌ API integrations</li>
              <li>❌ OAuth flows</li>
              <li>❌ Strategy consultation</li>
            </ul>
          </div>

          {/* End-to-End Automations */}
          <div className="border border-[#e5d8b8] rounded-xl bg-white/50 p-6 shadow">
            <h2 className="text-xl font-bold mb-2 text-[#04253e]">End-to-End Automations</h2>
            <p className="mb-4 text-sm opacity-80">Designed for full business processes across tools, APIs, and logic layers.</p>
            <div className="bg-[#04253e] text-[#fff0d5] font-semibold text-center py-2 rounded mb-6">NZD $1,000–$5,000</div>

            <ul className="space-y-2 text-sm">
              <li>✅ Multi-system integrations</li>
              <li>✅ OAuth logins, database syncing</li>
              <li>✅ Email parsing / dynamic routing</li>
              <li>✅ Embedded logic + dashboards</li>
              <li>✅ Multi-step pipelines</li>
              <li>❌ Business architecture redesign</li>
              <li>❌ Long-term advisory</li>
            </ul>
          </div>

          {/* Business Redesign */}
          <div className="border border-[#e5d8b8] rounded-xl bg-white/50 p-6 shadow">
            <h2 className="text-xl font-bold mb-2 text-[#04253e]">Business Systems Redesign</h2>
            <p className="mb-4 text-sm opacity-80">A complete rework of your business’s digital systems, strategy, and automation design.</p>
            <div className="bg-[#04253e] text-[#fff0d5] font-semibold text-center py-2 rounded mb-6">Contact for Pricing</div>

            <ul className="space-y-2 text-sm">
              <li>✅ Automation consulting</li>
              <li>✅ Database design & normalisation</li>
              <li>✅ Data strategy / visibility audit</li>
              <li>✅ Long-term optimisation plan</li>
              <li>✅ Full rebuild of digital stack</li>
              <li>✅ Custom API/backend dev (if needed)</li>
              <li>✅ Dedicated support & training</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
