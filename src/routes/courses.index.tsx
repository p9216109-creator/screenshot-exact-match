import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHero, CourseCard } from "@/components/site/bits";
import { Button } from "@/components/ui/button";
import { CATEGORIES, COURSES } from "@/lib/site";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/courses/")({
  head: () => pageHead("Courses", "Explore diplomas and certificates in interior design, fashion, graphics, animation, web development and professional creative software."),
  component: Courses,
});
function Courses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All courses");
  const courses = COURSES.filter(c => (category === "All courses" || c.category === category) && `${c.name} ${c.summary} ${c.tools.join(" ")}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <><PageHero eyebrow="Find your direction" title="Courses for curious minds.">From a new creative beginning to your next professional skill. Find your course at MIND.</PageHero><section className="container-site">
    <div className="flex flex-wrap items-center gap-3 border-y py-5"><div className="relative w-full sm:max-w-sm"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input aria-label="Search courses" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search courses or software" className="h-10 w-full rounded-lg border bg-card pl-10 pr-3 text-sm" /></div><select aria-label="Course category" value={category} onChange={e => setCategory(e.target.value)} className="h-10 max-w-full rounded-lg border bg-card px-3 text-sm">{["All courses", ...CATEGORIES].map(c => <option key={c}>{c}</option>)}</select><p className="text-xs text-muted-foreground sm:ml-auto">{courses.length} courses</p></div>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{courses.map(c => <CourseCard course={c} key={c.slug} />)}</div>{courses.length === 0 && <div className="py-20 text-center"><h2 className="text-xl font-bold">No courses found</h2><p className="mt-2 text-muted-foreground">Try another course name or software.</p><Button className="mt-4" variant="outline" onClick={() => { setQuery(""); setCategory("All courses"); }}>Clear filters</Button></div>}
  </section></>;
}
