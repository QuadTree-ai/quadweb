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
      <HoveredLink key={link.name} href={link.href} className="text-lg leading-relaxed tracking-wide mb-1">
        {link.name}
      </HoveredLink>
    ))
  );

  const renderColumns = (columns: ColumnType[]) => (
    columns.map(column => (
      <div key={column.title} className="flex flex-col space-y-3">
        <h3 className="font-semibold text-xl text-neutral-600">{column.title}</h3>
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
        <div className="flex justify-start items-start space-x-12 p-6">
          {renderColumns(section.columns)}
        </div>
      </MenuItem>
    ))
  );

  return (
    <div className={cn("fixed top-0 inset-x-0 backdrop-blur-md text-white z-50 mt-2", className)}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-24">
        <div className="flex justify-start items-center flex-1">
          <div className="relative w-20 h-20 mr-6"> 
            <Image
              src="/QuadTree.svg"
              alt="QuadTree Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-2xl font-bold hidden md:block">QuadTree.ai</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <Menu setActive={setActive}>
            {renderMenuItems()}
          </Menu>
        </div>
        <div className="flex-1">
        </div>
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
