// src/app/Home/page.tsx

import React from "react";
import Hero from "./Hero";
import CliniQXFeatures from "./Products/page";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Hero />
      <CliniQXFeatures />
    </div>
  );
};

export default HomePage;
