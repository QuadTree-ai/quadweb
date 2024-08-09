// src/app/overview/page.tsx
import React from "react";
import { SectionData, sections } from "./overviewData";
import { Button } from "@/components/ui/button"; // Assuming there is a predefined Button component

const Section = ({
  title,
  content,
  buttonLabel,
  onButtonClick,
  icon,
}: SectionData) => (
  <section className="my-10">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">
      {title}
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
      {content}
    </p>
    <Button onClick={onButtonClick} className="mt-4 flex items-center">
      {icon}
      <span className="ml-2">{buttonLabel}</span>
    </Button>
  </section>
);

const OverviewPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12 mt-12">
                    <h1 className="font-semibold text-5xl">QuadTree.ai Overview</h1>
                </header>
                {sections.map((section: SectionData, index: number) => (
                    <Section key={index} {...section} />
                ))}
            </div>
        </div>
    );
};

export default OverviewPage;
