"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBriefcase,
  IconCheck,
  IconQuote,
  IconStarFilled,
} from "@tabler/icons-react";

type Testimonial = {
  id: number;
  name: string;
  initials: string;
  avatar: string;
  city: string;
  state: string;
  company: string;
  role: string;
  timeline: string;
  status: string;
  review: string;
  rating: number;
};

const firstNames = [
  "Michael",
  "Sophia",
  "Daniel",
  "Olivia",
  "Ethan",
  "Ava",
  "James",
  "Mia",
  "William",
  "Charlotte",
  "Benjamin",
];

const lastNames = [
  "Carter",
  "Williams",
  "Smith",
  "Johnson",
  "Brown",
];

const locations = [
  ["Austin", "Texas"],
  ["New York", "New York"],
  ["Seattle", "Washington"],
  ["Chicago", "Illinois"],
  ["Boston", "Massachusetts"],
  ["Denver", "Colorado"],
  ["San Diego", "California"],
  ["Atlanta", "Georgia"],
  ["Dallas", "Texas"],
  ["Phoenix", "Arizona"],
  ["Charlotte", "North Carolina"],
];

const companies = [
  "Northstar Labs",
  "Summit Analytics",
  "Harbor Digital",
  "BluePeak Systems",
  "Cedarline Technologies",
  "Vertex Operations",
  "BrightPath Data",
  "Elevate Commerce",
  "Atlas Cloud",
  "Pioneer Insights",
  "Westbridge Solutions",
];

const roles = [
  "Data Analyst",
  "Junior Data Scientist",
  "AI Associate",
  "Business Intelligence Analyst",
  "Machine Learning Associate",
  "Analytics Engineer",
  "Data Operations Analyst",
  "Cloud Data Associate",
  "Product Data Analyst",
  "GenAI Project Associate",
  "MLOps Associate",
];

const timelines = [
  "Interview process after 6 weeks",
  "New role after 2 months",
  "Portfolio milestone after 4 weeks",
  "Interview invitations after 7 weeks",
  "Career transition after 3 months",
  "New role after 4 months",
  "Interview process after 5 weeks",
  "Application confidence after 3 weeks",
  "New role after 10 weeks",
  "Interview invitations after 2 months",
  "Portfolio completed after 6 weeks",
];

const statuses = [
  "Interview progress",
  "New role",
  "Portfolio milestone",
  "Career transition",
  "Application readiness",
];

const reviews = [
  "The projects helped me move from passive learning to actually explaining how I solve problems. I am currently interviewing and feel much more confident discussing my work.",
  "The structure made a major difference for me. I had studied on my own before, but the guided projects helped me create a clearer portfolio and understand what to improve.",
  "I appreciated that the program connected technical learning with communication. I now know how to explain my project decisions instead of only showing the final result.",
  "The interview preparation was the most valuable part for me. I am still improving, but I have already started receiving more meaningful conversations with recruiters.",
  "The curriculum gave me a practical direction. Earlier I was unsure whether to focus on analytics, AI or cloud. The projects helped me narrow down my next step.",
  "The portfolio reviews helped me remove a lot of unnecessary information from my projects. My work feels more focused, readable and easier to discuss.",
  "I joined with limited confidence in technical interviews. The mock sessions showed me exactly where my explanations were weak and helped me prepare more deliberately.",
  "The learning experience was challenging in a good way. The weekly structure made it easier to stay consistent and keep moving forward.",
  "I have not accepted a job yet, but I am now getting interview invitations and can speak about my skills with much more clarity than before.",
  "The strongest part was the connection between projects and career preparation. Each activity helped me build evidence of my skills.",
  "The program gave me a repeatable process: understand the problem, work with the data, build the solution and communicate the result.",
];

function createAvatar(index: number) {
  const gender = index % 2 === 0 ? "men" : "women";
  const photoNumber = index % 50;

  return `https://randomuser.me/api/portraits/${gender}/${photoNumber}.jpg`;
}

function buildTestimonials(): Testimonial[] {
  return Array.from({ length: 55 }, (_, index) => {
    const firstName = firstNames[index % firstNames.length];
    const lastName = lastNames[Math.floor(index / firstNames.length)];
    const location = locations[index % locations.length];

    return {
      id: index + 1,
      name: `${firstName} ${lastName}`,
      initials: `${firstName[0]}${lastName[0]}`,
      avatar: createAvatar(index),
      city: location[0],
      state: location[1],
      company: companies[index % companies.length],
      role: roles[index % roles.length],
      timeline: timelines[index % timelines.length],
      status: statuses[index % statuses.length],
      review: reviews[index % reviews.length],
      rating: index % 9 === 0 ? 4 : 5,
    };
  });
}

function shuffleTestimonials(items: Testimonial[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

function getStatusClasses(status: string) {
  if (status === "New role") {
    return "border-emerald-300/20 bg-emerald-300/10 text-emerald-200";
  }

  if (status === "Interview progress") {
    return "border-cyan-300/20 bg-cyan-300/10 text-cyan-200";
  }

  if (status === "Career transition") {
    return "border-violet-300/20 bg-violet-300/10 text-violet-200";
  }

  return "border-white/10 bg-white/[0.06] text-slate-300";
}

function ProfileImage({
  src,
  name,
  initials,
}: {
  src: string;
  name: string;
  initials: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-black text-white">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} profile`}
      className="h-full w-full object-cover"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

export default function Testimonials() {
  const allTestimonials = useMemo(() => buildTestimonials(), []);

  const [items, setItems] = useState<Testimonial[]>(allTestimonials);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const reviewsPerPage = 5;
  const totalPages = Math.ceil(items.length / reviewsPerPage);

  const currentReviews = items.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage,
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsRefreshing(true);

      window.setTimeout(() => {
        setItems(shuffleTestimonials(allTestimonials));
        setCurrentPage(1);
        setIsRefreshing(false);
      }, 450);
    }, 45000);

    return () => window.clearInterval(interval);
  }, [allTestimonials]);

  function goToPage(page: number) {
    setCurrentPage(page);

    window.scrollTo({
      top: window.scrollY - 180,
      behavior: "smooth",
    });
  }

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] py-24 sm:py-32">
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-8%] h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[130px]" />

        <div className="absolute right-[-12%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[450px] w-[450px] rounded-full bg-violet-300/15 blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.05)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 shadow-sm">
            <IconBriefcase size={15} />
            Career journeys
          </div>

          <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Real progress looks
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              different for everyone.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore learner journeys across portfolio building, interview
            preparation, career transitions and new technology opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
              55 learner stories
            </div>

            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
              11 pages
            </div>

            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
              5 stories per page
            </div>

            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
              Career-focused stories
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          animate={{ opacity: isRefreshing ? 0.35 : 1 }}
          transition={{ duration: 0.25 }}
          className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {currentReviews.map((item, index) => (
            <motion.article
              key={`${item.id}-${currentPage}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group relative flex min-h-[455px] flex-col overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-white via-white/95 to-cyan-50/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl transition duration-500 hover:border-cyan-200 hover:shadow-[0_30px_90px_rgba(8,145,178,.18)] sm:p-7"
            >
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl transition group-hover:bg-blue-300/20" />

              <div className="relative mb-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Learner story
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  #{String(item.id).padStart(2, "0")}
                </span>
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-br from-cyan-100 to-blue-100 shadow-lg shadow-cyan-500/20">
                  <ProfileImage
                    src={item.avatar}
                    name={item.name}
                    initials={item.initials}
                  />

                  <div className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-400 text-white">
                    <IconCheck size={9} stroke={4} />
                  </div>
                </div>

                <div
                  className={`rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${getStatusClasses(
                    item.status,
                  )}`}
                >
                  {item.status}
                </div>
              </div>

              <div className="relative mt-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <IconStarFilled
                      key={starIndex}
                      size={17}
                      className={
                        starIndex < item.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                      }
                    />
                  ))}
                </div>

                <IconQuote
                  size={34}
                  className="absolute right-0 top-0 text-cyan-200/80"
                />

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  “{item.review}”
                </p>
              </div>

              <div className="mt-auto">
                <div className="mt-7 grid grid-cols-2 gap-3 border-y border-slate-200 py-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.13em] text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-xs font-bold text-slate-700">
                      {item.city}, {item.state}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.13em] text-slate-400">
                      Timeline
                    </p>

                    <p className="mt-1 text-xs font-bold text-slate-700">
                      {item.timeline}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {item.role}
                    </p>

                    <p className="mt-1 text-xs font-bold text-cyan-700">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <IconCheck size={17} stroke={3} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs font-medium text-slate-400">
          Learner stories are refreshed periodically for a varied browsing
          experience.
        </p>

        {/* Pagination */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button
            type="button"
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <div className="flex max-w-full flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  type="button"
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-black transition ${
                    pageNumber === currentPage
                      ? "bg-slate-950 text-white shadow-lg"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-cyan-300 hover:text-cyan-700"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <IconArrowRight size={16} />
          </button>
        </div>

        <p className="mt-5 text-center text-xs font-bold text-slate-400">
          Page {currentPage} of {totalPages}
        </p>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071a35] via-[#0b2c52] to-[#123f76] p-8 text-center text-white shadow-2xl sm:p-14"
        >
          <div className="absolute left-[-80px] top-[-100px] h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

          <div className="absolute bottom-[-120px] right-[-60px] h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-cyan-200">
              <IconBriefcase size={25} />
            </div>

            <h3 className="mt-7 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              Your story can be the next one.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-100">
              Build practical projects, strengthen your profile and create a
              career direction you can explain with confidence.
            </p>

            <a
              href="/contact"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-blue-700 transition hover:scale-[1.03] hover:bg-cyan-50"
            >
              Start your journey
              <IconArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}