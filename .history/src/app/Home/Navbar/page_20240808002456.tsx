"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import navData from "./navdata"; // Ensure the import path matches the location of your navData file

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Render links
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <HoveredLink key={index} href={link.href}>{link.name}</HoveredLink>
    ));
  };

  // Render columns within each menu item
  const renderColumns = (columns) => {
    return columns.map((column, index) => (
      <div key={index} className="flex flex-col space-y-4 text-sm">
        {column.title && <h4>{column.title}</h4>}
        {renderLinks(column.links)}
        {column.image && (
          <div className="mt-4">
            <img src={column.image.src} alt={column.image.alt} className="w-full h-auto" />
          </div>
        )}
      </div>
    ));
  };

  // Main menu items render
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {navData.map((section, index) => (
          <MenuItem
            key={index}
            setActive={setActive}
            active={active}
            item={section.name}
          >
            <div className="grid grid-cols-2 gap-10 p-4">
              {renderColumns(section.columns)}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Navbar;
