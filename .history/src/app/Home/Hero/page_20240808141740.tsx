// src/app/Home/Hero/Hero.tsx

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["healthcare", "people", "enterprise"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-200 dark:text-neutral-400 mb-8">
        AI research on 
        <FlipWords className = "text-white mb-2" words={words} /> <br />
        Building products 
      </div>
    </div>
  );
}

export default Hero;
