// src/app/cliniqx/pricing/page.tsx
import React from "react";
import { Card } from "@/components/ui/card"; // Assuming the Card is styled according to shadcn

const PricingPage = () => {
    const plans = [
        { name: "Basic Plan", price: "₹199", features: ["Feature 1", "Feature 2", "Feature 3"] },
        { name: "Premium Plan", price: "₹299", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-semibold text-5xl">CliniQX Pricing</h1>
                    <p className="text-gray-300 mt-2">
                        Affordable plans designed for every need.
                    </p>
                </header>

                <div className="flex justify-around flex-wrap">
                    {plans.map((plan, index) => (
                        <Card key={index} className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6 w-full md:w-5/12">
                            <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
                            <h3 className="text-3xl font-bold text-white my-2">{plan.price}</h3>
                            <ul className="list-disc list-inside text-gray-400">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
