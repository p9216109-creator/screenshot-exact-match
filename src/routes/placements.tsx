import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Mail, Phone, Quote } from "lucide-react";
import { PageHero, SectionHead, CourseCard } from "@/components/site/bits";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Button } from "@/components/ui/button";
import { SITE, COURSES, TESTIMONIALS, waLink } from "@/lib/site";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-3d.jpg";
export const Route = createFileRoute("/placements")({ head: () => pageHead("Placements & Careers", "Explore career guidance and placement assistance at MIND Creative School."), component: Page });
function Page() { return <><PageHero eyebrow="MIND Creative School" title="Your skills. Your next chapter.">Explore career guidance and placement assistance at MIND Creative School.</PageHero><section className="container-site"><div className="grid gap-12 md:grid-cols-2"><SectionHead eyebrow="Beyond the classroom" title="Build a portfolio. Find your direction.">Career guidance and placement assistance help you prepare for opportunities in creative industries. Employment is not guaranteed.</SectionHead><div className="space-y-5">{["Develop practical skills through projects and assignments.", "Build a portfolio that shows your creative thinking and technical abilities.", "Discuss career pathways and placement assistance with our team."].map(t => <p className="border-b pb-5 text-lg" key={t}>{t}</p>)}<Button asChild><Link to="/contact">Speak to our team <ArrowUpRight /></Link></Button></div></div><div className="mt-16 grid gap-6 md:grid-cols-2">{TESTIMONIALS.map(t => <article key={t.name} className="rounded-lg border bg-card p-6"><Quote className="h-6 w-6 text-primary" /><p className="mt-4">“{t.quote}”</p><h3 className="mt-5 font-bold">{t.name}</h3><p className="mt-1 text-sm text-muted-foreground">{t.role}</p></article>)}</div></section></>; }
