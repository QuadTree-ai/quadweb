// src/app/Home/Navbar/Navbar.tsx
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import navData from "./navdata"; // Make sure the path to navData is correct
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Function to render links dynamically based on link data
  const renderLinks = (links: any[]) =>
    links.map((link: { href: any; name: any }, index: any) => (
      <HoveredLink key={index} href={link.href}>
        {link.name}
      </HoveredLink>
    ));

  // Function to render the dynamic content of each menu item
  const renderMenuContent = (column: {
    title?: string;
    links: any;
    image: any;
  }) => (
    <div className="flex flex-col space-y-4 text-sm">
      {renderLinks(column.links)}
      {column.image && (
        <img
          src={column.image.src}
          alt={column.image.alt}
          className="w-32 h-20 mt-2"
        />
      )}
    </div>
  );

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {navData.map((section, idx) => (
          <MenuItem
            key={idx}
            setActive={setActive}
            active={active}
            item={section.name}
          >
            {section.columns.map((column, colIdx) => (
              <div key={colIdx} className="grid grid-cols-2 gap-10 p-4">
                {renderMenuContent(column)}
              </div>
            ))}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Navbar;
