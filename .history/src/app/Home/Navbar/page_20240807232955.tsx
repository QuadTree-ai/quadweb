"use client"

// src/app/Home/Navbar/page.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import navData from "./navdata"; // Ensure this import path matches the location of your navData file

function Navbar({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Error handling for image loading
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/fallback-image.png"; // Use a generic fallback image path
  };

  return (
    <nav className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ${className} flex justify-between items-center`}>
      <Menu setActive={setActive}>
        {/* Logo as the first item in the navigation, centered vertically */}
        <div className="flex items-center justify-start pl-4">
          <Image
            src="/QuadTree.svg" // Ensure the path is correct
            alt="QuadTree Logo"
            width={50}
            height={50}
            onError={handleImageError}
          />
        </div>
        {navData.map((section, sectionIdx) => (
          <MenuItem key={sectionIdx} item={section.name} setActive={setActive} active={active}>
            <div className="grid grid-cols-3 gap-4 p-4">
              {section.columns.map((column, colIdx) => (
                <div key={colIdx} className="space-y-4">
                  {column.title && <h4 className="text-gray-800 font-bold">{column.title}</h4>}
                  <ul className="text-sm">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a href={link.href} className="text-gray-600 hover:text-black">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {column.image && (
                    <div className="mt-4">
                      <Image
                        src={column.image.src}
                        alt={column.image.alt}
                        width={100}
                        height={50}
                        className="rounded-md"
                        onError={handleImageError}
                      />
                      <p className="text-gray-600 text-xs mt-1">{column.image.alt}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
}

export default Navbar;
