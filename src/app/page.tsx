import Navbar from "@/components/Navbar";

import HomeSection from "./_section/HomeSection";
import CommentSection from "./_section/CommentSection";
import ArticleSection from "./_section/ArticleSection";
import LogoScrollVelocity from "./_components/LogoScrollVelocity";
import ScrollReveal from "./_components/ScrollReveal/ScrollReveal";

export default function Home() {
  return (
    <div className="text-white bg-darkBlue">
      <Navbar />

      <HomeSection />

      <div className="max-[639px]:px-5 px-20">
        <LogoScrollVelocity />
      </div>

      <ArticleSection />

      <CommentSection />
    </div>
  );
}
