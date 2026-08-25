"use client";

import { motion } from "framer-motion";
import {
  IconStarFilled,
  IconQuote,
  IconBriefcase,
} from "@tabler/icons-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Scientist",
    company: "Microsoft",
    image: "/students/student1.jpg",
    review:
      "Career Tech Global completely transformed my resume and interview skills. Within weeks I received multiple interview calls and finally landed my dream role at Microsoft.",
    salary: "$58K → $142K",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Michael Brown",
    role: "AI Engineer",
    company: "Google",
    image: "/students/student2.jpg",
    review:
      "The mock interviews felt exactly like real technical interviews. My confidence improved tremendously and I secured an AI Engineer position at Google.",
    salary: "$72K → $168K",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    name: "Emily Davis",
    role: "Machine Learning Engineer",
    company: "Amazon",
    image: "/students/student3.jpg",
    review:
      "Their ATS resume optimization and LinkedIn branding made a huge difference. Recruiters started reaching out within days.",
    salary: "$66K → $156K",
    color: "from-emerald-500 to-cyan-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Success Stories
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Hear From Our
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Successful Learners
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Thousands of professionals have accelerated their careers
            with Career Tech Global LLC.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl"
            >

              <div className="relative h-72 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                <div
                  className={`absolute right-5 top-5 rounded-full bg-gradient-to-r ${item.color} p-3 text-white shadow-xl`}
                >
                  <IconQuote size={24} />
                </div>

              </div>

              <div className="p-8">

                <div className="flex">

                  {[1,2,3,4,5].map((star) => (

                    <IconStarFilled
                      key={star}
                      size={18}
                      className="text-yellow-400"
                    />

                  ))}

                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  "{item.review}"
                </p>

                <div className="my-8 h-px bg-slate-200" />

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="text-xl font-black text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-slate-500">
                      {item.role}
                    </p>

                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-100 p-5">

                  <div>

                    <p className="text-sm text-slate-500">
                      Company
                    </p>

                    <h4 className="font-bold text-slate-900">
                      {item.company}
                    </h4>

                  </div>

                  <div className="text-right">

                    <p className="text-sm text-slate-500">
                      Salary Growth
                    </p>

                    <h4 className="font-black text-emerald-600">
                      {item.salary}
                    </h4>

                  </div>

                </div>

                <div className="mt-8 flex items-center gap-3 text-cyan-600">

                  <IconBriefcase size={20} />

                  <span className="font-semibold">
                    Successfully Placed
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}