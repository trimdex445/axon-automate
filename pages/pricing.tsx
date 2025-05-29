import Layout from '@/components/Layout';
import { Check, X, Crown, Sparkles, Settings } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const features = [
    { label: 'Single input → single output', tiers: ['Simple', 'EndToEnd', 'Redesign'] },
    { label: 'Form-to-email / sheet syncs', tiers: ['Simple', 'EndToEnd', 'Redesign'] },
    { label: 'Triggered follow-ups', tiers: ['Simple', 'EndToEnd', 'Redesign'] },
    { label: 'Basic data formatting', tiers: ['Simple', 'EndToEnd', 'Redesign'] },
    { label: 'API integrations', tiers: ['EndToEnd', 'Redesign'] },
    { label: 'OAuth flows', tiers: ['EndToEnd', 'Redesign'] },
    { label: 'Strategy consultation', tiers: ['Redesign'] },
    { label: 'Multi-system integrations', tiers: ['EndToEnd', 'Redesign'] },
    { label: 'OAuth logins / DB syncing', tiers: ['EndToEnd', 'Redesign'] },
    { label: 'Email parsing / routing', tiers: ['EndToEnd', 'Redesign'] },
    { label: 'Embedded dashboards', tiers: ['EndToEnd', 'Redesign'] },
    { label: 'Multi-step pipelines', tiers: ['EndToEnd', 'Redesign'] },
    { label: 'Business architecture redesign', tiers: ['Redesign'] },
    { label: 'Long-term advisory', tiers: ['Redesign'] },
    { label: 'Automation consulting', tiers: ['Redesign'] },
    { label: 'DB design & normalisation', tiers: ['Redesign'] },
    { label: 'Visibility audit & strategy', tiers: ['Redesign'] },
    { label: 'Optimisation roadmap', tiers: ['Redesign'] },
    { label: 'Digital stack rebuild', tiers: ['Redesign'] },
    { label: 'Custom APIs / backend', tiers: ['Redesign'] },
    { label: 'Ongoing support & training', tiers: ['Redesign'] },
  ];

  const renderFeatureList = (tier: string) => (
    <ul className="text-sm text-gray-700 space-y-2 text-left">
      {features.map(({ label, tiers }, idx) => {
        const included = tiers.includes(tier);
        const Icon = included ? Check : X;
        const iconClass = included ? 'text-green-500' : 'text-red-500';
        return (
          <li key={idx} className="flex items-center">
            <Icon className={`${iconClass} mr-2`} /> {label}
          </li>
        );
      })}
    </ul>
  );

  return (
    <Layout>
      <div className="fixed inset-0 -mx-[50vw] left-1/2 w-screen pointer-events-none z-0 bg-[#fff0d5]">
        <img
          src="/assets/illustrations/blurry-gradient-haikei.svg"
          alt="Decorative Scatter"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <section className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-[#04253e] mb-4 tracking-tight">Pricing Options</h2>
          <p className="text-lg text-[#04253e] max-w-2xl mx-auto font-medium mb-12">
            Choose a package that fits your automation goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Simple Automations */}
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 flex justify-center items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Simple Automations
                </div>
                <div className="text-2xl font-bold text-[#04253e] mb-1">NZD $150–$300</div>
                <div className="text-sm text-gray-500 mb-6">One-off mini automations</div>
                {renderFeatureList('Simple')}
              </div>
              <Link href="/contact" legacyBehavior>
                <a className="block mt-6 bg-[#04253e] text-white text-center py-2 px-4 rounded-md hover:bg-[#021722] transition-all w-full">
                  Get Started
                </a>
              </Link>
            </div>

            {/* End-to-End Automations */}
            <div className="relative bg-white border-2 border-[#04253e] rounded-2xl p-8 shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#04253e] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
                Most popular
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#04253e] mb-2 flex justify-center items-center font-semibold">
                  <Settings className="w-4 h-4 mr-2" />
                  End-to-End Automations
                </div>
                <div className="text-2xl font-bold text-[#04253e] mb-1">NZD $1,000–$5,000</div>
                <div className="text-sm text-gray-500 mb-6">Multi-system & logic-rich workflows</div>
                {renderFeatureList('EndToEnd')}
              </div>
              <Link href="/contact" legacyBehavior>
                <a className="block mt-6 bg-[#04253e] text-white text-center py-2 px-4 rounded-md hover:bg-[#021722] transition-all w-full">
                  Book Consultation
                </a>
              </Link>
            </div>

            {/* Business Systems Redesign */}
            <div className="relative bg-white border border-yellow-400 rounded-2xl p-8 shadow-md flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <div>
                <div className="text-xs uppercase tracking-widest text-yellow-600 mb-2 flex justify-center items-center font-semibold">
                  <Crown className="w-4 h-4 mr-2" />
                  Business Systems Redesign
                </div>
                <div className="text-lg font-bold text-[#04253e] mb-1">Contact for Pricing</div>
                <div className="text-sm text-gray-500 mb-6">Full rebuild & strategy-led delivery</div>
                {renderFeatureList('Redesign')}
              </div>
              <Link href="/contact" legacyBehavior>
                <a className="block mt-6 bg-yellow-500 text-black text-center py-2 px-4 rounded-md hover:bg-yellow-600 transition-all w-full">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
