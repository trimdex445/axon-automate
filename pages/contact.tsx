import Layout from '@/components/Layout';
import { CheckCircle, Lock, MailCheck, Sparkles } from 'lucide-react';

export default function QuotePage() {
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
              Tell us what you need and we’ll create a tailored solution that actually works.
            </p>

            <ul className="space-y-3 text-sm text-[#04253e]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>You won’t be charged anything upfront</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-yellow-600" />
                <span>Your details are private and secure</span>
              </li>
              <li className="flex items-center gap-2">
                <MailCheck className="w-4 h-4 text-blue-600" />
                <span>You’ll hear from us within one business day</span>
              </li>
            </ul>
          </div>

          {/* Right Panel - Form connected to Google Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full">
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSfSWfdApv6-KigomtIgyvO-8j6WcQydiXzzMntCbCRRsELgTg/formResponse"
              method="POST"
              target="_blank"
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-[#04253e] mb-2">Quick Quote Request</h3>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">Name</label>
                <input
                  name="entry.1873420120"
                  required
                  type="text"
                  className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">Email</label>
                <input
                  name="entry.1862222832"
                  required
                  type="email"
                  className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">
                  What would you like to automate?
                </label>
                <textarea
                  name="entry.1807499461"
                  required
                  rows={5}
                  className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#04253e] text-white py-3 rounded-md font-semibold hover:bg-[#021722] transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
