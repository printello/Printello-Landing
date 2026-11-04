import { SITE } from "@/lib/site";

function Row({ label, action, href }: { label: string; action: string; href: string }) {
  return (
    <a href={href} className="group flex flex-col items-start gap-1 border-b border-[var(--pewter)] py-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
      <span className="display break-words text-[clamp(24px,5vw,52px)] opacity-80 group-hover:opacity-100">{label}</span>
      <span className="display text-[clamp(20px,3vw,34px)] group-hover:underline">{action}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-[var(--pewter)] px-5 pb-12">
      <h2 className="h-section py-10 md:py-14">Get in touch:<br />Say hello…</h2>
      <Row label={`WhatsApp ${SITE.whatsappDisplay.replace(/ /g, "\u00a0")}`} action="Chat" href={SITE.whatsappLink} />
      <Row label={SITE.email} action="Email" href={`mailto:${SITE.email}`} />
      <div className="mt-12 flex items-start justify-between gap-8">
        <img src="/img/mark-white.svg" alt="" className="h-32 w-auto opacity-80 md:h-40" />
        <ul className="space-y-0.5 text-[15px]">
          <li><a className="ghost" href={SITE.dtfUrl}>DTF gang sheets</a></li>
          <li><a className="ghost" href={SITE.catalogueUrl}>Catalogue</a></li>
          <li><a className="ghost" href={SITE.whatsappLink}>WhatsApp</a></li>
          <li><a className="ghost" href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a className="ghost" href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a className="ghost" href={`mailto:${SITE.email}`}>Email</a></li>
        </ul>
      </div>
      <p className="mt-10 text-[13px] opacity-70">© {new Date().getFullYear()} Printello</p>
    </footer>
  );
}
