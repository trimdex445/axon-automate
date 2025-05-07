"use client";

import Image from "next/image";
import Layout from "../components/Layout";
import {
  Wrench,
  HeartPulse,
  FileText,
  Utensils,
  ShoppingCart,
  Brush,
} from "lucide-react";
import dynamic from "next/dynamic";

const icons: string[] = [
  "icon1.png", "icon2.svg", "icon3.svg", "icon4.svg", "icon5.svg", "icon6.png", "icon7.svg", "icon8.png", "icon9.png", "icon10.svg", "icon11.svg", "icon12.svg", "icon13.svg", "icon14.svg", "icon15.svg", "icon23.svg", "icon24.svg", "icon16.svg", "icon17.svg", "icon18.svg", "icon19.svg", "icon20.svg", "icon21.svg", "icon22.svg",
  "icon13.svg", "icon14.svg", "icon15.svg", "icon23.svg", "icon24.svg", "icon16.svg", "icon17.svg", "icon18.svg", "icon19.svg", "icon20.svg", "icon21.svg", "icon22.svg", "icon7.svg", "icon8.png", "icon9.png", "icon10.svg", "icon11.svg", "icon12.svg","icon1.png", "icon2.svg", "icon3.svg", "icon4.svg", "icon5.svg", "icon6.png",
];


const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import animationData from "../public/assets/lotties/Bluedots.json";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#fdf6ee]"
        id="hero"
      >
        {/* Lottie Background */}
        <div className="absolute inset-0 z-0 bg-transparent pointer-events-none">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
          />
        </div>


        {/* Hero text */}
        <div className="px-6 md:px-12 z-10 w-full md:w-1/2">
          <h1 className="text-5xl font-bold mb-6">
            We turn inefficient processes into seamless automated workflows.
          </h1>
          <p className="text-lg opacity-80 mb-6">
            Axon Automate builds custom AI and workflow automation solutions tailored for small businesses and solo operators.
          </p>
          <a
            href="#why"
            className="inline-block bg-[#04253e] text-[#fff0d5] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Learn How
          </a>
        </div>

        <div className="hidden md:block w-1/2 h-full" />
      </section>

      {/* Value Prop Trio */}
      <section className="py-24 bg-[#fff0d5]" id="why">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#04253e]">How We Help</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* 1. Automate Real Work */}
            <div className="group transition-transform hover:scale-105 duration-300 ease-in-out">
              <div className="h-44 mb-6 flex items-center justify-center">
                <img
                  src="/assets/illustrations/automation.svg"
                  alt="Automate Work"
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#04253e]">
                Automate Real Work
              </h3>
              <p className="text-sm text-gray-700 opacity-80">
                We streamline actual tasks — not just alerts. From dispatching to
                auto-replies.
              </p>
            </div>

            {/* 2. Seamless Integration */}
            <div className="group transition-transform hover:scale-105 duration-300 ease-in-out">
              <div className="h-44 mb-6 flex items-center justify-center">
                <img
                  src="/assets/illustrations/tools.svg"
                  alt="Integration"
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#04253e]">
                Seamless Integration
              </h3>
              <p className="text-sm text-gray-700 opacity-80">
                Gmail, Airtable, Xero, Notion and more — connected and working
                together.
              </p>
            </div>

            {/* 3. Human + AI Harmony */}
            <div className="group transition-transform hover:scale-105 duration-300 ease-in-out">
              <div className="h-44 mb-6 flex items-center justify-center">
                <img
                  src="/assets/illustrations/teamwork.svg"
                  alt="Human AI"
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#04253e]">
                Human + AI Harmony
              </h3>
              <p className="text-sm text-gray-700 opacity-80">
                We blend automation with human workflows — so nothing gets lost in
                translation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#04253e] py-16 overflow-hidden text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#fff0d5] mb-8">
          Plug AI into your tools — <span className="text-orange-400">400+ integrations</span>
        </h2>

        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-[#04253e] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-[#04253e] to-transparent" />

        {/* Row 1 - L to R */}
        <div className="overflow-hidden w-full">
          <div className="relative w-full">
            <div className="absolute top-0 left-0 flex gap-6 animate-marquee w-max">
              {[...icons, ...icons].map((icon: string, index: number) => (
                <div key={`row1-${index}`} className="min-w-[56px] h-14 p-3 bg-[#fff0d5] rounded-xl shadow-md">
                  <Image
                    src={`/assets/icons/${icon}`}
                    width={32}
                    height={32}
                    className="object-contain"
                    alt={`integration-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - R to L */}
        <div className="overflow-hidden w-full mt-6">
          <div className="relative w-full">
            <div className="absolute top-0 left-0 flex gap-6 animate-marquee-reverse w-max">
              {[...icons, ...icons].map((icon: string, index: number) => (
                <div key={`row2-${index}`} className="min-w-[56px] h-14 p-3 bg-[#fff0d5] rounded-xl shadow-md">
                  <Image
                    src={`/assets/icons/${icon}`}
                    width={32}
                    height={32}
                    className="object-contain"
                    alt={`integration-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Industries */}
      <section id="industries" className="py-28">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Industries We Automate
        </h2>
        <p className="text-center text-lg opacity-80 mb-16">
          From lawn care to law firms — if your business has a repeatable
          process, we can probably automate it. Here's a taste:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-[#04253e]">
          {/* Trades & Services */}
          <div className="flex flex-col items-center text-center">
            <Wrench className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Trades & Services</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Auto-generate quotes from job forms</li>
              <li>• Auto-book appointments into your calendar</li>
              <li>• Send follow-up reminders to clients</li>
            </ul>
          </div>

          {/* Health & Wellness */}
          <div className="flex flex-col items-center text-center">
            <HeartPulse className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Health & Wellness</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• New client onboarding automation</li>
              <li>• Class reminder emails/SMS</li>
              <li>• Payment tracking + auto receipts</li>
            </ul>
          </div>

          {/* Legal & Finance */}
          <div className="flex flex-col items-center text-center">
            <FileText className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Legal & Finance</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Contract auto-filling from forms</li>
              <li>• Smart task tracking for case files</li>
              <li>• Weekly status summaries</li>
            </ul>
          </div>

          {/* Hospitality */}
          <div className="flex flex-col items-center text-center">
            <Utensils className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Hospitality</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Shift scheduling + staff notifications</li>
              <li>• Weekly sales reports to your inbox</li>
              <li>• Auto-reply to reservation requests</li>
            </ul>
          </div>

          {/* Ecommerce */}
          <div className="flex flex-col items-center text-center">
            <ShoppingCart className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Ecommerce</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Order → invoice → delivery chain</li>
              <li>• Abandoned cart follow-ups</li>
              <li>• Daily revenue tracking</li>
            </ul>
          </div>

          {/* Creative Agencies */}
          <div className="flex flex-col items-center text-center">
            <Brush className="w-12 h-12 mb-4 text-[#04253e]" />
            <h3 className="font-semibold text-lg mb-2">Creative Agencies</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Intake form → project brief creation</li>
              <li>• Approval workflows for drafts</li>
              <li>• Client status reports auto-generated</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-12 opacity-70">
          Not listed? No problem — we tailor solutions to any industry.
        </p>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to automate your workflow?
        </h2>
        <p className="text-lg opacity-80 mb-6">
          Get started with a tailored quote.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#04253e] text-[#fff0d5] px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Request a Quote
        </a>
      </section>
    </Layout>
  );
}
