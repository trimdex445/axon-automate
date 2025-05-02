import Layout from '@/components/Layout';
import { useState } from 'react';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form logic here
  };

  return (
    <Layout>
      <section className="py-20 px-4 bg-[#fff0d5] min-h-screen">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#04253e] text-center mb-6">Request a Quote</h1>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">Name</label>
                <input type="text" required className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">Email</label>
                <input type="email" required className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">Industry</label>
                <select required className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]">
                  <option value="">Select an industry</option>
                  <option>General</option>
                  <option>Health & Wellness</option>
                  <option>Legal & Finance</option>
                  <option>Hospitality</option>
                  <option>Ecommerce</option>
                  <option>Creative Agencies</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">Budget Range (optional)</label>
                <input type="text" placeholder="$500–$2000 or leave blank" className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">Preferred Timeline</label>
                <select required className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]">
                  <option value="">Select a timeframe</option>
                  <option>ASAP</option>
                  <option>1–2 weeks</option>
                  <option>1 month+</option>
                  <option>Just exploring</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">What would you like to automate?</label>
                <textarea required rows={5} className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#04253e] mb-1">Anything else we should know?</label>
                <textarea rows={4} className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#04253e]" />
              </div>

              <div className="text-sm text-gray-600 mt-2">
                <p className="mb-1">✅ You won’t be charged anything yet</p>
                <p className="mb-1">🔒 Your details are confidential</p>
                <p>📬 We’ll respond within 1 business day</p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#04253e] text-white py-3 rounded-md font-semibold hover:bg-[#021722] transition"
              >
                Submit Request
              </button>
            </form>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h2 className="text-xl font-semibold text-[#04253e] mb-2">Thanks for your request!</h2>
              <p className="text-gray-700">We'll review it and get back to you within 24 hours.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
