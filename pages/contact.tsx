import Layout from '@/components/Layout';
import { useState } from 'react';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <Layout>
      <section className="py-20 px-6 bg-[#fff0d5] min-h-screen">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left intro content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#04253e] leading-tight mb-4">
              Let's build your<br />perfect automation
            </h1>
            <p className="text-lg text-[#04253e] opacity-80 max-w-md">
              Tell us what you need and we’ll create a tailored solution — no jargon, just results.
            </p>
            <div className="text-sm text-gray-700 mt-8 space-y-1">
              <p>✅ You won’t be charged anything yet</p>
              <p>🔒 Your details are confidential</p>
              <p>📬 We’ll respond within 1 business day</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
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
