import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getCourse } from "@/lib/site";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => { const c = getCourse(params.slug); if (!c) throw notFound(); return { slug: c.slug }; },
  head: ({ loaderData }) => { const c = loaderData ? getCourse(loaderData.slug) : undefined; return pageHead(c ? `${c.name} Course` : "Course", c?.summary ?? "Explore creative courses at MIND Creative School."); },
  component: CoursePage,
});
function CoursePage() {
  const c = getCourse(Route.useLoaderData().slug);
  if (!c) return null;
  return (<><PageHero eyebrow={c.category} title={c.name}>{c.tagline}</PageHero>
    <section className="container-site grid gap-10 lg:grid-cols-2">
      <div className="space-y-6"><img src={c.image} alt={c.name} className="aspect-[4/3] w-full rounded-lg object-cover" />{c.overview.map((p) => <p key={p} className="leading-relaxed text-muted-foreground">{p}</p>)}
        <h2 className="text-2xl font-bold">Programmes & duration</h2><ul className="divide-y border-y">{c.programmes.map((p) => <li className="flex flex-wrap justify-between gap-3 py-4 text-sm" key={p.name}><span className="font-medium">{p.name}</span><span className="text-primary">{p.duration}</span></li>)}</ul>
        <h2 className="text-2xl font-bold">Tools & skills</h2><p className="text-muted-foreground">{c.tools.join(" · ")}</p><h2 className="text-2xl font-bold">Learning in practice</h2><p className="text-muted-foreground">{c.activities.join(" · ")}</p><h2 className="text-2xl font-bold">Career pathways</h2><p className="text-muted-foreground">{c.careers.join(" · ")}</p><p className="text-sm text-muted-foreground">Career guidance and placement assistance are available. Employment is not guaranteed.</p></div>
      <div className="self-start border-t pt-6 lg:sticky lg:top-28"><h2 className="mb-2 text-2xl font-bold">Make your first move.</h2><p className="mb-6 text-sm text-muted-foreground">Ask about fees, eligibility and the next batch.</p><EnquiryForm defaultCourse={c.name} compact /></div>
    </section></>);
}
