"use client"; // Penting untuk komponen klien

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-5 fixed top-0 left-0 right-0 z-50">
      <nav
        className={` py-4 px-8 transition-all duration-300 ${
          scrolled ? "bg-lightBlue rounded-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-accentBlue">DW</h1>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-textLight hover:text-accentBlue transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#articles"
                className="text-textLight hover:text-accentBlue transition-colors duration-200"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#comments"
                className="text-textLight hover:text-accentBlue transition-colors duration-200"
              >
                Comments
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
