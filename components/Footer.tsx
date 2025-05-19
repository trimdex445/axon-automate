import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04253e] text-[#04253e] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

        {/* Branding */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#fbbf24]">Axon Automate</h3>
          <p className="opacity-80 leading-relaxed max-w-xs">
            Workflow automation for small teams. <br />Powered by AI, made to scale.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="uppercase font-semibold mb-3 text-xs tracking-widest text-[#64bc91]">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#64bc91]">Home</Link></li>
            <li><Link href="/solutions" className="hover:text-[#64bc91]">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:text-[#64bc91]">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-[#64bc91]">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-[#64bc91]">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#64bc91]">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase font-semibold mb-3 text-xs tracking-widest text-[#f4b942]">Contact</h4>
          <ul className="space-y-2 opacity-90">
            <li>Email: sales@axonautomate.com</li>
            <li>Based in Sydney, Australia</li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className="uppercase font-semibold mb-3 text-xs tracking-widest text-[#4472f3]">Follow</h4>
          <div className="flex space-x-4 items-center">
            <a
              href="https://www.linkedin.com/company/axonautomate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4472f3] transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-12 opacity-50">
        © {new Date().getFullYear()} Axon Automate. All rights reserved.
      </div>
    </footer>
  );
}
