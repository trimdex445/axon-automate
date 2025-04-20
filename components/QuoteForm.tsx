"use client";
import { useState } from "react";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function QuoteForm() {
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const idPrefix = form.name.trim().replace(/\s+/g, "-").toLowerCase();
      const uniqueId = `${idPrefix}-${Date.now()}`;

      await setDoc(doc(db, "quotes", uniqueId), {
        name: form.name,
        email: form.email,
        details: form.details,
        createdAt: Timestamp.now(),
      });

      setStatus("success");
      setForm({ name: "", email: "", details: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#131417] text-white px-8 md:px-20 py-24 flex items-center justify-center min-h-[85vh]">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Get a Custom Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium">Name / Company</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-4 rounded-md bg-[#1F1F1F] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0FF1CE]"
              placeholder="e.g. Jack Smith or Axon Solutions Ltd"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-4 rounded-md bg-[#1F1F1F] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0FF1CE]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">
              What would you like to automate?
            </label>
            <textarea
              required
              rows={5}
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              className="w-full p-4 rounded-md bg-[#1F1F1F] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0FF1CE]"
              placeholder="Describe your current workflow or the task you'd like to automate..."
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-[#0FF1CE] text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Submit Request"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-center text-green-400">Thanks! We’ll get back to you shortly.</p>
          )}
          {status === "error" && (
            <p className="text-center text-red-500">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
