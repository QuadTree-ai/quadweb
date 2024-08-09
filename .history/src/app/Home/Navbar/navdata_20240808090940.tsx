// src/app/Home/Navbar/navData.tsx
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

import React from 'react';

type Link = {
  name: string;
  href: string;
  component?: React.ReactNode; // Optional custom component for each link
};

type Column = {
  title: string;
  links: Link[];
  image?: {
    src: string;
    alt: string;
  };
};

type NavSection = {
  name: string;
  columns: Column[];
};

const navData: NavSection[] = [
  {
    name: "Research",
    columns: [
      {
        title: "Our Research",
        links: [
          { name: "Overview", href: "/overview", component: <HoveredLink href="/overview">Overview</HoveredLink> },
          { name: "Index", href: "/index", component: <HoveredLink href="/index">Index</HoveredLink> },
        ],
      },
      {
        title: "Latest Advancements",
        links: [
          { name: "CliniQX", href: "/cliniqx", component: <HoveredLink href="/cliniqx">CliniQX</HoveredLink> },
        ],
        image: { src: "/background/gradient.jpg", alt: "Explore CliniQX Advancements" },
      },
    ],
  },
  {
    name: "Products",
    columns: [
      {
        title: "CliniQX",
        links: [
          { name: "For Everyone", href: "/for-everyone", component: <HoveredLink href="/for-everyone">For Everyone</HoveredLink> },
          { name: "Pricing", href: "/pricing", component: <HoveredLink href="/pricing">Pricing</HoveredLink> },
        ],
      },
      {
        title: "API",
        links: [
          { name: "Platform Overview", href: "/platform-overview", component: <HoveredLink href="/platform-overview">Platform Overview</HoveredLink> },
          { name: "Pricing", href: "/api-pricing", component: <HoveredLink href="/api-pricing">Pricing</HoveredLink> },
          { name: "Documentation", href: "/documentation", component: <HoveredLink href="/documentation">Documentation</HoveredLink> },
          { name: "API Login", href: "/api-login", component: <HoveredLink href="/api-login">API Login</HoveredLink> },
        ],
      },
      {
        title: "Explore More",
        links: [
          { name: "QuadTree for Business", href: "/business", component: <HoveredLink href="/business">QuadTree for Business</HoveredLink> },
          { name: "Stories", href: "/stories", component: <HoveredLink href="/stories">Stories</HoveredLink> },
        ],
      },
    ],
  },
  {
    name: "Company",
    columns: [
      {
        title: "About QuadTree.ai",
        links: [
          { name: "About Us", href: "/about", component: <HoveredLink href="/about">About Us</HoveredLink> },
          { name: "Our Charter", href: "/charter", component: <HoveredLink href="/charter">Our Charter</HoveredLink> },
          { name: "Residency", href: "/residency", component: <HoveredLink href="/residency">Residency</HoveredLink> },
        ],
      },
      {
        title: "Company News & Updates",
        links: [
          { name: "News", href: "/news", component: <HoveredLink href="/news">News</HoveredLink> },
          { name: "Security and Privacy", href: "/security", component: <HoveredLink href="/security">Security and Privacy</HoveredLink> },
          { name: "Careers", href: "/careers", component: <HoveredLink href="/careers">Careers</HoveredLink> },
        ],
        image: { src: "/background/spring-update-image.jpg", alt: "Read the Latest Company Updates" },
      },
    ],
  },
];

export default navData;
