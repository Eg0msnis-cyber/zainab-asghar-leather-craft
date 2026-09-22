import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Search } from "lucide-react";
import { useMemo, useState } from "react";
import jackets from "@/assets/jackets.jpg.asset.json";
import shoes from "@/assets/shoes.jpg.asset.json";
import bags from "@/assets/bags.jpg.asset.json";
import sports from "@/assets/sports.jpg.asset.json";
import { PageIntro, useLanguage } from "@/components/site-shell";
import { categoryNames, copy, products, type ProductCategory, whatsappLink } from "@/lib/site-content";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Leather Products — Zainab Asghar Pakistan" },
    { name: "description", content: "Shop leather jackets, shoes, bags and sports products crafted in Sialkot, Pakistan." },
    { property: "og:title", content: "Leather Products — Zainab Asghar" },
    { property: "og:description", content: "Browse premium leather goods and sports products for retail, custom and wholesale orders." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/products" },
  ], links: [{ rel: "canonical", href: "/products" }] }), component: ProductsPage,
});

const images = { jackets, shoes, bags, sports };
function ProductsPage() {
  const { lang } = useLanguage(); const t = copy[lang];
  const [category, setCategory] = useState<"all" | ProductCategory>("all");
  const [query, setQuery] = useState("");
  const list = useMemo(() => products.filter(p => (category === "all" || p.category === category) && p[lang].toLowerCase().includes(query.toLowerCase())), [category, query, lang]);
  const filters: Array<"all" | ProductCategory> = ["all", "jackets", "shoes", "bags", "sports"];
  return <>
    <PageIntro kicker={t.collection} title={t.productsTitle} lead={t.productsSub}/>
    <section className="sticky top-20 z-30 border-b border-border bg-background/95 py-4 backdrop-blur"><div className="page-shell flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div className="flex gap-2 overflow-x-auto pb-1">{filters.map(f=><button type="button" key={f} onClick={()=>setCategory(f)} className={`shrink-0 border px-4 py-2 text-[10px] font-bold uppercase transition-colors ${category===f?"border-primary bg-primary text-primary-foreground":"border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>{f === "all" ? t.all : categoryNames[lang][f]}</button>)}</div><label className="relative block lg:w-64"><Search size={15} className="absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.search} className="h-10 w-full border border-input bg-card ps-10 pe-3 text-sm outline-none focus:border-primary"/></label></div></section>
    <section className="section-pad"><div className="page-shell"><div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{list.map(p=><article key={p.id} className="group"><div className="aspect-[4/5] overflow-hidden bg-card"><img src={images[p.category].url} alt={p[lang]} className="size-full object-cover transition-transform duration-700 group-hover:scale-105"/></div><div className="border-x border-b border-border p-5"><p className="eyebrow">{categoryNames[lang][p.category]}</p><h2 className="mt-2 font-display text-2xl">{p[lang]}</h2><p className="mt-3 text-[11px] uppercase text-muted-foreground">{t.available}</p>{p.price?<p className="mt-5 font-display text-xl text-primary"><span className="me-2 text-xs uppercase text-muted-foreground">{t.from}</span>{p.price}</p>:<p className="mt-5 min-h-7 text-xs text-primary">{t.contactInfo}</p>}<a href={whatsappLink(`${lang === "en" ? "Inquiry" : "استفسار"}: ${p[lang]}`)} target="_blank" rel="noreferrer" className="outline-button mt-5 flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase"><MessageCircle size={15}/>{t.inquire}</a></div></article>)}</div></div></section>
  </>;
}
