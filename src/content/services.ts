import technical from "@/assets/svc-technical.jpg";
import website from "@/assets/svc-website.jpg";
import certified from "@/assets/svc-certified.jpg";
import interpretation from "@/assets/svc-interpretation.jpg";

export type Service = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "technical",
    title: "ترجمة تقنية",
    desc: "ترجمة الأدلة الفنية والتقارير الهندسية وملفات المنتجات مع الحفاظ على المصطلحات الدقيقة الخاصة بكل مجال.",
    image: technical,
  },
  {
    id: "website",
    title: "ترجمة مواقع إلكترونية",
    desc: "ترجمة محتوى المواقع والتطبيقات بشكل احترافي مع مراعاة تجربة المستخدم وتحسين وضوح الرسالة للجمهور المستهدف.",
    image: website,
  },
  {
    id: "certified",
    title: "ترجمة معتمدة",
    desc: "ترجمة رسمية معتمدة لدى الجهات الحكومية والسفارات مع ختم واعتماد رسمي للمستندات والشهادات.",
    image: certified,
  },
  {
    id: "interpretation",
    title: "ترجمة فورية",
    desc: "خدمات ترجمة شفوية في الاجتماعات والمؤتمرات والمقابلات بدقة عالية وسرعة استجابة احترافية.",
    image: interpretation,
  },
];
