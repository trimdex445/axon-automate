import { Check, X, Crown, Sparkles, Settings } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="bg-[#fff0d5] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#04253e] mb-4">Pricing Options</h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose a package that fits your automation goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Simple Automations */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 flex justify-center items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Simple Automations
              </div>
              <div className="text-2xl font-bold text-[#04253e] mb-1">NZD $150–$300</div>
              <div className="text-sm text-gray-500 mb-6">One-off mini automations</div>

              <ul className="text-sm text-gray-700 space-y-2 text-left">
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Single input → single output</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Form-to-email / sheet syncs</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Triggered follow-ups</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Basic data formatting</li>
                <li className="flex items-center"><X className="text-red-500 mr-2" /> API integrations</li>
                <li className="flex items-center"><X className="text-red-500 mr-2" /> OAuth flows</li>
                <li className="flex items-center"><X className="text-red-500 mr-2" /> Strategy consultation</li>
              </ul>
            </div>
            <button className="mt-6 bg-[#04253e] text-white py-2 px-4 rounded-md hover:bg-[#021722] transition-all">
              Get Started
            </button>
          </div>

          {/* End-to-End Automations */}
          <div className="relative bg-white border-2 border-[#04253e] rounded-2xl p-8 shadow-lg flex flex-col justify-between scale-[1.03] z-10">
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

              <ul className="text-sm text-gray-700 space-y-2 text-left">
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Multi-system integrations</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> OAuth logins / DB syncing</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Email parsing / routing</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Embedded dashboards</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Multi-step pipelines</li>
                <li className="flex items-center"><X className="text-red-500 mr-2" /> Business architecture redesign</li>
                <li className="flex items-center"><X className="text-red-500 mr-2" /> Long-term advisory</li>
              </ul>
            </div>
            <button className="mt-6 bg-[#04253e] text-white py-2 px-4 rounded-md hover:bg-[#021722] transition-all">
              Book Consultation
            </button>
          </div>

          {/* Business Systems Redesign */}
          <div className="relative bg-white border border-yellow-400 rounded-2xl p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-yellow-600 mb-2 flex justify-center items-center font-semibold">
                <Crown className="w-4 h-4 mr-2" />
                Business Systems Redesign
              </div>
              <div className="text-lg font-bold text-[#04253e] mb-1">Contact for Pricing</div>
              <div className="text-sm text-gray-500 mb-6">Full rebuild & strategy-led delivery</div>

              <ul className="text-sm text-gray-700 space-y-2 text-left">
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Automation consulting</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> DB design & normalisation</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Visibility audit & strategy</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Optimisation roadmap</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Digital stack rebuild</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Custom APIs / backend</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" /> Ongoing support & training</li>
              </ul>
            </div>
            <button className="mt-6 bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
