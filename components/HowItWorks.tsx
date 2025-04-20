const steps = [
    {
      title: "1. Tell Us What You Need",
      description:
        "Describe your current process or the task you want automated. Be as specific or rough as you like — we’ll help shape it.",
    },
    {
      title: "2. We Design & Scope It",
      description:
        "We turn your request into a technical plan, define outcomes, and send a quote — usually within 24 hours.",
    },
    {
      title: "3. You Approve — We Build",
      description:
        "Once approved, we develop your automation, test it thoroughly, and show you how to use it.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="bg-[#0B0C10] text-white px-8 md:px-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
            How It Works
          </h2>
  
          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#1F1F1F] rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-[#0FF1CE] mb-2">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  