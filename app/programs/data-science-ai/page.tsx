import Hero from "@/components/programs/data-science-ai/Hero";
import WhyChoose from "@/components/programs/data-science-ai/WhyChoose";
import Curriculum from "@/components/programs/data-science-ai/Curriculum";
import Projects from "@/components/programs/data-science-ai/Projects";
import LearningJourneyTimeline from "@/components/programs/data-science-ai/LearningJourneyTimeline";
import CareerOutcomes from "@/components/programs/data-science-ai/CareerOutcomes";
import HiringPartners from "@/components/programs/data-science-ai/HiringPartners";
import Testimonials from "@/components/programs/data-science-ai/Testimonials";
import Certifications from "@/components/programs/data-science-ai/Certifications";
import Pricing from "@/components/programs/data-science-ai/Pricing";

export default function DataScienceAIPage() {
  return (
    <main className="program-page overflow-hidden bg-white">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Why Choose This Program */}
      <WhyChoose />

      {/* 3. Program Stats */}
      <StatsSection />

      {/* 4. Curriculum */}
      <Curriculum />

      {/* 5. Projects */}
      <Projects />

      {/* 6. Learning Journey */}
      <LearningJourneyTimeline />

      {/* 7. Career Outcomes */}
      <CareerOutcomes />

      {/* 8. Hiring Partners */}
      <HiringPartners />

      {/* 9. Certifications */}
      <Certifications />

      {/* 10. Student Reviews */}
      <Testimonials />

      {/* 11. Pricing, Registration, Orientation, Includes,
          Refund Policy, FAQ and Final CTA */}
      <Pricing />

    </main>
  );
}

function StatsSection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center">
          <p className="text-3xl font-black text-white">30</p>

          <p className="mt-1 text-sm text-slate-400">
            Weeks Program
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center">
          <p className="text-3xl font-black text-white">15+</p>

          <p className="mt-1 text-sm text-slate-400">
            Live Projects
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center">
          <p className="text-3xl font-black text-white">12</p>

          <p className="mt-1 text-sm text-slate-400">
            Learning Modules
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center">
          <p className="text-3xl font-black text-white">01</p>

          <p className="mt-1 text-sm text-slate-400">
            Final Capstone
          </p>
        </div>
      </div>
    </section>
  );
}