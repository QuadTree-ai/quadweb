import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import productData from "./productData";

// TypeScript interface for feature (optional, only if using TypeScript)
interface Feature {
  category: string;
  title: string;
  src: string;
  content: string | null;
}

export function CliniQXCarouselDemo() {
  // Map through features of the productData to create cards
  const cards = productData.features.map((feature: Feature, index: number) => (
    <Card key={feature.src} card={feature} index={index}>
      {/* Improved Image rendering with appropriate sizes */}
      <div className="relative w-full h-48">
        <Image
          src={feature.src}
          alt={`${feature.title} image`}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
          className="rounded-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
        <p className="text-gray-400">{feature.content}</p>
      </div>
    </Card>
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-6xl pl-2 mx-auto text-xl md:text-3xl font-bold text-neutral-100">
        {productData.productName}
      </h2>
      {/* Pass the cards to the Carousel component */}
      <Carousel items={cards} />
    </div>
  );
}

export default CliniQXCarouselDemo;
