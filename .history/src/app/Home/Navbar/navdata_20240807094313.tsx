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
            { name: "GPT-4o", href: "/gpt-4o" },
            { name: "GPT-4o mini", href: "/gpt-4o-mini" },
            { name: "DALLE-3", href: "/dalle-3" },
            { name: "Sora", href: "/sora" },
          ],
          image: { src: "/images/gpt4o-image.png", alt: "Hello GPT-4o" },
        },
      ],
    },
    {
      name: "Products",
      columns: [
        {
          title: "ChatGPT",
          links: [
            { name: "For Everyone", href: "/for-everyone" },
            { name: "For Teams", href: "/for-teams" },
            { name: "For Enterprises", href: "/for-enterprises" },
            { name: "For Education", href: "/for-education" },
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
  