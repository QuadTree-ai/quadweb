// src/app/Home/Footer/page.tsx

"use client";
import React from "react";
import footerData from "./footerData";
import { cn } from "@/lib/utils";
import {
  BrandFacebook,
  BrandTwitter,
  BrandLinkedin,
  BrandInstagram,
  Icon,
} from "tabler-icons-react";

// Define the mapping of icon names to the actual Icon components
const socialIcons: { [key: string]: Icon } = {
  "brand-facebook": BrandFacebook,
  "brand-twitter": BrandTwitter,
  "brand-linkedin": BrandLinkedin,
  "brand-instagram": BrandInstagram,
};

const Footer = () => {
  return (
    <footer className={cn("bg-black text-white py-12 mt-12")}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-xl font-semibold text-gray-500 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerData.links.quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerData.links.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex space-x-6 mt-8 md:mt-0">
            {footerData.socialMedia.map((social) => {
              const IconComponent = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="hover:text-gray-400"
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} QuadTree.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
