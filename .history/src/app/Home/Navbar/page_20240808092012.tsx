import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import navData, { NavSection, Column, Link } from "./navdata"; // Ensure types are imported

function Navbar({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Function to render links
  const renderLinks = (links: Link[]) => links.map((link, index) => (
    <HoveredLink key={index} href={link.href}>{link.name}</HoveredLink>
  ));

  // Function to render columns
  const renderColumns = (columns: Column[]) => columns.map((column, index) => (
    <div key={index} className="flex flex-col space-y-4">
      {column.title && <h4 className="text-lg font-semibold">{column.title}</h4>}
      {renderLinks(column.links)}
      {column.image && (
        <img src={column.image.src} alt={column.image.alt} className="mt-4 w-full h-auto rounded-lg shadow-lg" />
      )}
    </div>
  ));

  // Main render function for the menu items
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {navData.map((section: NavSection, index: number) => (
          <MenuItem
            key={index}
            setActive={setActive}
            active={active === section.name}
            item={section.name}
            onClick={() => setActive(active === section.name ? null : section.name)}
          >
            <div className="grid grid-cols-2 gap-10 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              {renderColumns(section.columns)}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Navbar;
