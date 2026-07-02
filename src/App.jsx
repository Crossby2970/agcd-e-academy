import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FounderProfile from "./components/FounderProfile";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactMetrics from "./components/ImpactMetrics";
import LearningPathways from "./components/LearningPathways";
import MissionVision from "./components/MissionVision";
import PartnerCTA from "./components/PartnerCTA";
import PillarsSection from "./components/PillarsSection";
import ProblemSection from "./components/ProblemSection";
import ProgrammeCatalogue from "./components/ProgrammeCatalogue";
import Testimonials from "./components/Testimonials";
import ValueProposition from "./components/ValueProposition";
import WhoWeServe from "./components/WhoWeServe";

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:rounded-lg focus:bg-navy focus:text-white focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <MissionVision />
        <ProblemSection />
        <PillarsSection />
        <ProgrammeCatalogue />
        <LearningPathways />
        <WhoWeServe />
        <ValueProposition />
        <FounderProfile />
        <PartnerCTA />
        <ImpactMetrics />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
