"use client";

import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiNestjs,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

import Link from "next/link";
import LogoScrollVelocity from "../_components/LogoScrollVelocity";

export default function SkillSection() {
  return (
    <section
      id="skill"
      className="text-white w-full flex flex-col max-[639px]:p-10 p-20"
    >
      <h1 className="text-xl w-full text-center mb-14 font-bold underline underline-offset-8">
        Tech Stack
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <SkillDiv>
          <h1 className="font-semibold text-lg mb-1">Nuxt JS + Nest JS</h1>

          <div className="flex gap-3 items-center mt-5">
            <SiNuxtdotjs className="text-4xl md:text-7xl" />
            <SiNestjs className="text-4xl md:text-7xl" />
            <SiPrisma className="text-4xl md:text-7xl" />
            <SiPostgresql className="text-4xl md:text-7xl" />
          </div>
        </SkillDiv>

        <SkillDiv>
          <h1 className="font-semibold text-lg mb-1">Fullstack Node JS</h1>

          <div className="flex gap-3   items-center mt-5">
            <SiNodedotjs className="text-4xl md:text-7xl" />
            <SiExpress className="text-4xl md:text-7xl" />
            <SiPrisma className="text-4xl md:text-7xl" />
            <SiMysql className="text-4xl md:text-7xl" />
          </div>
        </SkillDiv>

        <SkillDiv>
          <h1 className="font-semibold text-lg mb-1">Fullstack Next JS</h1>

          <div className="flex gap-3 items-center mt-5">
            <SiNextdotjs className="text-4xl md:text-7xl" />
            <SiPrisma className="text-4xl md:text-7xl" />
            <SiPostgresql className="text-4xl md:text-7xl" />
          </div>
        </SkillDiv>

        <SkillDiv>
          <h1 className="font-semibold text-lg mb-1">Fullstack Nuxt 4</h1>

          <div className="flex gap-3 items-center mt-5">
            <SiNuxtdotjs className="text-4xl md:text-7xl" />
            <SiPrisma className="text-4xl md:text-7xl" />
            <SiPostgresql className="text-4xl md:text-7xl" />
          </div>
        </SkillDiv>
      </div>

      <div className="mt-10">
        <LogoScrollVelocity />
      </div>
    </section>
  );
}

function SkillDiv({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.95"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="flex flex-col items-center p-9  justify-center bg-gradient-to-r from-accentBlue to-blue-300 rounded-lg hover:bg-transparent transition-all"
      >
        {children}
      </motion.div>
    </div>
  );
}
