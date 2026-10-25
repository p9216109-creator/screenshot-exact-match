import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Quote, Sparkles } from "lucide-react";
import hero from "@/assets/hero-3d.jpg";
import { Button } from "@/components/ui/button";
import { CourseCard, SectionHead } from "@/components/site/bits";
import { useDemo } from "@/components/site/demo-context";
import { COURSES, FAQS, TESTIMONIALS } from "@/lib/site";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/")({
  head: () => pageHead("Design your future", "Explore interior, fashion, graphic design, animation and web courses at MIND Creative School in Mangalore and Udupi. Book a free demo."),
  component: Index,
});
function Index() {
  const { open } = useDemo();
  return <>
    <section className="home-hero relative isolate overflow-hidden">
      <img src={hero} alt="Creative worlds of interior design, fashion, graphics and web development" className="hero-art absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
      <div className="hero-veil absolute inset-0 -z-10" />
      <div className="container-site flex min-h-[540px] items-center py-12 lg:min-h-[610px]">
        <div className="max-w-xl">
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary"><Sparkles className="h-4 w-4" /> Your creative journey starts here</p>
          <h1 className="text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl">MIND<br /><span className="text-primary">Creative School.</span></h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">Big ideas deserve a place to grow. Turn your creativity into real skills in design, animation and digital technology.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" variant="hero" onClick={() => open()}>Book a Free Demo <ArrowUpRight /></Button>
            <Button size="lg" variant="outline" asChild><Link to="/courses">Explore courses <ArrowRight /></Link></Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Hands-on learning</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Mangalore · Udupi</span></div>
        </div>
      </div>
    </section>
    <div className="border-y bg-ink text-ink-foreground"><div className="container-site flex flex-wrap items-center justify-between gap-4 py-5 text-sm font-medium"><span>Interior Design</span><span className="text-primary-glow">✦</span><span>Fashion Design</span><span className="text-primary-glow">✦</span><span>Graphic Design & Animation</span><span className="hidden text-primary-glow sm:block">✦</span><span>Web Development</span></div></div>
    <section className="container-site py-16 md:py-20">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5"><SectionHead eyebrow="Find your creative calling" title={<>A little curiosity.<br />A world of possibilities.</>} /><Button variant="outline" asChild><Link to="/courses">All courses <ArrowUpRight /></Link></Button></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{COURSES.filter(c => c.featured).map(c => <CourseCard key={c.slug} course={c} />)}</div>
    </section>
    <section className="border-y bg-secondary/50 py-16 md:py-20"><div className="container-site grid gap-10 md:grid-cols-2"><SectionHead eyebrow="More than a classroom" title="Make. Explore. Become.">Learn by doing, guided by people who care about your progress.</SectionHead><div className="grid gap-7 sm:grid-cols-2">{[["01", "Skills that stay with you", "From your first sketch to your final render, practise with professional tools."], ["02", "Ideas made real", "Build your confidence through assignments, practical projects and workshops."], ["03", "Your own creative voice", "Develop a portfolio that reflects your interests and the skills you have learned."], ["04", "A step towards your career", "Get career guidance and placement assistance as you prepare for the next chapter."]].map(([n,t,p]) => <div key={n}><span className="text-sm font-semibold text-primary">{n} /</span><h3 className="mt-3 text-lg font-bold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p}</p></div>)}</div></div></section>
    <section className="container-site py-16 md:py-20"><SectionHead eyebrow="The MIND community" title="Different dreams. Shared beginnings." /><div className="mt-9 grid gap-6 md:grid-cols-2">{TESTIMONIALS.map(t => <article key={t.name} className="rounded-lg border bg-card p-7"><Quote className="h-7 w-7 text-primary" /><blockquote className="mt-4 leading-relaxed">“{t.quote}”</blockquote><p className="mt-5 font-bold">{t.name}</p><p className="mt-1 text-xs text-muted-foreground">{t.role}</p></article>)}</div></section>
    <section className="container-site grid gap-10 py-8 md:grid-cols-[1fr_1.4fr]"><SectionHead eyebrow="A few things you might ask" title="Good questions. Clear answers." /><div>{FAQS.slice(0,8).map(f => <details key={f.q} className="group border-b py-5"><summary className="cursor-pointer list-none flex items-center justify-between gap-5 font-semibold">{f.q}<span className="text-primary group-open:rotate-45 text-xl">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p></details>)}</div></section>
    <section className="mt-16 bg-primary-soft py-16"><div className="container-site flex flex-wrap items-center justify-between gap-8"><div><p className="eyebrow">Take the first step</p><h2 className="mt-3 text-3xl font-bold md:text-5xl">Let’s see where your MIND takes you.</h2><p className="mt-4 text-muted-foreground">Meet our team. Explore a course. Find what feels right.</p></div><Button size="lg" variant="hero" onClick={() => open()}>Book a Free Demo <ArrowUpRight /></Button></div></section>
  </>;
}
