// src/app/security/page.tsx
import React from "react";
import { securityData, SecurityInfo } from "./securityData";
import { Button } from "@/components/ui/button";

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
                
                {securityData.map((item: SecurityInfo, index: number) => (
                    <section key={index} className="bg-gray-800 shadow rounded-lg p-6 mb-6">
                        <div className="flex items-center">
                            <item.icon className="mr-4 text-white" size={24} /> {/* Correctly rendering as component */}
                            <div>
                                <h2 className="font-semibold text-xl text-white">{item.title}</h2>
                                <p className="text-gray-400 mt-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </section>
                ))}

                <div className="flex justify-center mt-12">
                    <Button onClick={() => window.open("https://quadtree.ai/security-portal", "_blank")}>
                        Visit our Security Portal
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SecurityPage;
