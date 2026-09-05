import { motion } from "framer-motion";
import {
  IconUsers,
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconSchool,
  IconStarFilled,
} from "@tabler/icons-react";

const stats = [
  {
    title: "Students Trained",
    description: "Growing community",
    icon: IconUsers,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Industry Partners",
    description: "Hiring network",
    icon: IconBriefcase,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Career Support",
    description: "Placement assistance",
    icon: IconCertificate,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Hands-on Projects",
    description: "Real-world experience",
    icon: IconCode,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Expert Mentors",
    description: "Industry professionals",
    icon: IconSchool,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Quality Education",
    description: "Learner-first approach",
    icon: IconStarFilled,
    color: "from-amber-500 to-yellow-500",
  },
];

export default function CompanyStats() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-100 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Why Choose Us
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Built for
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Your Career Success
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            We focus on practical skills, industry connections and
            personalized support to help you achieve your career goals.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-cyan-300 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex rounded-3xl bg-gradient-to-r ${item.color} p-5 text-white shadow-xl`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-base font-medium text-slate-600">
                  {item.description}
                </p>

                <div
                  className={`mt-8 h-2 w-20 rounded-full bg-gradient-to-r ${item.color}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}