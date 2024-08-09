import React from "react";
import faqData from "./faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = ({ question, answer, value }: { question: string; answer: string; value: string }) => (
  <AccordionItem value={value} className="border-b border-gray-700">
    <AccordionTrigger className="py-4 px-4 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 hover:text-white">
      {question}
    </AccordionTrigger>
    <AccordionContent className="py-2 px-4 text-base sm:text-lg lg:text-xl text-gray-400">
      {answer}
    </AccordionContent>
  </AccordionItem>
);

const FAQPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 mt-12">
            Frequently Asked Questions
          </h1>
        </header>
        <div className="mt-6 sm:mt-12 mb-8">
          <Accordion type="single" collapsible>
            {faqData.map(({ question, answer }, index) => (
              <FAQSection
                key={index}
                question={question}
                answer={answer}
                value={`item-${index}`}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
