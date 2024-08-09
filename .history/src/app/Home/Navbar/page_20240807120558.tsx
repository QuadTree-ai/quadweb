"use client"

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import navData from "./navdata";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50 bg-black", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Ensured vertical alignment */}
          <div className="flex items-center"> {/* Adjusted for better alignment */}
            <div className="flex-shrink-0 flex items-center"> {/* Logo centered vertically */}
              <Image src="/QuadTree.svg" alt="Logo" width={40} height={40} />
            </div>
            <Menu setActive={setActive} className="ml-6"> {/* Added left margin for spacing */}
              {navData.map((item) => (
                <MenuItem key={item.name} item={item.name} setActive={setActive} active={active}>
                  {/* Enhanced dropdown positioning and animation */}
                  <div className="absolute left-0 mt-2 w-max bg-white shadow-lg rounded-lg p-4" style={{ top: '100%', marginLeft: 'calc(50% - 50vw)', width: '100vw' }}>
                    <div className="grid grid-cols-3 gap-4 p-4 container mx-auto"> {/* Improved internal grid alignment */}
                      {item.columns.map((column, index) => (
                        <div key={index} className="space-y-1">
                          <h4 className="text-gray-800 font-bold mb-2">
                            {column.title}
                          </h4>
                          <ul>
                            {column.links.map((link) => (
                              <li key={link.name}>
                                <a href={link.href} className="text-gray-600 hover:text-black block">{link.name}</a>
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
                              />
                              <p className="text-gray-600 text-xs mt-1">{column.image.alt}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="flex items-center">
            <button className="text-white hover:text-gray-400">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 6h13M8 12h13m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
