"use client";
import React from "react";
import footerData from "./footerData";
import { cn } from "@/lib/utils";
import {
  BrandFacebook,
  BrandLinkedin,
  BrandInstagram,
  Icon as TablerIcon,
} from "tabler-icons-react";
import { IconBrandX } from '@tabler/icons-react';

// Define the mapping of icon names to the actual Icon components
const socialIcons: { [key: string]: TablerIcon } = {
  "brand-facebook": BrandFacebook,
  "brand-twitter": IconBrandX,
  "brand-linkedin": BrandLinkedin,
  "brand-instagram": BrandInstagram,
};

const Footer = () => {
  return (
    <footer className={cn("bg-black text-white py-12")}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.links.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-gray-200 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerData.links.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-gray-200 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              {footerData.socialMedia.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <IconComponent size={28} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} QuadTree.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
