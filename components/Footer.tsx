import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#04253e] text-white pt-32 pb-10 mt-24 overflow-hidden">
      {/* Wave SVG at top */}
      <div className="absolute -top-1 left-0 w-full z-0">
        <img
          src="/assets/bg/footer-wave-fixed.svg"
          alt="Footer Wave"
          className="w-full h-[100px] object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-bold mb-4">Axon Automate</h3>
          <p className="opacity-80 leading-relaxed">
            Custom workflow automation built for small teams. Powered by AI, made to scale.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="uppercase font-semibold mb-4 text-sm">Explore</h4>
          <ul className="space-y-2 opacity-90">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase font-semibold mb-4 text-sm">Contact</h4>
          <ul className="space-y-2 opacity-90">
            <li>Email: hello@axonautomate.com</li>
            <li>Based in Sydney, Australia</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="uppercase font-semibold mb-4 text-sm">Follow</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Twitter" className="hover:text-[#1da1f2]">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0e76a8]">🔗</a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-300">💻</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-12 opacity-70 relative z-10">
        © {new Date().getFullYear()} Axon Automate. All rights reserved.
      </div>
    </footer>
  );
}
