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
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
      <div className="max-w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center h-20">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" passHref>
            <a className="flex items-center space-x-2">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/QuadTree.svg"
                  alt="QuadTree Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw, 
                  33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h1 className="text-lg md:text-xl font-bold">QuadTree.ai</h1>
            </a>
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`flex-col md:flex-row md:flex ${
            menuOpen ? "flex" : "hidden"
          } flex-1 justify-center mt-4 md:mt-0`}
        >
          <Menu setActive={setActive}>{renderMenuItems()}</Menu>
        </div>
        <div className="flex-none md:flex-1" />
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
