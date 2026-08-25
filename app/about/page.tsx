import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import CTA from "@/components/about/CTA";
import CompanyStats from "@/components/about/CompanyStats";
import Team from "@/components/about/Team";
import WhyUs from "@/components/about/WhyUs";

export default function AboutPage() {
  return (
    <main className="bg-white pt-20">

      <AboutHero />

      <OurStory />

      <MissionVision />

      <CoreValues />

<CompanyStats />
<WhyUs />

<Team />
      <CTA />

    </main>
  );
}
