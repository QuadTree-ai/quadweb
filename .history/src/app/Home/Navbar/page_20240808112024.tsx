// src/app/Home/Navbar/Navbar.tsx

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import navData from "./navdata"; // Import the navigation data
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const renderMenuItems = () => {
    return navData.map(section => (
      <MenuItem key={section.name} setActive={setActive} active={active} item={section.name}>
        <div className={`grid grid-cols-${section.columns.length} gap-4 p-4`}>
          {section.columns.map(column => (
            <div key={column.title} className="flex flex-col space-y-2">
              <h3 className="font-bold">{column.title}</h3>
              {column.links.map(link => (
                <HoveredLink key={link.name} href={link.href}>{link.name}</HoveredLink>
              ))}
            </div>
          ))}
        </div>
      </MenuItem>
    ));
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {renderMenuItems()}
      </Menu>
    </div>
  );
}

export default NavbarDemo;
