// src/app/Home/page.tsx

import React from "react";
import Hero from "./Hero/page";
import CliniQXFeatures from "./Products/page";

const HomePage = () => {
  return (
    <main className="bg-black text-white">
      <Hero />
      <CliniQXFeatures />
    </main>
  );
};

export default HomePage;
