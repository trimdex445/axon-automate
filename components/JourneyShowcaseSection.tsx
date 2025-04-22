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
        Workflow Journeys
      </motion.h2>

      <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
        {/* Listing Description Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl ring-1 ring-[#2a2a2a] shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <JourneyMap
            title="Listing Description Workflow"
            problem="Writing property listings is time-consuming and inconsistent without an automated workflow."
            steps={[
              { icon: "📥", title: "Input Raw Data", description: "Agent submits address, key features, and room info." },
              { icon: "✍️", title: "AI Drafts Copy", description: "Bot generates clean, sales-friendly description instantly." },
              { icon: "🔁", title: "Edit or Accept", description: "Agent can tweak the copy or approve it directly." },
            ]}
            outcome="Consistent, compelling listings created in seconds."
            pricing="One-Off"
          />
        </motion.div>

        {/* Content Ideation Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl ring-1 ring-[#2a2a2a] shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <JourneyMap
            title="Content Ideation Workflow"
            problem="Writers waste hours researching trends and structuring posts manually."
            steps={[
              { icon: "🌐", title: "Scan Trends", description: "Bot monitors trending news, Reddit, or Twitter topics." },
              { icon: "🧠", title: "Generate Outline", description: "Creates a structured post/article outline using GPT." },
              { icon: "💡", title: "Suggest Headlines", description: "Provides 3-5 clickable headline options." },
            ]}
            outcome="Fast-tracked ideation process for writers and marketers."
            pricing="Monthly Plan"
          />
        </motion.div>

        {/* Job Booking Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl ring-1 ring-[#2a2a2a] shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <JourneyMap
            title="Job Booking Workflow"
            problem="Service teams spend hours coordinating bookings manually."
            steps={[
              { icon: "📩", title: "Client Requests", description: "Form or chatbot receives job request." },
              { icon: "📅", title: "Auto-Schedule", description: "Job booked into Google Calendar automatically." },
              { icon: "✅", title: "Confirm & Sync", description: "Client receives confirmation + internal sheet updated." },
            ]}
            outcome="95% of back-and-forth removed — clients are booked and confirmed automatically."
            pricing="Monthly Plan"
          />
        </motion.div>

        {/* Support Response Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="rounded-2xl ring-1 ring-[#2a2a2a] shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <JourneyMap
            title="Support Response Workflow"
            problem="Support reps are overloaded with repeat tickets that could be automated."
            steps={[
              { icon: "📩", title: "New Ticket Received", description: "Bot scans subject and message body." },
              { icon: "🤖", title: "Find Similar Replies", description: "Uses vector search or logic tree to suggest answers." },
              { icon: "📤", title: "Send or Escalate", description: "Automatically replies or flags edge cases." },
            ]}
            outcome="Reps handle only the edge cases — the rest is automatic."
            pricing="Monthly Plan"
          />
        </motion.div>
      </div>
    </section>
  );
}
