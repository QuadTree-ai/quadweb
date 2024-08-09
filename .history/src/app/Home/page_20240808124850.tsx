// src/app/Home/Home.tsx

import React from "react";
import Hero from "./Hero/page";
// import Features from "./Features/page";
// import Services from "./Services/page";
import { NavbarDemo } from "./Navbar/page";
import { AppleCardsCarouselDemo } from "./Products/page";

const HomePage = () => {
    return (
      <div className="bg-black">
        <NavbarDemo />
        <Hero/>
        <AppleCardsCarouselDemo/>
      </div>
    );
  };

export default HomePage;
