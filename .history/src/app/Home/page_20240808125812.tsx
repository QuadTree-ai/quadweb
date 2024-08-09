// src/app/Home/Home.tsx

import React from "react";
import Hero from "./Hero/page";
// import Features from "./Features/page";
// import Services from "./Services/page";
import { NavbarDemo } from "./Navbar/page";
import { CliniQXCarouselDemo } from "./Products/page";

const HomePage = () => {
    return (
      <div className="bg-black">
        <NavbarDemo />
        <Hero/>
        <CliniQXCarouselDemo/>
      </div>
    );
  };

export default HomePage;
