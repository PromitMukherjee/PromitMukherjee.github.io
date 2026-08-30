import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResearchInterests from "@/components/ResearchInterests";
import ResearchWorkflow from "@/components/ResearchWorkflow";
import FeaturedResearch from "@/components/FeaturedResearch";
import SelectedBuilds from "@/components/SelectedBuilds";
import TechStack from "@/components/TechStack";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-50 text-espresso-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <ResearchInterests />
      <ResearchWorkflow />
      <FeaturedResearch />
      <SelectedBuilds />
      <TechStack />
      <CurrentlyExploring />
      <About />
      <Writing />
      <Footer />
    </main>
  );
}
