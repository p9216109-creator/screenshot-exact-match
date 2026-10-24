import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** 3D tilt-on-pointer wrapper. Disabled for reduced motion and touch. */
export function Tilt({ children, className, max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div className="perspective h-full">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className={cn("preserve-3d h-full transition-transform duration-300 ease-out", className)}
      >
        {children}
      </div>
    </div>
  );
}
