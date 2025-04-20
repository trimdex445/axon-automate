import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    src: "/assets/carousel/agent-workflow.png",
    alt: "Agent Workflow",
  },
  {
    id: 2,
    src: "/assets/carousel/business-process.png",
    alt: "Business Process",
  },
  {
    id: 3,
    src: "/assets/carousel/automation-dashboard.png",
    alt: "Automation Dashboard",
  },
];

export default function AutomationCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayItems = () => {
    const left = items[(index + items.length - 1) % items.length];
    const center = items[index];
    const right = items[(index + 1) % items.length];
    return [left, center, right];
  };

  const [left, center, right] = getDisplayItems();

  return (
    <div className="relative flex items-center justify-center w-full max-w-[1600px] h-auto mx-auto gap-6 py-4">
      {/* Left Image */}
      <motion.div
        key={left.id}
        className="w-[380px] opacity-50 scale-90 translate-y-4 transition-all duration-1000"
        animate={{
          opacity: 0.5,
          scale: 0.9,
          y: 16,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        <img
          src={left.src}
          alt={left.alt}
          className="w-full h-auto rounded-xl object-cover"
        />
      </motion.div>

      {/* Center Image */}
      <motion.div
        key={center.id}
        className="w-[700px] z-10 scale-100 -translate-y-4 transition-all duration-1000 shadow-2xl"
        animate={{
          opacity: 1,
          scale: 1,
          y: -16,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        <img
          src={center.src}
          alt={center.alt}
          className="w-full h-auto rounded-xl object-cover"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        key={right.id}
        className="w-[380px] opacity-50 scale-90 translate-y-4 transition-all duration-1000"
        animate={{
          opacity: 0.5,
          scale: 0.9,
          y: 16,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        <img
          src={right.src}
          alt={right.alt}
          className="w-full h-auto rounded-xl object-cover"
        />
      </motion.div>
    </div>
  );
}
