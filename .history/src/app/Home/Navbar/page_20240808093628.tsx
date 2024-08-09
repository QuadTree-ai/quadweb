"

// src/app/Home/Navbar/page.tsx
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import navData from "./navdata"; // Ensure the import path is correct

function Navbar({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}>
      <Menu setActive={setActive}>
        {navData.map((section) => (
          <MenuItem key={section.name} setActive={setActive} active={active} item={section.name}>
            {section.columns.map((column, idx) => (
              <div key={idx} className="space-y-4 text-sm">
                {column.title && <h4 className="font-bold text-gray-800">{column.title}</h4>}
                {column.links.map((link) => (
                  <HoveredLink key={link.name} href={link.href}>
                    {link.name}
                  </HoveredLink>
                ))}
                {column.image && (
                  <div className="mt-4">
                    <img src={column.image.src} alt={column.image.alt} className="rounded-md shadow-xl" />
                  </div>
                )}
              </div>
            ))}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Navbar;
