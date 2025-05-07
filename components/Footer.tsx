import Link from 'next/link'; 

export default function Footer() {
  return (
    <footer className="relative bg-[#04253e] text-white pt-24 pb-8 mt-24 overflow-hidden">
      {/* Wave SVG at top */}
      <div className="absolute top-[-80px] left-0 w-full">
        <img
          src="/assets/bg/layered-peaks-haikei.svg"
          alt="Footer Wave"
          className="w-full h-auto"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 text-center">
        <div className="mb-4 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/solutions" className="hover:underline">Solutions</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
        <p className="text-sm opacity-80">© {new Date().getFullYear()} Axon Automate. All rights reserved.</p>
      </div>
    </footer>
  );
}
