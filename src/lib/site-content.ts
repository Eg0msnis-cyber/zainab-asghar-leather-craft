export type Lang = "en" | "ar";
export type ProductCategory = "jackets" | "shoes" | "bags" | "sports";

export const CONTACT_DISPLAY = "+923274388901";
export const WHATSAPP_BASE = "https://wa.me/923274388901";

export const productImages: Record<ProductCategory, "jackets" | "shoes" | "bags" | "sports"> = {
  jackets: "jackets", shoes: "shoes", bags: "bags", sports: "sports",
};

export const products = [
  { id: "j1", category: "jackets" as const, en: "Onyx Biker Jacket", ar: "جاكيت بايكر أونيكس", price: "6,500–12,500 PKR" },
  { id: "j2", category: "jackets" as const, en: "Cognac Bomber", ar: "بومبر كونياك", price: "4,500–10,500 PKR" },
  { id: "j3", category: "jackets" as const, en: "Charcoal Aviator", ar: "أفياتور تشاركول", price: "10,500–18,500 PKR" },
  { id: "s1", category: "shoes" as const, en: "Heritage Oxford", ar: "أكسفورد هيريتدج", price: "2,500–5,500 PKR" },
  { id: "s2", category: "shoes" as const, en: "Burnished Derby", ar: "ديربي مصقول", price: "3,500–7,500 PKR" },
  { id: "s3", category: "shoes" as const, en: "Monk Strap Noir", ar: "مونك ستراب نوار", price: "4,500–8,500 PKR" },
  { id: "b1", category: "bags" as const, en: "Atelier Messenger", ar: "حقيبة أتيليه", price: "4,500–9,500 PKR" },
  { id: "b2", category: "bags" as const, en: "Voyager Duffle", ar: "حقيبة فوياجر", price: "6,500–13,500 PKR" },
  { id: "b3", category: "bags" as const, en: "Sialkot Tote", ar: "توت سيالكوت", price: "2,500–7,500 PKR" },
  { id: "sp1", category: "sports" as const, en: "Pro Boxing Gloves", ar: "قفازات ملاكمة احترافية" },
  { id: "sp2", category: "sports" as const, en: "Hand-Stitched Football", ar: "كرة قدم مخيطة يدوياً" },
  { id: "sp3", category: "sports" as const, en: "Training Shin Guards", ar: "واقيات الساق للتدريب" },
];

export const copy = {
  en: {
    nav: ["Home", "Products", "About", "Bulk Orders", "Contact"],
    paths: ["/", "/products", "/about", "/bulk-orders", "/contact"] as const,
    language: "العربية", menu: "Menu", close: "Close",
    heroEyebrow: "Sialkot — Pakistan", heroTitle: "Premium Leather &\nSports Collection",
    heroSub: "Crafted in Sialkot with quality, style, and performance.", shop: "Explore Products", whatsapp: "Contact on WhatsApp",
    featured: "Featured Pieces", featuredSub: "A curation of our most coveted craftsmanship.",
    collection: "Collection", categories: "Our Categories", explore: "Explore", why: "Why Choose Us", whySub: "Four principles behind every piece we make.",
    pillars: [["Hand Stitched", "Every seam is set with patience by skilled Sialkot artisans."], ["Premium Hides", "Top-grain leather selected from trusted local tanneries."], ["Global Shipping", "Reliable door-to-door delivery for international customers."], ["Export Grade", "Careful quality control for retail and wholesale orders."]],
    showcase: "Interactive Showcase", testimonials: "What Buyers Say", story: "Our Story", storyTitle: "A craft passed down, refined for today.",
    storyText: "From the workshops of Sialkot to wardrobes worldwide — every piece bears the patience of hand-cut hides, slow-stitched seams and a finish that improves with age.", readStory: "Read the Story",
    wholesale: "Wholesale & Export Inquiries", wholesaleSub: "Bulk order prices are negotiable", bulk: "Bulk Orders",
    shipping: "International Shipping", shippingText: "Door-to-door delivery is available through established international couriers, with air and sea freight options for bulk orders.",
    testimonialsData: ["The finish on the jackets is genuinely export-grade. Our boutique customers noticed the craftsmanship immediately.", "The bulk-order process felt considered and professional, with remarkable attention to finish.", "Sports goods arrived carefully packed, with clean stitching and consistent quality."],
    buyer: "Verified order feedback", faq: "Frequently Asked", faqItems: [["Do you ship internationally?", "Yes. We arrange door-to-door international delivery through established courier partners."], ["Are bulk prices negotiable?", "Yes. Contact us through the Bulk Orders page or WhatsApp for a tailored quotation."], ["Can I customize a product?", "Custom sizing, colors, embossing and private-label packaging are available on many items."], ["What is your turnaround time?", "Timing depends on product, quantity and customization. Contact us for an accurate production and dispatch estimate."]],
    footerLine: "Heritage craft. Modern edge. Crafted in Sialkot with quality, style, and performance.", navigate: "Navigate", reach: "Reach Us", rights: "All rights reserved.", made: "Crafted in Pakistan",
    productsTitle: "Products", productsSub: "Crafted with intent", all: "All", available: "Available in all sizes", from: "From", contactInfo: "For more information contact us on WhatsApp", inquire: "Inquire", search: "Search products",
    aboutKicker: "About", aboutTitle: "Stitched in Sialkot, felt worldwide", aboutLead: "Sialkot is known worldwide for fine leather and sporting goods. We carry that tradition forward — one stitch, one cut, one craftsman at a time.",
    heritage: "Heritage", heritageTitle: "The patient art of leather.", heritageP1: "Sialkot is a city built on craft. Generations of leatherworkers have refined a language of cut, stitch and finish that you can feel the moment you hold a well-made piece. We do not rush the process; we pay attention to it.", heritageP2: "Our hides are selected from trusted local tanneries and matched grain-by-grain before they meet a needle. The result is leather designed to age beautifully.",
    craftPillars: [["Handmade", "Products are cut, stitched and finished by skilled hands."], ["Sports Heritage", "Leather goods and sporting craft shaped by Sialkot tradition."], ["Export Standards", "Consistent quality for retailers and customers worldwide."]],
    process: "Our Process", processTitle: "From hide to finished piece", processSteps: [["Select", "Leather is inspected for grain, tone and character."], ["Cut", "Patterns are cut with precision to reduce waste."], ["Stitch", "Each seam is reinforced for form and durability."], ["Finish", "Edges, hardware and surfaces receive final inspection."]],
    bulkKicker: "Wholesale & Export", bulkTitle: "Bulk & Export Orders", bulkLead: "Partner with a Sialkot leather manufacturer. Bulk order prices are negotiable.",
    bulkFeatures: [["International", "Flexible international delivery terms for approved orders."], ["Flexible Minimums", "Options for boutiques, teams and larger business buyers."], ["Private Label", "Bespoke branding, embossing and packaging."], ["Air & Sea", "Courier, air-cargo and sea-freight options to suit your timeline."]],
    formTitle: "Inquiry Form", formSub: "Tell us what you need and we will respond with the next steps.", name: "Full Name", email: "Email Address", phone: "Phone / WhatsApp", company: "Company (Optional)", country: "Country", quantity: "Estimated Quantity", message: "Message", send: "Send Inquiry",
    contactKicker: "Contact", contactTitle: "Let’s Talk", contactLead: "Contact us for products, custom work, wholesale orders and international inquiries.", location: "Workshop", locationValue: "Sialkot, Pakistan", sendMessage: "Send a message",
  },
  ar: {
    nav: ["الرئيسية", "المنتجات", "من نحن", "طلبات الجملة", "تواصل معنا"],
    paths: ["/", "/products", "/about", "/bulk-orders", "/contact"] as const,
    language: "English", menu: "القائمة", close: "إغلاق",
    heroEyebrow: "سيالكوت — باكستان", heroTitle: "مجموعة الجلود والمنتجات\nالرياضية الفاخرة", heroSub: "صناعة سيالكوت بجودة وأناقة وأداء متميز.", shop: "استكشف المنتجات", whatsapp: "تواصل عبر واتساب",
    featured: "قطع مختارة", featuredSub: "تشكيلة من أبرز أعمالنا الحرفية.", collection: "المجموعة", categories: "فئاتنا", explore: "استكشف", why: "لماذا نحن", whySub: "أربعة مبادئ تحدد جودة كل قطعة.",
    pillars: [["خياطة يدوية", "كل درزة تنفذ بعناية على أيدي حرفيي سيالكوت."], ["جلود فاخرة", "جلود عالية الجودة مختارة من مدابغ محلية موثوقة."], ["شحن دولي", "توصيل موثوق من الباب إلى الباب للعملاء الدوليين."], ["جودة تصدير", "فحص دقيق لطلبات التجزئة والجملة."]],
    showcase: "معرض تفاعلي", testimonials: "آراء المشترين", story: "قصتنا", storyTitle: "حرفة متوارثة بروح معاصرة.", storyText: "من ورش سيالكوت إلى العملاء حول العالم — تحمل كل قطعة دقة القص اليدوي والخياطة المتأنية واللمسة التي تزداد جمالاً مع الزمن.", readStory: "اقرأ القصة",
    wholesale: "استفسارات الجملة والتصدير", wholesaleSub: "أسعار طلبات الجملة قابلة للتفاوض", bulk: "طلبات الجملة", shipping: "الشحن الدولي", shippingText: "نوفر التوصيل الدولي من الباب إلى الباب عبر شركات شحن موثوقة، مع خيارات الشحن الجوي والبحري للطلبات الكبيرة.",
    testimonialsData: ["تشطيب الجاكيتات بمستوى تصدير حقيقي، وقد لاحظ عملاء متجرنا جودة الحرفة فوراً.", "كانت عملية طلب الجملة احترافية ومدروسة مع اهتمام مميز بالتفاصيل.", "وصلت المنتجات الرياضية بتغليف جيد وخياطة نظيفة وجودة متناسقة."], buyer: "ملاحظات طلبات العملاء",
    faq: "الأسئلة الشائعة", faqItems: [["هل تشحنون دولياً؟", "نعم، نرتب التوصيل الدولي من الباب إلى الباب عبر شركاء شحن موثوقين."], ["هل أسعار الجملة قابلة للتفاوض؟", "نعم، تواصل معنا عبر صفحة طلبات الجملة أو واتساب للحصول على عرض مخصص."], ["هل يمكن تخصيص المنتج؟", "تتوفر المقاسات والألوان والنقش والتغليف بعلامة خاصة للعديد من المنتجات."], ["ما مدة تجهيز الطلب؟", "تعتمد المدة على المنتج والكمية والتخصيص. تواصل معنا للحصول على تقدير دقيق."]],
    footerLine: "حرفة أصيلة بروح عصرية. صناعة سيالكوت بجودة وأناقة وأداء.", navigate: "تصفح", reach: "تواصل معنا", rights: "جميع الحقوق محفوظة.", made: "صنع في باكستان",
    productsTitle: "المنتجات", productsSub: "مصنوعة بعناية", all: "الكل", available: "متوفر بجميع المقاسات", from: "ابتداءً من", contactInfo: "لمزيد من المعلومات تواصل معنا عبر واتساب", inquire: "استفسر", search: "ابحث عن منتج",
    aboutKicker: "من نحن", aboutTitle: "حياكة في سيالكوت، وإحساس حول العالم", aboutLead: "تشتهر سيالكوت عالمياً بالجلود والمنتجات الرياضية الراقية. نحمل هذا التقليد إلى الأمام — غرزة بعد غرزة وقطعة بعد قطعة.",
    heritage: "الإرث", heritageTitle: "فن الجلود المتأني.", heritageP1: "سيالكوت مدينة بُنيت على الحرفة. طورت أجيال من صناع الجلود خبرة القص والخياطة والتشطيب التي تشعر بها عند لمس قطعة متقنة.", heritageP2: "نختار جلودنا من مدابغ محلية موثوقة ونطابق الحبيبات بعناية قبل الخياطة، لتنتج قطعاً تزداد جمالاً مع الزمن.",
    craftPillars: [["صناعة يدوية", "يتم قص المنتجات وخياطتها وتشطيبها بأيدٍ ماهرة."], ["إرث رياضي", "حرفة جلدية ورياضية مستوحاة من تقاليد سيالكوت."], ["معايير التصدير", "جودة متناسقة لتجار التجزئة والعملاء حول العالم."]],
    process: "عمليتنا", processTitle: "من الجلد إلى القطعة النهائية", processSteps: [["الاختيار", "نفحص الجلد من حيث الحبيبات واللون والطابع."], ["القص", "تُقص القوالب بدقة لتقليل الهدر."], ["الخياطة", "تُعزز كل درزة لتحقيق المتانة والشكل."], ["التشطيب", "تخضع الحواف والقطع المعدنية والأسطح للفحص النهائي."]],
    bulkKicker: "الجملة والتصدير", bulkTitle: "طلبات الجملة والتصدير", bulkLead: "تعاون مع مصنع جلود من سيالكوت. أسعار طلبات الجملة قابلة للتفاوض.",
    bulkFeatures: [["دولي", "شروط توصيل دولية مرنة للطلبات المعتمدة."], ["حدود مرنة", "خيارات للمتاجر والفرق والمشترين التجاريين."], ["علامة خاصة", "شعار ونقش وتغليف مخصص."], ["جواً وبحراً", "خيارات بريد وشحن جوي وبحري تناسب جدولك."]],
    formTitle: "نموذج الاستفسار", formSub: "أخبرنا بما تحتاج وسنتواصل معك بالخطوات التالية.", name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "الهاتف / واتساب", company: "الشركة (اختياري)", country: "الدولة", quantity: "الكمية المتوقعة", message: "الرسالة", send: "إرسال الاستفسار",
    contactKicker: "تواصل", contactTitle: "لنتحدث", contactLead: "تواصل معنا بشأن المنتجات والعمل المخصص وطلبات الجملة والاستفسارات الدولية.", location: "الورشة", locationValue: "سيالكوت، باكستان", sendMessage: "أرسل رسالة",
  }
} as const;

export const categoryNames = {
  en: { jackets: "Leather Jackets", shoes: "Leather Shoes", bags: "Leather Bags", sports: "Sports Products" },
  ar: { jackets: "جاكيتات جلدية", shoes: "أحذية جلدية", bags: "حقائب جلدية", sports: "منتجات رياضية" },
};

export function whatsappLink(message?: string) {
  return message ? `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}` : WHATSAPP_BASE;
}
