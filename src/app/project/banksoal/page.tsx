import Image from "next/image";
import Link from "next/link";

import FKGImg from "../../../../public/image/project-img/bg-login-fkg.jpg";

import { IoChevronBackOutline } from "react-icons/io5";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";

export default function BanksoalPage() {
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
                Aplikasi Banksoal
              </h1>

              <Link href="https://github.com/Dwi-Wahyu/banksoal">
                <FaGithub className="text-xl" />
              </Link>
            </div>
            <table className="table table-border text-center text-white">
              <thead>
                <tr>
                  <th colSpan={2}>Tech Stack</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grid grid-cols-2">
                  <td className="border-r border-gray-800">Engine</td>
                  <td className="flex justify-center">
                    <FaNodeJs className="text-2xl" />
                  </td>
                </tr>
                <tr className="grid grid-cols-2">
                  <td className="border-r border-gray-800">Framework</td>
                  <td className="flex justify-center">
                    <SiExpress className="text-2xl" />
                  </td>
                </tr>
                <tr className="grid grid-cols-2">
                  <td className="border-r border-gray-800">Database</td>
                  <td className="flex justify-center">
                    <SiMysql className="text-2xl" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="absolute z-20 top-0 left-0">
            <Image className=" w-full" src={FKGImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
