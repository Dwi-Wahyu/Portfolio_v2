"use client";

import { motion, useScroll } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function ProjectDiv({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity: scrollYProgress }}
      className="flex flex-col items-center py-4 px-3 justify-center gap-3 border border-gray-500 rounded-lg"
    >
      {children}
    </motion.div>
  );
}
