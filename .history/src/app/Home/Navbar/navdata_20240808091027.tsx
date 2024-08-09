// src/app/Home/Navbar/navData.tsx

import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

type Link = {
  name: string;
  href: string;
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
        title: "Our research",
        links: [
          { name: "Overview", href: "/overview" },
          { name: "Index", href: "/index" },
        ],
      },
      {
        title: "Latest advancements",
        links: [{ name: "cliniQX", href: "/cliniqx" }],
        image: { src: "/background/gradient.jpg", alt: "Explore cliniQX advancements" },
      },
    ],
  },
  {
    name: "Products",
    columns: [
      {
        title: "cliniQX",
        links: [
          { name: "For Everyone", href: "/for-everyone" },
          { name: "Pricing", href: "/pricing" },
        ],
      },
      {
        title: "API",
        links: [
          { name: "Platform overview", href: "/platform-overview" },
          { name: "Pricing", href: "/api-pricing" },
          { name: "Documentation", href: "/documentation" },
          { name: "API login", href: "/api-login" },
        ],
      },
      {
        title: "Explore more",
        links: [
          { name: "quadtree for business", href: "/business" },
          { name: "Stories", href: "/stories" },
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
          { name: "About us", href: "/about" },
          { name: "Our Charter", href: "/charter" },
          { name: "Residency", href: "/residency" },
        ],
      },
      {
        title: "Company News & Updates",
        links: [
          { name: "News", href: "/news" },
          { name: "Security and Privacy", href: "/security" },
          { name: "Careers", href: "/careers" },
        ],
        image: { src: "/background/spring-update-image.jpg", alt: "Read the latest company updates" },
      },
    ],
  },
];

export default navData;
