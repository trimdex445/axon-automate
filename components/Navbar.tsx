import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#04253e] text-[#fff0d5] border-b border-[#1f2d3d] backdrop-blur-md shadow-sm transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center transition-all duration-300">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className={`relative ${scrolled ? 'w-8 h-8' : 'w-10 h-10'} transition-all duration-300`}>
            <Image
              src="/assets/bg/axonicon.png"
              alt="Axon Icon"
              fill
              className="object-contain invert"
            />
          </div>
          <span className={`font-bold tracking-tight transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
            Axon Automate
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-base md:text-lg font-medium">
          <Link href="/solutions" className="relative group">
            <span className="group-hover:text-white transition-colors">Solutions</span>
          </Link>
          <Link href="/pricing" className="relative group">
            <span className="group-hover:text-white transition-colors">Pricing</span>
          </Link>
          <Link href="/contact">
            <button className="bg-[#fff0d5] text-[#04253e] px-4 py-2 rounded-lg hover:bg-[#e5d8b8] transition-all font-semibold text-sm md:text-base shadow-md">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
