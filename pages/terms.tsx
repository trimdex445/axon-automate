// pages/terms.tsx
import Layout from '@/components/Layout';

export default function TermsOfService() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-24 text-[#04253e]">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Effective Date: 26 May 2025</p>

        <p className="mb-6">These terms govern your use of Axon Automate’s website and services. By engaging with us, you agree to these conditions.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Services</h2>
        <p className="mb-6">We provide custom workflow automation for small businesses using tools like n8n, Google Sheets, Airtable, and OpenAI.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Client Responsibilities</h2>
        <p className="mb-6">You agree to provide accurate data and ensure you have the right to automate any processes involving third parties.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
        <p className="mb-6">Axon Automate retains ownership of all automation logic unless otherwise agreed. You may use deliverables for your internal business only.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment & Billing</h2>
        <p className="mb-6">All payments must be made as quoted. Hosted automations may be suspended for non-payment.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Warranty & Support</h2>
        <p className="mb-6">One-time builds come with 30-day bug support. Subscription services include continued support while active.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
        <p className="mb-6">Either party may terminate at any time. Access to hosted services ends upon cancellation.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Jurisdiction</h2>
        <p className="mb-6">These terms are governed by the laws of New South Wales, Australia. Disputes are resolved in Sydney courts.</p>

        <p className="mt-12">For questions, please email <strong>info@axon-automate.com</strong>.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Breaches</h2>
        
        <p className="mb-6">
        In the event of a data breach involving any systems used by Axon Automate or third-party services we rely on 
        (such as OpenAI, Firebase, Airtable, or Google), we will notify affected clients within 72 hours of becoming aware of the incident.
        </p>
        <p className="mb-6">
        Axon Automate is not liable for damages arising from breaches originating from third-party platforms outside our direct control. 
        Clients are responsible for securing access to their own platforms, connected tools, and any sensitive data stored or shared 
        via those integrations.
        </p>
      </div>
    </Layout>
  );
}
