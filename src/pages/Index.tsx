import Sidebar from "@/components/Sidebar";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import ReviewsSection from "@/components/ReviewsSection";

const Index = () => {
  return (
    <div className="cursor-none overflow-x-hidden">
      <CustomCursor />
      <Sidebar />
      <main className="lg:ml-80 w-auto max-w-full overflow-x-hidden box-border">
        <HeroSection />
        <StatsSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
