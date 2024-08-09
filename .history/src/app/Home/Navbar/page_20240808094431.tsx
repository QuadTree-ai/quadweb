// src/app/Home/Navbar/page.tsx

import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { navData } from './navdata';

const NavbarPage = () => {
  const [active, setActive] = useState(null);

  const renderLinkItem = (link) => (
    <HoveredLink href={link.href}>
      {link.name}
    </HoveredLink>
  );

  const renderProductItem = (column) => (
    <ProductItem
      title={column.title}
      href="#"  // This should be the main link for the product section
      src={column.image ? column.image.src : ""}
      description={`Explore ${column.title}`}
    />
  );

  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-blue-500 w-full">
      <Menu setActive={setActive}>
        {navData.map((section) => (
          <MenuItem key={section.name} setActive={setActive} active={active === section.name} item={section.name}>
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 p-4", section.name === active ? "block" : "hidden")}>
              {section.columns.map((column, index) => (
                <div key={index} className="text-sm">
                  {column.links && column.links.map(link => renderLinkItem(link))}
                  {column.image && renderProductItem(column)}
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
