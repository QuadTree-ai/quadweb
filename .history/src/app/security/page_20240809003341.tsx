// src/app/security/page.tsx
import React from "react";
import { Button } from "@/components/ui/button"; // Assuming this is the 'shadcn' styled button component

const SecurityPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-semibold text-5xl">Security Settings</h1>
                    <p className="text-gray-300 mt-2">
                        Manage and configure your security settings to ensure your account is protected.
                    </p>
                </header>

                <section className="bg-gray-800 shadow rounded-lg p-6 mb-6">
                    <h2 className="font-semibold text-xl text-white">Account Security</h2>
                    <p className="text-gray-400 mt-2">
                        Review and update your account security options to keep your account safe.
                    </p>
                    <Button className="mt-4" onClick={() => alert("Navigating to account settings...")}>
                        Update Settings
                    </Button>
                </section>

                <section className="bg-gray-800 shadow rounded-lg p-6">
                    <h2 className="font-semibold text-xl text-white">Privacy Settings</h2>
                    <p className="text-gray-400 mt-2">
                        Adjust your privacy settings to control who can see your information and how it's used.
                    </p>
                    <Button className="mt-4" onClick={() => alert("Navigating to privacy settings...")}>
                        Manage Privacy
                    </Button>
                </section>
            </div>
        </div>
    );
};

export default SecurityPage;
