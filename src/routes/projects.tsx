import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Mail, Phone, Quote } from "lucide-react";
import { PageHero, SectionHead, CourseCard } from "@/components/site/bits";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Button } from "@/components/ui/button";
import { SITE, COURSES, TESTIMONIALS, waLink } from "@/lib/site";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-3d.jpg";
export const Route = createFileRoute("/projects")({ head: () => pageHead("Student Projects", "Explore the practical project areas in MIND Creative School courses."), component: Page });
function Page() { return <><PageHero eyebrow="MIND Creative School" title="Ideas become something real.">Explore the practical project areas in MIND Creative School courses.</PageHero><section className="container-site"><p className="mb-8 max-w-2xl text-muted-foreground">Student portfolio work will be shared here with permission. Until then, explore the project areas below. These images illustrate course disciplines, not student submissions.</p><div className="grid gap-8 sm:grid-cols-2">{COURSES.filter(c => c.featured).map(c => <article key={c.slug}><img src={c.image} alt={`${c.name} course illustration`} className="aspect-[4/3] w-full rounded-lg object-cover" /><div className="flex items-center justify-between gap-4 pt-4"><div><h2 className="text-xl font-bold">{c.name}</h2><p className="mt-2 text-sm text-muted-foreground">{c.activities.join(" · ")}</p></div><Button size="icon" variant="outline" asChild><Link to="/courses/$slug" params={{slug:c.slug}} aria-label={`Explore ${c.name}`}><ArrowUpRight /></Link></Button></div></article>)}</div></section></>; }
