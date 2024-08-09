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
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore CliniQX: Revolutionizing Health Care
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

interface DummyContentProps {
  text: string; // Define 'text' as a string type
}

const DummyContent = ({ text }: DummyContentProps) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{text}</span>
      </p>
    </div>
  );
};

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
