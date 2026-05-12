// Edit company info here — used across the whole site.
export const site = {
  nameAr: "تِبْيَان",
  nameEn: "Tibyan",
  tagline: "شركة تبيان للترجمة المعتمدة",
  phone: "+965 9000 0000",
  phoneHref: "tel:+96590000000",
  whatsapp: "96590000000",
  whatsappMsg: "مرحباً، أرغب بطلب خدمة ترجمة معتمدة.",
  email: "info@tibyan.com",
  address: "الكويت — شارع الخليج العربي",
  hours: "السبت - الخميس · 9 صباحاً - 9 مساءً",
};

export const waLink = (msg = site.whatsappMsg) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
