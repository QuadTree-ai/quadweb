// src/app/careers/page.tsx
import React from "react";
import "./careers.css"; // Import custom CSS for scribble effect

const CareersPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white relative z-10 bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent animate-pulse">
        We will start hiring soon
      </h1>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="scribble-animation"></div>
      </div>
    </div>
  );
};

export default CareersPage;
