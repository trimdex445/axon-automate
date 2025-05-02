import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fff0d5]/90 text-[#04253e] border-b border-[#e5d8b8] backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/assets/bg/axonicon.png"
            alt="Axon Icon"
            width={40}
            height={40}
          />
          <span className="text-2xl md:text-3xl font-bold tracking-tight">Axon Automate</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-base md:text-lg font-medium">
          <Link href="/solutions" className="relative group">
            <span className="group-hover:underline">Solutions</span>
          </Link>
          <Link href="/pricing" className="relative group">
            <span className="group-hover:underline">Pricing</span>
          </Link>
          <Link href="/contact">
            <button className="bg-[#04253e] text-white px-4 py-2 rounded-md hover:bg-[#021722] transition font-semibold text-sm md:text-base">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
