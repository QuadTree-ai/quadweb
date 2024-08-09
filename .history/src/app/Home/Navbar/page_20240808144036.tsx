// src/app/Home/Navbar/Navbar.tsx

"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import navData from "./navData";
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
            href={column.links[0].href}
            src={column.image.src}
            description={column.image.alt}
          />
        )}
      </div>
    ))
  );

  const renderMenuItems = () => (
    navData.map((section: SectionType) => (
      <MenuItem key={section.name} setActive={setActive} active={active} item={section.name}>
        <div className={`grid grid-cols-${section.columns.length} gap-4 p-4`}>
          {renderColumns(section.columns)}
        </div>
      </MenuItem>
    ))
  );

  return (
    <div className={cn("fixed top-0 inset-x-0 bg-black text-white z-50", className)}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">  // Adjust height as needed
        <div className="flex items-center">
          <Image
            src="/QuadTree.svg"
            alt="QuadTree Logo"
            width={80}  // Adjust width as necessary
            height={80}  // Adjust height as necessary
            className="mr-4"  // Adds some margin to the right of the logo
          />
          <h1 className="text-lg font-bold">QuadTree.ai</h1>  // Optional, add your company name or skip it
        </div>
        <Menu setActive={setActive}>
          {renderMenuItems()}
        </Menu>
      </div>
    </div>
  );
}

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

export default NavbarDemo;
