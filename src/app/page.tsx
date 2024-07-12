import Navbar from "@/components/Navbar";

import ProyekSection from "./section/ProjectSection";
import AboutSection from "./section/AboutSection";
import SkillSection from "./section/SkillSection";
import HomeSection from "./section/HomeSection";
import ScrollButton from "@/components/ScrollButton";
import CommentSection from "./section/CommentSection";

export default function Home() {
  return (
    <div className="text-white bg-gradient-to-r from-black to-gray-900">
      <Navbar />

      <ScrollButton />

      <HomeSection />

      <AboutSection />

      <SkillSection />

      <ProyekSection />

      <CommentSection />
    </div>
  );
}
