import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "cliniQX",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://cliniqx.com",
  },
];
