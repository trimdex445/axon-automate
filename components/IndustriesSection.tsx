import { Wrench, HeartPulse, FileText, Utensils, ShoppingCart, Brush, Check } from "lucide-react";

export default function IndustriesSection() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#fff0d5] overflow-hidden z-0">
      {/* SVG Background pinned bottom, stretch width */}
      <img
        src="/assets/illustrations/new-waves.svg"
        alt="Decorative Waves"
        className="absolute bottom-0 left-0 w-full h-auto z-0 pointer-events-none"
        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 md:px-16 pt-28 pb-40">
        {/* Industries Section */}
        <section id="industries">
          <h2 className="text-5xl font-bold text-center text-[#04253e] mb-6">
            Industries We Automate
          </h2>
          <p className="text-center text-lg text-[#04253e]/80 mb-16 max-w-2xl mx-auto">
            From lawn care to law firms, if your business has a repeatable process we can automate it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{
              icon: <Wrench className="w-6 h-6 text-[#04253e]" />, title: "Trades & Services", items: [
                "Auto-generate quotes from job forms",
                "Auto-book appointments into your calendar",
                "Send follow-up reminders to clients"
              ]
            }, {
              icon: <HeartPulse className="w-6 h-6 text-[#04253e]" />, title: "Health & Wellness", items: [
                "New client onboarding automation",
                "Class reminder emails/SMS",
                "Payment tracking + auto receipts"
              ]
            }, {
              icon: <FileText className="w-6 h-6 text-[#04253e]" />, title: "Legal & Finance", items: [
                "Contract auto-filling from forms",
                "Smart task tracking for case files",
                "Weekly status summaries"
              ]
            }, {
              icon: <Utensils className="w-6 h-6 text-[#04253e]" />, title: "Hospitality", items: [
                "Shift scheduling + staff notifications",
                "Weekly sales reports to your inbox",
                "Auto-reply to reservation requests"
              ]
            }, {
              icon: <ShoppingCart className="w-6 h-6 text-[#04253e]" />, title: "Ecommerce", items: [
                "Order → invoice → delivery chain",
                "End to end inventory tracking system",
                "Daily revenue tracking"
              ]
            }, {
              icon: <Brush className="w-6 h-6 text-[#04253e]" />, title: "Creative Agencies", items: [
                "Intake form → project brief creation",
                "Approval workflows for drafts",
                "Auto generate client status reports"
              ]
            }].map(({ icon, title, items }, idx) => (
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

        {/* CTA Section */}
        <section className="pt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#04253e] mb-6 whitespace-nowrap">
              Ready to automate your workflow?
            </h2>
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
  );
}
