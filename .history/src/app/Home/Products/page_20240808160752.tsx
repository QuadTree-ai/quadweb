// Assuming this file is called ClinixQXFeatures.js

import React from "react";
import Image from "next/image";
import productData from "./productData"; // Ensure correct import path

const ClinixQXFeatures = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-center text-3xl font-bold text-gray-700 mb-6">
        {productData.productName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productData.features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={feature.src}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">
                {feature.content
                  ? feature.content
                  : "No additional information available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinixQXFeatures;
