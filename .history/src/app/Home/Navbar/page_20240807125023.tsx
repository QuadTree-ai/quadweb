"use client"

// navbar.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import navData from './navdata'; // Adjust the import path to where your navData is located

function Navbar({ className = '' }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                {navData.map((section) => (
                    <MenuItem key={section.name} setActive={setActive} active={active} item={section.name}>
                        {section.columns.map((column, idx) => (
                            <div key={idx} className="space-y-4 text-sm">
                                <h4 className="font-bold">{column.title}</h4>
                                <ul>
                                    {column.links.map((link) => (
                                        <li key={link.name}>
                                            <HoveredLink href={link.href}>{link.name}</HoveredLink>
                                        </li>
                                    ))}
                                </ul>
                                {column.image && (
                                    <div className="mt-4">
                                        <Image
                                            src={column.image.src}
                                            alt={column.image.alt}
                                            width={100}
                                            height={50}
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

export default Navbar;
