"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconArrowRight,
  IconCalendarEvent,
  IconVideo,
} from "@tabler/icons-react";

const events = [
  {
    month: "AUG",
    day: "15",
    title: "AI Career Hiring Drive",
    company: "Microsoft & Partner Network",
    mode: "Online",
    color: "from-cyan-500 to-blue-600",
  },
  {
    month: "AUG",
    day: "20",
    title: "Cyber Security Recruitment",
    company: "Cisco Talent Team",
    mode: "Virtual",
    color: "from-blue-500 to-indigo-600",
  },
  {
    month: "SEP",
    day: "05",
    title: "Data Science Career Fair",
    company: "Google & Industry Partners",
    mode: "Hybrid",
    color: "from-violet-500 to-fuchsia-600",
  },
];

export default function HiringEvents() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 xl:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
              <IconCalendarEvent size={15} />
              Upcoming events
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Meet the people behind the opportunity.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Connect with recruiters, mentors and hiring teams through curated
            career events.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -7 }}
              className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-lg shadow-slate-200/40"
            >
              <div
                className={`flex items-center justify-between bg-gradient-to-r ${event.color} p-5 text-white`}
              >
                <div>
                  <p className="text-xs font-bold tracking-widest text-white/70">
                    EVENT DATE
                  </p>

                  <p className="mt-1 text-3xl font-black">
                    {event.month} {event.day}
                  </p>
                </div>

                <IconVideo size={30} className="text-white/80" />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                  {event.mode}
                </span>

                <h3 className="mt-5 text-xl font-black text-slate-900">
                  {event.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {event.company}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-600"
                >
                  Register your interest
                  <IconArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}