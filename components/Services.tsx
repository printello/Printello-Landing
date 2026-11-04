import Card from "./Card";
import { SITE } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="border-t border-[var(--pewter)] px-5 pb-10 pt-0">
      <h2 className="h-section py-10 md:py-14">What we do:<br />Services…</h2>
      <div className="grid gap-5 md:grid-cols-4">
        <div className="hidden md:block" />
        <Card tag="Online" image="/img/dtf-logo.png" alt="dtf" title="Need DTF printing?" sub="Get your DTF stickers and transfers printed. Head to dtf.printello.in" href={SITE.dtfUrl} external />
        <Card tag="Bulk orders" tone="cobalt" image="/img/catalogue-logo.png" alt="Catalogue" title="Need bulk apparel?" sub="Corporate t-shirts and staff uniforms for cafés, restaurants and more. Browse the catalogue at catalogue.printello.in" href={SITE.catalogueUrl} external />
      </div>
    </section>
  );
}
