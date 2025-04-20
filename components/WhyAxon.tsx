const points = [
    "Built for operators — not developers or corporate teams.",
    "No templates. Everything is scoped and custom built for your workflows.",
    "We’re fast — most automations are scoped and quoted within 24 hours.",
    "Support, iteration, and scaling included — we grow with you.",
  ];
  
  export default function WhyAxon() {
    return (
        <section className="min-h-screen flex items-center justify-center px-8 md:px-20 bg-[#0B0C10]">
        <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Axon Automate?</h2>
            <ul className="space-y-6 text-lg text-gray-300 text-left">
            <li>🔹 Built for operators — not developers or corporate teams.</li>
            <li>🔹 No templates. Everything is scoped and custom built.</li>
            <li>🔹 We’re fast — most automations are quoted within 24 hours.</li>
            <li>🔹 Support, iteration, and scaling included — we grow with you.</li>
            </ul>
        </div>
        </section>

    );
  }
  