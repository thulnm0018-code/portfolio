import { useRef } from "react";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="size-full overflow-x-hidden">
      <Navbar />
      <HeroSection onScrollToContent={scrollToContent} />
      <div ref={contentRef}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <BackToTop />
    </div>
  );
}
