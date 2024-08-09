// src/app/careers/page.tsx
import React from "react";

const CareersPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white relative">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center glow-text">
        We will start hiring soon
      </h1>
      <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-400 border-dashed -z-10"></div>
    </div>
  );
};

export default CareersPage;
