import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions | MIND Creative School" }, { name: "description", content: "Terms & Conditions at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "Terms & Conditions | MIND Creative School" }, { property: "og:description", content: "Terms & Conditions at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="Terms & Conditions">This page is being prepared.</PageHero>,
});
