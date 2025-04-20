const examples = [
    {
      title: "Automated Invoice Processing",
      description: "Takes PDF invoices from your inbox, reads them using OCR, extracts amounts, and logs them to your Xero or Google Sheet.",
    },
    {
      title: "Lead Qualification Bot",
      description: "Handles your website inquiries and sends only qualified leads to your CRM based on criteria you define.",
    },
    {
      title: "Slack HR Assistant",
      description: "Responds to staff queries like leave balance or public holidays directly inside Slack — using synced HR data.",
    },
    {
      title: "Order Notification Router",
      description: "When new Shopify or Stripe orders come in, routes them to the right staff or partner via WhatsApp or email — based on product type.",
    },
  ];
  
  export default function RealExamples() {
    return (
      <section className="bg-[#131417] text-white px-8 md:px-20 py-32 min-h-[90vh] flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-snug">
          Real Automations We've Built
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1F1F1F] p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#0FF1CE]">{item.title}</h3>
              <p className="text-lg text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  