import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/mind-logo.png.asset.json";
import { ANNOUNCEMENT, CATEGORIES, COURSES, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { useDemo } from "./demo-context";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Student Projects" },
  { to: "/workshops", label: "Workshops" },
  { to: "/placements", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { open: openDemo } = useDemo();
  const phone = SITE.phones[0];
  return (
    <>
      {ANNOUNCEMENT.enabled && (
        <div className="bg-ink text-ink-foreground">
          <div className="container-site flex items-center justify-center gap-3 py-2 text-center text-xs sm:text-sm">
            <span>{ANNOUNCEMENT.text}</span>
            <Button variant="link" onClick={() => openDemo()} className="hidden h-auto p-0 font-semibold text-primary-glow sm:inline">
              {ANNOUNCEMENT.cta} →
            </Button>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
          <Link to="/" aria-label="MIND Creative School home" className="shrink-0">
            <img src={logo.url} alt="MIND Creative School logo" width={164} height={72} className="h-10 w-auto md:h-12" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <Link to="/courses" className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium hover:text-primary">
                Courses <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-6 rounded-3xl border bg-card p-6 shadow-3d">
                  {CATEGORIES.map((cat) => (
                    <div key={cat}>
                      <p className="eyebrow mb-2">{cat}</p>
                      <ul className="space-y-1">
                        {COURSES.filter((c) => c.category === cat).map((c) => (
                          <li key={c.slug}>
                            <Link to="/courses/$slug" params={{ slug: c.slug }} className="block rounded-lg px-2 py-1.5 text-sm hover:bg-secondary hover:text-primary">
                              {c.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-full px-4 py-2 text-sm font-medium hover:text-primary" activeProps={{ className: "text-primary" }}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {phone && <a href={`tel:${phone.tel}`} className="hidden items-center gap-2 text-sm font-medium 2xl:flex">
              <Phone className="h-4 w-4 text-primary" /> {phone.label}
            </a>}
            <Button variant="hero" onClick={() => openDemo()} className="hidden sm:inline-flex">Book a Free Demo</Button>
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)} className="lg:hidden" aria-label="Open menu" aria-expanded={open}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-ink/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-background p-6 animate-in slide-in-from-right">
            <div className="flex items-center justify-between">
              <img src={logo.url} alt="MIND Creative School" className="h-10 w-auto" />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu"><X className="h-6 w-6" /></Button>
            </div>
            <nav className="mt-8 flex flex-col gap-1 text-lg font-medium" onClick={() => setOpen(false)}>
              <Link to="/" className="rounded-xl px-3 py-3 hover:bg-secondary">Home</Link>
              <Link to="/courses" className="rounded-xl px-3 py-3 hover:bg-secondary">All Courses</Link>
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="rounded-xl px-3 py-3 hover:bg-secondary">{n.label}</Link>
              ))}
            </nav>
            <div className="mt-auto grid gap-3 pt-8">
              <Button variant="hero" size="lg" onClick={() => { setOpen(false); openDemo(); }}>Book a Free Demo</Button>
              {phone && <Button variant="outline" size="lg" asChild><a href={`tel:${phone.tel}`}><Phone /> Call {phone.label}</a></Button>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
