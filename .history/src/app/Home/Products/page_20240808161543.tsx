// src/app/Home/Carousel/CliniQXCarouselDemo.tsx

import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import productData from "./productData";

export function CliniQXCarouselDemo() {
  // Map through features of the productData to create cards
  const cards = productData.features.map((feature, index) => (
    <Card key={feature.src} card={feature} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-6xl pl-2 mx-auto text-xl md:text-3xl font-bold text-neutral-100">
       {productData.productName}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default CliniQXCarouselDemo;
