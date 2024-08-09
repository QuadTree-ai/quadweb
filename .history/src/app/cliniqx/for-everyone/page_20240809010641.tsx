// src/app/cliniqx/for-everyone/page.tsx
import React from "react";

const ForEveryonePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-semibold text-5xl">CliniQX for Everyone</h1>
                    <p className="text-gray-300 mt-2">
                        Explore how CliniQX can benefit individuals and healthcare providers alike.
                    </p>
                </header>
                
                <section className="bg-gray-800 shadow rounded-lg p-6 mb-6">
                    <h2 className="font-semibold text-xl text-white">Accessible Healthcare</h2>
                    <p className="text-gray-400 mt-2">
                        CliniQX provides accessible, accurate, and affordable healthcare solutions that are designed to cater to everyone.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ForEveryonePage;
