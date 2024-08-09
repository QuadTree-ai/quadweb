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
    <AccordionTrigger className="py-4 px-4 text-base sm:text-lg lg:text-xl font-semibold text-gray-200 hover:text-white">
      {question}
    </AccordionTrigger>
    <AccordionContent className="py-2 px-4 text-sm sm:text-base lg:text-lg text-gray-400">
      {answer}
    </AccordionContent>
  </AccordionItem>
);

const FAQPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow pt-16 pb-8 md:pt-20 md:pb-16 lg:pt-24 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <div className="mt-6 sm:mt-12">
            <Accordion type="single" collapsible>
              {faqData.map(({ question, answer }, index) => (
                <FAQSection
                  key={index}
                  question={question}
                  answer={answer}
                  value={`item-${index}`} // Unique value for each item
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
