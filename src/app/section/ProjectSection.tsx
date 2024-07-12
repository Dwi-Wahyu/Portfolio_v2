"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import { BiSolidBank } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { ReactNode } from "react";
import { FaComputer } from "react-icons/fa6";

function ProjectAnimatedDiv({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={animationVariant}
      whileInView="visible"
      animate="hidden"
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 z-10 w-full h-full"
    >
      {children}
    </motion.div>
  );
}

const animationVariant = {
  visible: {
    x: 0,
  },
  hidden: {
    x: 120,
  },
};

export default function ProyekSection() {
  return (
    <section
      id="project"
      className=" bg-gray-900 overflow-hidden text-white w-full h-fit flex flex-col gap-5 p-20 max-[639px]:p-10 "
    >
      <div>
        <h1 className="text-xl w-full text-center font-bold underline underline-offset-8">
          Proyek
        </h1>
        <h1 className="mt-2 text-lg w-full text-center mb-6">
          Aplikasi berbasis web
        </h1>
      </div>
      <div className="w-full relative p-5 rounded-lg bg-gray-800 ">
        <ProjectAnimatedDiv>
          <BiSolidBank className="absolute -bottom-5 -right-5 w-40 h-40 text-gray-900" />
        </ProjectAnimatedDiv>
        <div className="relative z-20">
          <h1 className="font-semibold mb-3">Aplikasi Banksoal</h1>
          <p className="text-sm">
            Aplikasi banksoal adalah perangkat lunak yang dirancang untuk
            menyimpan, mengelola, dan mendistribusikan kumpulan soal ujian
            secara digital. Aplikasi ini memfasilitasi guru, dosen, atau
            instruktur dalam membuat dan mengorganisir berbagai jenis soal,
            seperti pilihan ganda, isian singkat, dan esai, yang dapat digunakan
            dalam berbagai format ujian.
          </p>
          <Link
            className="text-sm underline underline-offset-2 mt-3 block"
            href="/project/banksoal"
          >
            Pelajari selengkapnya
          </Link>
        </div>
      </div>

      <div className="w-full relative p-5 rounded-lg bg-gray-800">
        <ProjectAnimatedDiv>
          <FaClipboardList className="absolute -bottom-2 -right-5 w-40 h-40 text-gray-900" />
        </ProjectAnimatedDiv>
        <div className="relative z-20">
          <h1 className="font-semibold mb-3">Aplikasi Presensi</h1>
          <p className="text-sm">
            Aplikasi inovatif yang memanfaatkan GPS untuk memastikan pencatatan
            kehadiran yang akurat berdasarkan posisi fisik pengguna. Dengan
            aplikasi ini, pengguna dapat mencatat kehadiran mereka dengan mudah
            melalui smartphone, memastikan bahwa mereka benar-benar berada di
            lokasi yang ditentukan saat melakukan check-in atau check-out.
          </p>
          <Link
            className="text-sm underline underline-offset-2 mt-3 block"
            href="/project/presensi"
          >
            Pelajari selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
}
