import { IconArrowRight } from "@tabler/icons-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center text-white">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
          🚀 Career Tech Global LLC
        </span>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight">
          Ready To Launch Your Tech Career?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100 leading-8">
          Whether you're starting from scratch or upgrading your skills,
          our mentors are here to guide you every step of the way.
          Book a free career consultation today.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
            Schedule Free Consultation
            <IconArrowRight size={20} />
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700">
            Explore Programs
          </button>

        </div>

      </div>
    </section>
  );
}