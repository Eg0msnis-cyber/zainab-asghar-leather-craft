import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { InquiryForm, PageIntro, useLanguage } from "@/components/site-shell";
import { CONTACT_DISPLAY, copy, whatsappLink } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Zainab Asghar — Leather Manufacturer Pakistan" }, { name: "description", content: "Contact Zainab Asghar in Sialkot, Pakistan for leather products, custom manufacturing, wholesale and export inquiries." },
    { property: "og:title", content: "Contact Zainab Asghar" }, { property: "og:description", content: "Discuss leather products, custom orders and international wholesale requirements." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/contact" },
  ], links: [{ rel: "canonical", href: "/contact" }] }), component: ContactPage,
});
function ContactPage(){const {lang}=useLanguage();const t=copy[lang];return <><PageIntro kicker={t.contactKicker} title={t.contactTitle} lead={t.contactLead}/><section className="section-pad"><div className="page-shell grid gap-px bg-border md:grid-cols-2"><a href={whatsappLink()} target="_blank" rel="noreferrer" className="group bg-card p-8 transition-colors hover:bg-surface-raised"><MessageCircle className="text-primary"/><p className="eyebrow mt-10">WhatsApp</p><p className="mt-3 font-display text-3xl group-hover:text-primary">{CONTACT_DISPLAY}</p></a><div className="bg-card p-8"><MapPin className="text-primary"/><p className="eyebrow mt-10">{t.location}</p><p className="mt-3 font-display text-3xl">{t.locationValue}</p></div></div></section><section className="section-pad border-t border-border bg-surface"><div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">{t.contactKicker}</p><h2 className="section-title mt-4">{t.sendMessage}</h2><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">{t.formSub}</p></div><InquiryForm/></div></section></>}
