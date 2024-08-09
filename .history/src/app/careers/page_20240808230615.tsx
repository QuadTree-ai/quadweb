import React from "react";

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow pt-16 pb-8 md:pt-20 md:pb-16 lg:pt-24 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-center relative">
            <span className="relative z-10">Join Our Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 blur-md" />
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-12 text-center text-gray-300">
            We are excited to announce that we will be expanding our team soon. Stay tuned for opportunities to work with us and be part of something big!
          </p>
          <p className="text-base sm:text-lg lg:text-xl mb-12 text-center text-gray-400">
            Keep an eye on this space for upcoming job openings and how you can apply to join our dynamic team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
