import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = "Axon Automation" }: LayoutProps) {
  return (
    <div className="bg-[#0B0C10] text-white min-h-screen flex flex-col justify-between">
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#0B0C10] text-gray-400 text-sm py-6 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Axon Automation</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
