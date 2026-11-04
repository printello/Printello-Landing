"use client";
import { useLayoutEffect, useRef } from "react";

// Sizes the wordmark so it bleeds slightly past both viewport edges, as on the reference.
export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const fit = () => {
      const el = ref.current; if (!el) return;
      el.style.fontSize = "100px";
      const w = el.scrollWidth;
      el.style.fontSize = `${(100 * window.innerWidth * 1.03) / w}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return (
    <section id="top" className="relative flex flex-col items-center overflow-hidden pt-16">
      <h1 ref={ref} className="display pointer-events-none relative z-10 whitespace-nowrap text-[var(--pewter)]" style={{ lineHeight: 0.85, paddingTop: "0.04em", marginBottom: "-0.22em" }}>
        Printello
      </h1>
      <img src="/img/wardrobe.png" alt="Retro wardrobe display with printed shirts" className="block h-auto w-[min(100%,1199px)]" />
    </section>
  );
}
