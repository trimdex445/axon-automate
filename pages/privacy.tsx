// pages/privacy.tsx
import Layout from '@/components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-24 text-[#04253e]">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective Date: 26 May 2025</p>
        <p className="mb-6">At Axon Automate, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Contact details submitted via forms</li>
          <li>Business workflow information</li>
          <li>Basic metadata like IP address or browser type</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">We use your information solely to deliver custom automation services, communicate with you, and improve our offerings. We do not sell or share your information with third-party marketers.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Services</h2>
        <p className="mb-6">We use services like Firebase, OpenAI, Google Workspace, Airtable, and n8n to deliver automation. These may process data on our behalf in accordance with their privacy terms.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="mb-6">We implement reasonable technical and organisational measures to safeguard your information.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-6">You can request access, correction, or deletion of your data by contacting us at <strong>info@axon-automate.com</strong>.</p>

        <p className="mt-12">For more information, feel free to contact us.</p>
      </div>
    </Layout>
  );
} 