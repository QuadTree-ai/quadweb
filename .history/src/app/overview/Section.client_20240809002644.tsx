// src/app/overview/Section.client.tsx
import React from "react";
import { Button } from "@/components/ui/button"; // Assuming this is a client-capable component

type SectionProps = {
    title: string;
    content: string;
    buttonLabel: string;
    onButtonClick: () => void;
    icon: JSX.Element;
};

const Section: React.FC<SectionProps> = ({ title, content, buttonLabel, onButtonClick, icon }) => (
  <section className="my-10">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">
      {title}
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
      {content}
    </p>
  </section>
);

export default Section;
