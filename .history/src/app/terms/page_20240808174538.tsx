// src/app/terms/page.tsx

import React from "react";
import termsContent from "./termsData";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow py-30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-6 text-center">Terms of Service</h1>
          <p className="text-sm mb-4 text-gray-400 text-center">Effective: January 31, 2024</p>
          <p className="text-lg mb-8 text-center">Thank you for using QuadTree.ai!</p>
          {termsContent.map((section, index) => (
            <section className="mb-8" key={index}>
              <h2 className="text-2xl font-bold mb-4">{index + 1}. {section.title}</h2>
              <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: section.content }}></p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Terms;
