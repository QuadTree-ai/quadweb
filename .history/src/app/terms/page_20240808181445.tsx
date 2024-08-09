import React from "react";
import termsContent from "./termsData";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white mt-12">
      <header className="py-8 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-4 text-center text-gray-400">
            Effective: January 31, 2024
          </p>
        </div>
      </header>
      <main className="flex-grow py-8 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg mb-8 text-center text-gray-300">
            Thank you for using QuadTree.ai! Below are the terms and conditions that govern your use of our services.
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
      </main>
    </div>
  );
};

export default Terms;
