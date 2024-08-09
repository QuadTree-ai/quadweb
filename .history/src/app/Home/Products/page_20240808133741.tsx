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
      <h2 className="max-w-5xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        CliniQX
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

interface DummyContentProps {
  text: string; // Define 'text' as a string type
}


const cliniqxData = [
  {
    category: "AI Healthcare",
    title: "Advanced AI for Medical Diagnostics",
    src: "/background/apple-1.jpg",  // Updated local image path
    content: (
      <DummyContent text="CliniQX brings cutting-edge AI to the forefront of medical diagnostics, improving accuracy and patient outcomes." />
    ),
  },
  {
    category: "EHR Integration",
    title: "Seamless EHR Integration",
    src: "/background/apple-2.jpg",  // Updated local image path
    content: (
      <DummyContent text="Integrate seamlessly with existing electronic health records, enhancing workflow efficiency and data accessibility." />
    ),
  },
  {
    category: "User Experience",
    title: "User-Friendly Design",
    src: "/background/apple-3.jpg",  // Updated local image path
    content: (
      <DummyContent text="Designed with healthcare professionals in mind, CliniQX provides a straightforward and intuitive user interface." />
    ),
  },
];

export default CliniQXCarouselDemo;
