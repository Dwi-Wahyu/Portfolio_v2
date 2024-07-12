"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const CircleIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />
  );
};

export default function ScrollButton() {
  const [showBtn, toggleShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (ev) => {
      const { scrollY } = window;

      if (scrollY > 100) {
        toggleShowBtn(true);
      } else {
        toggleShowBtn(false);
      }
    });
  }, []);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-10 left-10 z-40">
      <CircleIndicator />

      {showBtn && (
        <FaArrowAltCircleUp
          onClick={() => scrollToTop()}
          className="w-10 h-10 cursor-pointer hover:scale-150 transition-all ease-in-out"
        />
      )}
    </div>
  );
}
