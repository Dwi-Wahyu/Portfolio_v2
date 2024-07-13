import Image from "next/image";
import Link from "next/link";

// import FKGImg from "../../../../public/image/project-img/bg-login-fkg.jpg";

import { IoChevronBackOutline } from "react-icons/io5";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";
import { ChevronLeft } from "lucide-react";

import loginImg from "../../../../public/image/project-img/banksoal/login-page.png";
import dashboardImg from "../../../../public/image/project-img/banksoal/dashboard.png";
import daftarSoalImg from "../../../../public/image/project-img/banksoal/daftar-soal.png";
import inputSoalImg from "../../../../public/image/project-img/banksoal/input-soal.png";

export default function BanksoalPage() {
  return (
    <div>
      <div className="w-full text-white align-items flex-col min-h-screen lg:flex xl:flex 2xl:flex bg-gray-900 ">
        <div className="w-full flex justify-between px-4 pt-7 py-5">
          <Link href="/">
            <ChevronLeft className="text-xl" />
          </Link>
          <h1 className="text-xl font-bold">Aplikasi Banksoal</h1>
          <div></div>
        </div>
        <div className="w-full px-4 md:px-44 rounded-xl mt-3 flex flex-col gap-7 items-center pb-7">
          <div className="w-full rounded-lg px-4 py-3 bg-[#1D232A]">
            <table className="table table-border text-center text-white">
              <thead>
                <tr>
                  <th colSpan={2} className="text-white">
                    Tech Stack
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="grid grid-cols-2">
                  <td>Engine</td>
                  <td className="flex justify-center">
                    <FaNodeJs className="text-2xl" />
                  </td>
                </tr>
                <tr className="grid grid-cols-2">
                  <td>Framework</td>
                  <td className="flex justify-center">
                    <SiExpress className="text-2xl" />
                  </td>
                </tr>
                <tr className="grid grid-cols-2 place-items-center">
                  <td>Database</td>
                  <td className="flex justify-center">
                    <SiMysql className="text-3xl" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full">
            <h1>Tampilan Aplikasi :</h1>
          </div>
          <Link
            className="relative"
            href="/image/project-img/banksoal/login-page.png"
          >
            <Image src={loginImg} alt="" className="rounded-xl min-w-full" />
            <div className="bg-gradient-to-t from-black flex flex-col justify-end pb-5 to-transparent absolute bottom-0 left-0 rounded-lg w-full h-full shadow">
              <h1 className="text-center mt-3 underline underline-offset-4">
                Login Page
              </h1>
            </div>
          </Link>

          <Link
            href="/image/project-img/banksoal/dashboard.png"
            className="relative"
          >
            <Image
              src={dashboardImg}
              alt=""
              className="rounded-xl min-w-full"
            />
            <div className="bg-gradient-to-t from-black flex flex-col justify-end pb-5 to-transparent absolute bottom-0 left-0 rounded-lg w-full h-full shadow">
              <h1 className="text-center mt-3 underline underline-offset-4">
                Dashboard
              </h1>
            </div>
          </Link>

          <Link
            href="/image/project-img/banksoal/daftar-soal.png"
            className="relative"
          >
            <Image
              src={daftarSoalImg}
              alt=""
              className="rounded-xl min-w-full"
            />
            <div className="bg-gradient-to-t from-black flex flex-col justify-end pb-5 to-transparent absolute bottom-0 left-0 rounded-lg w-full h-full shadow">
              <h1 className="text-center mt-3 underline underline-offset-4">
                Daftar Soal
              </h1>
            </div>
          </Link>

          <Link
            href="/image/project-img/banksoal/input-soal.png"
            className="relative"
          >
            <Image
              src={inputSoalImg}
              alt=""
              className="rounded-xl min-w-full"
            />
            <div className="bg-gradient-to-t from-black flex flex-col justify-end pb-5 to-transparent absolute bottom-0 left-0 rounded-lg w-full h-full shadow">
              <h1 className="text-center mt-3 underline underline-offset-4">
                Input Soal
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
