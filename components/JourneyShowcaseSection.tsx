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

      <div className="space-y-16 max-w-5xl mx-auto">
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

        <JourneyMap
          title="Invoice Follow-Up Bot"
          problem="Clients forget to pay unless chased manually."
          steps={[
            { icon: "📤", title: "Send Invoice", description: "Initial invoice goes out via email." },
            { icon: "⏰", title: "Wait & Detect", description: "Bot monitors for late payment (no Stripe update)." },
            { icon: "📬", title: "Friendly Reminder", description: "Follow-up email sent with polite message and link." },
          ]}
          outcome="Clients pay faster. You avoid awkward manual follow-ups."
          pricing="One-Off"
        />
      </div>
    </section>
  );
}
