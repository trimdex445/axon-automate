import { motion } from "framer-motion";
import JourneyMap from "./JourneyMap";

export default function JourneyShowcaseSection() {
  return (
    <section
      id="journeys"
      className="min-h-screen py-32 px-6 md:px-24 bg-gradient-to-b from-[#0B0C10] to-[#121417] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Journey Maps
      </motion.h2>

      <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
        {/* 1. Real Estate Describer Bot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 shadow-md hover:scale-[1.02] hover:shadow-lg transition duration-200"
        >
          <JourneyMap
            title="Real Estate Describer Bot"
            problem="Agents spend too much time manually writing listing descriptions."
            steps={[
              { icon: "📥", title: "Input Raw Data", description: "Agent submits address, key features, and room info." },
              { icon: "✍️", title: "AI Drafts Copy", description: "Bot generates clean, sales-friendly description instantly." },
              { icon: "🔁", title: "Edit or Accept", description: "Agent can tweak the copy or approve it directly." },
            ]}
            outcome="Get consistent, compelling listings in seconds — no more blank page stress."
            pricing="One-Off"
          />
        </motion.div>

        {/* 2. Content Outline Generator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 shadow-md hover:scale-[1.02] hover:shadow-lg transition duration-200"
        >
          <JourneyMap
            title="Content Outline Generator"
            problem="Writers waste time ideating headlines and outlines for trending topics."
            steps={[
              { icon: "🌐", title: "Scan Trends", description: "Bot monitors trending news, Reddit, or Twitter topics." },
              { icon: "🧠", title: "Generate Outline", description: "Creates a structured post/article outline using GPT." },
              { icon: "💡", title: "Suggest Headlines", description: "Provides 3-5 clickable headline options." },
            ]}
            outcome="Jumpstart content creation with ready-to-use outlines and titles."
            pricing="Monthly Plan"
          />
        </motion.div>

        {/* 3. Tradie Job Scheduler */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 shadow-md hover:scale-[1.02] hover:shadow-lg transition duration-200"
        >
          <JourneyMap
            title="Tradie Job Scheduling"
            problem="Manual booking and follow-up eats up hours every week."
            steps={[
              { icon: "📩", title: "Client Requests", description: "Form or chatbot receives job request." },
              { icon: "📅", title: "Auto-Schedule", description: "Job booked into Google Calendar automatically." },
              { icon: "✅", title: "Confirm & Sync", description: "Client receives confirmation + internal sheet updated." },
            ]}
            outcome="No more admin back-and-forth. Clients are booked and confirmed automatically."
            pricing="Monthly Plan"
          />
        </motion.div>

        {/* 4. Support Ticket Responder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 shadow-md hover:scale-[1.02] hover:shadow-lg transition duration-200"
        >
          <JourneyMap
            title="Support Ticket Responder"
            problem="Reps are overwhelmed answering the same support queries over and over."
            steps={[
              { icon: "📩", title: "New Ticket Received", description: "Bot scans subject and message body." },
              { icon: "🤖", title: "Find Similar Past Replies", description: "Uses vector search or logic tree." },
              { icon: "📤", title: "Send Response or Escalate", description: "Automatically replies or flags edge cases." },
            ]}
            outcome="Free up support staff by handling 70% of tickets automatically."
            pricing="Monthly Plan"
          />
        </motion.div>
      </div>
    </section>
  );
}
