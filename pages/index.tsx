import Image from 'next/image';
import Layout from '../components/Layout';
import {
  Wrench,
  HeartPulse,
  FileText,
  Utensils,
  ShoppingCart,
  Brush,
} from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 items-center" id="hero">
        <div>
          <h1 className="text-5xl font-bold mb-6">We turn inefficient processes into seamless automated workflows.</h1>
          <p className="text-lg opacity-80 mb-6">
            Axon Automate builds custom AI and workflow automation solutions tailored for small businesses and solo operators.
          </p>
          <a href="#why" className="inline-block bg-[#04253e] text-[#fff0d5] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Learn How
          </a>
        </div>
        <div className="relative -top-40 -right-8 scale-800">
          <Image
              src="/assets/bg/assets2Ftask_01jt5j0nnhfvtrzkbt9vff57422F1746090928_img_0.png"
              alt="Automation Machine"
              width={500}
              height={500}
              className="object-contain"
              priority
          />
        </div>
      </section>

      {/* Why Axon */}
      <section id="why" className="py-28">
        <h2 className="text-4xl font-bold mb-10">Why Axon?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div><h3 className="text-xl font-semibold mb-2">Custom-Built Solutions</h3><p className="opacity-80">We build from scratch based on your needs.</p></div>
          <div><h3 className="text-xl font-semibold mb-2">One-Time or Ongoing</h3><p className="opacity-80">Choose fixed builds or subscription plans.</p></div>
          <div><h3 className="text-xl font-semibold mb-2">Human-Focused</h3><p className="opacity-80">Simple, jargon-free automation.</p></div>
        </div>
      </section>

            {/* Industries We Automate */}
      <section id="industries" className="py-28">
        <h2 className="text-4xl font-bold mb-6 text-center">Industries We Automate</h2>
        <p className="text-center text-lg opacity-80 mb-16">
          From lawn care to law firms — if your business has a repeatable process, we can probably automate it. Here's a taste:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-[#04253e]">
          {/* Trades & Services */}
          <div className="flex flex-col items-center text-center">
            <Wrench className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Trades & Services</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Auto-generate quotes from job forms</li>
              <li>• Auto-book appointments into your calendar</li>
              <li>• Send follow-up reminders to clients</li>
            </ul>
          </div>

          {/* Health & Wellness */}
          <div className="flex flex-col items-center text-center">
            <HeartPulse className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Health & Wellness</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• New client onboarding automation</li>
              <li>• Class reminder emails/SMS</li>
              <li>• Payment tracking + auto receipts</li>
            </ul>
          </div>

          {/* Legal & Finance */}
          <div className="flex flex-col items-center text-center">
            <FileText className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Legal & Finance</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Contract auto-filling from forms</li>
              <li>• Smart task tracking for case files</li>
              <li>• Weekly status summaries</li>
            </ul>
          </div>

          {/* Hospitality */}
          <div className="flex flex-col items-center text-center">
            <Utensils className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Hospitality</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Shift scheduling + staff notifications</li>
              <li>• Weekly sales reports to your inbox</li>
              <li>• Auto-reply to reservation requests</li>
            </ul>
          </div>

          {/* Ecommerce */}
          <div className="flex flex-col items-center text-center">
            <ShoppingCart className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Ecommerce</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Order → invoice → delivery chain</li>
              <li>• Abandoned cart follow-ups</li>
              <li>• Daily revenue tracking</li>
            </ul>
          </div>

          {/* Creative Agencies */}
          <div className="flex flex-col items-center text-center">
            <Brush className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Creative Agencies</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Intake form → project brief creation</li>
              <li>• Approval workflows for drafts</li>
              <li>• Client status reports auto-generated</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-12 opacity-70">
          Not listed? No problem — we tailor solutions to any industry.
        </p>
      </section>



      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to automate your workflow?</h2>
        <p className="text-lg opacity-80 mb-6">Get started with a tailored quote.</p>
        <a href="/contact" className="inline-block bg-[#04253e] text-[#fff0d5] px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition">
          Request a Quote
        </a>
      </section>
    </Layout>
  );
}
