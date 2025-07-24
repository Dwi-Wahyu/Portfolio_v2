import Navbar from "@/components/Navbar";

import HomeSection from "./section/HomeSection";
import CommentSection from "./section/CommentSection";
import ArticleSection from "./section/ArticleSection";
import LogoScrollVelocity from "./_components/LogoScrollVelocity";
import ScrollReveal from "./_components/ScrollReveal/ScrollReveal";
import AboutSection from "./section/AboutSection";
import SkillSection from "./section/SkillSection";
import ProjectSectionMobileScreen from "./section/ProjectSectionMobileScreen";
import ProjectSectionDekstopScreen from "./section/ProjectSectionDekstopScreen";

export default function Home() {
  return (
    <div className="text-white bg-darkBlue">
      <HomeSection />

      <AboutSection />

      <SkillSection />

      <ProjectSectionDekstopScreen />

      <CommentSection />
    </div>
  );
}
