import {
    IconBook,
    IconCode,
    IconCertificate,
    IconBriefcase,
  } from "@tabler/icons-react";
  
  const steps = [
    {
      icon: <IconBook size={38} className="text-blue-600" />,
      title: "Enroll",
      description:
        "Choose the program that matches your career goals and learning style.",
    },
    {
      icon: <IconCode size={38} className="text-blue-600" />,
      title: "Learn & Build",
      description:
        "Attend live sessions, complete projects and gain practical experience.",
    },
    {
      icon: <IconCertificate size={38} className="text-blue-600" />,
      title: "Become Job Ready",
      description:
        "Build your resume, prepare for interviews and strengthen your portfolio.",
    },
    {
      icon: <IconBriefcase size={38} className="text-blue-600" />,
      title: "Launch Your Career",
      description:
        "Get placement assistance and confidently start your tech career.",
    },
  ];
  
  export default function CareerJourney() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
  
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Career Journey
            </span>
  
            <h2 className="mt-6 text-5xl font-bold">
              Your Roadmap To Success
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              From enrollment to placement, we guide you every step of the way.
            </p>
  
          </div>
  
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-gray-200 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex justify-center">
                  {step.icon}
                </div>
  
                <h3 className="mt-6 text-2xl font-bold">
                  {step.title}
                </h3>
  
                <p className="mt-4 text-gray-600 leading-7">
                  {step.description}
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }