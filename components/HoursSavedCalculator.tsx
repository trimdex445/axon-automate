import { useState } from "react";
import { motion } from "framer-motion";

export default function HoursSavedCalculator() {
  const [task, setTask] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [savedTime, setSavedTime] = useState<string | null>(null);

  const handleCalculate = () => {
    const hours = parseFloat(hoursPerWeek);
    if (isNaN(hours) || hours <= 0) {
      setSavedTime("Please enter a valid number.");
      return;
    }

    // 🧠 Conservative estimate: ~60–80% reduction
    const estimated = Math.round(hours * 0.7 * 10) / 10;
    setSavedTime(`Estimated time saved: ~${estimated} hrs/week`);
  };

  return (
    <section
      id="calculator"
      className="min-h-screen py-32 px-6 md:px-24 bg-gradient-to-b from-[#0B0C10] to-[#131417] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Hours Saved Calculator
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-8 shadow-md space-y-6"
      >
        <div>
          <label className="block text-lg mb-2 font-medium">What task are you doing manually?</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="e.g. Sending follow-up emails"
            className="w-full p-4 rounded-md bg-[#1F1F1F] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0FF1CE]"
          />
        </div>

        <div>
          <label className="block text-lg mb-2 font-medium">How many hours do you spend on it per week?</label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            placeholder="e.g. 5"
            className="w-full p-4 rounded-md bg-[#1F1F1F] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0FF1CE]"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="bg-[#0FF1CE] text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition w-full"
        >
          Calculate Savings
        </button>

        {savedTime && <p className="text-center text-green-400 text-lg">{savedTime}</p>}
      </motion.div>
    </section>
  );
}
