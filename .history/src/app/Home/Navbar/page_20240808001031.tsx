// Assuming this is in src/app/Home/Navbar/Navbar.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import navData from "./navdata";  // Ensure this path is correct
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => setActive(item);
  const handleMouseLeave = () => setActive(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} onMouseLeave={handleMouseLeave}>
        {navData.map((section) => (
          <MenuItem key={section.name} item={section.name} setActive={setActive} active={active === section.name}>
            {section.columns.map((column, index) => (
              <div key={index} className="grid grid-cols-2 gap-10 p-4">
                <h4 className="col-span-2 font-bold text-lg">{column.title}</h4>
                {column.links.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm hover:text-blue-500 dark:hover:text-blue-300">
                    {link.name}
                  </a>
                ))}
                {column.image && (
                  <div className="col-span-2 mt-2">
                    <Image
                      src={column.image.src}
                      alt={column.image.alt}
                      width={200}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
