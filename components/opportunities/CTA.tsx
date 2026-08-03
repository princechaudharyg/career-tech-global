import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-extrabold">
          Ready To Launch Your Tech Career?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          Join Career Tech Global LLC and gain industry-ready skills,
          personalized mentorship and career support to land your dream job.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="/programs"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
          >
            Explore Programs
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
          >
            Book Free Consultation
          </Link>

        </div>

      </div>
    </section>
  );
}