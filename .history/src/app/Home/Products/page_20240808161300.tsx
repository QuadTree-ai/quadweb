// src/app/Home/Carousel/CliniQXCarouselDemo.tsx

import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function CliniQXCarouselDemo() {
  const cards = cliniqxData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-5xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-100">
        CliniQX
      </h2>
      <Carousel items={cards} />
    </div>
  );
}


const cliniqxData = [
  {
    category: "AI Healthcare",
    title: "Advanced AI for Medical Diagnostics",
    src: "/background/apple-1.jpg",  // Updated local image path
    content: null
  },
  {
    category: "EHR Integration",
    title: "Seamless EHR Integration",
    src: "/background/apple-2.jpg",  // Updated local image path
    content: ( "null"
    ),
  },
  {
    category: "User Experience",
    title: "User-Friendly Design",
    src: "/background/apple-3.jpg",  // Updated local image path
    content: ( "null"
    ),
  },
];

export default CliniQXCarouselDemo;
