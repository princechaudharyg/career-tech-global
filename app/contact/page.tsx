export default function ContactPage() {
    return (
      <main className="bg-slate-50">
  
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
  
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
              CONTACT US
            </span>
  
            <h1 className="mt-8 text-5xl font-extrabold">
              Let's Build Your Tech Career
            </h1>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
              Have questions about our programs? Book a free consultation and our
              team will help you choose the perfect career path.
            </p>
  
          </div>
        </section>
  
        {/* Contact Form */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
  
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Book Your Free Consultation
            </h2>
  
            <form className="space-y-6">
  
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              />
  
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              />
  
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              />
  
              <select
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              >
                <option>Select Program</option>
                <option>Data Science & Artificial Intelligence</option>
                <option>Cyber Security & Ethical Hacking</option>
                <option>Cyber Security & Artificial Intelligence</option>
                <option>GRC & Artificial Intelligence</option>
              </select>
  
              <textarea
                rows={5}
                placeholder="Tell us about your goals..."
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              ></textarea>
  
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Book Free Consultation
              </button>
  
            </form>
  
          </div>
        </section>
  
      </main>
    );
  }