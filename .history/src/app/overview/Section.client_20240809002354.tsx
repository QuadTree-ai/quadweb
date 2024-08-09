// src/app/overview/Section.client.tsx
import React from "react";
import { Button } from "@/components/ui/button"; // Make sure this is a client-capable button component.

const Section = ({
  title,
  content,
  buttonLabel,
  onButtonClick,
  icon,
}: {
  title: string;
  content: string;
  buttonLabel: string;
  onButtonClick: () => void;
  icon: JSX.Element;
}) => (
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

export default Section;
