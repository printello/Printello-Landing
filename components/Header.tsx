import { SITE } from "@/lib/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const link = "ghost hover:underline";
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center bg-[var(--canvas)] justify-between border-b border-current px-5 text-[var(--pewter)]">
      <a href="#top" aria-label="Printello home"><img src="/img/logo-white.svg" alt="Printello" className="h-7 w-auto opacity-90" /></a>
      <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 md:flex">
        <a href="#services" className={link}>Services</a>
        <a href="#contact" className={link}>Contact</a>
      </nav>
      <div className="hidden gap-6 md:flex">
        <a href={SITE.whatsappLink} className={link}>WhatsApp</a>
        <a href={`mailto:${SITE.email}`} className={link}>Email</a>
      </div>
      <MobileMenu />
    </header>
  );
}
