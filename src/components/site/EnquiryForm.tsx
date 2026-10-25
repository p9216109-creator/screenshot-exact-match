import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { COURSES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const enquirySchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  mobile: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=[6-9]\d{9}$)/, ""))
    .refine((v) => /^[6-9]\d{9}$/.test(v), "Enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .max(255)
    .optional()
    .transform((v) => (v ? v : undefined))
    .refine((v) => !v || z.string().email().safeParse(v).success, "Enter a valid email or leave it blank"),
  course: z.string().min(1, "Choose a course").max(120),
  branch: z.enum(["Mangalore", "Udupi", "Online"], { errorMap: () => ({ message: "Choose a branch" }) }),
  mode: z.enum(["Classroom", "Online", "Either"]).optional(),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept the privacy policy" }) }),
});

type Kind = "enquiry" | "demo" | "workshop";
const field =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export function EnquiryForm({ kind = "enquiry", defaultCourse, compact }: { kind?: Kind; defaultCourse?: string | undefined; compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // honeypot
    const parsed = enquirySchema.safeParse({
      full_name: fd.get("full_name"),
      mobile: fd.get("mobile"),
      email: fd.get("email") || undefined,
      course: fd.get("course"),
      branch: fd.get("branch") || undefined,
      mode: fd.get("mode") || undefined,
      message: (fd.get("message") as string) || undefined,
      consent: fd.get("consent") === "on",
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as string] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("sending");
    try {
      const { error } = await supabase.from("enquiries").insert({ ...parsed.data, email: parsed.data.email ?? null, mode: parsed.data.mode ?? null, message: parsed.data.message ?? null, kind, status: "new" });
      setState(error ? "error" : "done");
    } catch { setState("error"); }
  }

  if (state === "done")
    return (
      <div role="status" className="rounded-2xl bg-primary-soft p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-3 text-xl font-semibold">Thank you — we've received your request.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team will call you shortly. {kind === "demo" && "Your demo time will be confirmed by phone."}
        </p>
      </div>
    );

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1 text-xs font-medium text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label htmlFor={`${kind}-name`} className="mb-1.5 block text-sm font-medium">Full name *</label>
        <input id={`${kind}-name`} name="full_name" autoComplete="name" className={field} aria-invalid={!!errors["full_name"]} />
        {err("full_name")}
      </div>
      <div>
        <label htmlFor={`${kind}-mobile`} className="mb-1.5 block text-sm font-medium">Mobile number *</label>
        <input id={`${kind}-mobile`} name="mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" className={field} aria-invalid={!!errors["mobile"]} />
        {err("mobile")}
      </div>
      <div>
        <label htmlFor={`${kind}-email`} className="mb-1.5 block text-sm font-medium">Email <span className="text-muted-foreground">(optional)</span></label>
        <input id={`${kind}-email`} name="email" type="email" autoComplete="email" className={field} />
        {err("email")}
      </div>
      <div>
        <label htmlFor={`${kind}-course`} className="mb-1.5 block text-sm font-medium">Course of interest *</label>
        <select id={`${kind}-course`} name="course" defaultValue={defaultCourse ?? ""} className={field}>
          <option value="" disabled>Select a course</option>
          {COURSES.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {err("course")}
      </div>
      <div>
        <label htmlFor={`${kind}-branch`} className="mb-1.5 block text-sm font-medium">Preferred branch *</label>
        <select id={`${kind}-branch`} name="branch" defaultValue="" className={field}>
          <option value="" disabled>Select</option>
          <option>Mangalore</option>
          <option>Udupi</option>
          <option>Online</option>
        </select>
        {err("branch")}
      </div>
      <div>
        <label htmlFor={`${kind}-mode`} className="mb-1.5 block text-sm font-medium">Learning mode</label>
        <select id={`${kind}-mode`} name="mode" defaultValue="" className={field}>
          <option value="">No preference</option>
          <option>Classroom</option>
          <option>Online</option>
          <option>Either</option>
        </select>
      </div>
      <div className={cn(!compact && "sm:col-span-2")}>
        <label htmlFor={`${kind}-msg`} className="mb-1.5 block text-sm font-medium">Message <span className="text-muted-foreground">(optional)</span></label>
        <textarea id={`${kind}-msg`} name="message" rows={3} maxLength={1000} className={field} />
      </div>
      <div className={cn(!compact && "sm:col-span-2")}>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-primary" />
          <span>
            I agree to be contacted by MIND Creative School and accept the{" "}
            <a href="/privacy" className="font-medium text-primary underline">privacy policy</a>.
          </span>
        </label>
        {err("consent")}
      </div>
      {state === "error" && (
        <p role="alert" className={cn("rounded-xl bg-destructive/10 p-3 text-sm text-destructive", !compact && "sm:col-span-2")}>
          We couldn't send your request. Please try again or call +91 77953 18231.
        </p>
      )}
      <Button type="submit" variant="hero" size="lg" disabled={state === "sending"} className={cn(!compact && "sm:col-span-2")}>
        {state === "sending" ? <><Loader2 className="animate-spin" /> Sending…</> : kind === "demo" ? "Request free demo" : "Send enquiry"}
      </Button>
    </form>
  );
}
