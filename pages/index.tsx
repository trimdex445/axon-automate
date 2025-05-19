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
        className="relative w-full h-[calc(65vh-5rem)] flex flex-col md:flex-row items-center justify-between bg-[#fff0d5] px-6 md:px-20"
        id="hero"
      >
        {/* Left - Text */}
        <div className="z-10 w-full md:w-1/2 flex flex-col justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-[#04253e] tracking-tight">
            Turn <span className="text-[#04253e]">busywork</span><br />
            into <span className="text-[#fbbf24]">smart automation</span>.
          </h1>

          <p className="italic text-xl md:text-2xl text-[#04253e] font-serif mb-4">
            Our mantra is to engage genuinely and offer value.
          </p>

          <p className="text-lg md:text-xl text-[#04253e] opacity-80 mb-8 max-w-xl">
            We build clever AI workflows that eliminate repetitive tasks — tailor-made
            for solo operators and small businesses ready to scale.
          </p>

          <a
            href="#why"
            className="inline-block bg-[#04253e] text-[#fff0d5] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition w-full sm:w-auto text-center"
          >
            Learn How
          </a>
        </div>

        {/* Right - Animated SVG */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden">
          <img
            src="/assets/illustrations/server-animate.svg"
            alt="Automated Workflow Illustration"
            className="w-[90%] md:w-[600px] max-w-[650px] h-auto object-contain"
          />
        </div>
      </section>





      {/* Value Prop Trio */}
      <section className="py-20 bg-[#fff0d5]" id="why">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-24">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#04253e] tracking-tight mb-4">
              <span className="text-[#04253e]">How </span>
              <span className="text-[#04253e]">We </span>
              <span className="text-[#04253e]">Help</span>
            </h2>
            <div className="w-24 h-1 bg-[#04253e] mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* 1. Automate Real Work */}
            <div className="bg-white rounded-xl shadow-md p-10 transition-transform hover:scale-105 duration-300 ease-in-out h-full flex flex-col justify-between">
              <div className="h-60 mb-8 flex items-center justify-center">
                <img
                  src="/assets/illustrations/performance-overview-animate.svg"
                  alt="Automate Work"
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#64bc91]">
                Automate Real Work
              </h3>
              <p className="text-base text-[#04253e] opacity-80 leading-relaxed max-w-sm mx-auto">
                We streamline actual tasks — not just alerts. From dispatching to auto-replies.
              </p>
            </div>

            {/* 2. Seamless Integration */}
            <div className="bg-white rounded-xl shadow-md p-10 transition-transform hover:scale-105 duration-300 ease-in-out h-full flex flex-col justify-between">
              <div className="h-60 mb-8 flex items-center justify-center">
                <img
                  src="/assets/illustrations/cloud-hosting-animate.svg"
                  alt="Integration"
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#f4b942]">
                Seamless Integration
              </h3>
              <p className="text-base text-[#04253e] opacity-80 leading-relaxed max-w-sm mx-auto">
                Gmail, Airtable, Xero, Notion and more — connected and working together.
              </p>
            </div>

            {/* 3. Human + AI Harmony */}
            <div className="bg-white rounded-xl shadow-md p-10 transition-transform hover:scale-105 duration-300 ease-in-out h-full flex flex-col justify-between">
              <div className="h-60 mb-8 flex items-center justify-center">
                <img
                  src="/assets/illustrations/data-analysis-animate.svg"
                  alt="Human AI Harmony"
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#4472f3]">
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




  {/* Industries + CTA Section with Left SVG Background */}
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#fff0d5] overflow-hidden z-0">
        {/* SVG absolutely fills section */}
        <img
          src="/assets/illustrations/layered-waves-haikei-longer.svg"
          alt="Decorative Waves"
          className="absolute top-0 left-0 w-auto h-full min-h-full z-0 pointer-events-none object-fill"
        />

        {/* Content wrapper above SVG */}
        <div className="relative z-10 px-6 md:px-16 py-28 pb-0">
          {/* Industries */}
          <section id="industries">
            <h2 className="text-5xl font-bold text-center text-[#04253e] mb-6">
              Industries We Automate
            </h2>
            <p className="text-center text-lg text-[#04253e]/80 mb-16 max-w-2xl mx-auto">
              From lawn care to law firms — if your business has a repeatable process, we can probably automate it. Here's a taste:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                  className="bg-white border border-[#e5d8b8] hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out rounded-xl p-6 text-left h-full flex flex-col justify-between min-h-[290px]"
                >
                  <div>
                    <div className="mb-4 bg-[#edf2f7] text-[#04253e] w-10 h-10 flex items-center justify-center rounded-full">
                      {icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#04253e] mb-4">{title}</h3>
                    <ul className="space-y-2 text-sm text-[#04253e]/90 leading-relaxed">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-1 text-green-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="pt-24 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#04253e] mb-6">
                Ready to automate your workflow?
              </h2>
              <p className="text-lg text-[#04253e]/80 mb-8">
                Not listed? No problem — we tailor solutions to any industry. Let’s make your work simpler, smarter, and stress-free.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#04253e] text-[#fff0d5] px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
              >
                Request a Quote
              </a>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
