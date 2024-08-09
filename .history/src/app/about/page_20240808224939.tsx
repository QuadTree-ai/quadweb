import React from "react";
import aboutData from "./aboutData";

const Section = ({ title, content }: { title: string; content: string }) => (
  <section className="my-10">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">
      {title}
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
      {content}
    </p>
  </section>
);

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-semibold text-5xl">QuadTree.ai</h1>
        </header>
        {Object.keys(aboutData).map((key) => {
          const { title, content } = aboutData[key as keyof typeof aboutData];
          return <Section key={key} title={title} content={content} />;
        })}
      </div>
    </div>
  );
};

export default AboutPage;
