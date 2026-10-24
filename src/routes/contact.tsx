import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | MIND Creative School" }, { name: "description", content: "Contact at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "Contact | MIND Creative School" }, { property: "og:description", content: "Contact at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="Contact">This page is being prepared.</PageHero>,
});
