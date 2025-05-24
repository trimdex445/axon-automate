import Link from 'next/link';
import { Linkedin } from 'lucide-react'; // Assuming Linkedin might be used elsewhere or planned

export default function Footer() {
  return (
    // highlighter-start
    // Added `relative` and `z-20`
    <footer className="relative z-20 bg-[#04253e] text-[#fff0d5] pt-16 pb-10">
    {/* highlighter-end */}
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
            {/* Example if you were to use the Linkedin icon: */}
            {/* <li className="flex items-center">
              <Linkedin className="w-4 h-4 mr-2" />
              <a href="#" className="hover:text-[#f4b942]">LinkedIn</a>
            </li> */}
          </ul>
        </div>
        
        {/* Empty div for grid spacing if needed, or for a fourth column if you add one */}
        <div></div>

      </div>

      <div className="text-center text-xs mt-12 opacity-50">
        © {new Date().getFullYear()} Axon Automate. All rights reserved.
      </div>
    </footer>
  );
}