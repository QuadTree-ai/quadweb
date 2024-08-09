// src/app/terms/page.tsx

import React from "react";
import termsContent from "./termsData";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow py-8 md:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 lg:mb-8 text-center">
            Terms of Service
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 text-gray-400 text-center">
            Effective: January 31, 2024
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 text-center">
            Thank you for using QuadTree.ai!
          </p>
          {termsContent.map((section, index) => (
            <section className="mb-6 md:mb-8 lg:mb-10" key={index}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {index + 1}. {section.title}
              </h2>
              <p
                className="text-gray-300 text-base md:text-lg lg:text-xl"
                dangerouslySetInnerHTML={{ __html: section.content }}
              ></p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Terms;
