import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | MIND Creative School" }, { name: "description", content: "Privacy Policy at MIND Creative School, Mangalore and Udupi." }, { property: "og:title", content: "Privacy Policy | MIND Creative School" }, { property: "og:description", content: "Privacy Policy at MIND Creative School." }] }),
  component: () => <PageHero eyebrow="MIND Creative School" title="Privacy Policy">This page is being prepared.</PageHero>,
});
