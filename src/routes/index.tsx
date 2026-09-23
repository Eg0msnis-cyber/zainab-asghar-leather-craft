import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Globe2, Hand, PackageCheck, Scissors, Star } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero.jpg.asset.json";
import jackets from "@/assets/jackets.jpg.asset.json";
import shoes from "@/assets/shoes.jpg.asset.json";
import bags from "@/assets/bags.jpg.asset.json";
import sports from "@/assets/sports.jpg.asset.json";
import craft from "@/assets/craft.jpg.asset.json";
import { useLanguage } from "@/components/site-shell";
import { categoryNames, copy, whatsappLink } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Zainab Asghar — Leather Manufacturer Pakistan" },
    { name: "description", content: "Premium leather jackets, shoes, bags and sports products manufactured in Sialkot, Pakistan for retail, wholesale and export." },
    { property: "og:title", content: "Zainab Asghar — Premium Leather from Pakistan" },
    { property: "og:description", content: "Explore leather goods and sports products crafted in Sialkot for customers worldwide." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { property: "og:url", content: "/" },
  ], links: [{ rel: "canonical", href: "/" }] }), component: HomePage,
});

const categoryImages = { jackets, shoes, bags, sports };

function HomePage() {
  const { lang } = useLanguage(); const t = copy[lang];
  const [faq, setFaq] = useState(0);
  return <>
    <section className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-border">
      <img src={hero.url} alt="Premium black leather jacket made in Sialkot" className="absolute inset-0 size-full object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_75%,transparent)_45%,color-mix(in_oklab,var(--background)_15%,transparent)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_55%)]" />
      <div className="page-shell relative z-10 pb-24 pt-40 md:pb-28"><div className="max-w-3xl reveal-up">
        <p className="eyebrow mb-6">{t.heroEyebrow}</p>
        <h1 className="display-title whitespace-pre-line">{t.heroTitle}</h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-foreground/80 md:text-lg">{t.heroSub}</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link to="/products" className="gold-button px-7 py-4 text-xs font-bold uppercase">{t.shop}</Link><a href={whatsappLink()} target="_blank" rel="noreferrer" className="outline-button px-7 py-4 text-xs font-bold uppercase">{t.whatsapp}</a></div>
      </div></div>
    </section>
    <div className="overflow-hidden border-b border-border bg-primary py-4 text-primary-foreground"><div className="ticker flex w-max gap-12 text-[11px] font-bold uppercase">{[...Array(2)].flatMap(() => ["Heritage Craft", "Hand Stitched", "Export Quality", "Sialkot Origin", "Worldwide Shipping", "Bespoke Service"]).map((x,i)=><span key={`${x}-${i}`}>◆ &nbsp; {x}</span>)}</div></div>

    <section className="section-pad"><div className="page-shell"><SectionHead num="01" title={t.featured} sub={t.featuredSub}/><div className="mt-12 grid gap-5 md:grid-cols-3">{(["jackets","bags","shoes"] as const).map((cat)=><Link to="/products" key={cat} className="group relative aspect-[4/5] overflow-hidden bg-card"><img src={categoryImages[cat].url} alt={categoryNames[lang][cat]} className="size-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="image-shade absolute inset-0"/><div className="absolute inset-x-0 bottom-0 p-6"><span className="eyebrow">{t.from} {cat === "jackets" ? "2,000" : "1,500"} PKR</span><h3 className="mt-2 font-display text-3xl">{categoryNames[lang][cat]}</h3></div></Link>)}</div></div></section>

    <section className="section-pad border-y border-border bg-surface"><div className="page-shell"><SectionHead num="02" title={t.categories}/><div className="mt-12 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">{(["jackets","shoes","bags","sports"] as const).map(cat=><Link to="/products" key={cat} className="group relative aspect-[3/4] overflow-hidden bg-card"><img src={categoryImages[cat].url} alt={categoryNames[lang][cat]} className="size-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"/><div className="image-shade absolute inset-0"/><div className="absolute inset-x-0 bottom-0 p-4 sm:p-6"><h3 className="font-display text-xl sm:text-3xl">{categoryNames[lang][cat]}</h3><p className="eyebrow mt-2">{t.explore} →</p></div></Link>)}</div></div></section>

    <section className="section-pad"><div className="page-shell"><SectionHead num="03" title={t.why} sub={t.whySub}/><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{t.pillars.map(([title,desc],i)=>{const Icon=[Hand,Scissors,Globe2,PackageCheck][i] ?? Hand; return <article key={title} className="bg-background p-7 lg:p-9"><Icon className="mb-9 text-primary" size={26}/><h3 className="font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{desc}</p></article>})}</div></div></section>

    <section className="border-y border-border"><div className="grid min-h-[650px] lg:grid-cols-2"><div className="relative min-h-[420px]"><img src={craft.url} alt="Leather artisan working by hand in Sialkot" className="absolute inset-0 size-full object-cover"/></div><div className="flex items-center bg-surface px-7 py-16 md:px-16"><div className="max-w-xl"><p className="eyebrow">06 — {t.story}</p><h2 className="section-title mt-5">{t.storyTitle}</h2><p className="mt-7 text-base leading-8 text-muted-foreground">{t.storyText}</p><Link to="/about" className="outline-button mt-9 inline-flex px-6 py-4 text-xs font-bold uppercase">{t.readStory}</Link></div></div></div></section>

    <section className="section-pad"><div className="page-shell"><SectionHead num="05" title={t.testimonials}/><div className="mt-12 grid gap-5 lg:grid-cols-3">{t.testimonialsData.map((quote,i)=><blockquote key={quote} className="border border-border bg-card p-7"><div className="mb-7 flex text-primary">{Array.from({length:5}).map((_,s)=><Star key={s} size={14} fill="currentColor"/>)}</div><p className="font-display text-2xl leading-9">“{quote}”</p><footer className="eyebrow mt-8">0{i+1} — {t.buyer}</footer></blockquote>)}</div></div></section>

    <section className="section-pad border-y border-border bg-primary text-primary-foreground"><div className="page-shell grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold uppercase opacity-70">07 — B2B</p><h2 className="mt-4 font-display text-4xl md:text-6xl">{t.wholesale}</h2><p className="mt-4 font-display text-2xl italic">{t.wholesaleSub}</p></div><div className="flex flex-wrap gap-3"><Link to="/bulk-orders" className="bg-background px-6 py-4 text-xs font-bold uppercase text-foreground">{t.bulk}</Link><a href={whatsappLink("Bulk order inquiry")} target="_blank" rel="noreferrer" className="border border-primary-foreground/40 px-6 py-4 text-xs font-bold uppercase">{t.whatsapp}</a></div></div></section>

    <section className="section-pad"><div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">09 — FAQ</p><h2 className="section-title mt-4">{t.faq}</h2><h3 className="mt-10 font-display text-3xl text-primary">{t.shipping}</h3><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{t.shippingText}</p></div><div>{t.faqItems.map(([q,a],i)=><div key={q} className="border-b border-border"><button type="button" onClick={()=>setFaq(faq===i?-1:i)} className="flex w-full items-center justify-between gap-5 py-6 text-start font-display text-xl"><span>{q}</span><ChevronDown className={`shrink-0 text-primary transition-transform ${faq===i?"rotate-180":""}`} size={20}/></button>{faq===i&&<p className="pb-6 text-sm leading-7 text-muted-foreground">{a}</p>}</div>)}</div></div></section>
  </>;
}

function SectionHead({num,title,sub}:{num:string;title:string;sub?:string}) { return <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow">{num}</p><h2 className="section-title mt-3">{title}</h2></div>{sub&&<p className="max-w-md text-sm leading-7 text-muted-foreground">{sub}</p>}</div> }
