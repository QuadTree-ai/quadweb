// Assuming this file is called ClinixQXFeatures.js

import React from "react";
import Image from "next/image";
import productData from "./productData"; // Ensure correct import path

const ClinixQXFeatures = () => {
  return (
    <section className="bg-gray-100 py-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        {productData.productName} Features
      </h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productData.features.map((feature, index) => (
            <article
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinixQXFeatures;
