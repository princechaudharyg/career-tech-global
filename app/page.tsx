import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import Programs from "@/components/home/Programs";
import IndustryLeaders from "@/components/home/IndustryLeaders";
import FounderStory from "@/components/home/FounderStory";
import Transparency from "@/components/home/Transparency";
import Roadmap from "@/components/home/Roadmap";
import Community from "@/components/home/Community";
import WhyChoose from "@/components/home/WhyChoose";
import Comparison from "@/components/home/Comparison";
import TrustedCompany from "@/components/home/TrustedCompany";
import FAQ from "@/components/career-services/FAQ";
import FinalCTA from "@/components/career-services/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Hero />
      <TrustSection />
      <Programs />
      <IndustryLeaders />
      <FounderStory />
      <Transparency />
      <Roadmap />
      <Community />
      <WhyChoose />
      <Comparison />
      <TrustedCompany />
      <FAQ />
      <FinalCTA />
    </main>

  );
}