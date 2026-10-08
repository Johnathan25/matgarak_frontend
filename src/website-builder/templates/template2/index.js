// website-builder/templates/template1/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template1 = {
  id: 1,
  name: "Modern",
  description: "تصميم عصري بسيط بألوان داكنة",
  preview: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",

  theme: {
    primaryColor: "#0A2947",
    secondaryColor: "#8B5E3C",
    accentColor: "#FF9B51",
    backgroundColor: "#ffffff",
    surfaceColor: "#F8F9FB",
    textPrimaryColor: "#0A2947",
    textSecondaryColor: "#6B7280",
    fontFamily: "'Cairo', Arial, sans-serif",
    radius: "16px",
    shadow: "soft",
  },

  components: {
    navbar: Navbar,
    hero: Hero,
    products: Products,
    services: Services,
    reviews: Reviews,
    cta: CTA,
    footer: Footer,
  },

  sections: [
    {
      id: "navbar-1",
      type: "navbar",
      variant: "classic",
      order: 0,
      visible: true,
      content: {
        title: "متجري",
        logo: { url: "", publicId: "" },
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "المنتجات", href: "/products" },
          { label: "من نحن", href: "/about" },
          { label: "تواصل", href: "/contact" },
        ],
        showSearch: true,
        showCart: true,
        showUser: true,
        cartCount: 0,
      },
      style: {},
    },
    {
      id: "hero-1",
      type: "hero",
      variant: "centered",
      order: 1,
      visible: true,
      content: {
        badge: "جديد 2026",
        title: "اكتشف منتجاتنا المميزة",
        subtitle: "كل اللي محتاجه في مكان واحد بأسعار مناسبة",
        buttonText: "تسوق الآن",
        buttonLink: "/products",
        secondaryButtonText: "اعرف أكثر",
        secondaryButtonLink: "/about",
        backgroundImage: {
          url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600",
          publicId: "",
        },
        overlayEnabled: true,
        overlayOpacity: 0.55,
      },
      style: {},
    },
    {
      id: "products-1",
      type: "products",
      variant: "grid",
      order: 2,
      visible: true,
      content: {
        title: "أحدث المنتجات",
        subtitle: "تصفح أحدث ما وصلنا",
        columns: 4,
        limit: 8,
        showPrice: true,
        showRating: true,
        showAddToCart: true,
        items: [
          { id: "p1", name: "منتج تجريبي 1", price: 250, oldPrice: 350, currency: "ج.م", badge: "خصم 30%", rating: 4.5, image: { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", publicId: "" } },
          { id: "p2", name: "منتج تجريبي 2", price: 180, oldPrice: "", currency: "ج.م", badge: "جديد", rating: 4.8, image: { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", publicId: "" } },
          { id: "p3", name: "منتج تجريبي 3", price: 320, oldPrice: 400, currency: "ج.م", badge: "", rating: 4.2, image: { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", publicId: "" } },
          { id: "p4", name: "منتج تجريبي 4", price: 450, oldPrice: "", currency: "ج.م", badge: "", rating: 4.7, image: { url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", publicId: "" } },
        ],
      },
      style: {},
    },
    {
      id: "services-1",
      type: "services",
      variant: "cards",
      order: 3,
      visible: true,
      content: {
        title: "خدماتنا",
        subtitle: "ما نقدمه لك",
        columns: 3,
        items: [
          { id: "s1", icon: "🚚", title: "توصيل سريع", description: "توصيل خلال 24 ساعة لكل المحافظات" },
          { id: "s2", icon: "🛡️", title: "دفع آمن", description: "طرق دفع متعددة ومؤمنة بالكامل" },
          { id: "s3", icon: "💬", title: "دعم فوري", description: "فريق دعم جاهز لمساعدتك 24/7" },
        ],
      },
      style: {},
    },
    {
      id: "reviews-1",
      type: "reviews",
      variant: "grid",
      order: 4,
      visible: true,
      content: {
        title: "ماذا يقول عملاؤنا",
        subtitle: "آراء حقيقية من عملاء سعداء",
        columns: 3,
        items: [
          { id: "r1", name: "أحمد محمد", role: "عميل", text: "خدمة ممتازة ومنتجات عالية الجودة", rating: 5 },
          { id: "r2", name: "سارة علي", role: "عميلة", text: "تجربة تسوق رائعة، سأطلب مرة أخرى", rating: 5 },
          { id: "r3", name: "محمد حسن", role: "عميل", text: "توصيل سريع وتغليف احترافي", rating: 4 },
        ],
      },
      style: {},
    },
    {
      id: "cta-1",
      type: "cta",
      variant: "centered",
      order: 5,
      visible: true,
      content: {
        title: "جاهز للبدء؟",
        subtitle: "اطلب الآن واستمتع بالتوصيل المجاني",
        buttonText: "ابدأ التسوق",
        buttonLink: "/products",
      },
      style: {},
    },
    {
      id: "footer-1",
      type: "footer",
      variant: "columns",
      order: 6,
      visible: true,
      content: {
        title: "متجري",
        description: "متجرك الموثوق لأفضل المنتجات",
        logo: { url: "", publicId: "" },
        phone: "+20 100 000 0000",
        email: "info@mystore.com",
        address: "القاهرة، مصر",
        copyright: "© 2026 جميع الحقوق محفوظة",
        social: { facebook: "", instagram: "", twitter: "", whatsapp: "" },
        columns: [
          { title: "روابط سريعة", links: [{ label: "الرئيسية", href: "/" }, { label: "المنتجات", href: "/products" }, { label: "من نحن", href: "/about" }] },
          { title: "المساعدة", links: [{ label: "اتصل بنا", href: "/contact" }, { label: "الشحن", href: "/shipping" }, { label: "الإرجاع", href: "/returns" }] },
        ],
      },
      style: {},
    },
  ],
};