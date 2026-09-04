import ProgramsHero from "@/components/programs/ProgramsHero";
import FeaturedPrograms from "@/components/programs/FeaturedPrograms";
import PricingPlans from "@/components/programs/PricingPlans";
import Curriculum from "@/components/programs/Curriculum";
import LearningTimeline from "@/components/programs/LearningTimeline";
import CareerOutcomes from "@/components/programs/CareerOutcomes";
import HiringPartners from "@/components/programs/HiringPartners";
import FAQ from "@/components/programs/FAQ";
import CTA from "@/components/programs/CTA";

export default function ProgramsPage() {
  return (
    <main className="bg-white pt-20">
      <ProgramsHero />
      <FeaturedPrograms />
      <PricingPlans />
      <Curriculum />
      <LearningTimeline />
      <CareerOutcomes />
      <HiringPartners />
      <FAQ />
      <CTA />
    </main>
  );
}