// src/app/Home/Home.tsx

import React from "react";
import Hero from "./Hero/page";
import { NavbarDemo } from "../Navbar/page";
import ClinixQXFeatures from "./Products/page";
import Footer from "../../Footer/page";

const HomePage = () => {
    return (
      <div className="bg-black">
        <NavbarDemo />
        <Hero/>
        <ClinixQXFeatures/>
        <Footer/>
      </div>
    );
  };

export default HomePage;
