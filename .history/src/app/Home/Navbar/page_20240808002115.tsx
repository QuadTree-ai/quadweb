"use client"

// src/app/Home/Navbar/Navbar.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import navData from "./navdata"; // Adjust the import path if necessary

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  // Render links dynamically
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <Link key={index} href={link.href}>
        <a className="text-gray-600 hover:text-black dark:hover:text-white transition-colors duration-200">
          {link.name}
        </a>
      </Link>
    ));
  };

  // Render columns dynamically
  const renderColumns = (columns) => {
    return columns.map((column, index) => (
      <div key={index} className="space-y-4">
        {column.title && <h4 className="font-bold text-lg">{column.title}</h4>}
        <ul>{renderLinks(column.links)}</ul>
        {column.image && (
          <Image
            src={column.image.src}
            alt={column.image.alt}
            width={100}
            height={50}
            className="rounded-md shadow-lg"
          />
        )}
      </div>
    ));
  };

  // Main menu item hover and display logic
  const renderMenuItems = () => {
    return navData.map((section, idx) => (
      <div
        key={idx}
        className="relative"
        onMouseEnter={() => setActive(section.name)}
        onMouseLeave={() => setActive(null)}
      >
        <p className="cursor-pointer text-xl text-black dark:text-white">{section.name}</p>
        {active === section.name && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-2 p-4 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-3 gap-4">
              {renderColumns(section.columns)}
            </div>
          </motion.div>
        )}
      </div>
    ));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {renderMenuItems()}
      </div>
    </nav>
  );
};

export default Navbar;
