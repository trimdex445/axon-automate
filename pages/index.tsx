import { useEffect } from "react";
import { motion } from "framer-motion";

import Layout from "../components/Layout";

import FeatureGrid from "../components/FeatureGrid";
import HowItWorks from "../components/HowItWorks";
import RealExamples from "../components/RealExamples";
import WhyAxon from "../components/WhyAxon";
import QuoteForm from "../components/QuoteForm";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Axon Automation">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-screen flex items-center justify-start px-12 md:px-28 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/bg/hero-face-rightv3.PNG')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        <div
          className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #0B0C10 100%)",
          }}
        />

        <div className="relative z-20 max-w-3xl pt-28 pb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-10 leading-tight"
          >
            You tell us the problem. <br />We’ll build the automation.
          </motion.h1>
          <p className="text-xl text-gray-300 mb-10 max-w-xl">
            Fully custom AI and workflow systems — made for real operators, not templates.
          </p>
          <div className="flex gap-6">
            <a href="#quote">
              <button className="bg-[#0FF1CE] text-black px-7 py-4 rounded-lg font-semibold hover:opacity-80 transition">
                Get a Custom Quote
              </button>
            </a>
            <a href="#examples">
              <button className="border border-[#0FF1CE] text-[#0FF1CE] px-7 py-4 rounded-lg font-semibold hover:bg-[#0FF1CE] hover:text-black transition">
                View Example Workflows
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Fade + Sections */}
      <div className="w-full h-24 bg-gradient-to-b from-[#0B0C10] to-[#131417]" />
      <FeatureGrid />
      <div className="w-full h-24 bg-gradient-to-b from-[#131417] to-[#0B0C10]" />
      <div id="how">
        <HowItWorks />
      </div>
      <div className="w-full h-24 bg-gradient-to-b from-[#0B0C10] to-[#131417]" />
      <div id="examples">
        <RealExamples />
      </div>
      <div className="w-full h-24 bg-gradient-to-b from-[#131417] to-[#0B0C10]" />
      <div id="why">
        <WhyAxon />
      </div>
      <div className="w-full h-24 bg-gradient-to-b from-[#0B0C10] to-[#131417]" />
      <div id="quote">
        <QuoteForm />
      </div>
    </Layout>
  );
}
