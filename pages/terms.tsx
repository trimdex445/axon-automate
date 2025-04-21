import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout title="Terms & Conditions | Axon Automation">
      <div className="max-w-4xl mx-auto space-y-8 px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
        <p className="text-sm text-gray-400">Effective Date: [Insert Date]</p>

        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>By submitting a quote request, engaging our services, or accessing our website, you agree to these Terms & Conditions on behalf of yourself or your business.</p>

        <h2 className="text-2xl font-semibold">2. Services</h2>
        <p>Axon Automation provides custom automation solutions. All services are scoped based on client-submitted requests and are subject to feasibility assessment and final approval.</p>

        <h2 className="text-2xl font-semibold">3. Payment</h2>
        <p>All invoices must be paid in full as per the agreed-upon terms. Subscription-based services (e.g. hosting, ongoing automation support) will be billed monthly or annually.</p>

        <h2 className="text-2xl font-semibold">4. Ownership & IP</h2>
        <p>Unless otherwise agreed in writing, the intellectual property and implementation logic of automation systems remain the property of Axon Automation. Clients are granted a license to use the automation delivered for their internal use only.</p>

        <h2 className="text-2xl font-semibold">5. Liability</h2>
        <p>Axon Automation will not be liable for any direct or indirect loss, data corruption, downtime, or damages arising from the use or misuse of any automation solution.</p>

        <h2 className="text-2xl font-semibold">6. Confidentiality</h2>
        <p>We treat all client-submitted requests as confidential. Internal automation plans and email drafts are stored securely and accessed only by Axon Automation staff.</p>

        <h2 className="text-2xl font-semibold">7. Termination</h2>
        <p>Either party may terminate an agreement or service with written notice. Upon termination, clients must cease use of proprietary systems unless otherwise licensed.</p>

        <h2 className="text-2xl font-semibold">8. Modifications</h2>
        <p>We reserve the right to update these terms at any time. Changes will be published on this page with a revised effective date.</p>

        <h2 className="text-2xl font-semibold">9. Contact</h2>
        <p>
          For questions or concerns, please contact:
          <br />
          <strong>Axon Automation</strong>
          <br />
          ✉️ [Insert Email Address]
          <br />
          Based in Australia
        </p>
      </div>
    </Layout>
  );
}
