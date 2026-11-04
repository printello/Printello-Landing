"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";

export default function Marquee() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  const item = (
    <span className="mx-8 whitespace-nowrap">
      Custom printing, made in India. Questions or a quote?{" "}
      <a href={SITE.whatsappLink} className="underline">Message us on WhatsApp</a>
    </span>
  );
  return (
    <div role="region" aria-label="Announcement" className="fixed inset-x-0 bottom-0 z-40 flex h-[var(--marquee-h)] items-center overflow-hidden bg-[var(--pewter)] text-[13px] text-[var(--canvas)]">
      <div className="marquee-track flex">{[0, 1, 2, 3].map((i) => <span key={i} className="flex">{item}</span>)}</div>
      <button onClick={() => setOpen(false)} aria-label="Dismiss announcement" className="absolute right-0 flex h-full w-10 items-center justify-center bg-[var(--pewter)] text-base">×</button>
    </div>
  );
}
