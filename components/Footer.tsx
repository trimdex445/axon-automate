import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#04253e] text-white py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Branding */}
        <div>
          <h3 className="font-semibold mb-2">Axon Automate</h3>
          <p className="opacity-70 leading-snug text-sm">
            Workflow automation for small teams. Powered by AI, made to scale.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="uppercase font-semibold mb-2 text-xs tracking-wide">Explore</h4>
          <ul className="space-y-1 opacity-90 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase font-semibold mb-2 text-xs tracking-wide">Contact</h4>
          <ul className="space-y-1 opacity-90 text-sm">
            <li>Email: hello@axonautomate.com</li>
            <li>Based in Sydney, Australia</li>
          </ul>
        </div>

        {/* LinkedIn */}
        <div>
          <h4 className="uppercase font-semibold mb-2 text-xs tracking-wide">Follow</h4>
          <div className="flex space-x-3 text-lg">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0e76a8]">🔗</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-6 opacity-50">
        © {new Date().getFullYear()} Axon Automate. All rights reserved.
      </div>
    </footer>
  );
}
