"use client"

// src/app/Home/Navbar/Navbar.tsx

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "/QuadTree.svg";
import navData from "./navdata";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderLinks = (links) => (
    links.map(link => (
      <Link key={link.name} href={link.href} passHref>
        <a className="hover:underline">{link.name}</a>
      </Link>
    ))
  );

  const renderColumns = (columns) => (
    columns.map(column => (
      <div key={column.title}>
        <h3 className="font-bold">{column.title}</h3>
        <div className="space-y-2">
          {renderLinks(column.links)}
        </div>
      </div>
    ))
  );

  const renderNavMenu = () => (
    navData.map(item => (
      <div key={item.name} className="py-2">
        <h2 className="font-bold text-lg">{item.name}</h2>
        {item.columns && renderColumns(item.columns)}
      </div>
    ))
  );

  return (
    <nav className="w-full z-50 top-0 backdrop-filter backdrop-blur-lg relative">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Logo className="w-24 h-auto md:w-32 lg:w-40" />
        <div className="hidden md:flex space-x-8 items-center">
          {renderNavMenu()}
          <Link href="/customer/login" passHref>
            <Button className="text-white bg-[#E2C044] hover:bg-[#cca03a] transition-colors duration-200 text-base md:text-lg px-4 py-2 rounded-md">
              Login
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center bg-gray-50 py-4 space-y-4">
          {renderNavMenu()}
          <Link href="/customer/login" passHref>
            <Button className="text-black bg-[#E2C044] hover:bg-[#cca03a] transition-colors duration-200 text-base w-full text-center">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
