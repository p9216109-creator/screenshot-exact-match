import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getCourse } from "@/lib/site";
export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => { const c = getCourse(params.slug); if (!c) throw notFound(); return { slug: c.slug }; },
  head: ({ loaderData }) => { const c = loaderData ? getCourse(loaderData.slug) : undefined; const t = c ? `${c.name} Course | MIND Creative School` : "Course"; return { meta: [{ title: t }, { name: "description", content: c?.summary ?? "" }, { property: "og:title", content: t }, { property: "og:description", content: c?.summary ?? "" }] }; },
  component: CoursePage,
});
function CoursePage() {
  const c = getCourse(Route.useLoaderData().slug)!;
  return (<><PageHero eyebrow={c.category} title={c.name}>{c.tagline}</PageHero>
    <section className="container-site grid gap-10 lg:grid-cols-2">
      <div className="space-y-4">{c.overview.map((p) => <p key={p}>{p}</p>)}
        <h2 className="text-2xl font-bold">Programmes</h2><ul className="space-y-2">{c.programmes.map((p) => <li key={p.name}>{p.name} — {p.duration}</li>)}</ul>
        <h2 className="text-2xl font-bold">Tools</h2><p>{c.tools.join(", ")}</p></div>
      <div className="rounded-3xl border bg-card p-6"><EnquiryForm defaultCourse={c.name} compact /></div>
    </section></>);
}
