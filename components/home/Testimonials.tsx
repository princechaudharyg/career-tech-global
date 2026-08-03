import { IconStarFilled } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Data Science & Artificial Intelligence",
    image: "MJ",
    review:
      "The instructors explained every concept with real-world examples. The projects gave me the confidence to apply for AI roles.",
  },
  {
    name: "Sophia Williams",
    role: "Cyber Security & Ethical Hacking",
    image: "SW",
    review:
      "The hands-on labs and live mentorship made learning cybersecurity much easier. I learned practical skills instead of just theory.",
  },
  {
    name: "David Martinez",
    role: "Cyber Security & Artificial Intelligence",
    image: "DM",
    review:
      "I loved the personalized guidance and interview preparation. The learning experience was professional from start to finish.",
  },
  {
    name: "Emily Carter",
    role: "Data Science & Artificial Intelligence",
    image: "EC",
    review:
      "Career Tech Global helped me understand Machine Learning and Python through practical projects. The mentors were always supportive.",
  },
  {
    name: "James Anderson",
    role: "GRC & Artificial Intelligence",
    image: "JA",
    review:
      "The program was well structured and focused on real industry practices. Every session added value to my professional growth.",
  },
  {
    name: "Olivia Brown",
    role: "1-on-1 Mentorship",
    image: "OB",
    review:
      "The one-on-one mentoring was worth every minute. My trainer created a personalized roadmap that matched my career goals.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            STUDENT SUCCESS STORIES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Hear What Our Learners Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Thousands of aspiring professionals trust Career Tech Global to
            accelerate their careers through industry-focused training and
            expert mentorship.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="mb-6 flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <IconStarFilled key={star} size={20} />
                ))}
              </div>

              {/* Review */}
              <p className="leading-7 text-slate-600 italic">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {item.image}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-blue-600">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
            Start Your Career Journey →
          </button>
        </div>
      </div>
    </section>
  );
}