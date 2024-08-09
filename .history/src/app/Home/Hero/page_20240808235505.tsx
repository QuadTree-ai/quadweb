import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["healthcare", "people", "enterprise", "sustainability"];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-cover bg-center py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-100 leading-tight mb-8 md:mb-12 lg:mb-16">
          AI research for{" "}
          <span className="inline-block animate-pulse">
            <FlipWords className="text-emerald-300" words={words} />
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Building products that make a difference
        </p>
      </div>
    </div>
  );
}

export default Hero;
