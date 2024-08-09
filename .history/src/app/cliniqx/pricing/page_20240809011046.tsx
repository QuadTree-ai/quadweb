// src/app/cliniqx/pricing/page.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { plans } from "./pricingData";

const PricingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-semibold text-5xl">CliniQX Pricing</h1>
                    <p className="text-gray-300 mt-2">
                        Affordable plans designed for every need.
                    </p>
                </header>

                <div className="flex justify-around flex-wrap">
                    {plans.map((plan, index) => (
                        <Card key={index} className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6 m-4 w-full md:w-1/3 lg:w-1/4">
                            <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
                            <h3 className="text-3xl font-bold text-white my-2">{plan.price}</h3>
                            <p className="text-gray-400 my-2">{plan.description}</p>
                            <ul className="list-disc list-inside text-gray-400">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <feature.icon className="text-white mr-2" size={20} />
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
