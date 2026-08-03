import { IconUsersGroup, IconUser } from "@tabler/icons-react";

const learningModes = [
  {
    icon: <IconUsersGroup size={42} className="text-blue-600" />,
    title: "Batch Learning",
    subtitle: "Learn with a community",
    features: [
      "Live instructor-led classes",
      "Interactive group discussions",
      "Hands-on projects",
      "Placement assistance",
      "Affordable pricing",
    ],
  },
  {
    icon: <IconUser size={42} className="text-blue-600" />,
    title: "1-on-1 Mentorship",
    subtitle: "Personalized learning experience",
    features: [
      "Dedicated personal trainer",
      "Flexible class schedule",
      "Customized roadmap",
      "Individual career guidance",
      "Premium learning experience",
    ],
  },
];

export default function LearningExperience() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Learning Experience
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Choose How You Want To Learn
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Whether you prefer learning with a group or personalized mentoring,
            we have a learning path designed for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {learningModes.map((mode) => (
            <div
              key={mode.title}
              className="rounded-3xl bg-white p-10 shadow-lg"
            >
              {mode.icon}

              <h3 className="mt-6 text-3xl font-bold">
                {mode.title}
              </h3>

              <p className="mt-2 text-blue-600 font-medium">
                {mode.subtitle}
              </p>

              <ul className="mt-8 space-y-4">
                {mode.features.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    ✅ {item}
                  </li>
                ))}
              </ul>

              <button className="mt-10 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}