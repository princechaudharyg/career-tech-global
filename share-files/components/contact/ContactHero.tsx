import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-28 text-white">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-200">
            CONTACT CAREER TECH GLOBAL LLC
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
            Let's Build Your
            <span className="block text-cyan-400">
              Tech Career Together
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Whether you're looking for AI training, Cyber Security programs,
            resume services, interview preparation, or career guidance, our
            team is here to help you every step of the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/programs"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              Explore Programs
            </Link>

            <Link
              href="/career-services"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Career Services
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">1000+</h3>
              <p className="mt-2 text-sm text-slate-300">
                Students Guided
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">250+</h3>
              <p className="mt-2 text-sm text-slate-300">
                Hiring Partners
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
              <p className="mt-2 text-sm text-slate-300">
                Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl">
          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-cyan-300">
                Email
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                admissions@careertechglobal.com
              </h3>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-cyan-300">
                Phone
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                +1 (XXX) XXX-XXXX
              </h3>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-cyan-300">
                Office Hours
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Monday – Friday
              </h3>

              <p className="text-slate-300">
                9:00 AM – 6:00 PM CST
              </p>
            </div>
          </div>

          <button className="mt-12 w-full rounded-xl bg-cyan-500 py-4 font-bold transition hover:bg-cyan-400">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}