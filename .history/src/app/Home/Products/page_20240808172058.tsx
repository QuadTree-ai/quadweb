// src/app/Home/Carousel/CliniQXCarouselDemo.tsx

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import productData from "./productData";

export function CliniQXCarouselDemo() {
  // Map through features of the productData to create cards
  const cards = productData.features.map((feature, index) => (
    <Card key={feature.src} card={feature} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 px-4">
      <h2 className="max-w-6xl mx-auto text-2xl md:text-4xl font-bold text-neutral-100 mb-8 text-center">
        {productData.productName}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default CliniQXCarouselDemo;
