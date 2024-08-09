import React from "react";
import aboutData from "./aboutData";

const Section = ({ title, content }: { title: string; content: string }) => (
  <section className="my-12">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-emerald-400">
      {title}
    </h2>
    <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
      {content}
    </p>
  </section>
);

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-gray-100">
            {aboutData.introduction.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 leading-relaxed">
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
