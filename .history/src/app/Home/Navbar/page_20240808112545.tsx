// src/app/Home/Navbar/Navbar.tsx

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import navData from "./navdata"; // Import the navigation data
import { cn } from "@/lib/utils";

interface LinkType {
  name: string;
  href: string;
}

interface ImageType {
  src: string;
  alt: string;
}

interface ColumnType {
  title: string;
  links: LinkType[];
  image?: ImageType;
}

interface SectionType {
  name: string;
  columns: ColumnType[];
}

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const renderLinks = (links: LinkType[]) => (
    links.map(link => (
      <HoveredLink key={link.name} href={link.href}>
        {link.name}
      </HoveredLink>
    ))
  );

  const renderColumns = (columns: ColumnType[]) => (
    columns.map(column => (
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
    return navData.map((section: SectionType) => (
      <MenuItem key={section.name} setActive={setActive} active={active} item={section.name}>
        <div className={`grid grid-cols-${section.columns.length} gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md`}>
          {renderColumns(section.columns)}
        </div>
      </MenuItem>
    ));
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 max-w-4xl mx-auto z-50 bg-white dark:bg-gray-800 shadow-md py-2", className)}>
      <div className="flex items-center space-x-4 px-4">
        <div className="flex-none">
          <Image src="/public/QuadTree.svg" alt="QuadTree Logo" width={100} height={40} />
        </div>
        <Menu setActive={setActive}>
          {renderMenuItems()}
        </Menu>
      </div>
    </div>
  );
}

export default NavbarDemo;
