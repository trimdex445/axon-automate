import Layout from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy | Axon Automation">
      <div className="max-w-4xl mx-auto space-y-8 px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Effective Date: [Insert Date]</p>

        <p>
          Axon Automation is a partnership between <strong>Ethan Highet</strong> and <strong>Dominic Enache</strong>, providing custom AI automation and workflow solutions. We operate fully online from Australia and value your privacy.
        </p>

        <h2 className="text-2xl font-semibold">1. What We Collect</h2>
        <p>We collect names, email addresses, business descriptions, and other submitted information when you use our quote form or interact with our automation tools.</p>

        <h2 className="text-2xl font-semibold">2. How We Use It</h2>
        <p>We use your data to process quote requests, generate automation plans, communicate with you, and improve our service. We do not sell your data to third parties.</p>

        <h2 className="text-2xl font-semibold">3. Where Your Data Goes</h2>
        <ul className="list-disc list-inside pl-4">
          <li>Firebase (Google) – for secure cloud storage and backend services</li>
          <li>OpenAI – for generating automation strategies and drafts</li>
          <li>Telegram – to send real-time project alerts to our internal team</li>
        </ul>
        <p>These services may store data outside Australia. By using our site, you consent to this overseas processing.</p>

        <h2 className="text-2xl font-semibold">4. Data Security</h2>
        <p>We use secure Firestore rules, encrypted API keys, and limit access to Ethan and Dominic only. Your information is protected using industry-standard measures.</p>

        <h2 className="text-2xl font-semibold">5. Access & Corrections</h2>
        <p>You may request access to or corrections of your personal data by contacting us. We’ll respond within a reasonable timeframe.</p>

        <h2 className="text-2xl font-semibold">6. Contact</h2>
        <p>
          For privacy-related questions, reach out to:
          <br />
          <strong>Axon Automation</strong>
          <br />
          ✉️ [Insert Email Address]
          <br />
          Based in Australia
        </p>

        <h2 className="text-2xl font-semibold">7. Updates</h2>
        <p>This policy may change. The latest version will always be available on our website with the effective date updated accordingly.</p>
      </div>
    </Layout>
  );
}
