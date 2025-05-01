import Layout from '../components/Layout';

export default function Solutions() {
  return (
    <Layout>
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-10">Our Solutions</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 border border-[#e5d8b8] bg-white/50 rounded-xl shadow"><h2 className="text-xl font-semibold mb-2">Automated Invoicing</h2><p className="opacity-80">Extracts data and syncs with Xero or Sheets.</p></div>
          <div className="p-6 border border-[#e5d8b8] bg-white/50 rounded-xl shadow"><h2 className="text-xl font-semibold mb-2">Job Scheduling</h2><p className="opacity-80">Books jobs based on availability.</p></div>
          <div className="p-6 border border-[#e5d8b8] bg-white/50 rounded-xl shadow"><h2 className="text-xl font-semibold mb-2">Form-to-PDF</h2><p className="opacity-80">Creates branded PDFs from forms.</p></div>
          <div className="p-6 border border-[#e5d8b8] bg-white/50 rounded-xl shadow"><h2 className="text-xl font-semibold mb-2">CRM Sync</h2><p className="opacity-80">Captures leads and updates your CRM automatically.</p></div>
        </div>
      </section>
    </Layout>
  );
}
