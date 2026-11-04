type Props = { tag: string; tone?: "ember" | "cobalt"; image?: string; alt?: string; title: string; sub: string; href?: string; external?: boolean };

export default function Card({ tag, tone = "ember", image, alt = "", title, sub, href, external }: Props) {
  const pill = tone === "ember" ? "bg-[var(--ember-tint)] text-[var(--ember)]" : "bg-[var(--cobalt-tint)] text-[var(--canvas)]";
  const body = (
    <>
      <span className={`absolute left-5 top-5 z-10 rounded-full px-2.5 py-1 text-[13px] ${pill}`}>{tag}</span>
      {href && image && (
        <span aria-hidden="true" className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--canvas)] text-[var(--canvas)] transition-all duration-200 group-hover:bg-[var(--canvas)] group-hover:text-[var(--frost)]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>
        </span>
      )}
      <div className="flex h-[300px] items-center justify-center px-8 md:h-[360px]">
        {image && <img src={image} alt={alt} className="max-h-[70%] w-full max-w-[420px] object-contain transition-transform duration-200 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-active:scale-100" />}
      </div>
      <div className="px-5 pb-5 pt-4 text-[var(--canvas)]">
        <div className="text-[15px] font-medium">{title}</div>
        <div className="text-[15px]">{sub}</div>
      </div>
    </>
  );
  const cls = "group relative block bg-[var(--frost)] text-[var(--canvas)]";
  return href ? (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${cls} cursor-pointer`}>{body}</a>
  ) : (
    <div className={cls}>{body}</div>
  );
}
