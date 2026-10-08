// website-builder/templates/template2/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template4 = {
  id: 4,
  name: "Bookstore",
  description: "متجر كتب بسيط وأنيق",
  preview: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800",

  theme: {
    primaryColor: "#0d0d0d",
    secondaryColor: "#E8FF5A",
    accentColor: "#E8FF5A",
    backgroundColor: "#F7F7F5",
    surfaceColor: "#ffffff",
    textPrimaryColor: "#0d0d0d",
    textSecondaryColor: "#666666",
    fontFamily: "'Tajawal', Arial, sans-serif",
    radius: "12px",
    shadow: "soft",
  },

  components: { navbar: Navbar, hero: Hero, products: Products, services: Services, reviews: Reviews, cta: CTA, footer: Footer },

  sections: [
    {
      id: "navbar-2", type: "navbar", order: 0, visible: true,
      content: {
        title: "NOOK",
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "المتجر", href: "/shop" },
          { label: "المجموعات", href: "/collections" },
          { label: "المدونة", href: "/blog" },
          { label: "تواصل", href: "/contact" },
        ],
        showCart: true, cartCount: 1,
      },
    },
    {
      id: "hero-2", type: "hero", order: 1, visible: true,
      content: {
        title: "استكشف، احلم، اقرأ في NOOK",
        subtitle: "آلاف الكتب في انتظارك",
        buttonText: "ابحث",
        buttonLink: "/search",
        placeholder: "ما الذي تبحث عنه؟",
        image: { url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800", publicId: "" },
      },
    },
    {
      id: "products-2", type: "products", order: 2, visible: true,
      content: {
        title: "الأكثر مبيعاً",
        subtitle: "اعرض الكل ←",
        columns: 5,
        showPrice: true, showRating: true,
        items: [
          { id: "b1", name: "It Ends With Us", price: 85, currency: "ج.م", rating: 4.8, image: { url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", publicId: "" } },
          { id: "b2", name: "A Court of Thorns", price: 120, currency: "ج.م", rating: 4.9, image: { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400", publicId: "" } },
          { id: "b3", name: "The God of Small Things", price: 95, currency: "ج.م", rating: 4.7, image: { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400", publicId: "" } },
          { id: "b4", name: "Sally Rooney", price: 110, currency: "ج.م", rating: 4.6, image: { url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400", publicId: "" } },
          { id: "b5", name: "The Midnight Library", price: 100, currency: "ج.م", rating: 4.8, image: { url: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400", publicId: "" } },
        ],
      },
    },
    {
      id: "services-2", type: "services", order: 3, visible: true,
      content: {
        title: "لماذا NOOK؟",
        subtitle: "تجربة قراءة استثنائية",
        items: [
          { id: "s1", icon: "📚", title: "آلاف الكتب", description: "مكتبة ضخمة" },
          { id: "s2", icon: "🚚", title: "توصيل سريع", description: "خلال 24 ساعة" },
          { id: "s3", icon: "💳", title: "دفع آمن", description: "طرق متعددة" },
          { id: "s4", icon: "↩️", title: "إرجاع مجاني", description: "خلال 14 يوم" },
        ],
      },
    },
    {
      id: "reviews-2", type: "reviews", order: 4, visible: true,
      content: {
        title: "ماذا يقول القراء",
        items: [
          { id: "r1", name: "منى أحمد", role: "قارئة", text: "أفضل متجر كتب اشتريت منه", rating: 5 },
          { id: "r2", name: "عمر خالد", role: "قارئ", text: "تنوع كبير وأسعار مناسبة", rating: 5 },
        ],
      },
    },
    {
      id: "cta-2", type: "cta", order: 5, visible: true,
      content: {
        title: "اشترك في النشرة البريدية",
        subtitle: "خصم 10% على أول طلب",
        buttonText: "اشترك الآن",
        buttonLink: "/subscribe",
      },
    },
    {
      id: "footer-2", type: "footer", order: 6, visible: true,
      content: {
        title: "NOOK",
        description: "استكشف، احلم، اقرأ",
        copyright: "© 2026 NOOK — جميع الحقوق محفوظة",
      },
    },
  ],
};