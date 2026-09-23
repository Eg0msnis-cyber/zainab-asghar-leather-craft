import { createFileRoute } from "@tanstack/react-router";
import { Check, Scissors, ShieldCheck } from "lucide-react";
import craft from "@/assets/craft.jpg.asset.json";
import jackets from "@/assets/jackets.jpg.asset.json";
import { PageIntro, useLanguage } from "@/components/site-shell";
import { copy } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Zainab Asghar — Sialkot Craft" },
    { name: "description", content: "Learn about Zainab Asghar and the careful leather manufacturing tradition behind every piece made in Sialkot, Pakistan." },
    { property: "og:title", content: "Our Leather Craft — Zainab Asghar" }, { property: "og:description", content: "Pakistani leather craftsmanship shaped by careful material selection, cutting, stitching and finishing." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/about" },
  ], links: [{ rel: "canonical", href: "/about" }] }), component: AboutPage,
});
function AboutPage() { const { lang } = useLanguage(); const t = copy[lang]; const icons=[Scissors,Check,ShieldCheck]; return <>
  <PageIntro kicker={t.aboutKicker} title={t.aboutTitle} lead={t.aboutLead}/>
  <section className="section-pad"><div className="page-shell grid items-center gap-12 lg:grid-cols-2"><div className="relative aspect-[4/5] overflow-hidden"><img src={craft.url} alt="Leather craftsman carefully finishing a product" className="size-full object-cover"/><div className="absolute inset-4 border border-primary/40"/></div><div><p className="eyebrow">{t.heritage}</p><h2 className="section-title mt-4">{t.heritageTitle}</h2><div className="gold-line my-8"/><p className="text-base leading-8 text-muted-foreground">{t.heritageP1}</p><p className="mt-5 text-base leading-8 text-muted-foreground">{t.heritageP2}</p></div></div></section>
  <section className="border-y border-border bg-surface"><div className="page-shell grid gap-px bg-border md:grid-cols-3">{t.craftPillars.map(([title,desc],i)=>{const Icon=icons[i] ?? Scissors; return <article key={title} className="bg-surface p-8 md:py-14"><span className="eyebrow">0{i+1}</span><Icon className="my-8 text-primary"/><h3 className="font-display text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{desc}</p></article>})}</div></section>
  <section className="section-pad"><div className="page-shell"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">{t.process}</p><h2 className="section-title mt-4">{t.processTitle}</h2></div><div className="grid gap-px bg-border sm:grid-cols-2">{t.processSteps.map(([name,desc],i)=><article key={name} className="bg-background p-7"><span className="font-display text-5xl text-primary/50">0{i+1}</span><h3 className="mt-5 font-display text-2xl">{name}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p></article>)}</div></div></div></section>
  <section className="relative min-h-[55vh] overflow-hidden"><img src={jackets.url} alt="Premium leather jacket craftsmanship" className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-background/65"/><div className="page-shell relative flex min-h-[55vh] items-center justify-center text-center"><p className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">{t.storyTitle}</p></div></section>
</>; }
