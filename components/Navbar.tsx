import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fff0d5] text-[#04253e] border-b border-[#e5d8b8] backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/assets/bg/axonicon.png" // Make sure this exists
            alt="Axon Icon"
            width={40}
            height={40}
          />
          <span className="text-2xl md:text-3xl font-bold tracking-tight">Axon Automate</span>
        </Link>

        {/* Nav Links */}
        <div className="space-x-8 text-base md:text-lg font-medium">
          <Link href="/solutions" className="hover:underline">Solutions</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
