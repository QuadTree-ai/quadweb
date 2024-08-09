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
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
    content: (
      <DummyContent text="CliniQX brings cutting-edge AI to the forefront of medical diagnostics, improving accuracy and patient outcomes." />
    ),
  },
  {
    category: "EHR Integration",
    title: "Seamless EHR Integration",
    src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoY2FyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
    content: (
      <DummyContent text="Integrate seamlessly with existing electronic health records, enhancing workflow efficiency and data accessibility." />
    ),
  },
  {
    category: "User Experience",
    title: "User-Friendly Design",
    src: "https://images.unsplash.com/photo-1588774069412-b9e04d0686d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMGV4cGVyaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&q=80&w=1080",
    content: (
      <DummyContent text="Designed with healthcare professionals in mind, CliniQX provides a straightforward and intuitive user interface." />
    ),
  },
];

export default CliniQXCarouselDemo;
