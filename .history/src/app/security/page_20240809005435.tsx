// src/app/security/page.tsx
import React from "react";
import { securityData, SecurityInfo } from "./securityData";
import { Button } from "@/components/ui/button";

// Component to render each security section
const SecuritySection = ({ item }: { item: SecurityInfo }) => (
    <section className="bg-gray-800 shadow rounded-lg p-6 mb-6 transition duration-300 hover:bg-gray-700">
        <div className="flex items-center">
            <span className="mr-4 text-white">
                <item.Icon size={24} style={{ verticalAlign: 'middle' }} aria-label={item.title} />
            </span>
            <div>
                <h2 className="font-semibold text-xl text-white">{item.title}</h2>
                <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
        </div>
    </section>
);

const SecurityPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-semibold text-5xl">Security & Privacy</h1>
                    <p className="text-gray-300 mt-2">
                        Learn how we protect your data and ensure privacy.
                    </p>
                </header>
                
                {securityData.map((item, index) => (
                    <SecuritySection key={index} item={item} />
                ))}

                <div className="flex justify-center mt-12">
                    <Button className="transition duration-300 hover:bg-blue-700">
                        Visit our Security Portal
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SecurityPage;
