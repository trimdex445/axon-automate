// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0B0C10] to-transparent px-12 md:px-28 py-4 flex justify-between items-center">
      {/* Left Logo */}
      <Link href="/">
        <span className="text-[#0FF1CE] font-bold text-2xl md:text-3xl tracking-wide">
          Axon Automate
        </span>
      </Link>

      {/* Right Nav Items */}
      <ul className="flex gap-6 text-sm md:text-base font-medium text-gray-300">
        <li>
          <a href="/#solutions" className="hover:text-white transition">Solutions</a>
        </li>
        <li>
          <a href="/#how" className="hover:text-white transition">How It Works</a>
        </li>
        <li>
          <a href="/#examples" className="hover:text-white transition">Examples</a>
        </li>
        <li>
          <a href="/#journeys" className="hover:text-white transition">Journeys</a>
        </li>
        <li>
          <a href="/#quote" className="hover:text-white transition">Quote</a>
        </li>
      </ul>
    </nav>
  );
}
