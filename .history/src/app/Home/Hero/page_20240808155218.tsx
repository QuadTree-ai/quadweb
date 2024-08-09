// src/app/Home/Hero/Hero.tsx

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["healthcare", "people", "enterprise"];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-cover bg-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-200 dark:text-neutral-400 leading-tight mb-4">
          AI research on 
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-medium mb-6">
          <FlipWords words={words} />
        </h2>
        <p className="text-xl md:text-2xl text-neutral-200 dark:text-neutral-400">
          Building products that make a difference
        </p>
      </div>
    </div>
  );
}

export default Hero;
