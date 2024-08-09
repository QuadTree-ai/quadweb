// src/app/Home/Hero/Hero.tsx

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["people", "enterprise", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-200 dark:text-neutral-400">
        AI research on 
        <FlipWords className = "text-white" words={words} /> <br />
        Building products 
      </div>
    </div>
  );
}

export default Hero;
