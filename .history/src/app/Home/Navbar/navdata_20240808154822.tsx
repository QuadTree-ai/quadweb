// src/app/Home/Navbar/navdata.tsx

const navData = [
  {
    name: "Research",
    columns: [
      {
        title: "Our research",
        links: [
          { name: "Overview", href: "/overview" },
        ],
      },
      {
        title: "Latest advancements",
        links: [
          { name: "cliniQX", href: "/cliniqx" },
        ],
        image: { src: "/background/gradient.jpg", alt: "Discover cliniQX" },
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
          { name: "QuadTree for business", href: "/business" },
          { name: "Stories", href: "/stories" },
        ],
      },
    ],
  },
  {
    name: "Company",
    columns: [
      {
        title: "Details",
        links: [
          { name: "About us", href: "/about" },
          { name: "Our Charter", href: "/charter" },
          { name: "Residency", href: "/residency" },
        ],
      },
      {
        title: "More",
        links: [
          { name: "News", href: "/news" },
          { name: "Security and Privacy", href: "/security" },
          { name: "Careers", href: "/careers" },
        ],
        image: { src: "/background/spring-update-image.jpg", alt: "Spring Update" },
      },
    ],
  },
];

export default navData;
