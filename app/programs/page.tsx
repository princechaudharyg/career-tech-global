import ProgramsHero from "../../components/programs/ProgramsHero";
import BatchPrograms from "../../components/programs/BatchPrograms";
import OneToOnePrograms from "../../components/programs/OneToOnePrograms";
import ProgramComparison from "../../components/programs/ProgramComparison";
import LearningJourney from "../../components/programs/LearningJourney";
import IndustryRecognition from "../../components/programs/IndustryRecognition";

export default function ProgramsPage() {
  return (
    <main className="pt-20">
      <ProgramsHero />
      <BatchPrograms />
      <OneToOnePrograms />
      <ProgramComparison />
      <LearningJourney />
      <IndustryRecognition />
    </main>
  );
}