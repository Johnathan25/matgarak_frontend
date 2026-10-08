// website-builder/templates/template1/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template3 = {
  id: 3,
  name: "Fashion",
  description: "متجر ملابس عصري بألوان دافئة",
  preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",

  theme: {
    primaryColor: "#1a1a1a",
    secondaryColor: "#FFB629",
    accentColor: "#FFB629",
    backgroundColor: "#F8F6F2",
    surfaceColor: "#ffffff",
    textPrimaryColor: "#1a1a1a",
    textSecondaryColor: "#6B7280",
    fontFamily: "'Cairo', Arial, sans-serif",
    radius: "20px",
    shadow: "soft",
  },

  components: { navbar: Navbar, hero: Hero, products: Products, services: Services, reviews: Reviews, cta: CTA, footer: Footer },

  sections: [
    {
      id: "navbar-1", type: "navbar", order: 0, visible: true,
      content: {
        title: "LogoName",
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "المنتجات", href: "/products" },
          { label: "العضويات", href: "/memberships" },
          { label: "الأسئلة", href: "/faq" },
        ],
        showSearch: false, showCart: true, showUser: true, cartCount: 2,
      },
    },
    {
      id: "hero-1", type: "hero", order: 1, visible: true,
      content: {
        badge: "مجموعة 2026",
        title: "Moody's Style",
        subtitle: "شغف بلا حدود... ملابس تعبر عنك",
        buttonText: "تسوق الآن",
        buttonLink: "/products",
        secondaryButtonText: "تسجيل الدخول بـ Google",
        image: { url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800", publicId: "" },
        productName: "هودي أصلي",
        productPrice: 78,
        rating: 4.9,
        reviewsCount: 120,
        colorOptions: ["#B5A88F", "#5B7DB1", "#F5D76E", "#3CB371", "#E74C3C"],
      },
    },
    {
      id: "products-1", type: "products", order: 2, visible: true,
      content: {
        title: "الأكثر مبيعاً",
        subtitle: "تصفح أحدث الملابس",
        columns: 4,
        showPrice: true, showRating: true, showAddToCart: true,
        items: [
          { id: "p1", name: "هودي كاجوال", price: 450, oldPrice: 600, currency: "ج.م", badge: "خصم 25%", rating: 4.5, image: { url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", publicId: "" } },
          { id: "p2", name: "تيشيرت قطن", price: 180, currency: "ج.م", badge: "جديد", rating: 4.8, image: { url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", publicId: "" } },
          { id: "p3", name: "بنطلون جينز", price: 620, oldPrice: 750, currency: "ج.م", rating: 4.2, image: { url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500", publicId: "" } },
          { id: "p4", name: "جاكيت شتوي", price: 1250, currency: "ج.م", rating: 4.7, image: { url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", publicId: "" } },
        ],
      },
    },
    {
      id: "services-1", type: "services", order: 3, visible: true,
      content: {
        title: "شركاء النجاح",
        subtitle: "نتعامل مع أفضل العلامات",
        items: [
          { id: "s1", icon: "◆", title: "Logitech", description: "شريك رسمي" },
          { id: "s2", icon: "◆", title: "Amazon", description: "شريك رسمي" },
          { id: "s3", icon: "◆", title: "Shopify", description: "شريك رسمي" },
          { id: "s4", icon: "◆", title: "Alibaba", description: "شريك رسمي" },
          { id: "s5", icon: "◆", title: "Droppits", description: "شريك رسمي" },
        ],
      },
    },
    {
      id: "reviews-1", type: "reviews", order: 4, visible: true,
      content: {
        title: "ماذا يقول عملاؤنا",
        items: [
          { id: "r1", name: "سارة أحمد", role: "عميلة", text: "جودة ممتازة والألوان زي الصور بالظبط", rating: 5 },
          { id: "r2", name: "محمد علي", role: "عميل", text: "التوصيل سريع والتغليف أنيق", rating: 5 },
          { id: "r3", name: "نور حسن", role: "عميلة", text: "الأسعار مناسبة جداً مقارنة بالجودة", rating: 4 },
        ],
      },
    },
    {
      id: "cta-1", type: "cta", order: 5, visible: true,
      content: {
        title: "جاهز لتجربة أسلوب جديد؟",
        subtitle: "اطلب الآن واستمتع بالتوصيل المجاني",
        buttonText: "ابدأ التسوق",
        buttonLink: "/products",
      },
    },
    {
      id: "footer-1", type: "footer", order: 6, visible: true,
      content: {
        title: "LogoName",
        description: "متجرك للأزياء العصرية",
        phone: "+20 100 000 0000",
        email: "info@logoname.com",
        copyright: "© 2026 LogoName — جميع الحقوق محفوظة",
        social: { facebook: "#", instagram: "#", twitter: "#" },
      },
    },
  ],
};