import { describe, expect, it } from "vitest";
import { COURSES, isUpcoming } from "@/lib/site";
describe("Existing course and workshop rules", () => {
  it("keeps the master interior diploma at 600 hours", () => {
    expect(COURSES.find(c => c.slug === "interior-design")?.programmes[0]?.duration).toBe("600 hours");
  });
  it("never labels a past workshop as upcoming", () => {
    expect(isUpcoming({ slug: "past", title: "Past", description: "", date: "2026-01-01", mode: "Classroom", free: true, status: "upcoming" }, new Date("2026-10-25"))).toBe(false);
  });
});