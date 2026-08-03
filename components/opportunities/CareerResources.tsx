import {
    IconFileText,
    IconUserCheck,
    IconRoute,
    IconBrain,
    IconArrowRight,
  } from "@tabler/icons-react";
  
  const resources = [
    {
      title: "ATS Resume Guide",
      description:
        "Learn how to build an ATS-friendly resume that gets shortlisted.",
      icon: IconFileText,
    },
    {
      title: "Interview Preparation",
      description:
        "Master HR and technical interviews with expert guidance.",
      icon: IconUserCheck,
    },
    {
      title: "Career Roadmap",
      description:
        "Choose the right learning path based on your career goals.",
      icon: IconRoute,
    },
    {
      title: "AI Career Tips",
      description:
        "Stay updated with AI trends, tools and future career opportunities.",
      icon: IconBrain,
    },
  ];
  
  export default function CareerResources() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
              CAREER RESOURCES
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Learn. Prepare. Get Hired.
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Access free career resources created by industry professionals to
              accelerate your tech journey.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {resources.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600">
                    <Icon size={32} />
                  </div>
  
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
  
                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
  
                  <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700">
                    Learn More
                    <IconArrowRight size={18} />
                  </button>
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }