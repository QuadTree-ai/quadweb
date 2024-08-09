// src/app/terms/page.tsx

import React from "react";
import termsContent from "./termsData";
import Navbar from "@/app/Navbar/page";
import Footer from "@/app/Footer/page";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Terms of Service
      </h1>
      <p className="text-sm mb-4 text-gray-400 text-center">
        Effective: January 31, 2024
      </p>
      <p className="text-lg mb-8 text-center">
        Thank you for using QuadTree.ai!
      </p>
      {termsContent.map((section, index) => (
        <section className="mb-8" key={index}>
          <h2 className="text-2xl font-bold mb-4">
            {index + 1}. {section.title}
          </h2>
          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{ __html: section.content }}
          ></p>
        </section>
      ))}
    </div>
  );
};

export default Terms;
