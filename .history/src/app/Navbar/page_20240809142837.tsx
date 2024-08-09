"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
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

// Navbar Component
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const renderLinks = (links: LinkType[]) =>
    links.map((link) => (
      <HoveredLink
        key={link.name}
        href={link.href}
        className="text-lg leading-relaxed tracking-wide hover:text-emerald-300"
      >
        {link.name}
      </HoveredLink>
    ));

  const renderColumns = (columns: ColumnType[]) =>
    columns.map((column, index) => (
      <div
        key={column.title}
        className={`flex flex-col space-y-3 ${
          index < columns.length - 1 ? "md:mr-8" : ""
        }`}
      >
        <h3 className="font-semibold text-xl text-neutral-600">
          {column.title}
        </h3>
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
    ));

  const renderMenuItems = () =>
    navData.map((section: SectionType) => (
      <MenuItem
        key={section.name}
        setActive={setActive}
        active={active}
        item={section.name}
      >
        <div className="flex flex-col md:flex-row md:space-x-8 p-6">
          {renderColumns(section.columns)}
        </div>
      </MenuItem>
    ));

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 backdrop-blur-lg bg-black text-white z-50",
        className
      )}
    >
      <div className="max-w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center h-20 mt-2 md:mt-6 mb-2">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" passHref>
            <div className="relative w-16 h-16 cursor-pointer">
              <Image
                src="/QuadTree.svg"
                alt="QuadTree Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <h1 className="text-xl font-bold ml-2 md:ml-0">QuadTree.ai</h1>
        </div>
        <div className="flex-1 flex justify-center mt-2 md:mt-0">
          <Menu setActive={setActive}>{renderMenuItems()}</Menu>
        </div>
        <div className="flex-none md:flex-1 hidden md:block" />
      </div>
    </div>
  );
}

export function NavbarDemo() {
  return (
    <div className="relative w-full">
      <Navbar />
    </div>
  );
}

export default NavbarDemo;
