import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Mail, Phone, Quote } from "lucide-react";
import { PageHero, SectionHead, CourseCard } from "@/components/site/bits";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Button } from "@/components/ui/button";
import { SITE, COURSES, TESTIMONIALS, waLink } from "@/lib/site";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-3d.jpg";
export const Route = createFileRoute("/workshops")({ head: () => pageHead("Workshops", "Find upcoming creative workshops at MIND Creative School."), component: Page });
function Page() { return <><PageHero eyebrow="MIND Creative School" title="Try something. Discover something.">Find upcoming creative workshops at MIND Creative School.</PageHero><section className="container-site"><div className="border-y py-12"><CalendarDays className="h-9 w-9 text-primary" /><h2 className="mt-5 text-2xl font-bold">New workshop dates are on the way.</h2><p className="mt-3 max-w-xl text-muted-foreground">No upcoming workshops are confirmed at the moment. Contact our team to ask about the next creative session.</p><Button className="mt-6" asChild><Link to="/contact">Enquire about workshops <ArrowUpRight /></Link></Button></div><div className="mt-12"><SectionHead eyebrow="Keep exploring" title="Creativity doesn’t wait." /><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{COURSES.filter(c => c.featured).map(c => <CourseCard key={c.slug} course={c} />)}</div></div></section></>; }
