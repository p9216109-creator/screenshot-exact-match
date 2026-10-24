import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/workshops")({
  head: () => ({ meta: [{ title: "Workshops | MIND Creative School" }, { name: "description", content: "Workshops at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "Workshops | MIND Creative School" }, { property: "og:description", content: "Workshops at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="Workshops">This page is being prepared.</PageHero>,
});
