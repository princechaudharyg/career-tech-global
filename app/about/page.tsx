import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import OurStory from "@/components/about/OurStory";
import Stats from "@/components/about/Stats";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <OurStory />
      <Stats />
      <CTA />
    </main>
  );
}