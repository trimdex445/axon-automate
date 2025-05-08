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
  Check,
} from "lucide-react";

const icons: string[] = [
  "icon1.png", "icon2.svg", "icon3.svg", "icon4.svg", "icon5.svg", "icon6.png", "icon7.svg", "icon8.png", "icon9.png", "icon10.svg", "icon11.svg", "icon12.svg", "icon13.svg", "icon14.svg", "icon15.svg", "icon23.svg", "icon24.svg", "icon16.svg", "icon17.svg", "icon18.svg", "icon19.svg", "icon20.svg", "icon21.svg", "icon22.svg",
  "icon13.svg", "icon14.svg", "icon15.svg", "icon23.svg", "icon24.svg", "icon16.svg", "icon17.svg", "icon18.svg", "icon19.svg", "icon20.svg", "icon21.svg", "icon22.svg", "icon7.svg", "icon8.png", "icon9.png", "icon10.svg", "icon11.svg", "icon12.svg","icon1.png", "icon2.svg", "icon3.svg", "icon4.svg", "icon5.svg", "icon6.png",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#fff0d5]"
        id="hero"
      >

        {/* SVG Background */}
        <div className="absolute top-0 right-[-25px] z-0 pointer-events-none">
          <img
            src="/assets/illustrations/server-animate.svg"
            alt="Animated Background"
            className="w-[600px] h-auto"
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
  <section className="py-28 bg-[#fff0d5]" id="why">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
      <h2 className="text-5xl font-bold mb-20 text-[#04253e]">How We Help</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* 1. Automate Real Work */}
        <div className="bg-white rounded-xl shadow-md p-8 transition-transform hover:scale-105 duration-300 ease-in-out">
          <div className="h-60 mb-8 flex items-center justify-center">
            <img
              src="/assets/illustrations/automation.svg"
              alt="Automate Work"
              className="h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-[#04253e]">
            Automate Real Work
          </h3>
          <p className="text-base text-[#04253e] opacity-80 leading-relaxed max-w-sm mx-auto">
            We streamline actual tasks — not just alerts. From dispatching to auto-replies.
          </p>
        </div>

        {/* 2. Seamless Integration */}
        <div className="bg-white rounded-xl shadow-md p-8 transition-transform hover:scale-105 duration-300 ease-in-out">
          <div className="h-60 mb-8 flex items-center justify-center">
            <img
              src="/assets/illustrations/tools.svg"
              alt="Integration"
              className="h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-[#04253e]">
            Seamless Integration
          </h3>
          <p className="text-base text-[#04253e] opacity-80 leading-relaxed max-w-sm mx-auto">
            Gmail, Airtable, Xero, Notion and more — connected and working together.
          </p>
        </div>

        {/* 3. Human + AI Harmony */}
        <div className="bg-white rounded-xl shadow-md p-8 transition-transform hover:scale-105 duration-300 ease-in-out">
          <div className="h-60 mb-8 flex items-center justify-center">
            <img
              src="/assets/illustrations/teamwork.svg"
              alt="Human AI"
              className="h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-[#04253e]">
            Human + AI Harmony
          </h3>
          <p className="text-base text-[#04253e] opacity-80 leading-relaxed max-w-sm mx-auto">
            We blend automation with human workflows — so nothing gets lost in translation.
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
        <div className="overflow-hidden w-full h-20 relative">
          <div className="flex gap-6 animate-marquee absolute left-0 top-0 w-max">
            {[...icons, ...icons].map((icon: string, index: number) => (
              <div key={`row1-${index}`} className="min-w-[56px] h-14 p-3 bg-[#fff0d5] rounded-xl shadow-md flex items-center justify-center">
                <Image
                  src={`/assets/icons/${icon}`}
                  width={32}
                  height={32}
                  className="object-contain max-h-full max-w-full"
                  alt={`integration-${index}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - R to L */}
        <div className="overflow-hidden w-full h-20 relative mt-6">
          <div className="flex gap-6 animate-marquee-reverse absolute left-0 top-0 w-max">
            {[...icons, ...icons].map((icon: string, index: number) => (
              <div key={`row2-${index}`} className="min-w-[56px] h-14 p-3 bg-[#fff0d5] rounded-xl shadow-md flex items-center justify-center">
                <Image
                  src={`/assets/icons/${icon}`}
                  width={32}
                  height={32}
                  className="object-contain max-h-full max-w-full"
                  alt={`integration-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Industries */}
      <section id="industries" className="py-28 bg-[#fff0d5]">
        <h2 className="text-5xl font-bold text-center text-[#04253e] mb-6">
          Industries We Automate
        </h2>
        <p className="text-center text-lg text-[#04253e]/80 mb-16 max-w-2xl mx-auto">
          From lawn care to law firms — if your business has a repeatable process, we can probably automate it. Here's a taste:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Wrench className="w-6 h-6 text-[#04253e]" />,
              title: "Trades & Services",
              items: [
                "Auto-generate quotes from job forms",
                "Auto-book appointments into your calendar",
                "Send follow-up reminders to clients"
              ]
            },
            {
              icon: <HeartPulse className="w-6 h-6 text-[#04253e]" />,
              title: "Health & Wellness",
              items: [
                "New client onboarding automation",
                "Class reminder emails/SMS",
                "Payment tracking + auto receipts"
              ]
            },
            {
              icon: <FileText className="w-6 h-6 text-[#04253e]" />,
              title: "Legal & Finance",
              items: [
                "Contract auto-filling from forms",
                "Smart task tracking for case files",
                "Weekly status summaries"
              ]
            },
            {
              icon: <Utensils className="w-6 h-6 text-[#04253e]" />,
              title: "Hospitality",
              items: [
                "Shift scheduling + staff notifications",
                "Weekly sales reports to your inbox",
                "Auto-reply to reservation requests"
              ]
            },
            {
              icon: <ShoppingCart className="w-6 h-6 text-[#04253e]" />,
              title: "Ecommerce",
              items: [
                "Order → invoice → delivery chain",
                "Abandoned cart follow-ups",
                "Daily revenue tracking"
              ]
            },
            {
              icon: <Brush className="w-6 h-6 text-[#04253e]" />,
              title: "Creative Agencies",
              items: [
                "Intake form → project brief creation",
                "Approval workflows for drafts",
                "Client status reports auto-generated"
              ]
            }
          ].map(({ icon, title, items }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 p-6 text-left max-w-md mx-auto"
            >
              <div className="bg-[#04253e]/10 p-3 rounded-full inline-flex mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#04253e]">{title}</h3>
              <ul className="space-y-2 text-sm text-[#04253e]/90 leading-relaxed">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-12 text-[#04253e]/70">
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
