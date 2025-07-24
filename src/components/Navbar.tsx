"use client"; // Penting untuk komponen klien

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      let scrollLimitToChangeScrolledState = 500;

      if (pathname.startsWith("/article")) {
        scrollLimitToChangeScrolledState = 50;
      }

      if (window.scrollY > scrollLimitToChangeScrolledState) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-5 fixed top-0 left-0 right-0 z-50">
      <nav
        className={` py-4 px-5 transition-all duration-300 ${
          scrolled ? "bg-lightBlue rounded-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-accentBlue">DW</h1>

          <details className="dropdown md:hidden">
            <summary className="btn bg-lightBlue  border-none shadow-none">
              <FiMenu />
            </summary>
            <ul
              className={`menu mt-5 text-white -left-[3.7rem] dropdown-content bg-lightBlue rounded-box z-1 p-2 shadow-sm ${
                scrolled ? "mt-6" : "mt-5"
              }`}
            >
              <li>
                <Link className="flex justify-center" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="flex justify-center" href="/article">
                  Articles
                </Link>
              </li>
              <li>
                <Link className="flex justify-center" href="/#project">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="flex justify-center" href="/#comments">
                  Comments
                </Link>
              </li>
            </ul>
          </details>

          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-textLight hover:text-accentBlue transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#project"
                className="text-textLight hover:text-accentBlue transition-colors duration-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/article"
                className="text-textLight hover:text-accentBlue transition-colors duration-200"
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                href="/#comments"
                className="text-textLight hover:text-accentBlue transition-colors duration-200"
              >
                Comments
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
