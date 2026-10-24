import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/staff")({
  head: () => ({ meta: [{ title: "Staff Login | MIND Creative School" }, { name: "description", content: "Staff Login at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "Staff Login | MIND Creative School" }, { property: "og:description", content: "Staff Login at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="Staff Login">This page is being prepared.</PageHero>,
});
