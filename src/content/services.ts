import medical from "@/assets/svc-medical.jpg";
import legal from "@/assets/svc-legal.jpg";
import academic from "@/assets/svc-academic.jpg";
import business from "@/assets/svc-business.jpg";

export type Service = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "legal",
    title: "ترجمة قانونية",
    desc: "ترجمة معتمدة للعقود والمستندات الرسمية بدقة ومعتمدة لدى الجهات الحكومية.",
    image: legal,
  },
  {
    id: "medical",
    title: "ترجمة طبية",
    desc: "ترجمة التقارير الطبية والأبحاث والوثائق الصحية بواسطة مترجمين متخصصين في المجال الطبي.",
    image: medical,
  },
  {
    id: "academic",
    title: "ترجمة أكاديمية",
    desc: "ترجمة الأبحاث العلمية والرسائل الجامعية والمقالات الأكاديمية بدقة عالية وأسلوب احترافي.",
    image: academic,
  },
  {
    id: "business",
    title: "ترجمة تجارية",
    desc: "ترجمة احترافية للشركات والعقود التجارية والمراسلات لضمان وضوح المعنى والدقة في كل التفاصيل.",
    image: business,
  },
];
