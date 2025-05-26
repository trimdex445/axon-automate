import Layout from '@/components/Layout';
import { Check, X, Crown, Sparkles, Settings } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <Layout>
      {/* highlighter-start */}
      {/* Fixed Full-Viewport SVG Background for this page */}
      {/* This div is now fixed to the viewport, acts as the furthest back layer (z-0) */}
      {/* It has the base background color, and the SVG image is overlaid with opacity. */}
      <div className="fixed inset-0 -mx-[50vw] left-1/2 w-screen pointer-events-none z-0 bg-[#fff0d5]">
        <img
          src="/assets/illustrations/blob-scatter-haikei.svg" // Your SVG for the circles
          alt="Decorative Scatter"
          className="w-full h-full object-cover opacity-30" // SVG covers this div, with opacity
        />
      </div>
      {/* highlighter-end */}

      {/* Main content section for the pricing page */}
      {/* It needs `position: relative` and `z-index > 0` (e.g., z-10) to sit on top of the fixed background. */}
      {/* The original bg-[#fff0d5] is removed from here as it's now part of the fixed background div above. */}
      {/* highlighter-start */}
      <section className="relative z-10 py-12 px-4"> {/* Added relative and z-10 */}
      {/* highlighter-end */}
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
              <Link href="/contact" legacyBehavior>
                <a className="block mt-6 bg-yellow-500 text-black text-center py-2 px-4 rounded-md hover:bg-yellow-600 transition-all w-full">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-24 px-4">
          <h3 className="text-3xl font-bold text-center text-[#04253e] mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to build an automation?",
                answer: "Small automations like form-to-email or sheet syncing usually take 2–5 days. Larger builds involving APIs and multiple systems may take 1–3 weeks.",
              },
              {
                question: "Which tools or platforms can you automate?",
                answer: "We work with Google Workspace, Airtable, CRMs, databases, email tools, form builders, and most APIs — if it has data, we can automate it.",
              },
              {
                question: "Do you offer support after delivery?",
                answer: "Yes. All one-off builds include 30 days of free bug fixes and follow-ups. Ongoing support is available for clients with hosting or subscription plans.",
              },
              {
                question: "Not sure which plan I need — what should I do?",
                answer: "No problem. Use our quote form to explain your workflow. We'll recommend the best option with no pressure or salesy upsell.",
              },
              {
                question: "Will I have ongoing monthly costs?",
                answer: "Only if your automation needs things like paid APIs, servers, or databases. We’ll always tell you upfront. Many builds run entirely free once delivered.",
              },
              {
                question: "When do I pay?",
                answer: "We usually create a working test version first. You only pay once you’re happy and ready to go live. For larger projects, we may request a 25% deposit.",
              },
              {
                question: "What if something breaks after launch?",
                answer: "We check in after 1 week and offer free fixes within the 30-day post-delivery period. We’re here to make sure it runs smoothly.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className={`p-8 rounded-2xl shadow-sm border transition-all ${
                  i % 2 === 0 ? 'bg-white border-gray-200' : 'bg-[#fefae0] border-yellow-200'
                } group`}
              >
                <summary className="cursor-pointer text-lg font-medium text-[#04253e] flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-xl transform group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}