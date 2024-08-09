"use client"

// src/app/Home/Navbar/page.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import navData from "./navdata"; // Ensure this import path matches the location of your navData file

function Navbar({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Error handling for image loading
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Prevents looping
    e.currentTarget.src = "/gradient.jpg"; // Default image on error
  };

  return (
    <div className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}>
      <Menu setActive={setActive}>
        {navData.map((section) => (
          <MenuItem key={section.name} item={section.name} setActive={setActive} active={active}>
            <div className="grid grid-cols-3 gap-4 p-4">
              {section.columns.map((column, index) => (
                <div key={index} className="space-y-4">
                  {column.title && <h4 className="text-gray-800 font-bold">{column.title}</h4>}
                  <ul className="text-sm">
                    {column.links.map((link) => (
                      <li key={link.name}>
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
    </div>
  );
}

export default Navbar;
