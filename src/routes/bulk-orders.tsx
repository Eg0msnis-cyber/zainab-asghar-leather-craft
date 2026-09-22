import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Package, Plane, Stamp } from "lucide-react";
import { InquiryForm, PageIntro, useLanguage } from "@/components/site-shell";
import { copy, whatsappLink } from "@/lib/site-content";

export const Route = createFileRoute("/bulk-orders")({
  head: () => ({ meta: [
    { title: "Wholesale Leather & Export Orders — Zainab Asghar" }, { name: "description", content: "Request a tailored quote for bulk, custom, private-label and international leather orders from Sialkot, Pakistan." },
    { property: "og:title", content: "Wholesale & Export — Zainab Asghar" }, { property: "og:description", content: "Bulk leather manufacturing, private label and international shipping inquiries." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/bulk-orders" },
  ], links: [{ rel: "canonical", href: "/bulk-orders" }] }), component: BulkPage,
});
function BulkPage(){ const {lang}=useLanguage(); const t=copy[lang]; const icons=[Globe2,Package,Stamp,Plane]; return <><PageIntro kicker={t.bulkKicker} title={t.bulkTitle} lead={t.bulkLead}/><section className="border-b border-border bg-primary py-8 text-center text-primary-foreground"><p className="font-display text-3xl italic">{t.wholesaleSub}</p></section><section className="section-pad"><div className="page-shell grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{t.bulkFeatures.map(([name,desc],i)=>{const Icon=icons[i]; return <article className="bg-background p-7" key={name}><Icon className="mb-8 text-primary"/><h2 className="font-display text-2xl">{name}</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{desc}</p></article>})}</div></section><section className="section-pad border-t border-border bg-surface"><div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">B2B</p><h2 className="section-title mt-4">{t.formTitle}</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{t.formSub}</p><a href={whatsappLink("Bulk order inquiry")} target="_blank" rel="noreferrer" className="outline-button mt-7 inline-flex px-6 py-4 text-xs font-bold uppercase">{t.whatsapp}</a></div><InquiryForm bulk/></div></section></>; }
