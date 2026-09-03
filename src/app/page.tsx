import HomeSection from "./section/HomeSection";
import CommentSection from "./section/CommentSection";
import AboutSection from "./section/AboutSection";
import SkillSection from "./section/SkillSection";
import MitraSection from "./section/MitraSection";
import MomentsSection from "./section/MomentsSection";
import ProjectSection from "./section/ProjectSection";

export default function Home() {
  return (
    <div className="text-white bg-darkBlue">
      <HomeSection />

      <AboutSection />

      <ProjectSection />

      <MitraSection />

      <MomentsSection />

      <SkillSection />
      
      <CommentSection />
    </div>
  );
}
