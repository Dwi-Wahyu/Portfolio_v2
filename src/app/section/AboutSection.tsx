"use client";

import ProfileCard from "@/components/reactbits/ProfileCard/ProfileCard";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const socialLinks = [
    {
      href: "https://github.com/Dwi-Wahyu",
      src: "/svg/github.svg",
      alt: "GitHub",
    },
    {
      href: "https://www.instagram.com/waheil?igsh=MXdibWlmaGhyY3ppaQ==",
      src: "/svg/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://wa.me/6289643144013",
      src: "/svg/whatsapp.svg",
      alt: "WhatsApp",
    },
    {
      href: "https://www.linkedin.com/in/dwi-wahyu-ilahi-angka",
      src: "/svg/linkedin.svg",
      alt: "LinkedIn",
    },
  ];

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
          handle="javicodes"
          avatarUrl="/image/avatar.png"
          showBehindGradient={false}
          showUserInfo={false}
          onContactClick={() => console.log("Contact clicked")}
        />

        <div className="text-center flex gap-5 flex-col md:text-start">
          <div>
            <h1 className="text-2xl hidden md:block font-bold mb-7 underline underline-offset-8 w-full">
              Tentang Saya
            </h1>

            <p className="text-sm text-justify mt-5 md:mt-0">
              Saya merupakan anak kedua dari tiga bersaudara dan saat ini
              berdomisili di Kota Makassar, Provinsi Sulawesi Selatan. Sejak
              mengenal dunia teknologi, saya mulai belajar secara otodidak untuk
              mengembangkan keterampilan sebagai seorang{" "}
              <strong>self-taught developer</strong>, terutama dalam bidang web
              development.
            </p>
            <p className="text-sm mt-2 text-justify">
              Perjalanan formal saya di bidang teknologi dimulai di SMKN 5
              Makassar, dengan jurusan Teknik Komputer dan Jaringan. Materi yang
              saya pelajari pada masa itu lebih berfokus pada aspek jaringan
              komputer dan perangkat keras (hardware), seperti perakitan
              komputer, instalasi sistem operasi, hingga pengelolaan jaringan
              lokal. Meskipun begitu, ketertarikan saya terhadap dunia teknologi
              semakin kuat, khususnya dalam pengembangan web, yang mulai saya
              tekuni sejak tahun 2020 dan terus saya pelajari secara mandiri
              hingga kini.
            </p>
            <p className="text-sm mt-2 text-justify">
              Saat ini, saya melanjutkan studi pada Program Studi Sistem
              Informasi di Universitas Hasanuddin, sebuah program yang
              mengintegrasikan teknologi informasi dengan manajemen bisnis.
              Melalui program ini, saya terus mengembangkan kemampuan dalam
              merancang solusi digital yang relevan dan selaras dengan kebutuhan
              organisasi.
            </p>

            <div className="mt-4 justify-center md:justify-start flex w-full gap-3 items-center">
              {socialLinks.map((link, index) => (
                <div
                  key={index}
                  className="hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 "
                >
                  <Link href={link.href} target="_blank">
                    <Image
                      src={link.src}
                      width={30}
                      height={30}
                      alt={link.alt}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
