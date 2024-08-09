// navdata.tsx
// Navigation data for the navbar component.

const navData = [
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
          links: [
            { name: "cliniQX", href: "/cliniqx" },
          ],
          image: { src: "/images/gpt4o-image.png", alt: "Hello GPT-4o" },
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
            { name: "OpenAI for business", href: "/business" },
            { name: "Stories", href: "/stories" },
          ],
        },
      ],
    },
    {
      name: "Company",
      columns: [
        {
          title: "",
          links: [
            { name: "About us", href: "/about" },
            { name: "Our Charter", href: "/charter" },
            { name: "Residency", href: "/residency" },
          ],
        },
        {
          title: "",
          links: [
            { name: "News", href: "/news" },
            { name: "Security and Privacy", href: "/security" },
            { name: "Careers", href: "/careers" },
          ],
          image: { src: "/images/spring-update-image.png", alt: "Spring Update" },
        },
      ],
    },
  ];
  
  export default navData;
  