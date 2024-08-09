// src/app/overview/page.tsx
import React from 'react';
import Layout from '../layout';  // Adjust the path to match your project structure

const OverviewPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Overview</h1>
                <p className="mt-2 text-lg md:text-xl text-gray-700">
                    Discover the core elements of our services and the cutting-edge technology that powers our solutions. This page provides a brief glimpse into our company's mission, the services we offer, and our ambitions for the future.
                </p>
                
                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        To revolutionize business operations through advanced technology, enhancing efficiency and creating exceptional user experiences.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Services Offered</h2>
                    <ul className="list-disc list-inside text-gray-600 pl-4">
                        <li>Advanced Data Analytics</li>
                        <li>Scalable Cloud Solutions</li>
                        <li>Custom AI Integration</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Future Goals</h2>
                    <p className="text-gray-600">
                        We aim to expand our reach by developing new innovative products, exploring emerging markets, and continuing our commitment to technological innovation.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default OverviewPage;
