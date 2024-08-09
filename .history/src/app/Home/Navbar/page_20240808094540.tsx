// src/app/Home/Navbar/page.tsx

import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import navData from './navdata';

const NavbarPage = () => {
  const [active, setActive] = useState<string | null>(null);

  const renderLinkItems = (links) => links.map((link, index) => (
    <HoveredLink key={index} href={link.href} className="text-sm">
      {link.name}
    </HoveredLink>
  ));

  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-blue-500 w-full">
      <Menu setActive={setActive}>
        {navData.map((item, itemIdx) => (
          <MenuItem
            key={itemIdx}
            setActive={setActive}
            active={active === item.name}
            item={item.name}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {item.columns.map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col space-y-2">
                  {column.title && <div className="font-semibold text-lg text-white">{column.title}</div>}
                  {column.links && renderLinkItems(column.links)}
                  {column.image && (
                    <ProductItem
                      title={column.title}
                      href="#"  // Add the appropriate href here
                      src={column.image.src}
                      description={`Explore ${column.title}`}
                      className="mt-2"
                    />
                  )}
                </div>
              ))}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavbarPage;
