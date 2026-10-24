import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import type { Course } from "@/lib/site";
import { waLink } from "@/lib/site";
import { Tilt } from "./Tilt";
import { useDemo } from "./demo-context";

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-3d transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-aura" />
      <div className="container-site relative py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function CourseCard({ course }: { course: Course }) {
  const { open } = useDemo();
  const hours = course.programmes[0]?.duration;
  return (
    <Tilt>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-shadow hover:shadow-3d">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={course.image} alt={`${course.name} at MIND Creative School`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur">{course.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-bold">{course.name}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{course.summary}</p>
          <p className="mt-4 text-xs font-medium text-muted-foreground">
            {course.programmes.length > 1 ? `${course.programmes.length} programmes · from ${course.programmes.at(-1)?.duration}` : hours}
          </p>
          <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4">
            <Link to="/courses/$slug" params={{ slug: course.slug }} className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              View course <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button onClick={() => open(course.name)} className="text-sm font-medium text-muted-foreground hover:text-foreground">Enquire now</button>
          </div>
        </div>
      </article>
    </Tilt>
  );
}

export function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-muted-foreground">{children}</p>}
    </div>
  );
}
