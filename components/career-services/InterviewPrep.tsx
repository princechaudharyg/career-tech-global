import {
    IconBriefcase,
    IconBrain,
    IconCode,
    IconMessageChatbot,
    IconCheck,
  } from "@tabler/icons-react";
  
  const rounds = [
    {
      icon: IconBriefcase,
      title: "HR Interview",
      desc: "Communication, confidence, behavioral questions and salary negotiation.",
    },
    {
      icon: IconCode,
      title: "Technical Interview",
      desc: "Role-specific technical questions based on your target job profile.",
    },
    {
      icon: IconBrain,
      title: "Problem Solving",
      desc: "Logical thinking, aptitude and real interview scenarios.",
    },
    {
      icon: IconMessageChatbot,
      title: "Mock Interview",
      desc: "Live interview simulation with personalized feedback.",
    },
  ];
  
  export default function InterviewPrep() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              INTERVIEW PREPARATION
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Crack Your Next
              <span className="block text-indigo-600">
                Dream Job Interview
              </span>
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Practice with industry experts and gain the confidence to perform in
              real interviews.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2">
  
            {rounds.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100">
                    <Icon className="text-indigo-600" size={30} />
                  </div>
  
                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>
  
                  <p className="mt-4 leading-7 text-slate-600">
                    {item.desc}
                  </p>
  
                  <div className="mt-6 flex items-center gap-2 text-green-600 font-medium">
                    <IconCheck size={18} />
                    Included in Career Pro & Ultimate Plans
                  </div>
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }