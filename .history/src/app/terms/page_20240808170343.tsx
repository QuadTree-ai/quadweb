// src/app/terms/page.tsx

import React from "react";
import termsContent from "./termsData";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold mb-6 text-white">
        Terms of Service
      </h1>
      {termsContent.map((section, index) => (
        <section className="mb-8" key={index}>
          <h2 className="text-2xl font-bold mb-4 text-white">
            {index + 1}. {section.title}
          </h2>
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: section.content }}
          ></p>
        </section>
      ))}
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} QuadTree.ai. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Terms;
