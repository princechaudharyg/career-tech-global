import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import WhyChoose from "@/components/home/WhyChoose";
import LearningExperience from "@/components/home/LearningExperience";
import CareerJourney from "@/components/home/CareerJourney";
import Testimonials from "@/components/home/Testimonials";
import HowItWorks from "@/components/home/HowItWorks";
import Outcomes from "@/components/home/Outcomes";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <WhyChoose />
      <LearningExperience />
      <CareerJourney />
      <Testimonials />
      <HowItWorks />
      <Outcomes />
      <FAQ />
      <CTA />
    </>
  );
}