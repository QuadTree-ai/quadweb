import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import productData from "./productData";

export function CliniQXCarouselDemo() {
  // Map through features of the productData to create cards
  const cards = productData.features.map((feature, index) => (
    <Card key={feature.src} card={feature} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 bg-black text-white">
      <h2 className="max-w-6xl pl-4 mx-auto text-xl md:text-3xl font-bold">
        {productData.productName}
      </h2>
      <div className="max-w-6xl mx-auto">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

export default CliniQXCarouselDemo;
