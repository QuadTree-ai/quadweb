// src/app/Home/Navbar/Navbar.tsx

"use client";
import React, { useState } from "react";
import Image from 'next/image';  // Import Image component from Next.js
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import navData from "./navData";  // Ensure navData is correctly imported
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
  image?: ImageType;  // Optional image for product items
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
      <div key={column.title} className="flex flex-col space-y-4 text-sm text-white">
        <h3 className="font-bold">{column.title}</h3>
        {renderLinks(column.links)}
        {column.image && (
          <ProductItem
            title={column.title}
            href={column.links[0].href}  // Assuming the first link is relevant to the image
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
        <div className={`grid grid-cols-${section.columns.length} gap-10 p-4`}>
          {renderColumns(section.columns)}
        </div>
      </MenuItem>
    ))
  );

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-black", className)}>
      <div className="flex justify-between items-center px-4 py-2">
        <div className="w-24 h-24 relative">  // Adjust width and height as needed
          <Image
            src="/QuadTree.svg"  // Path must be relative to the public directory
            alt="QuadTree Logo"
            layout="fill"  // This will cover the area of the div
            objectFit="contain"  // Keeps the aspect ratio of the image
          />
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
      <Navbar className="top-2" />
    </div>
  );
}

export default NavbarDemo;
