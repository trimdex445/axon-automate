import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
        {/* Branding */}
        <div>
          <h3 className="text-sm font-bold mb-2">Axon Automate</h3>
          <p className="opacity-70 leading-snug">
            Workflow automation for small teams. Powered by AI, made to scale.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="uppercase font-semibold mb-2 text-[11px] tracking-wide">Explore</h4>
          <ul className="space-y-1 opacity-90">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase font-semibold mb-2 text-[11px] tracking-wide">Contact</h4>
          <ul className="space-y-1 opacity-90">
            <li>Email: hello@axonautomate.com</li>
            <li>Sydney, Australia</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="uppercase font-semibold mb-2 text-[11px] tracking-wide">Follow</h4>
          <div className="flex space-x-3 text-base">
            <a href="#" aria-label="Twitter" className="hover:text-[#1da1f2]">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0e76a8]">🔗</a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-300">💻</a>
          </div>
        </div>
      </div>

      <div className="text-center text-[11px] mt-6 opacity-50">
        © {new Date().getFullYear()} Axon Automate. All rights reserved.
      </div>
    </footer>
  );
}
