import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiSvelte,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";

import SkillDiv from "@/components/animation_div/SkillDiv";

export default function SkillSection() {
  return (
    <section
      id="skill"
      className="text-white w-full flex flex-col max-[639px]:p-10 p-20"
    >
      <h1 className="text-xl w-full text-center font-bold underline underline-offset-8">
        Keahlian
      </h1>
      <h1 className="mt-2 text-lg w-full text-center mb-8">
        Tingkat penguasaan teknologi
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center items-center gap-5 place-items-center">
        <SkillDiv>
          <FaNodeJs className="text-4xl" />
          <h1 className="font-semibold">Node JS | 75%</h1>
          <p className="text-center max-[639px]:text-sm">
            Node.js adalah lingkungan runtime JavaScript yang dibangun di atas
            mesin JavaScript V8 dari Chrome. Ini memungkinkan Anda untuk
            menjalankan kode JavaScript di sisi server, tidak hanya di browser.
          </p>
        </SkillDiv>

        <SkillDiv>
          <SiJavascript className="text-4xl" />
          <h1 className="font-semibold">Javascript | 60%</h1>
          <p className="text-center max-[639px]:text-sm">
            JavaScript adalah bahasa pemrograman tingkat tinggi yang sering
            digunakan untuk pengembangan web.
          </p>
        </SkillDiv>
        <SkillDiv>
          <SiSvelte className="text-4xl" />
          <h1 className="font-semibold">Svelte JS | 80%</h1>
          <p className="text-center max-[639px]:text-sm">
            Svelte adalah kerangka kerja JavaScript yang bertujuan untuk membuat
            pengembangan aplikasi web lebih efisien dengan mengurangi overhead
            pada waktu eksekusi.
          </p>
        </SkillDiv>
        <SkillDiv>
          <FaReact className="text-4xl" />
          <h1 className="font-semibold">React JS | 40%</h1>
          <p className="text-center max-[639px]:text-sm">
            React.js, atau sering disebut sebagai React, adalah sebuah pustaka
            JavaScript yang digunakan untuk membangun antarmuka pengguna (UI)
            pada aplikasi web.
          </p>
        </SkillDiv>
        <SkillDiv>
          <SiTypescript className="text-4xl" />
          <h1 className="font-semibold">Typescript | 70%</h1>
          <p className="text-center max-[639px]:text-sm">
            TypeScript adalah superset dari JavaScript yang dikembangkan oleh
            Microsoft. Ini menambahkan pengetikan statis opsional, dukungan
            untuk kelas, dan modul ke bahasa JavaScript.
          </p>
        </SkillDiv>
        <SkillDiv>
          <SiNextdotjs className="text-4xl" />
          <h1 className="font-semibold">Next JS | 60%</h1>
          <p className="text-center max-[639px]:text-sm">
            Next.js adalah sebuah kerangka kerja (framework) open-source yang
            dibangun di atas React.js untuk memudahkan pengembangan aplikasi web
            yang kuat dan efisien.
          </p>
        </SkillDiv>
      </div>
    </section>
  );
}
