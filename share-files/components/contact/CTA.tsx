import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Start Your Tech Career?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-cyan-100">
          Join Career Tech Global LLC and gain the skills, mentorship,
          and career support needed to land your dream job.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/programs"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Explore Programs
          </Link>

          <Link
            href="/career-services"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
          >
            Career Services
          </Link>

        </div>

      </div>
    </section>
  );
}