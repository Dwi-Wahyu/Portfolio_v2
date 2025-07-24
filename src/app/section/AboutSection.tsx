"use client";

import ProfileCard from "@/components/reactbits/ProfileCard/ProfileCard";
import Stepper, { Step } from "@/components/reactbits/Stepper";
import PengalamanSection from "./PengalamanSection";

export default function AboutSection() {
  const tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

  return (
    <section
      id="about"
      className="bg-gray-900 flex-col text-white w-full relative sm:h-auto flex p-10 md:p-20 z-0"
    >
      <div className="flex md:gap-16 flex-col md:flex-row items-center">
        <h1 className="text-2xl md:hidden text-center font-bold mb-5 underline underline-offset-8 w-full">
          Tentang Saya
        </h1>

        <ProfileCard
          name="Dwi Wahyu Ilahi Angka"
          handle="javicodes"
          avatarUrl="/image/avatar.png"
          showUserInfo={false}
          showBehindGradient={false}
          onContactClick={() => console.log("Contact clicked")}
        />

        <div className="text-center flex gap-5 flex-col md:text-start">
          <div>
            <h1 className="text-2xl hidden md:block font-bold mb-5 underline underline-offset-8 w-full">
              Tentang Saya
            </h1>

            <p className="text-sm text-justify md:text-base mt-5 md:mt-0">
              Saya adalah lulusan SMKN 5 Makassar dengan latar belakang
              pendidikan Teknik Komputer dan Jaringan. Perjalanan saya dalam
              dunia pengembangan web dimulai sejak tahun 2020. Sejak saat itu,
              saya aktif mengeksplorasi berbagai teknologi dan memperdalam
              pemahaman saya dalam membangun solusi digital yang berorientasi
              pada pengalaman pengguna.
            </p>
            <p className="mt-2 text-justify">
              Saat ini, saya sedang menempuh pendidikan di Program Studi Sistem
              Informasi Universitas Hasanuddin, sebuah program yang
              mengintegrasikan bidang teknologi informasi dan manajemen bisnis.
              Tujuan utama dari program ini adalah membentuk lulusan yang mampu
              merancang dan mengelola sistem informasi yang efektif serta
              selaras dengan strategi organisasi. Melalui pendekatan
              multidisiplin ini, saya dibekali kemampuan untuk memahami proses
              bisnis sekaligus mengembangkan solusi berbasis teknologi yang
              relevan, efisien, dan berkelanjutan. Dengan latar belakang teknis
              yang saya miliki serta pemahaman baru dalam aspek manajerial, saya
              berkomitmen untuk menjadi profesional yang mampu menjembatani
              kebutuhan bisnis dan solusi teknologi secara strategis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
