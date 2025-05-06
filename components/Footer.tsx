import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#04253e] text-white mt-24 overflow-hidden min-h-[300px]">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg/layered-peaks-haikei.svg"
          alt="Footer Wave"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content inside wave */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24 text-center text-sm text-white">
        <div className="mb-4 space-x-6">
          <Link href="/">Home</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} Axon Automate. All rights reserved.</p>
      </div>
    </footer>
  );
}
