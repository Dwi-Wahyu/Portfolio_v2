import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Image from "next/image";
import Link from "next/link";
import {
  SiBootstrap,
  SiCodeigniter,
  SiGithub,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiSvelte,
  SiTailwindcss,
} from "react-icons/si";

import { SlGlobe } from "react-icons/sl";

export default function ProjectSection() {
  const projects = [
    {
      imageSrc: "/logo/unhas.png",
      imageAlt: "icon unhas",
      title: "Landing Page Prodi Magister",
      subtitle: "Fakultas Kedokteran Gigi Universitas Hasanuddin",
      technologies: [SiCodeigniter, SiMysql, SiBootstrap],
      webUrl: "https://master.dent.unhas.ac.id/",
      githubUrl: "https://github.com/your-repo/prodi-s2",
    },
    {
      imageSrc: "/logo/alikhwan.png",
      imageAlt: "icon alikhwan",
      title: "Landing Page Radio Alikhwan",
      subtitle: "Fakultas Kedokteran Gigi Universitas Hasanuddin",
      technologies: [
        SiNuxtdotjs,
        SiNextdotjs,
        SiPrisma,
        SiPostgresql,
        SiTailwindcss,
      ],
      webUrl: "https://radioalikhwan.com/",
      githubUrl: "https://github.com/your-repo/radio-alikhwan",
    },
    {
      imageSrc: "/logo/komlekdam.png",
      imageAlt: "icon komlekdam",
      title: "Landing Page Komlekdam",
      subtitle: "Komlekdam XIV Hasanuddin",
      technologies: [
        SiNuxtdotjs,
        SiNestjs,
        SiPrisma,
        SiPostgresql,
        SiTailwindcss,
      ],
      webUrl: "https://hubdam14hsn.tni-ad.mil.id/",
      githubUrl: "https://github.com/your-repo/komlekdam",
    },
    {
      imageSrc: "/logo/unhas.png",
      imageAlt: "icon unhas",
      title: "Landing Page PPDGS Ilmu Bedah Mulut",
      subtitle: "Fakultas Kedokteran Gigi Universitas Hasanuddin",
      technologies: [SiCodeigniter, SiMysql, SiBootstrap],
      webUrl: "https://maxillofacial.dent.unhas.ac.id/",
      githubUrl: "https://github.com/your-repo/ppdgs",
    },
    {
      imageSrc: "/logo/unhas.png",
      imageAlt: "icon unhas",
      title: "E-Jadwal",
      subtitle: "Fakultas Kedokteran Gigi Universitas Hasanuddin",
      technologies: [
        SiNuxtdotjs,
        SiNestjs,
        SiPrisma,
        SiPostgresql,
        SiTailwindcss,
      ],
      webUrl: "https://jadwal.dent.unhas.ac.id/",
      githubUrl: "https://github.com/your-repo/e-jadwal",
    },
    {
      imageSrc: "/logo/unhas.png",
      imageAlt: "icon unhas",
      title: "E-Logbook",
      subtitle: "Fakultas Kedokteran Gigi Universitas Hasanuddin",
      technologies: [
        SiNextdotjs,
        SiPrisma,
        SiPostgresql,
        SiTailwindcss,
        SiShadcnui,
      ],
      webUrl: "https://logbook.dent.unhas.ac.id/",
      githubUrl: "https://github.com/your-repo/e-logbook",
    },
    {
      imageSrc: "/logo/alikhwan.png",
      imageAlt: "icon alikhwan",
      title: "Player Radio Alikhwan",
      subtitle: "Fakultas Kedokteran Gigi Universitas Hasanuddin",
      technologies: [SiSvelte, SiTailwindcss],
      webUrl: "https://play.radioalikhwan.com/",
      githubUrl: "https://github.com/your-repo/player-radio",
    },
  ];

  return (
    <section id="project" className="max-[639px]:p-10 p-20">
      <h1 className="text-xl w-full text-center font-bold mb-10 underline underline-offset-8">
        Project
      </h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 gap-5 md:gap-10 md:grid-cols-3 ">
        {projects.map((project, index) => (
          <SpotlightCard
            key={index}
            className="flex flex-col justify-between"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="flex items-center md:items-start flex-col gap-3">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={50}
                height={50}
              />

              <div className="text-center md:text-start">
                <h1 className="font-semibold">{project.title}</h1>
                <h1 className="text-muted-foreground text-sm mt-1">
                  {project.subtitle}
                </h1>
              </div>

              <div className="flex gap-4 mb-7 items-center">
                {project.technologies.map((TechIcon, techIndex) => (
                  <TechIcon key={techIndex} className="text-2xl" />
                ))}
              </div>
            </div>

            <div className="flex gap-4 relative justify-center md:justify-end items-center">
              {project.webUrl && (
                <Link
                  href={project.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
                >
                  <SlGlobe className="mr-1" /> Live Web
                </Link>
              )}
              {/* {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
                >
                  <SiGithub className="text-xl" /> GitHub
                </a>
              )} */}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
