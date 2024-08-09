// src/app/overview/page.tsx
import React from "react";
import Section from "@/app/overview/Section.client"; // Ensure this component is treated as a Client Component
import { sections } from "./overviewData";

const OverviewPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12 mt-12">
                    <h1 className="font-semibold text-5xl">QuadTree.ai Overview</h1>
                </header>
                {sections.map((section, index) => (
                    <Section key={index} {...section} />
                ))}
            </div>
        </div>
    );
};

export default OverviewPage;
