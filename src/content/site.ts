// Edit company info here — used across the whole site.
export const site = {
  nameAr: "تِبْيَان",
  nameEn: "Tibyan",
  tagline: "شركة تبيان للترجمة المعتمدة",
  phone: "+965 9670 6588",
  phoneHref: "tel:+96596706588",
  whatsapp: "96594409352",
  whatsappMsg: "مرحباً، أرغب بطلب خدمة ترجمة معتمدة.",
  email: "tibyan.trans@gmail.com",
  address: "الكويت — حولي - شارع المثنى - مقابل معهد الدراسات التجارية",
  hours: "السبت - الخميس · 9 صباحاً - 9 مساءً",
};

export const waLink = (msg = site.whatsappMsg) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
