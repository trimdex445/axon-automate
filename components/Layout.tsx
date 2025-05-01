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
      </Head>
      <div className="min-h-screen bg-axon-background text-axon-text font-satoshi flex flex-col">
        <Navbar />
        <main className="flex-grow px-6 md:px-16 py-12">{children}</main>
        <Footer />
      </div>
    </>
  );
}
