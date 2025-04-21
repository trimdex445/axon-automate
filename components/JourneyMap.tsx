import React from "react";

interface JourneyStep {
  icon: string;
  title: string;
  description: string;
}

interface JourneyMapProps {
  title: string;
  problem: string;
  steps: JourneyStep[];
  outcome: string;
  pricing: "One-Off" | "Monthly Plan";
}

const JourneyMap: React.FC<JourneyMapProps> = ({ title, problem, steps, outcome, pricing }) => {
  return (
    <div className="bg-[#131417] border border-[#1f1f1f] rounded-2xl p-6 md:p-10 space-y-6 text-white">
      <h2 className="text-2xl md:text-3xl font-bold">🧭 {title}</h2>

      <div>
        <p className="text-[#0FF1CE] font-semibold mb-1">The Problem</p>
        <p className="text-gray-300">{problem}</p>
      </div>

      <div>
        <p className="text-[#0FF1CE] font-semibold mb-1">How We Automate It</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          {steps.map((step, index) => (
            <li key={index}>
              <span className="font-medium text-white">{step.icon} {step.title}</span> – {step.description}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="text-[#0FF1CE] font-semibold mb-1">Outcome</p>
        <p className="text-green-400 font-semibold">✅ {outcome}</p>
      </div>

      <div>
        <p className="text-[#0FF1CE] font-semibold mb-1">Pricing</p>
        <p className="text-gray-300">{pricing === "One-Off" ? "One-time build cost. No ongoing fees." : "Requires monthly hosting or API subscription."}</p>
      </div>
    </div>
  );
};

export default JourneyMap;
