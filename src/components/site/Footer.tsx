import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/mind-logo.png.asset.json";
import { COURSES, SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-ink-foreground">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-2xl bg-card p-3">
            <img src={logo.url} alt="MIND Creative School logo" className="h-10 w-auto" loading="lazy" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">
            A creative education institute offering job-oriented, skill-based courses in design, animation, coding and software — in Mangalore and Udupi.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            {[
              ["/about", "About Us"],
              ["/courses", "Courses"],
              ["/projects", "Student Projects"],
              ["/workshops", "Workshops"],
              ["/placements", "Placements & Careers"],
              ["/contact", "Contact"],
            ].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-primary-glow">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Courses</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            {COURSES.slice(0, 6).map((c) => (
              <li key={c.slug}><Link to="/courses/$slug" params={{ slug: c.slug }} className="hover:text-primary-glow">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 text-sm text-ink-foreground/80">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Contact</h3>
          {SITE.branches.map((b) => (
            <p key={b.city} className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span><strong className="text-ink-foreground">{b.city}:</strong> {b.address}</span></p>
          ))}
          {SITE.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="flex gap-2 hover:text-primary-glow"><Phone className="h-4 w-4" />{p.label}</a>
          ))}
          <a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-primary-glow"><Mail className="h-4 w-4" />{SITE.email}</a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="inline-block font-semibold text-primary-glow">Chat on WhatsApp →</a>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-ink-foreground/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} MIND Creative School. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary-glow">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-glow">Terms & Conditions</Link>
            <Link to="/staff" className="hover:text-primary-glow">Staff login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
