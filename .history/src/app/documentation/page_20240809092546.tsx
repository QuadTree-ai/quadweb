// src/app/documentation/page.tsx
import React from "react";
import { documentationSections } from "./documentationData";

const DocumentationPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-12 px-6 sm:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="font-semibold text-6xl mb-4 mt-12">Documentation</h1>
                    <p className="text-gray-300 text-lg">
                        Access detailed information on how to use our platform effectively.
                    </p>
                </header>

                <div className="space-y-8">
                    {documentationSections.map((section, index) => (
                        <div 
                            key={index} 
                            className="flex items-center space-x-6 cursor-pointer hover:text-blue-400 transition-colors duration-300"
                        >
                            <section.icon className="text-blue-500" size={40} />
                            <div>
                                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                                <p className="text-gray-400 text-lg">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DocumentationPage;
