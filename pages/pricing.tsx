import Layout from '@/components/Layout';
import { Check, X, Crown, Sparkles, Settings } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <Layout>
      {/* Fixed background SVG */}
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
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300">
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 flex justify-center items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Simple Automations
                </div>
                <div className="text-2xl font-bold text-[#04253e] mb-1">NZD $150–$300</div>
                <div className="text-sm text-gray-500 mb-6">One-off mini automations</div>
                <ul className="text-sm text-gray-700 space-y-2 text-left">
                  <li><Check className="text-green-500 inline mr-2" /> Single input → single output</li>
                  <li><Check className="text-green-500 inline mr-2" /> Form-to-email / sheet syncs</li>
                  <li><Check className="text-green-500 inline mr-2" /> Triggered follow-ups</li>
                  <li><Check className="text-green-500 inline mr-2" /> Basic data formatting</li>
                  <li><X className="text-red-500 inline mr-2" /> API integrations</li>
                  <li><X className="text-red-500 inline mr-2" /> OAuth flows</li>
                  <li><X className="text-red-500 inline mr-2" /> Strategy consultation</li>
                  <li><X className="text-red-500 inline mr-2" /> Multi-system integrations</li>
                  <li><X className="text-red-500 inline mr-2" /> Embedded dashboards</li>
                </ul>
              </div>
              <Link href="/contact" legacyBehavior>
                <a className="block mt-6 bg-[#04253e] text-white text-center py-2 px-4 rounded-md hover:bg-[#021722] transition-all w-full">
                  Get Started
                </a>
              </Link>
            </div>

            {/* End-to-End Automations */}
            <div className="relative bg-white border-2 border-[#04253e] rounded-2xl p-8 shadow-lg flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300">
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
                  <li><Check className="text-green-500 inline mr-2" /> Single input → single output</li>
                  <li><Check className="text-green-500 inline mr-2" /> Triggered follow-ups</li>
                  <li><Check className="text-green-500 inline mr-2" /> API integrations</li>
                  <li><Check className="text-green-500 inline mr-2" /> OAuth flows</li>
                  <li><Check className="text-green-500 inline mr-2" /> Multi-system integrations</li>
                  <li><Check className="text-green-500 inline mr-2" /> Embedded dashboards</li>
                  <li><X className="text-red-500 inline mr-2" /> Strategy consultation</li>
                  <li><X className="text-red-500 inline mr-2" /> Digital stack rebuild</li>
                </ul>
              </div>
              <Link href="/contact" legacyBehavior>
                <a className="block mt-6 bg-[#04253e] text-white text-center py-2 px-4 rounded-md hover:bg-[#021722] transition-all w-full">
                  Book Consultation
                </a>
              </Link>
            </div>

            {/* Business Systems Redesign */}
            <div className="relative bg-white border border-yellow-400 rounded-2xl p-8 shadow-md flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300">
              <div>
                <div className="text-xs uppercase tracking-widest text-yellow-600 mb-2 flex justify-center items-center font-semibold">
                  <Crown className="w-4 h-4 mr-2" />
                  Business Systems Redesign
                </div>
                <div className="text-lg font-bold text-[#04253e] mb-1">Contact for Pricing</div>
                <div className="text-sm text-gray-500 mb-6">Full rebuild & strategy-led delivery</div>
                <ul className="text-sm text-gray-700 space-y-2 text-left">
                  <li><Check className="text-green-500 inline mr-2" /> API integrations</li>
                  <li><Check className="text-green-500 inline mr-2" /> OAuth flows</li>
                  <li><Check className="text-green-500 inline mr-2" /> Strategy consultation</li>
                  <li><Check className="text-green-500 inline mr-2" /> Multi-system integrations</li>
                  <li><Check className="text-green-500 inline mr-2" /> Embedded dashboards</li>
                  <li><Check className="text-green-500 inline mr-2" /> Digital stack rebuild</li>
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
                question: "How long does an automation build take?",
                answer: "Most small automations take 2–5 days. Full builds can take 1–3 weeks depending on complexity.",
              },
              {
                question: "What tools or platforms can you automate?",
                answer: "We can work with almost any modern tool including Google Workspace, Airtable, CRMs, databases, APIs, and form platforms.",
              },
              {
                question: "Do you offer support after delivery?",
                answer: "Yes — every automation includes 14 days of support. Ongoing plans are available if you need regular tweaks or monitoring.",
              },
              {
                question: "I’m not sure what plan I need — what should I do?",
                answer: "Reach out through our quote form — we’ll guide you based on your business, workflows, and team needs. No pressure or obligations.",
              },
              {
                question: "Are there monthly costs for servers, APIs, or hosting?",
                answer: "Some automations require ongoing infrastructure (like API credits, cloud servers, or database hosting). These costs vary based on usage and are always discussed upfront. Many one-off builds can run entirely free with no monthly fees.",
              },
              {
                question: "Do I pay before or after the automation is built?",
                answer: "We build a working test version first, and you only pay once you're happy with the results. No hidden surprises — just transparency and confidence.",
              },
              {
                question: "What if something breaks after delivery?",
                answer: "Every build includes a free 4-week follow-up check-in. If anything breaks or needs tweaking, we’ll fix it at no extra cost.",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white p-8 rounded-2xl shadow-sm group border border-gray-200">
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
