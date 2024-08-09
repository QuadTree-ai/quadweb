// src/app/overview/page.tsx
import React from "react";
import { Button } from "@/components/ui/button";

const Section = ({
  title,
  content,
  buttonLabel,
  onButtonClick,
}: {
  title: string;
  content: string;
  buttonLabel: string;
  onButtonClick: () => void;
}) => (
  <section className="my-10">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">
      {title}
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
      {content}
    </p>
    <Button onClick={onButtonClick} className="mt-4">
      {buttonLabel}
    </Button>
  </section>
);

const sections = [
  {
    title: "Mission",
    content:
      "To revolutionize business operations through advanced technology, enhancing efficiency and creating exceptional user experiences.",
    buttonLabel: "Learn More",
    onButtonClick: () => alert("More about our mission"),
  },
  {
    title: "Services",
    content:
      "Advanced Data Analytics, Scalable Cloud Solutions, Custom AI Integration",
    buttonLabel: "Our Services",
    onButtonClick: () => alert("Detailed view of services"),
  },
  {
    title: "Future Goals",
    content:
      "We aim to expand our reach by developing new innovative products, exploring emerging markets, and continuing our commitment to technological innovation.",
    buttonLabel: "Explore Goals",
    onButtonClick: () => alert("More on future goals"),
  },
];

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
