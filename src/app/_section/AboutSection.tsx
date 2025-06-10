"use client";

import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image";

import aboutCrop from "../../../public/image/about-crop.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-900 flex-col text-white w-full h-screen relative md:h-screen sm:h-auto flex max-[639px]:h-auto max-[639px]:p-10 p-20 z-0"
    >
      <div className="lg:w-[45rem] md:w-[30rem] sm:w-full">
        <h1 className="text-2xl font-bold mb-12 underline underline-offset-8 text-center w-full">
          Tentang Saya
        </h1>
        <p>
          Saya adalah lulusan dari SMKN 5 Makassar dengan latar belakang
          pendidikan jurusan Teknik Komputer dan Jaringan. Perjalanan saya dalam
          dunia pengembangan web dimulai pada tahun 2020. Sejak saat itu, saya
          telah mengeksplorasi berbagai teknologi dan memperdalam pengetahuan
          saya dalam bidang ini. Hal ini membantu saya dalam memahami bagaimana
          teknologi dapat diintegrasikan dengan baik untuk menciptakan
          pengalaman pengguna yang optimal.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-7 xl:gap-7">
          <div className="mb-1">
            <h1 className="text-lg font-semibold">Pengalaman</h1>
            <ul className="flex flex-col gap-2 mt-2">
              <li>- Prakerin di Fakultas Kedokteran Gigi Unhas</li>
              <li>- Prakerin di PT Pelindo Terminal Petikemas Makassar</li>
              <li>
                - Mengikuti Olimpiade Jaringan Mikrotik dari Citraweb 2023
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Kontak</h1>
            <div className="flex flex-col gap-3 mt-2">
              <a
                target="_blank"
                className="flex flex-row gap-2 items-center hover:underline underline-offset-4"
                href="https://github.com/Dwi-Wahyu"
              >
                <FaGithub />
                Dwi-Wahyu
              </a>
              <a
                target="_blank"
                className="flex flex-row gap-2 items-center hover:underline underline-offset-4"
                href="https://www.instagram.com/wahil._"
              >
                <FaInstagram />
                wahil._
              </a>
              <div className="flex flex-row gap-2 items-center hover:underline underline-offset-4">
                <MdOutlineWhatsapp />
                089643144013
              </div>
              <a
                target="_blank"
                className="flex flex-row gap-2 items-center hover:underline underline-offset-4"
                href="https://mail.google.com/mail/u/1/#inbox?compose=new"
              >
                <MdOutlineEmail /> dwiwahyuilahi123@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 hidden sm:hidden md:hidden lg:block xl:block">
        <Image src={aboutCrop} className="h-screen w-full" alt="about" />
      </div>
    </section>
  );
}

{
  /* <div className="flex-1">
<h1 className="text-lg font-semibold">Kontak</h1>
<div className="flex flex-col gap-3 mt-2">
  <a
    target="_blank"
    className="flex flex-row gap-2 items-center hover:underline underline-offset-4"
    href="https://github.com/Dwi-Wahyu"
  >
    <FaGithub />
    Dwi-Wahyu
  </a>
  <a
    target="_blank"
    className="flex flex-row gap-2 items-center hover:underline underline-offset-4"
    href="https://www.instagram.com/wahil._"
  >
    <FaInstagram />
    wahil._
  </a>
  <div className="flex flex-row gap-2 items-center hover:underline underline-offset-4">
    <MdOutlineWhatsapp />
    089643144013
  </div>
  <a
    target="_blank"
    className="flex flex-row gap-2 items-center hover:underline underline-offset-4"
    href="https://mail.google.com/mail/u/1/#inbox?compose=new"
  >
    <MdOutlineEmail /> dwiwahyuilahi123@gmail.com
  </a>
</div>
</div> */
}
