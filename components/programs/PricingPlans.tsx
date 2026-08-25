import Link from "next/link";
import { Check } from "lucide-react";

const batchFeatures = [
  "Live Interactive Classes",
  "Hands-on Projects",
  "Weekly Assignments",
  "Career Support",
  "ATS Resume Building",
  "LinkedIn Optimization",
  "Interview Preparation",
  "Placement Assistance",
];

const premiumFeatures = [
  "Everything in Batch",
  "Dedicated 1-to-1 Mentor",
  "Flexible Schedule",
  "Personal Learning Roadmap",
  "Unlimited Doubt Sessions",
  "Priority Placement Support",
  "Mock Interviews with Experts",
  "Lifetime Career Guidance",
];

export default function PricingPlans() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
            PRICING
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Choose Your Learning Path
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Whether you prefer collaborative learning or personalized
            mentorship, we have a program designed for your career goals.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2 lg:gap-8">
          <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl sm:p-9">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-100/70 transition duration-500 group-hover:scale-125" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 shadow-sm">
                    Collaborative Learning
                  </span>

                  <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-950">
                    Batch Program
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">
                    Learn together with a structured curriculum and live
                    instructor-led sessions.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-black text-cyan-700 sm:flex">
                  B
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                  Program access
                </p>

                <span className="mt-2 block text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Affordable
                </span>
              </div>

              <div className="mt-7">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-900">
                  What&apos;s included
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {batchFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span className="text-sm font-semibold leading-5 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-cyan-600"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 text-white shadow-2xl shadow-cyan-950/30 transition duration-300 hover:-translate-y-1 sm:p-9">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl transition duration-500 group-hover:scale-125" />
            <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

            <span className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-950 shadow-lg shadow-cyan-500/20 sm:right-8 sm:top-8">
              MOST POPULAR
            </span>

            <div className="relative">
              <div className="flex items-start justify-between gap-5 pr-24">
                <div>
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-cyan-200">
                    Personalized Learning
                  </span>

                  <h3 className="mt-5 text-3xl font-black tracking-tight">
                    1-to-1 Mentorship
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
                    Personalized guidance with dedicated mentorship and
                    accelerated career support.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-cyan-200">
                  Program access
                </p>

                <span className="mt-2 block text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Premium
                </span>
              </div>

              <div className="mt-7">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white">
                  What&apos;s included
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {premiumFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.08] p-3 backdrop-blur-sm transition hover:bg-white/[0.13]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span className="text-sm font-semibold leading-5 text-slate-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}