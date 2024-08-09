// src/app/api/pricing/page.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { apiPlans } from "./apiPricingData";

const ApiPricingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-12 px-6 sm:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="font-semibold text-6xl mb-4 mt-12">API Pricing</h1>
                    <p className="text-gray-300 text-lg">
                        Flexible plans designed to meet the needs of your API usage.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-8 space-y-8 md:space-y-0">
                    {apiPlans.map((plan, index) => (
                        <Card key={index} className="bg-gray-800 shadow-xl rounded-xl p-8 w-full md:w-1/3">
                            <h2 className="text-2xl font-bold text-white mb-3">{plan.name}</h2>
                            <h3 className="text-4xl font-bold text-blue-400 mb-5">{plan.price}</h3>
                            <p className="text-gray-400 text-lg mb-6">{plan.description}</p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-base">
                                        <feature.icon className="text-blue-500 mr-3" size={22} />
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApiPricingPage;
