import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/courses/")({
  head: () => ({ meta: [{ title: "Courses | MIND Creative School" }, { name: "description", content: "Courses at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "Courses | MIND Creative School" }, { property: "og:description", content: "Courses at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="Courses">This page is being prepared.</PageHero>,
});
