import logo from "@/assets/logo.png";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div className="text-right">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-white p-1" />
            <div>
              <div className="font-bold text-foreground">{site.nameAr}</div>
              <div className="text-xs text-muted-foreground">{site.tagline}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">ترجمة احترافية معتمدة لجميع الجهات والهيئات الحكومية والسفارات.
</p>
        </div>
        <div className="text-right">
          <h4 className="text-sm font-bold text-foreground">روابط سريعة</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">خدماتنا</a></li>
            <li><a href="#about" className="hover:text-foreground">من نحن</a></li>
            <li><a href="#why" className="hover:text-foreground">لماذا تبيان</a></li>
            <li><a href="#contact" className="hover:text-foreground">تواصل</a></li>
          </ul>
        </div>
        <div className="text-right">
          <h4 className="text-sm font-bold text-foreground">تواصل</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground" dir="ltr">
            <li className="text-right">{site.phone}</li>
            <li className="text-right">{site.email}</li>
            <li className="text-right">{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} oppyans — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
