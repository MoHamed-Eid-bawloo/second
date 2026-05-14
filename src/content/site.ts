// Edit company info here — used across the whole site.
export const site = {
  nameAr: "تِبْيَان",
  nameEn: "Tibyan",
  tagline: "شركة تبيان للترجمة المعتمدة",
  phone: "+965 9440 9352",
  phoneHref: "tel:+96594409352",
  whatsapp: "96594409352",
  whatsappMsg: "مرحباً، أرغب بطلب خدمة ترجمة معتمدة.",
  email: "info@tibyan.com",
  address: "الكويت — شارع المثني",
  hours: "السبت - الخميس · 9 صباحاً - 9 مساءً",
};

export const waLink = (msg = site.whatsappMsg) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
