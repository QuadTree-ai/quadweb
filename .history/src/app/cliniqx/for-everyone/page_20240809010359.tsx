// src/app/cliniqx/for-everyone/page.tsx
import React from "react";

const ForEveryonePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-semibold text-4xl">CliniQX For Everyone</h1>
                    <p className="mt-2 text-lg">
                        Learn how CliniQX brings innovative health solutions to users across the globe.
                    </p>
                </header>
                
                <section className="bg-white shadow rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold">Accessible Health Records</h2>
                    <p className="mt-2 text-gray-600">
                        CliniQX offers easy access to your medical history, ensuring that you can retrieve your health information wherever and whenever it's necessary.
                    </p>
                </section>

                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold">Streamlined Appointments</h2>
                    <p className="mt-2 text-gray-600">
                        Book appointments with healthcare providers effortlessly through our integrated booking system.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ForEveryonePage;
