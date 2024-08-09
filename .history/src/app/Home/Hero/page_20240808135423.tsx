// src/app/Home/Hero/Hero.tsx

import React from "react";
import { cn } from "@/lib/utils";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Building AI for 
        <FlipWords words={words} /> <br />
        AI research and products for people
      </div>
    </div>
  );
}

export default Hero;
