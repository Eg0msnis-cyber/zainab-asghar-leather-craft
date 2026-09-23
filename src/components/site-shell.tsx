import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CONTACT_DISPLAY, copy, type Lang, whatsappLink } from "@/lib/site-content";

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({ lang: "en", setLang: () => undefined });
const NAV_PATHS = ["/", "/products", "/about", "/bulk-orders", "/contact"] as const;
export function useLanguage() { return useContext(LanguageContext); }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const stored = window.localStorage.getItem("za-lang");
    if (stored === "ar") setLangState("ar");
  }, []);
  const setLang = (next: Lang) => { setLangState(next); window.localStorage.setItem("za-lang", next); };
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLanguage();
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const navItems = NAV_PATHS.map((path, index) => ({ label: t.nav[index] ?? "", path }));
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <header className="glass-nav fixed inset-x-0 top-0 z-50 border-b border-border">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3" aria-label="Zainab Asghar home">
          <span className="grid size-10 place-items-center rounded-full border border-primary/60 font-display text-sm text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">ZA</span>
          <span className="font-display text-lg uppercase text-foreground sm:text-xl">Zainab Asghar</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map(({ label, path }, i) => <Link key={label} to={path} activeOptions={{ exact: i === 0 }} className="text-[11px] font-bold uppercase text-muted-foreground transition-colors hover:text-primary [&[data-status=active]]:text-primary">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <button type="button" onClick={() => setLang(lang === "en" ? "ar" : "en")} className="px-2 py-2 text-xs font-bold text-primary" aria-label="Switch language">{t.language}</button>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="gold-button inline-flex h-10 items-center gap-2 px-4 text-xs font-bold uppercase"><MessageCircle size={15}/>{CONTACT_DISPLAY}</a>
        </div>
        <button type="button" className="grid size-10 place-items-center text-primary sm:hidden" onClick={() => setOpen(!open)} aria-label={open ? t.close : t.menu}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-border bg-background px-5 py-6 sm:hidden">
        <nav className="flex flex-col gap-1">{navItems.map(({ label, path }) => <Link key={label} to={path} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm uppercase">{label}</Link>)}</nav>
        <div className="mt-5 flex items-center justify-between"><button type="button" onClick={() => setLang(lang === "en" ? "ar" : "en")} className="text-sm text-primary">{t.language}</button><a href={whatsappLink()} target="_blank" rel="noreferrer" className="gold-button px-4 py-3 text-xs">{CONTACT_DISPLAY}</a></div>
      </div>}
    </header>
    <main>{children}</main>
    <Footer />
    <a href={whatsappLink(lang === "en" ? "Hello Zainab Asghar, I'm interested in your products." : "مرحباً زينب أصغر، أنا مهتم بمنتجاتكم.")} target="_blank" rel="noreferrer" aria-label={t.whatsapp} className="gold-button fixed bottom-5 end-5 z-40 grid size-13 place-items-center rounded-full shadow-xl"><MessageCircle size={22}/></a>
  </div>;
}

function Footer() {
  const { lang } = useLanguage(); const t = copy[lang];
  const navItems = NAV_PATHS.map((path, index) => ({ label: t.nav[index] ?? "", path }));
  return <footer className="border-t border-border bg-surface">
    <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
      <div><div className="mb-5 flex items-center gap-3"><span className="grid size-12 place-items-center rounded-full border border-primary font-display text-primary">ZA</span><span className="font-display text-2xl">Zainab Asghar</span></div><p className="max-w-md text-sm leading-7 text-muted-foreground">{t.footerLine}</p></div>
      <div><p className="eyebrow mb-5">{t.navigate}</p><div className="grid gap-3">{navItems.map(({ label, path }) => <Link key={label} to={path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{label}</Link>)}</div></div>
      <div><p className="eyebrow mb-5">{t.reach}</p><a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-sm text-primary">{CONTACT_DISPLAY}</a><p className="mt-3 text-sm text-muted-foreground">Sialkot, Pakistan</p></div>
    </div>
    <div className="border-t border-border"><div className="page-shell flex flex-col gap-3 py-5 text-[11px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Zainab Asghar. {t.rights}</span><span>{t.made}</span></div></div>
  </footer>;
}

export function PageIntro({ kicker, title, lead }: { kicker: string; title: string; lead: string }) {
  return <section className="subtle-grid border-b border-border pt-40 pb-20"><div className="page-shell reveal-up"><div className="mb-6 flex items-center gap-3"><span className="gold-line"/><span className="eyebrow">{kicker}</span></div><h1 className="display-title max-w-4xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{lead}</p></div></section>;
}

export function InquiryForm({ bulk = false }: { bulk?: boolean }) {
  const { lang } = useLanguage(); const t = copy[lang];
  const fields: Array<[string, string]> = bulk ? [[t.name,"text"],[t.email,"email"],[t.phone,"tel"],[t.company,"text"],[t.country,"text"],[t.quantity,"number"]] : [[t.name,"text"],[t.email,"email"],[t.phone,"tel"]];
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = Array.from(data.entries()).map(([k,v]) => `${k}: ${v}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };
  return <form onSubmit={submit} className="grid gap-5 md:grid-cols-2">{fields.map(([label,type]) => <label key={label} className="grid gap-2 text-xs uppercase text-muted-foreground"><span>{label}</span><input required={!label.includes("Optional") && !label.includes("اختياري")} name={label} type={type} className="h-12 border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary" /></label>)}<label className="grid gap-2 text-xs uppercase text-muted-foreground md:col-span-2"><span>{t.message}</span><textarea required name={t.message} rows={6} className="border border-input bg-background p-4 text-sm text-foreground outline-none transition-colors focus:border-primary" /></label><button type="submit" className="gold-button h-12 px-7 text-xs font-bold uppercase md:col-span-2 md:w-fit">{t.send}</button></form>;
}
