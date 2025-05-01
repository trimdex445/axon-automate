import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Request a Quote</h1>
        <form className="grid gap-6">
          <div><label htmlFor="name">Name</label><input type="text" id="name" className="w-full px-4 py-3 border border-[#e5d8b8] rounded-md bg-white/70" /></div>
          <div><label htmlFor="email">Email</label><input type="email" id="email" className="w-full px-4 py-3 border border-[#e5d8b8] rounded-md bg-white/70" /></div>
          <div><label htmlFor="message">What would you like to automate?</label><textarea rows={5} id="message" className="w-full px-4 py-3 border border-[#e5d8b8] rounded-md bg-white/70"></textarea></div>
          <button type="submit" className="bg-[#04253e] text-[#fff0d5] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition w-full md:w-auto">Submit Request</button>
        </form>
      </section>
    </Layout>
  );
}
