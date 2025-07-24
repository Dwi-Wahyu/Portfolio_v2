import Navbar from "@/components/Navbar";
import RotatingText from "../_components/RotatingText/RotatingText";
import Iridescence from "@/components/reactbits/Irisdence";

export default function HomeSection() {
  return (
    <main className="h-screen relative w-full">
      <Navbar />

      <Iridescence
        color={[0.3, 0.3, 0.4]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
      <div className="flex flex-col absolute z-20 left-0 w-full top-0 sm:flex-row gap-6 justify-center items-center h-screen text-textLight p-8">
        <div className="flex gap-3 flex-col justify-center items-center ">
          <h1>Halo, Saya</h1>

          <h1 className="text-4xl font-bold text-center">
            Dwi Wahyu Ilahi Angka
          </h1>

          <div className="flex gap-2 items-center">
            <RotatingText
              texts={["Frontend", "Backend"]}
              mainClassName="px-3 pb-1 pt-2 font-semibold bg-accentBlue rounded-lg w-fit"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <h1 className="font-semibold">Developer</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
