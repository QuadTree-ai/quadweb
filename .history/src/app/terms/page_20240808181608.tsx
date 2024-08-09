import React from "react";
import termsContent from "./termsData";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow pt-16 pb-8 md:pt-20 md:pb-16 lg:pt-24 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-6 text-center text-gray-400">
            Effective: January 31, 2024
          </p>
          <p className="text-base sm:text-lg mb-12 text-center text-gray-300">
            Thank you for using QuadTree.ai!
          </p>
          {termsContent.map((section, index) => (
            <section className="mb-12" key={index}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                {index + 1}. {section.title}
              </h2>
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
