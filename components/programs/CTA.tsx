import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06142f] py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(6,182,212,0.25),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(37,99,235,0.35),transparent_34%)]" />

      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div className="rounded-[34px] border border-white/15 bg-white/[0.07] px-5 py-12 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:px-10 sm:py-16">
          <span className="inline-flex rounded-full border border-cyan-200/25 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
            START YOUR TECH CAREER
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Ready to Build Your Future?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Join Career Tech Global LLC and gain the skills, mentorship and
            career support needed to launch your career in today&apos;s
            fastest-growing tech industries.
          </p>

          <div className="mx-auto mt-10 h-px max-w-xl bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/30"
            >
              Enroll Now
              <ArrowRight
                size={19}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/career-services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-black text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
            >
              Career Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
