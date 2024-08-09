"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import navData from "./navdata";  // Ensure navData is correctly imported

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center bg-white dark:bg-gray-900">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const renderLinkItem = (link) => (
    <Link key={link.name} href={link.href} passHref>
      <a className="hover:underline">{link.name}</a>
    </Link>
  );

  const renderMenuItem = (item) => (
    <MenuItem key={item.name} setActive={setActive} active={active === item.name} item={item.name}>
      <div className={`flex ${item.layout || 'flex-col'} space-y-4 text-sm px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-md`}>
        {item.columns.map(column =>
          column.links.map(link => renderLinkItem(link))
        )}
      </div>
    </MenuItem>
  );

  return (
    <div
      className={cn("fixed top-0 inset-x-0 bg-white dark:bg-gray-800 shadow-md py-2", className)}
    >
      <Menu setActive={setActive}>
        {navData.map(renderMenuItem)}
      </Menu>
    </div>
  );
}

export default NavbarDemo;
