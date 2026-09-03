import RotatingText from "../_components/RotatingText/RotatingText";
import GhostFibers from "@/components/reactbits/GhostFibers";

export default function HomeSection() {
  return (
    <main className="h-screen relative w-full overflow-hidden">
      <GhostFibers
        className="absolute inset-0 z-0"
        lineColor="#140E35"
        glowColor="#3437A0"
        speed={0.2}
        scale={2}
        rotation={180}
        rotationSpeed={0.25}
        layers={4}
        waveAmplitude={0.015}
        waveFrequency={3}
        waveSpeed={0.15}
        layerSpeed={0.08}
        twist={0.1}
        twistFrequency={5}
        twistSpeed={1.2}
        lineFrequency={5}
        lineSpacing={2}
        lineSharpness={16}
        glowFalloff={10}
        glowIntensity={1.6}
        brightness={2}
        blueBoost={1.25}
        vignette={0.8}
        grain={0.05}
        dpr={1}
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
