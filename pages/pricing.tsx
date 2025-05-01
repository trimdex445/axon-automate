import Layout from '../components/Layout';
import { Check, X, Crown } from 'lucide-react';

const Feature = ({ label, available }: { label: string; available: boolean }) => (
  <li className="flex items-start gap-2">
    {available ? (
      <Check className="text-green-600 w-5 h-5 mt-1" />
    ) : (
      <X className="text-red-400 w-5 h-5 mt-1" />
    )}
    <span className="text-sm">{label}</span>
  </li>
);

export default function Pricing() {
  return (
    <Layout>
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Pricing Options</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Simple Automations */}
          <div className="border border-[#e5d8b8] rounded-xl bg-white/50 p-6 shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold mb-2 text-[#04253e]">Simple Automations</h2>
            <p className="mb-4 text-sm opacity-80">For quick, low-complexity automations that solve single problems.</p>
            <div className="text-center font-semibold mb-6 text-[#04253e]">NZD $150–$300</div>

            <ul className="space-y-2 mb-6">
              <Feature label="Single input → single output flows" available />
              <Feature label="Form-to-email / sheet syncs" available />
              <Feature label="Triggered follow-ups" available />
              <Feature label="Basic data formatting" available />
              <Feature label="API integrations" available={false} />
              <Feature label="OAuth flows" available={false} />
              <Feature label="Strategy consultation" available={false} />
            </ul>

            <button className="w-full bg-[#04253e] text-[#fff0d5] py-2 rounded font-semibold hover:opacity-90 transition">Get Started</button>
          </div>

          {/* End-to-End Automations */}
          <div className="border-2 border-[#04253e] rounded-xl bg-white/50 p-6 shadow hover:shadow-lg transition duration-300 scale-[1.01]">
            <h2 className="text-xl font-bold mb-2 text-[#04253e]">End-to-End Automations</h2>
            <p className="mb-4 text-sm opacity-80">For complex, multi-system automations across databases, APIs, and logic.</p>
            <div className="text-center font-semibold mb-6 text-[#04253e]">NZD $1,000–$5,000</div>

            <ul className="space-y-2 mb-6">
              <Feature label="Multi-system integrations" available />
              <Feature label="OAuth logins, database syncing" available />
              <Feature label="Email parsing / dynamic routing" available />
              <Feature label="Embedded logic + dashboards" available />
              <Feature label="Multi-step pipelines" available />
              <Feature label="Business architecture redesign" available={false} />
              <Feature label="Long-term advisory" available={false} />
            </ul>

            <button className="w-full bg-[#04253e] text-[#fff0d5] py-2 rounded font-semibold hover:opacity-90 transition">Book Consultation</button>
          </div>

          {/* Business Systems Redesign */}
          <div className="border-2 border-[#04253e] rounded-xl bg-white/50 p-6 shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold mb-2 text-[#04253e] flex items-center justify-center gap-2">
              <Crown className="text-[#04253e] w-5 h-5" />
              Business Systems Redesign
            </h2>
            <p className="mb-4 text-sm opacity-80">Full advisory and implementation to rebuild your business with automation in mind.</p>
            <div className="text-center font-semibold mb-6 text-[#04253e]">Contact for Pricing</div>

            <ul className="space-y-2 mb-6">
              <Feature label="Automation consulting" available />
              <Feature label="Database design & normalisation" available />
              <Feature label="Data strategy / visibility audit" available />
              <Feature label="Long-term optimisation plan" available />
              <Feature label="Full rebuild of digital stack" available />
              <Feature label="Custom API/backend dev (if needed)" available />
              <Feature label="Dedicated support & training" available />
            </ul>

            <button className="w-full bg-[#04253e] text-[#fff0d5] py-2 rounded font-semibold hover:opacity-90 transition">Contact Us</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
