import Layout from '@/components/Layout';
import { useState } from 'react';
import { CheckCircle, Lock, MailCheck, Sparkles } from 'lucide-react';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add form submission logic here
  };

  return (
    <Layout>
      <section
        className="py-20 px-6 min-h-screen bg-[#fff0d5] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/illustrations/stacked-steps-haikei.svg')" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Panel - Card Style */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md max-w-md mx-auto md:mx-0">
            <div className="text-sm uppercase text-[#04253e] font-semibold tracking-wide mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Smart Setup
            </div>

            <h2 className="text-3xl font-extrabold text-[#04253e] mb-4 leading-snug">
              Let's build your<br />
              <span className="text-[#0B0C10]">perfect automation</span>
            </h2>

            <p className="text-base text-[#04253e] opacity-80 mb-6">
              Tell us what you need and we’ll create a tailored solution — no jargon, just results.
            </p>

            <ul className="space-y-3 text-sm text-[#04253e]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>You won’t be charged anything yet</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-yellow-600" />
                <span>Your details are confidential</span>
              </li>
              <li className="flex items-center gap-2">
                <MailCheck className="w-4 h-4 text-blue-600" />
                <span>We’ll respond within 1 business day</span>
              </li>
            </ul>
          </div>

          {/* Right Panel - Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-[#04253e] mb-2">Quick Quote Request</h3>

                <div>
                  <label className="block text-sm font-medium text-[#04253e] mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#04253e] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#04253e] mb-1">
                    What would you like to automate?
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#04253e] text-white py-3 rounded-md font-semibold hover:bg-[#021722] transition"
                >
                  Submit Request
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-semibold text-[#04253e] mb-2">Thanks for your request!</h2>
                <p className="text-gray-700">We'll review it and get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
