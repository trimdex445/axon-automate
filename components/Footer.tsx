import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#e5d8b8] pt-10 pb-6 text-sm text-center text-[#04253e] opacity-70">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
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
