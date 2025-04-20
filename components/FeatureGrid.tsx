import { FaRobot, FaChartBar, FaSync, FaCalendarAlt, FaFileInvoiceDollar, FaComments } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot className="text-[#0FF1CE] text-3xl" />,
    title: "AI Email Replies",
    description: "Auto-respond to inquiries with pricing, calendar links, and FAQs.",
  },
  {
    icon: <FaChartBar className="text-[#0FF1CE] text-3xl" />,
    title: "Sales Dashboards",
    description: "Track revenue and activity with real-time reporting.",
  },
  {
    icon: <FaSync className="text-[#0FF1CE] text-3xl" />,
    title: "Order Tracking Alerts",
    description: "Send delivery updates automatically via SMS or email.",
  },
  {
    icon: <FaCalendarAlt className="text-[#0FF1CE] text-3xl" />,
    title: "Calendar Sync",
    description: "Auto-book meetings and add events to your Google Calendar.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-[#0FF1CE] text-3xl" />,
    title: "Smart Invoicing",
    description: "Send, follow-up, and track invoices automatically.",
  },
  {
    icon: <FaComments className="text-[#0FF1CE] text-3xl" />,
    title: "Website Chatbots",
    description: "Answer FAQs and qualify leads directly from your site.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="solutions" className="min-h-screen py-32 px-6 md:px-24 bg-[#0B0C10] bg-gradient-to-b from-[#0B0C10] to-[#121417] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 shadow-md transition hover:scale-[1.02] hover:shadow-lg duration-200"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
