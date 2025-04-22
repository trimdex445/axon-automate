import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0B0C10] to-transparent px-6 md:px-28 py-4 flex justify-between items-center">
      {/* Brand */}
      <Link href="/" className="text-[#0FF1CE] font-bold text-2xl md:text-3xl tracking-wide">
        Axon Automate
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium text-gray-300">
        <li><a href="/#solutions" className="hover:text-white transition">Solutions</a></li>
        <li><a href="/#how" className="hover:text-white transition">How It Works</a></li>
        <li><a href="/#examples" className="hover:text-white transition">Examples</a></li>
        <li><a href="/#journeys" className="hover:text-white transition">Journeys</a></li>
        <li><a href="/#pricing" className="hover:text-white transition">Pricing</a></li>
        <li><a href="/#quote" className="hover:text-white transition">Quote</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-[#0FF1CE] text-2xl z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B0C10] border-t border-[#1f1f1f] py-6 px-6 md:hidden z-40">
          <ul className="flex flex-col gap-6 text-base font-medium text-gray-300">
            <li><a onClick={() => setMenuOpen(false)} href="/#solutions" className="hover:text-white transition">Solutions</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="/#how" className="hover:text-white transition">How It Works</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="/#examples" className="hover:text-white transition">Examples</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="/#journeys" className="hover:text-white transition">Journeys</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="/#pricing" className="hover:text-white transition">Pricing</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="/#quote" className="hover:text-white transition">Quote</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
