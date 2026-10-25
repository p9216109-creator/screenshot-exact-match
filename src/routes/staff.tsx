import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useHydrated } from "@tanstack/react-router";
import { Loader2, LogOut, RefreshCw, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/bits";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/staff")({
  head: () => pageHead("Staff Login", "Secure enquiry management for authorised MIND Creative School staff."),
  component: Staff,
});
function Staff() {
  const hydrated = useHydrated();
  const queryClient = useQueryClient();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const userQuery = useQuery({ queryKey: ["staff-user"], enabled: hydrated, queryFn: async () => (await supabase.auth.getUser()).data.user });
  const user = userQuery.data;
  const access = useQuery({ queryKey: ["staff-access", user?.id], enabled: !!user, queryFn: async () => {
    if (!user) return false;
    const { data, error } = await supabase.rpc("is_staff", { _user_id: user.id });
    if (error) throw error;
    return data;
  }});
  const enquiries = useQuery({ queryKey: ["staff-enquiries", user?.id], enabled: !!user && access.data === true, queryFn: async () => {
    const { data, error } = await supabase.from("enquiries").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  }});
  async function signIn(provider: "google" | "lovable") {
    setBusy(true); setError("");
    try {
      const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: `${window.location.origin}/staff` });
      if (result.error) setError(result.error.message);
      await queryClient.invalidateQueries({ queryKey: ["staff-user"] });
    } catch { setError("Sign-in could not be completed. Please try again."); }
    finally { setBusy(false); }
  }
  async function signOut() {
    await supabase.auth.signOut();
    queryClient.removeQueries({ queryKey: ["staff-enquiries"] });
    queryClient.removeQueries({ queryKey: ["staff-access"] });
    await queryClient.invalidateQueries({ queryKey: ["staff-user"] });
  }
  const rows = enquiries.data?.filter(e => (filter === "all" || e.status === filter) && `${e.full_name} ${e.mobile} ${e.course}`.toLowerCase().includes(search.toLowerCase())) ?? [];
  return <><PageHero eyebrow="MIND team" title="Staff workspace.">Course enquiries and demo requests, in one place.</PageHero><section className="container-site">
    {!hydrated || userQuery.isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : !user ? <div className="max-w-md border-y py-10"><ShieldCheck className="h-8 w-8 text-primary" /><h2 className="mt-4 text-2xl font-bold">Staff sign-in</h2><p className="mt-3 text-sm text-muted-foreground">Sign in with your authorised institute account.</p><div className="mt-6 grid gap-3"><Button variant="outline" disabled={busy} onClick={() => signIn("google")}>Continue with Google</Button><Button disabled={busy} onClick={() => signIn("lovable")}>Sign in with Lovable</Button></div></div> : <>
      <div className="mb-6 flex items-center justify-between gap-4"><p className="text-sm text-muted-foreground">{user.email}</p><Button variant="outline" onClick={signOut}><LogOut /> Sign out</Button></div>
      {access.isLoading ? <Loader2 className="animate-spin" /> : access.error ? <p role="alert">Could not check your access. Please try again.</p> : !access.data ? <div className="border-y py-10"><h2 className="text-xl font-bold">Staff access required</h2><p className="mt-3 text-muted-foreground">Your account has not been authorised to view enquiries. Ask the institute administrator to grant staff access.</p></div> : <>
      <div className="flex flex-wrap items-center gap-3 border-y py-5"><input aria-label="Search enquiries" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, mobile or course" className="h-10 min-w-0 rounded-lg border bg-card px-3 text-sm" /><select aria-label="Filter enquiry status" value={filter} onChange={e => setFilter(e.target.value)} className="h-10 rounded-lg border bg-card px-3 text-sm"><option value="all">All statuses</option>{["new", "contacted", "enrolled", "closed"].map(s => <option key={s}>{s}</option>)}</select><Button size="icon" variant="outline" aria-label="Refresh enquiries" onClick={() => enquiries.refetch()}><RefreshCw /></Button><span className="text-sm text-muted-foreground">{rows.length} enquiries</span></div>
      {enquiries.isLoading ? <p className="py-8">Loading enquiries…</p> : enquiries.error ? <p role="alert" className="py-8 text-destructive">Could not load enquiries. Please refresh.</p> : rows.length === 0 ? <p className="py-12 text-muted-foreground">No enquiries match this view.</p> : <div className="divide-y">{rows.map(e => <article key={e.id} className="grid gap-5 py-6 md:grid-cols-[1fr_1.5fr_auto]"><div><h2 className="font-bold">{e.full_name}</h2><a className="mt-2 block text-sm text-primary" href={`tel:+91${e.mobile}`}>{e.mobile}</a>{e.email && <a className="mt-1 block break-all text-sm text-muted-foreground" href={`mailto:${e.email}`}>{e.email}</a>}<p className="mt-2 text-xs text-muted-foreground">{new Date(e.created_at).toLocaleString("en-IN")}</p></div><div><p className="font-semibold">{e.course}</p><p className="mt-1 text-sm text-muted-foreground">{e.branch} · {e.mode ?? "No mode preference"} · {e.kind}</p>{e.message && <p className="mt-3 whitespace-pre-wrap break-words text-sm">{e.message}</p>}</div><select aria-label={`Status for ${e.full_name}`} value={e.status} className="h-10 rounded-lg border bg-card px-3 text-sm" onChange={async event => {
        setError(""); const { error } = await supabase.from("enquiries").update({ status: event.target.value }).eq("id", e.id);
        if (error) setError("The status could not be saved."); else await enquiries.refetch();
      }}>{["new", "contacted", "enrolled", "closed"].map(s => <option key={s}>{s}</option>)}</select></article>)}</div>}
      </>}
    </>}{error && <p role="alert" className="mt-5 text-sm text-destructive">{error}</p>}
  </section></>;
}
