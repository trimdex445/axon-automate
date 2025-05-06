import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fff0d5]/90 text-[#04253e] border-b border-[#e5d8b8] backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image
              src="/assets/bg/axonicon.png"
              alt="Axon Icon"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
            Axon Automate
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-base md:text-lg font-medium">
          <Link href="/solutions" className="relative group">
            <span className="group-hover:text-[#021722] transition-colors">Solutions</span>
          </Link>
          <Link href="/pricing" className="relative group">
            <span className="group-hover:text-[#021722] transition-colors">Pricing</span>
          </Link>
          <Link href="/contact">
            <button className="bg-[#04253e] text-white px-4 py-2 rounded-lg hover:bg-[#021722] transition-all font-semibold text-sm md:text-base shadow-md">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
