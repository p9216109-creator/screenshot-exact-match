import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us | MIND Creative School" }, { name: "description", content: "About Us at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "About Us | MIND Creative School" }, { property: "og:description", content: "About Us at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="About Us">This page is being prepared.</PageHero>,
});
