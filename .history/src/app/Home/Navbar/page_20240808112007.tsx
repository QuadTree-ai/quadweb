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

  const renderLinks = (links: any[]) => (
    links.map((link: { name: any; href: any; }) => (
      <HoveredLink key={link.name} href={link.href}>
        {link.name}
      </HoveredLink>
    ))
  );

  const renderColumns = (columns: any[]) => (
    columns.map((column: { title: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | React.Key | null | undefined; links: { href: string; }[]; image: { src: string; alt: string; }; }) => (
      <div key={column.title} className="flex flex-col space-y-2">
        <h3 className="font-bold">{column.title}</h3>
        {renderLinks(column.links)}
        {column.image && (
          <ProductItem
            title={column.title}
            href={column.links[0].href} // Assuming the first link is relevant to the image
            src={column.image.src}
            description={column.image.alt}
          />
        )}
      </div>
    ))
  );

  const renderMenuItems = () => {
    return navData.map(section => (
      <MenuItem key={section.name} setActive={setActive} active={active} item={section.name}>
        <div className={`grid grid-cols-${section.columns.length} gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md`}>
          {renderColumns(section.columns)}
        </div>
      </MenuItem>
    ));
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 max-w-4xl mx-auto z-50 bg-white dark:bg-gray-800 shadow-md py-2", className)}>
      <Menu setActive={setActive}>
        {renderMenuItems()}
      </Menu>
    </div>
  );
}

export default NavbarDemo;
