// Assuming this file is called ClinixQXFeatures.js

import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import productData from "./productData"; // Ensure correct import path

const ClinixQXFeatures = () => {
  return (
    <section className="bg-gray-100 py-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        {productData.productName} Features
      </h1>
      <div className="mx-auto px-4">
        <Carousel>
          {productData.features.map((feature, index) => (
            <Card key={index}>
              <div className="relative h-48 w-full">
                <Image
                  src={feature.src}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
                <p className="text-gray-600">
                  {feature.content || "No additional information available."}
                </p>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ClinixQXFeatures;
