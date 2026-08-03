import {
  IconArrowRight,
  IconBrain,
  IconShieldLock,
  IconUserStar,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">

        {/* LEFT */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Career Tech Global LLC
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Build Your Career
            <span className="block text-blue-600">
              With AI-Powered Education
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Learn future-ready skills through live training, real-world projects,
            industry mentors, and career-focused guidance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Explore Programs
              <IconArrowRight size={20} />
            </button>

            <button className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50">
              Book Free Consultation
            </button>

          </div>

          <p className="mt-8 text-sm text-gray-500">
            Trusted by aspiring professionals worldwide.
          </p>

        </div>

        {/* RIGHT */}

        <div className="grid w-full max-w-md gap-5">

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <IconBrain size={34} className="text-blue-600" />
              <div>
                <h3 className="font-bold">Data Science & AI</h3>
                <p className="text-sm text-gray-500">
                  AI • ML • Python • LLMs
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <IconShieldLock size={34} className="text-blue-600" />
              <div>
                <h3 className="font-bold">
                  Cyber Security
                </h3>
                <p className="text-sm text-gray-500">
                  Ethical Hacking • AI Security
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <IconUserStar size={34} className="text-blue-600" />
              <div>
                <h3 className="font-bold">
                  1-on-1 Mentorship
                </h3>
                <p className="text-sm text-gray-500">
                  Personalized Career Guidance
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}