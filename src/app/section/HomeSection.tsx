"use client";

import Image from "next/image";

import HomeDiv from "@/components/animation_div/HomeDiv";
import MukaImage from "../../../public/image/muka-filter.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export default function HomeSection() {
  return (
    <section id="home" className="flex w-full h-svh justify-center items-end ">
      <div className="max-[639px]:flex sm:flex md:flex lg:hidden xl:hidden flex-col items-center gap-7">
        <motion.div
          whileInView="show"
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-2"
        >
          <motion.h1
            variants={itemVariant}
            className="text-3xl font-bold max-[639px]:text-2xl"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Assalamualaikum,")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            className="text-3xl font-bold max-[639px]:text-2xl"
          >
            Saya
            <span className="ms-2 text-gray-500 ">Dwi Wahyu</span>
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            className="text-3xl font-bold max-[639px]:text-2xl"
          >
            Seorang Web Developer
          </motion.h1>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={MukaImage}
            alt="me"
            className="w-[25rem] h-[25rem]"
            priority={true}
          />
        </motion.div>
      </div>
      <HomeDiv styling="max-[639px]:hidden sm:hidden md:hidden lg:flex xl:flex absolute bottom-0 ms-20 gap-5 flex-row">
        <Image
          src={MukaImage}
          alt="me"
          className="w-[28rem] h-[28rem]"
          priority={true}
        />

        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <motion.h1 className="text-3xl font-bold">
              Assalamualaikum,
            </motion.h1>
            <h1 className="text-3xl font-bold">
              Saya
              <span className="ms-2 text-gray-500">Dwi Wahyu</span>
            </h1>
            <h1 className="text-3xl font-bold">Web Developer</h1>
          </div>
        </div>
      </HomeDiv>
    </section>
  );
}
