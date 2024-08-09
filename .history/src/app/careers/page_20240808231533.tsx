import React from 'react';

const CareersPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        {/* Sketch Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L100 100M100 0L0 100"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="1 2"
          />
        </svg>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-white relative">
        <span className="text-glow">We will start hiring soon</span>
      </h1>
    </div>
  );
};

export default CareersPage;
