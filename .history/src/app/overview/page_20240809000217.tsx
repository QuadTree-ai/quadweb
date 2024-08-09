// src/app/overview/page.tsx
import React from 'react';
import Layout from '../layout';  // Ensure the path is correct based on your project structure

const OverviewPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
                <p className="mt-1 text-lg text-gray-600">
                    Welcome to the overview page where we highlight the key aspects of our services and technology.
                </p>
                
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-700">Our Mission</h2>
                    <p className="text-gray-500">
                        Our mission is to revolutionize the way businesses utilize technology to improve operations and enhance user experiences.
                    </p>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-700">Services Offered</h2>
                    <ul className="list-disc list-inside text-gray-500">
                        <li>Advanced Analytics</li>
                        <li>Cloud Solutions</li>
                        <li>AI Integration</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-700">Future Goals</h2>
                    <p className="text-gray-500">
                        Our future goals include expanding our product line, entering new markets, and continuing to innovate with cutting-edge technologies.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default OverviewPage;
