// src/app/Home/Hero/Hero.tsx

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["healthcare", "people", "enterprise", "sustainability"];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-cover bg-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-100 leading-tight mb-5">
          AI research for  <FlipWords className="inline-block text-emerald-300" words={words} />
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 mt-4">
          Building products that make a difference
        </p>
      </div>
    </div>
  );
}

export default Hero;
