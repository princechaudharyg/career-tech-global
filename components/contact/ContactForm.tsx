export default function ContactForm() {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
  
          {/* Left Side */}
          <div>
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              FREE CONSULTATION
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Tell Us About Your Career Goals
            </h2>
  
            <p className="mt-8 text-lg leading-8 text-slate-600">
              Fill out the form and our admissions advisor will contact you within
              24 hours to help you choose the right program and career roadmap.
            </p>
  
            <div className="mt-10 space-y-5">
  
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                <p className="text-slate-700">100% Free Career Consultation</p>
              </div>
  
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                <p className="text-slate-700">No Spam. No Obligations.</p>
              </div>
  
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                <p className="text-slate-700">Personalized Learning Roadmap</p>
              </div>
  
            </div>
          </div>
  
          {/* Right Side Form */}
          <div className="rounded-3xl bg-white p-10 shadow-2xl">
  
            <h3 className="text-3xl font-bold text-slate-900">
              Book Your Free Consultation
            </h3>
  
            <form className="mt-8 space-y-6">
  
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
              />
  
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
              />
  
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
              />
  
              <select className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500">
  
                <option>Select Program</option>
  
                <option>Data Science & AI</option>
  
                <option>Cyber Security</option>
  
                <option>Ethical Hacking</option>
  
                <option>GRC & AI</option>
  
                <option>Career Services</option>
  
              </select>
  
              <textarea
                rows={5}
                placeholder="Tell us about your goals..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
              />
  
              <button
                className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-semibold text-white transition hover:bg-cyan-600"
              >
                Schedule Free Consultation
              </button>
  
            </form>
  
          </div>
  
        </div>
      </section>
    );
  }