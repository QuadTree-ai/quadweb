// src/app/Home/Carousel/CliniQXCarouselDemo.tsx

import React from "react";
import Image from "next/image";
import { Carousel } from "@/components/ui/apple-cards-carousel";

export function CliniQXCarouselDemo() {
  const cards = cliniqxData.map((item, index) => (
    <div key={item.src} className="relative">
      <Image
        src={item.src}
        alt={item.title}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
      <div className="absolute inset-0 flex items-end p-8">
        <div className="bg-black/[0.5] p-4 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
          <p className="text-md text-gray-300">{item.description}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-5xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore CliniQX
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const cliniqxData = [
  {
    category: "AI Healthcare",
    title: "Advanced AI for Medical Diagnostics",
    description: "CliniQX brings cutting-edge AI to the forefront of medical diagnostics, improving accuracy and patient outcomes.",
    src: "/background/apple-1.jpg",
  },
  {
    category: "EHR Integration",
    title: "Seamless EHR Integration",
    description: "Integrate seamlessly with existing electronic health records, enhancing workflow efficiency and data accessibility.",
    src: "/background/apple-2.jpg",
  },
  {
    category: "User Experience",
    title: "User-Friendly Design",
    description: "Designed with healthcare professionals in mind, CliniQX provides a straightforward and intuitive user interface.",
    src: "/background/apple-3.jpg",
  },
];

export default CliniQXCarouselDemo;
