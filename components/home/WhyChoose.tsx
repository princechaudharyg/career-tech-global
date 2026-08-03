import {
    IconBriefcase,
    IconUsers,
    IconCertificate,
    IconTargetArrow,
    IconBrain,
    IconShieldLock,
  } from "@tabler/icons-react";
  
  const features = [
    {
      icon: <IconBrain size={40} className="text-blue-600" />,
      title: "Industry-Focused Curriculum",
      description:
        "Master the latest technologies in Artificial Intelligence, Data Science and Cyber Security through practical, career-oriented training.",
    },
    {
      icon: <IconUsers size={40} className="text-blue-600" />,
      title: "Live Mentorship",
      description:
        "Learn directly from experienced industry professionals with interactive live classes, doubt sessions and continuous guidance.",
    },
    {
      icon: <IconBriefcase size={40} className="text-blue-600" />,
      title: "Career Support",
      description:
        "Resume optimization, LinkedIn branding, mock interviews and placement assistance to help you confidently enter the tech industry.",
    },
    {
      icon: <IconShieldLock size={40} className="text-blue-600" />,
      title: "Hands-On Learning",
      description:
        "Work on real-world projects, practical assignments and case studies that prepare you for actual industry challenges.",
    },
    {
      icon: <IconCertificate size={40} className="text-blue-600" />,
      title: "Recognized Certification",
      description:
        "Earn career-focused certifications that strengthen your resume and showcase your technical expertise.",
    },
    {
      icon: <IconTargetArrow size={40} className="text-blue-600" />,
      title: "Flexible Learning Options",
      description:
        "Choose between affordable Batch Learning or Premium 1-on-1 Mentorship based on your career goals and schedule.",
    },
  ];
  
  export default function WhyChoose() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              WHY CHOOSE CAREER TECH GLOBAL
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Everything You Need To Build A Successful Tech Career
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We don't just teach technology—we prepare you for real careers
              through expert mentorship, practical learning and continuous career
              support.
            </p>
          </div>
  
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                  {feature.icon}
                </div>
  
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>
  
                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
  
          </div>
        </div>
      </section>
    );
  }