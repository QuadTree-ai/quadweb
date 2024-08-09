// src/app/Home/Home.tsx

import React from "react";
import { ButtonDemo } from "./Hero/page";
// import Features from "./Features/page";
// import Services from "./Services/page";
import Navbar from "./Navbar/page";
// import CardsContainer from "./Problems/page";

const HomePage = () => {
    return (
      <div className="bg-black">
        <NavbarDemo />
        <ButtonDemo/>
      </div>
    );
  };

export default HomePage;
