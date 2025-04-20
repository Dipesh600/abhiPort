import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import CertificatesSection from "./CertificatesSection";
import AchievementsSection from "./AchievementsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import FloatingActionButton from "./FloatingActionButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <FloatingActionButton />
    </div>
  );
} 