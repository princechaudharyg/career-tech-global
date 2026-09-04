import Link from "next/link";
import {
  IconArrowRight,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#061326] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
          <IconSparkles size={15} />
          Your next chapter starts now
        </span>

        <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Don&apos;t just search for a job.
          <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Become ready for one.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Build the skills, portfolio and confidence that help you stand out in
          the modern technology job market.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-300">
          <span className="inline-flex items-center gap-2">
            <IconCheck size={16} className="text-emerald-400" />
            Expert mentorship
          </span>

          <span className="inline-flex items-center gap-2">
            <IconCheck size={16} className="text-emerald-400" />
            Real-world projects
          </span>

          <span className="inline-flex items-center gap-2">
            <IconCheck size={16} className="text-emerald-400" />
            Career support
          </span>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold shadow-xl shadow-cyan-500/20 transition hover:scale-[1.03]"
          >
            Explore Programs
            <IconArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}