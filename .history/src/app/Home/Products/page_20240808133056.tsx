// src/app/Home/Carousel/CliniQXCarouselDemo.tsx

import React from "react";
import Image from "next/image";
import { Carousel } from "@/components/ui/apple-cards-carousel";

export function CliniQXCarouselDemo() {
  const images = cliniqxData.map((item, index) => (
    <div key={index} className="relative w-full h-full">
      <Image
        src={item.src}
        alt={item.title}
        layout="fill"  // Ensure the image covers the carousel slide
        objectFit="cover"  // Cover the area without distorting the aspect ratio
        quality={100}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
        <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
        <p>{item.category}</p>
      </div>
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-5xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore CliniQX
      </h2>
      <Carousel items={images} />
    </div>
  );
}

const cliniqxData = [
  {
    category: "AI Healthcare",
    title: "Advanced AI for Medical Diagnostics",
    src: "/background/apple-1.jpg",  // Assume these are correct paths
  },
  {
    category: "EHR Integration",
    title: "Seamless EHR Integration",
    src: "/background/apple-2.jpg",
  },
  {
    category: "User Experience",
    title: "User-Friendly Design",
    src: "/background/apple-3.jpg",
  },
];

export default CliniQXCarouselDemo;
