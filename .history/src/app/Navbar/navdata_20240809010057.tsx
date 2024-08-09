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
          { name: "Security and Privacy", href: "/security" },
          { name: "Careers", href: "/careers" },
        ],
        image: { src: "/background/spring-update-image.jpg", alt: "Spring Update" },
      },
    ],
  },
];

export default navData;
