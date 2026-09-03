"use client";

import DepthCarousel from "@/components/reactbits/DepthCarousel";

export default function MomentsSection() {
  const moments = [
    { image: "/moments/1.jpg", alt: "Moment With Client 1" },
    { image: "/moments/2.jpg", alt: "Moment With Client 2" },
    { image: "/moments/3.jpg", alt: "Moment With Client 3" },
    { image: "/moments/4.jpg", alt: "Moment With Client 4" },
    { image: "/moments/5.jpg", alt: "Moment With Client 5" },
  ];

  return (
    <section id="moments" className="bg-darkBlue overflow-hidden text-white w-full py-16 px-5 md:px-20 relative">
      <h1 className="text-xl w-full text-center font-bold mb-10 underline underline-offset-8">
        Remarkable Moments
      </h1>
      <div className="h-[500px] relative w-full flex items-center justify-center">
        <DepthCarousel
          items={moments}
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection="right"
          perspective={2400}
          visibleCards={5}
          falloff={0.2}
          blur={6}
          autoplay
          loop
          cardWidth={420}
        />
      </div>
    </section>
  );
}
