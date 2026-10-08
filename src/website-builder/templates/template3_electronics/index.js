// website-builder/templates/template3/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template5 = {
  id: 5,
  name: "TechMart",
  description: "متجر إلكترونيات بأزرق داكن وبرتقالي",
  preview: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800",

  theme: {
    primaryColor: "#0A2540",
    secondaryColor: "#00D4A0",
    accentColor: "#FF6B35",
    backgroundColor: "#ffffff",
    surfaceColor: "#F5F7FA",
    textPrimaryColor: "#0A2540",
    textSecondaryColor: "#64748B",
    fontFamily: "'Cairo', Arial, sans-serif",
    radius: "12px",
    shadow: "soft",
  },

  components: { navbar: Navbar, hero: Hero, products: Products, services: Services, reviews: Reviews, cta: CTA, footer: Footer },

  sections: [
    {
      id: "navbar-3", type: "navbar", order: 0, visible: true,
      content: {
        title: "TechMart",
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "المنتجات", href: "/products" },
          { label: "العروض", href: "/deals" },
          { label: "اتصل", href: "/contact" },
        ],
        showSearch: true, showCart: true, cartCount: 3,
      },
    },
    {
      id: "hero-3", type: "hero", order: 1, visible: true,
      content: {
        badge: "عروض حصرية",
        title: "تخفيضات تصل إلى 50%",
        subtitle: "أحدث الأجهزة الإلكترونية بأفضل الأسعار",
        buttonText: "تسوق الآن",
        buttonLink: "/products",
        image: { url: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800", publicId: "" },
        sideProduct: { name: "PlayStation 5 DualSense", price: 85, image: { url: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400", publicId: "" } },
      },
    },
    {
      id: "products-3", type: "products", order: 2, visible: true,
      content: {
        title: "الأكثر مبيعاً",
        subtitle: "اعرض الكل",
        columns: 4,
        showPrice: true, showRating: true,
        items: [
          { id: "e1", name: "كاميرا احترافية", price: 5790, currency: "ج.م", rating: 4.8, image: { url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500", publicId: "" } },
          { id: "e2", name: "محضرة طعام", price: 790, currency: "ج.م", rating: 4.5, image: { url: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500", publicId: "" } },
          { id: "e3", name: "سماعات لاسلكية", price: 1850, currency: "ج.م", rating: 4.9, image: { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", publicId: "" } },
          { id: "e4", name: "لابتوب احترافي", price: 18500, currency: "ج.م", rating: 4.7, image: { url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", publicId: "" } },
        ],
      },
    },
    {
      id: "services-3", type: "services", order: 3, visible: true,
      content: {
        title: "لماذا تختارنا",
        items: [
          { id: "s1", icon: "🚚", title: "توصيل سريع", description: "شحن مجاني للطلبات الكبيرة" },
          { id: "s2", icon: "🛡️", title: "ضمان سنتين", description: "ضمان رسمي على كل المنتجات" },
          { id: "s3", icon: "💳", title: "دفع آمن", description: "تقسيط بدون فوائد" },
        ],
      },
    },
    {
      id: "reviews-3", type: "reviews", order: 4, visible: true,
      content: {
        title: "تقييمات العملاء",
        items: [
          { id: "r1", name: "خالد العتيبي", role: "عميل", text: "منتجات أصلية بأسعار ممتازة", rating: 5 },
          { id: "r2", name: "هند سالم", role: "عميلة", text: "خدمة عملاء ممتازة", rating: 5 },
        ],
      },
    },
    {
      id: "cta-3", type: "cta", order: 5, visible: true,
      content: {
        title: "اشترك واحصل على خصم 15%",
        subtitle: "على أول عملية شراء",
        buttonText: "اشترك الآن",
        buttonLink: "/subscribe",
      },
    },
    {
      id: "footer-3", type: "footer", order: 6, visible: true,
      content: {
        title: "TechMart",
        description: "متجرك الموثوق للإلكترونيات",
        copyright: "© 2026 TechMart — جميع الحقوق محفوظة",
      },
    },
  ],
};