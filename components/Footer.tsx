import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#04253e] text-white text-center overflow-hidden">
      <div className="absolute bottom-0 w-full">
        <svg
          viewBox="0 0 1600 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[140px]"
        >
          <path d="M0,100 C400,200 1200,0 1600,100 L1600,200 L0,200 Z" fill="#04253e" />
          <path d="M0,120 C500,220 1100,20 1600,120 L1600,200 L0,200 Z" fill="#003366" />
          <path d="M0,140 C600,240 1000,40 1600,140 L1600,200 L0,200 Z" fill="#001f3f" />
        </svg>
      </div>
      <div className="relative z-10 py-6 px-6 md:px-16">
        <div className="mb-4 space-x-6">
          <Link href="/">Home</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Axon Automate. All rights reserved.</p>
      </div>
    </footer>
  );
}
