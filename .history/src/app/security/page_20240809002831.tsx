// src/app/security/page.tsx
import React from "react";

const SecurityPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-semibold text-3xl text-gray-800">Security Settings</h1>
                    <p className="text-gray-600 mt-2">Manage and configure your security settings.</p>
                </header>

                <section className="bg-white shadow rounded-lg p-6 mb-6">
                    <h2 className="font-semibold text-xl text-gray-800">Account Security</h2>
                    <p className="text-gray-600 mt-2">
                        Review and update your account security options to keep your account safe.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Update Settings
                    </button>
                </section>

                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="font-semibold text-xl text-gray-800">Privacy Settings</h2>
                    <p className="text-gray-600 mt-2">
                        Adjust your privacy settings to control who can see your information and how it's used.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Manage Privacy
                    </button>
                </section>
            </div>
        </div>
    );
};

export default SecurityPage;
