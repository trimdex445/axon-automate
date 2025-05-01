import Image from 'next/image';
import Layout from '../components/Layout';

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
            Learn Why
          </a>
        </div>
        <div className="flex justify-center">
          <Image src="\assets\bg\assets2Ftask_01jt5j0nnhfvtrzkbt9vff57422F1746090928_img_0.png" alt="Automation Machine" width={500} height={500} className="object-contain" priority />
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

      {/* Examples */}
      <section id="examples" className="py-28">
        <h2 className="text-4xl font-bold mb-10">Real Examples</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/50 border border-[#e5d8b8] rounded-xl shadow"><h4 className="font-semibold mb-2">Quote Builder</h4><p className="opacity-80">Auto-generates PDFs and sends responses instantly.</p></div>
          <div className="p-6 bg-white/50 border border-[#e5d8b8] rounded-xl shadow"><h4 className="font-semibold mb-2">Follow-Up Bot</h4><p className="opacity-80">Detects leads and follows up via email.</p></div>
          <div className="p-6 bg-white/50 border border-[#e5d8b8] rounded-xl shadow"><h4 className="font-semibold mb-2">Smart Scheduling</h4><p className="opacity-80">Books clients into your calendar automatically.</p></div>
        </div>
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
