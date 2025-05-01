import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fff0d5] text-[#04253e] border-b border-[#e5d8b8] backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Axon Automate</Link>
        <div className="space-x-6 text-sm md:text-base font-medium">
          <a href="/#why" className="hover:underline">Why Axon</a>
          <a href="/#examples" className="hover:underline">Examples</a>
          <Link href="/solutions" className="hover:underline">Solutions</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
