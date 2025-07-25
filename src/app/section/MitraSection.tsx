import CardSwap, { Card } from "@/components/reactbits/CardSwap";
import GlassIcons from "@/components/reactbits/GlassIcon";
import Image from "next/image";

export default function MitraSection() {
  const items = [
    {
      icon: <UnhasIcon />,
      color: "red",
      label: "Fakultas Kedokteran Gigi Unhas",
    },
    {
      icon: <KomlekdamIcon />,
      color: "#1C2940",
      label: "Komlekdam XIV Hasanuddin",
    },
    { icon: <AlikhwanIcon />, color: "green", label: "Radio Alikhwan" },
  ];

  return (
    <section
      id="mitra"
      className=" bg-gray-900 overflow-hidden text-white w-full h-fit flex flex-col gap-5 "
      style={{ height: "600px", position: "relative" }}
    >
      <div className="p-10 md:p-20">
        <h1 className="text-xl w-full text-center md:text-start mb-6 font-bold underline underline-offset-8">
          Mitra
        </h1>

        <GlassIcons items={items} className="max-w-xl" />
      </div>
      <CardSwap
        cardDistance={60}
        verticalDistance={110}
        delay={2000}
        height={230}
        pauseOnHover={false}
      >
        <Card>
          <img className="rounded-t-xl" src="/projects/jadwal.png" />
        </Card>
        <Card>
          <img className="rounded-t-xl" src="/projects/radio.png" />
        </Card>
        <Card>
          <img className="rounded-t-xl" src="/projects/player.png" />
        </Card>
        <Card>
          <img className="rounded-t-xl" src="/projects/hubdam.png" />
        </Card>
        <Card>
          <img className="rounded-t-xl" src="/projects/magister.png" />
        </Card>
      </CardSwap>
    </section>
  );
}

function UnhasIcon() {
  return (
    <Image src={"/logo/unhas.png"} alt="icon unhas" width={50} height={50} />
  );
}

function KomlekdamIcon() {
  return (
    <Image
      src={"/logo/komlekdam.png"}
      alt="icon komlekdam"
      width={50}
      height={50}
    />
  );
}

function AlikhwanIcon() {
  return (
    <Image
      src={"/logo/alikhwan.png"}
      alt="icon alikhwan"
      width={50}
      height={50}
    />
  );
}
