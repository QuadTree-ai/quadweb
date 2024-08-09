// src/app/overview/page.tsx
import React from 'react';
import Layout from '../layout';  // Ensure the path is correct based on your project structure

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

const sections = [
  {
    title: "Mission",
    content: "To revolutionize business operations through advanced technology, enhancing efficiency and creating exceptional user experiences."
  },
  {
    title: "Services",
    content: "Advanced Data Analytics, Scalable Cloud Solutions, Custom AI Integration"
  },
  {
    title: "Future Goals",
    content: "We aim to expand our reach by developing new innovative products, exploring emerging markets, and continuing our commitment to technological innovation."
  }
];

const OverviewPage = () => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12 mt-12">
                        <h1 className="font-semibold text-5xl">QuadTree.ai Overview</h1>
                    </header>
                    {sections.map((section, index) => (
                        <Section key={index} title={section.title} content={section.content} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default OverviewPage;
