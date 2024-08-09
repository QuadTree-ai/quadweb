// src/app/cliniqx/pricing/page.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { plans } from "./pricingData";

const PricingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-12 px-6 sm:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="font-semibold text-6xl mb-4">CliniQX Pricing</h1>
                    <p className="text-gray-300 text-lg">
                        Affordable plans designed for every need.
                    </p>
                </header>

                <div className="flex justify-center flex-wrap gap-8">
                    {plans.map((plan, index) => (
                        <Card key={index} className="bg-gray-800 shadow-xl rounded-xl p-8 mb-8 w-full md:w-1/3">
                            <h2 className="text-2xl font-bold text-white mb-3">{plan.name}</h2>
                            <h3 className="text-4xl font-bold text-blue-400 mb-5">{plan.price}</h3>
                            <p className="text-gray-400 text-lg mb-6">{plan.description}</p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-base">
                                        <feature.icon className="text-blue-500 mr-3" size={22} />
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                Choose Plan
                            </button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
