"use client";

import { motion, useScroll } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export default function SkillDiv({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <div className="overflow-hidden">
      {/* <motion.div
        ref={ref}
        style={{ opacity: scrollYProgress }}
        className="flex flex-col items-center p-4 justify-center gap-3 border border-gray-500 rounded-lg"
      >
        {children}
      </motion.div> */}

      <motion.div
        ref={ref}
        style={{ opacity: scrollYProgress }}
        className="flex flex-col items-center p-4 justify-center gap-3 border border-gray-500 rounded-lg"
      >
        {children}
      </motion.div>
    </div>
  );
}
