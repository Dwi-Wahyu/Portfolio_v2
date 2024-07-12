import Link from "next/link";

import PelindoIMG from "../../../../public/image/project-img/home-bg.webp";

import Image from "next/image";

import { IoChevronBackOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiSvelte } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function PresensiPage() {
  return (
    <div>
      <div className="block lg:hidden xl:hidden 2xl:hidden">
        <div className="h-screen relative flex flex-col">
          <div className="h-[11rem] z-10 bg-transparent"></div>
          <div className="w-full z-30 flex-grow p-5 text-white rounded-t-3xl bg-gradient-to-r from-black to-gray-900">
            <div className="w-full flex text-white justify-between items-center mb-4 mt-1">
              <Link href="/">
                <IoChevronBackOutline className="text-xl" />
              </Link>

              <h1 className="w-full text-center font-bold text-lg">
                Aplikasi Presensi
              </h1>

              <Link href="https://presensi-pelindo-svelte.vercel.app/">
                <TbWorldWww className="text-xl" />
              </Link>
            </div>

            <div className="mt-2">
              <table className="table text-center">
                <thead className="">
                  <tr>
                    <th colSpan={2} className=" text-lg">
                      Tech stack
                    </th>
                  </tr>
                  <tr>
                    <th>Admin</th>
                    <th>Client</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r border-gray-800">
                      <div className="flex gap-2  justify-center ">
                        <FaNodeJs className="text-lg" /> NodeJS
                      </div>
                    </td>
                    <td rowSpan={2}>
                      <div className="flex gap-2 justify-center ">
                        <SiSvelte className="text-lg" /> SvelteKit
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-gray-800">
                      <div className="flex gap-2 justify-center ">
                        <SiExpress className="text-lg" /> Express JS
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div className="w-full flex justify-center gap-1">
                        <BiLogoPostgresql className="text-lg" />
                        PostgreSQL
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="absolute z-20 top-0 left-0">
            <Image className=" w-full" src={PelindoIMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
