import React from "react";
import aboutData from "./aboutData";

const Section = ({ title, content }: { title: string; content: string }) => (
  <section className="my-10">
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-100">
            {aboutData.introduction.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 leading-relaxed">
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
