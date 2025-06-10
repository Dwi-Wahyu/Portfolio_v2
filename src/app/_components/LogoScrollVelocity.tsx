import Image from "next/image"; // Import komponen Image dari Next.js

import "../../assets/css/LogoScrollVelocity.css";

const technologies = [
  "vue",
  "react",
  "sveltekit",
  "typescript",
  "tailwindcss",
  "prisma",
  "next",
  "nuxt",
  "java",
  "nodejs",
  "HTML5",
  "CSS3",
  "javascript",
  "git",
  "supabase",
  "mysql",
  "postgreesql",
];

const LogoScrollVelocity = () => {
  return (
    <div className="relative overflow-x-hidden py-8">
      {/* Gradient Overlay Kiri */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-darkBlue to-transparent z-20"></div>
      {/* Gradient Overlay Kanan */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-darkBlue to-transparent z-20"></div>

      {/* Konten yang Bergerak */}
      <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max">
        {/* Mengulang daftar teknologi 3 kali untuk efek scrolling tak berujung */}
        {[...technologies, ...technologies, ...technologies].map(
          (tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-2 group transition-all duration-300"
            >
              <Image
                src={`/svg/${tech}.svg`} // Pastikan path ke SVG benar
                alt={tech}
                className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
                width={30} // Diperlukan untuk komponen Image
                height={30} // Diperlukan untuk komponen Image
                loading="lazy"
              />
              <span className="text-lg font-medium text-[var(--white-icon)]">
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LogoScrollVelocity;
