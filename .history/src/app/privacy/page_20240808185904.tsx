// src/app/privacy/page.tsx

import React from "react";
import privacyContent from "./privacyData";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow py-8 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-6 text-center text-gray-400">
            Effective: August 8, 2024
          </p>
          <div className="space-y-12">
            {privacyContent.map((section, index) => (
              <section key={index} className="space-y-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
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
    </div>
  );
};

export default Privacy;
