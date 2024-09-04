import { BentoCard, BentoGrid } from "@/UI/components/magicui/bento-grid";
import nonGramRef from "@/assets/projects-cards/non-gram.jpeg";

const features = [
  {
    name: "NONO VS GRAM",
    description: "A Nonogram versus game",
    href: "/",
    cta: "Learn more",
    background: (
      <img className="absolute opacity-50" alt="" src={nonGramRef.src} />
    ),
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 text-black",
  },
];

export function ProjectsIndex() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
