"use client"

import React, { useState } from "react";
import Image from "next/image";
import navData from "./navdata";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";

function Navbar({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Correctly typed error handler for image loading
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Prevents looping
    e.currentTarget.src = "/default-image.png"; // Default image on error
  };

  return (
    <div className={`fixed top-0 inset-x-0 z-50 bg-black ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Image
                src="/QuadTree.svg"
                alt="QuadTree Logo"
                width={40}
                height={40}
                onError={handleImageError}
              />
            </div>
            <Menu setActive={setActive}>
              {navData.map((item) => (
                <MenuItem key={item.name} item={item.name} setActive={setActive} active={active}>
                  <div className="grid grid-cols-3 gap-4 p-4">
                    {item.columns.map((column, index) => (
                      <div key={index}>
                        <h4 className="text-gray-800 font-bold mb-2">
                          {column.title}
                        </h4>
                        <ul className="space-y-1">
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
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
