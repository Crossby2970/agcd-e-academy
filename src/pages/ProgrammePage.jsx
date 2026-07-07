import CapstoneSection from "../components/programme/CapstoneSection";
import CertificatesSection from "../components/programme/CertificatesSection";
import CourseAtGlance from "../components/programme/CourseAtGlance";
import CurriculumAccordion from "../components/programme/CurriculumAccordion";
import FinalCTA from "../components/programme/FinalCTA";
import FounderCredibility from "../components/programme/FounderCredibility";
import MentorshipAlumni from "../components/programme/MentorshipAlumni";
import ProblemSection from "../components/programme/ProblemSection";
import ProgrammeFAQ from "../components/programme/ProgrammeFAQ";
import ProgrammeFooter from "../components/programme/ProgrammeFooter";
import ProgrammeHeader from "../components/programme/ProgrammeHeader";
import ProgrammeHero from "../components/programme/ProgrammeHero";
import RegistrationForms from "../components/programme/RegistrationForms";
import SolutionSection from "../components/programme/SolutionSection";
import SponsorSection from "../components/programme/SponsorSection";
import StickyMobileCTA from "../components/programme/StickyMobileCTA";
import SuccessStoriesPlaceholder from "../components/programme/SuccessStoriesPlaceholder";
import ToolsGrid from "../components/programme/ToolsGrid";
import WeeklyTimeline from "../components/programme/WeeklyTimeline";
import WhatYoullGain from "../components/programme/WhatYoullGain";
import WhoShouldEnrol from "../components/programme/WhoShouldEnrol";

export default function ProgrammePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:rounded-lg focus:bg-navy focus:text-white focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <ProgrammeHeader />

      <main id="main-content">
        <ProgrammeHero />
        <ProblemSection />
        <SolutionSection />
        <CourseAtGlance />
        <FounderCredibility />
        <WhoShouldEnrol />
        <WhatYoullGain />
        <ToolsGrid />
        <CurriculumAccordion />
        <WeeklyTimeline />
        <CapstoneSection />
        <CertificatesSection />
        <MentorshipAlumni />
        <SuccessStoriesPlaceholder />
        <SponsorSection />
        <RegistrationForms />
        <ProgrammeFAQ />
        <FinalCTA />
      </main>

      <ProgrammeFooter />
      <StickyMobileCTA />
    </>
  );
}
