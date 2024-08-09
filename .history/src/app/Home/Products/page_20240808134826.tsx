// src/app/Home/Carousel/CliniQXCarouselDemo.tsx

import React from "react";
import Image from "next/image";
import { Carousel } from "@/components/ui/apple-cards-carousel";

export function CliniQXCarouselDemo() {
  const carouselItems = cliniqxData.map((item) => (
    <div key={item.src} className="relative">
      <Image
        src={item.src}
        alt={item.title}
        layout="fill"  // Use 'fill' to cover the carousel slide area
        objectFit="cover"  // Ensure the image covers the area completely
        className="rounded-lg"  // Add some rounded corners for aesthetics
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
        <p className="text-sm text-gray-300">{item.category}</p>
      </div>
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-5xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
        Explore CliniQX
      </h2>
      <Carousel items={carouselItems} />  {/* Ensure Carousel is properly handling its items */}
    </div>
  );
}

const cliniqxData = [
  {
    category: "AI Healthcare",
    title: "Advanced AI for Medical Diagnostics",
    src: "/background/apple-1.jpg",
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
