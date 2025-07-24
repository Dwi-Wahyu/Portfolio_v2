"use client";

import ProfileCard from "@/components/reactbits/ProfileCard/ProfileCard";
import Image from "next/image";
import Link from "next/link";

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
              berdomisili di Kota Makassar, Provinsi Sulawesi Selatan.
            </p>
            <p className="text-sm mt-2 text-justify">
              Pendidikan saya di bidang teknologi dimulai di SMKN 5 Makassar,
              dengan jurusan Teknik Komputer dan Jaringan. Di sinilah
              ketertarikan saya terhadap dunia teknologi, khususnya pengembangan
              web, mulai tumbuh sejak tahun 2020 dan terus berkembang hingga
              sekarang.
            </p>
            <p className="text-sm mt-2 text-justify">
              Saat ini, saya melanjutkan studi pada Program Studi Sistem
              Informasi di Universitas Hasanuddin, sebuah program yang
              mengintegrasikan teknologi informasi dengan manajemen bisnis.
              Melalui program ini, saya terus mengasah kemampuan dalam merancang
              solusi digital yang selaras dengan kebutuhan organisasi.
            </p>

            <div className="mt-4 justify-center md:justify-start flex w-full gap-3 items-center">
              <div className="hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 ">
                <Link href="https://github.com/Dwi-Wahyu" target="_blank">
                  <Image src="/svg/github.svg" width={30} height={30} alt="" />
                </Link>
              </div>
              <div className="hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 ">
                <Link
                  href="https://www.instagram.com/waheil?igsh=MXdibWlmaGhyY3ppaQ=="
                  target="_blank"
                >
                  <Image
                    src="/svg/instagram.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
              </div>
              <div className="hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 ">
                <Link href="https://wa.me/6289643144013" target="_blank">
                  <Image
                    src="/svg/whatsapp.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
