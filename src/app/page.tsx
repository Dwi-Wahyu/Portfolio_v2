import HomeSection from "./section/HomeSection";
import CommentSection from "./section/CommentSection";
import AboutSection from "./section/AboutSection";
import SkillSection from "./section/SkillSection";
import MitraSection from "./section/MitraSection";
import ProjectSection from "./section/ProjectSection";

export default function Home() {
  return (
    <div className="text-white bg-darkBlue">
      <HomeSection />

      <AboutSection />

      <SkillSection />

      <MitraSection />

      <ProjectSection />

      <CommentSection />
    </div>
  );
}
