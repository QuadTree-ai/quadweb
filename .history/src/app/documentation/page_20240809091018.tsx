// src/app/documentation/page.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { documentationSections } from "./documentationData";

const DocumentationPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white py-12 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="font-semibold text-6xl mb-4">Documentation</h1>
          <p className="text-gray-300 text-lg">
            Access detailed information on how to use our platform effectively.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-8 space-y-8 md:space-y-0">
          {documentationSections.map((section, index) => (
            <Card
              key={index}
              className="bg-gray-800 shadow-xl rounded-xl p-8 w-full md:w-1/3 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <section.icon className="text-blue-500 mr-4" size={32} />
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-400 text-lg">{section.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
