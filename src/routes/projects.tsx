import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Student Projects | MIND Creative School" }, { name: "description", content: "Student Projects at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "Student Projects | MIND Creative School" }, { property: "og:description", content: "Student Projects at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="Student Projects">This page is being prepared.</PageHero>,
});
