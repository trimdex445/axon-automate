import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Axon Automate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/Logo/logo.png" type="image/webp" />
      </Head>
      {/* This div correctly structures the page for a sticky footer if content is short */}
      <div className="min-h-screen bg-axon-background text-axon-text flex flex-col">
        <Navbar />
        <main className="flex-grow px-6 md:px-16">{children}</main>
        <Footer />
      </div>
    </>
  );
}