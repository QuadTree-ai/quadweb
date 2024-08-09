// src/app/Home/Hero/Hero.tsx

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["healthcare", "people", "enterprise"];

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/background.jpg")' }}> {/* Optional background image */}
      <div className="text-center mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-200 dark:text-neutral-400 leading-tight">
          AI research on 
          <FlipWords className="text-white" words={words} />
          <br />
          Building products
        </h1>
      </div>
    </div>
  );
}

export default Hero;
