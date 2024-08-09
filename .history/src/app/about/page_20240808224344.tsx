import React from "react";
import aboutData from "./aboutData";

const Section = ({ title, content }: { title: string; content: string }) => (
  <section className="mb-16">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">{title}</h2>
    <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
      {content}
    </p>
  </section>
);

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-100 mb-6">
            {aboutData.introduction.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
            {aboutData.introduction.content}
          </p>
        </header>
        {Object.keys(aboutData).map(key => {
          const { title, content } = aboutData[key as keyof typeof aboutData];
          return <Section key={key} title={title} content={content} />;
        })}
      </div>
    </div>
  );
};

export default AboutPage;
