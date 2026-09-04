"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const team = [
  {
    name:"Prince Chaudhary",
    role: "Founder & Director",
    image: "/ceo.jpeg"
,
  },
  {
    name: "Ajay Singh",
    role: "CEO",
    image: "/team/team2.jpg",
  },
  {
    name: "Jahanvi",
    role: "CFO",
    image: "/team/team3.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Cloud & DevOps Expert",
    image: "/team/team4.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Meet Our Team
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">

            Learn From

            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

              Industry Professionals

            </span>

          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">

            Experienced mentors, career coaches and technology experts
            dedicated to helping learners build successful careers.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {team.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
                duration: .5,
              }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
            >

              <div className="relative h-80 w-full overflow-hidden">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-black text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-2 font-medium text-cyan-600">
                  {member.role}
                </p>

                <div className="mt-8 flex gap-4">

                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 transition hover:bg-cyan-500 hover:text-white">

                    <IconBrandLinkedin size={22} />

                  </button>

                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 transition hover:bg-cyan-500 hover:text-white">

                    <IconMail size={22} />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
