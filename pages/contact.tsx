import Layout from '@/components/Layout';
import { useState } from 'react';
import { CheckCircle, Lock, MailCheck, Sparkles } from 'lucide-react';
import { submitQuote } from '@/lib/submitQuote';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitQuote(formData);
    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout>
      <section
        className="py-20 px-6 min-h-screen bg-[#fff0d5] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/illustrations/stacked-steps-haikei.svg')" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Panel */}
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

          {/* Right Panel - Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-[#04253e] mb-2">Chat with us</h3>

                <div>
                  <label className="block text-sm font-medium text-[#04253e] mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#04253e] mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#04253e] mb-1">Company (optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md border border-gray-300 bg-[#fffaf0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#04253e] mb-1">
                    What would you like to automate?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-semibold text-[#04253e] mb-2">Thanks for your request!</h2>
                <p className="text-gray-700">We’ll review it and get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
