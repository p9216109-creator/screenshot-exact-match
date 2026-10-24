import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/placements")({
  head: () => ({ meta: [{ title: "Placements & Careers | MIND Creative School" }, { name: "description", content: "Placements & Careers at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "Placements & Careers | MIND Creative School" }, { property: "og:description", content: "Placements & Careers at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="Placements & Careers">This page is being prepared.</PageHero>,
});
