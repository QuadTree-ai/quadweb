import React from "react";
import aboutData from "./faqData";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Section = ({ title, content }: { title: string; content: string }) => (
  <section className="mb-12">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
      {title}
    </h2>
    <p className="text-base sm:text-lg text-gray-300">
      {content}
    </p>
  </section>
);

const faqPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            {aboutData.introduction.title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-4">
            {aboutData.introduction.content}
          </p>
        </header>
        {Object.keys(aboutData).map(key => {
          const { title, content } = aboutData[key as keyof typeof aboutData];
          return <Section key={key} title={title} content={content} />;
        })}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <AccordionDemo />
        </div>
      </div>
    </div>
  );
};

export default faqPage;
