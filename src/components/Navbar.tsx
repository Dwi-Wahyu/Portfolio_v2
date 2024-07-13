"use client";

import { motion, useAnimationControls } from "framer-motion";

import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

import { usePathname } from "next/navigation";

const drawerVariants = {
  open: {
    y: 20,
  },
  close: {
    y: 500,
  },
};

export default function Navbar() {
  const [sidebarOpened, toggleSidebar] = useState(false);
  const pathname = usePathname();

  const controls = useAnimationControls();

  useEffect(() => {
    if (sidebarOpened) {
      controls.start("open");
    } else {
      controls.start("close");
    }
  }, [sidebarOpened, pathname]);

  return (
    <div className="absolute top-0 bg-transparent p-5 w-full flex justify-between items-center z-50">
      <div> {/* <Image src={Logo} className="w-7 h-7" alt="logo" /> */}</div>

      <div className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex gap-4">
        <a href="#home">Beranda</a>
        <a href="#about">Tentang Saya</a>
        <a href="#skill">Keahlian</a>
        {/* <a href="#project">Proyek</a> */}
      </div>

      <div className="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        {sidebarOpened ? (
          <MdClose
            className="text-3xl cursor-pointer"
            onClick={() => toggleSidebar(!sidebarOpened)}
          />
        ) : (
          <IoMdMenu
            className="text-3xl cursor-pointer"
            onClick={() => toggleSidebar(!sidebarOpened)}
          />
        )}
      </div>

      <motion.div
        animate={controls}
        initial="close"
        variants={drawerVariants}
        transition={{ duration: 0.3, type: "spring" }}
        className="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden fixed w-full left-0 bottom-0 "
      >
        <div className="fixed bottom-0 left-0 h-[30rem] w-full bg-gray-900 p-5 rounded-t-3xl border-t flex flex-col items-center gap-9">
          <h1 className="text-xl font-bold mt-10">Navigasi</h1>
          <a href="#home">Beranda</a>
          <a href="#about">Tentang Saya</a>
          <a href="#skill">Keahlian</a>
          <a href="#project">Proyek</a>
          <MdClose
            className="text-3xl cursor-pointer"
            onClick={() => toggleSidebar(!sidebarOpened)}
          />
        </div>
      </motion.div>
    </div>
  );
}
