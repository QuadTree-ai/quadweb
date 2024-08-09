import React from "react";

const CareersPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center relative">
        We will start hiring soon
        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-60 blur-sm -z-10"></span>
        <span className="relative text-shadow">We will start hiring soon</span>
      </h1>
    </div>
  );
};

export default CareersPage;
