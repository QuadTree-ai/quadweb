// src/app/Home/Home.tsx

import React from "react";
import Hero from "./Hero/page";
// import Features from "./Features/page";
// import Services from "./Services/page";
import { NavbarDemo } from "./Navbar/page";
// import CardsContainer from "./Problems/page";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen">
      <NavbarDemo />
      <Hero />
    </div>
  );
};

export default HomePage;
