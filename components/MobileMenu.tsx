"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  { href: SITE.whatsappLink, label: "WhatsApp" },
  { href: `mailto:${SITE.email}`, label: "Email" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-[60] flex h-10 w-10 items-center justify-center"
      >
        <span className="relative block h-3.5 w-6">
          <span className={`absolute left-0 h-px w-6 bg-current transition-all duration-200 ${open ? "top-[7px] rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 h-px w-6 bg-current transition-all duration-200 ${open ? "top-[7px] -rotate-45" : "top-[13px]"}`} />
        </span>
      </button>
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`fixed inset-x-0 bottom-0 top-16 z-50 bg-[var(--canvas)] px-5 pt-6 transition-opacity duration-200 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <ul>
          {LINKS.map((l) => (
            <li key={l.label} className="border-b border-[var(--pewter)]">
              <a href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="display block py-4 text-[40px] hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
