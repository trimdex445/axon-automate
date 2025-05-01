import Layout from '../components/Layout';

export default function Pricing() {
  return (
    <Layout>
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-10">Pricing</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/50 border border-[#e5d8b8] rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">One-Off Builds</h2>
            <p className="mb-6 opacity-80">For simple projects, fully handed over.</p>
            <ul className="list-disc list-inside opacity-80 mb-6 space-y-1">
              <li>Fixed cost</li><li>No subscriptions</li><li>Delivered to you</li>
            </ul>
            <span className="bg-[#04253e] text-[#fff0d5] px-4 py-2 rounded font-semibold">From $300</span>
          </div>

          <div className="p-8 bg-white/50 border border-[#e5d8b8] rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Managed Plans</h2>
            <p className="mb-6 opacity-80">For hosted or evolving automations.</p>
            <ul className="list-disc list-inside opacity-80 mb-6 space-y-1">
              <li>Monthly billing</li><li>Includes support + updates</li><li>Hosting included</li>
            </ul>
            <span className="bg-[#04253e] text-[#fff0d5] px-4 py-2 rounded font-semibold">From $150/mo</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
