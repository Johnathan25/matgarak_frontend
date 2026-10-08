// website-builder/templates/template2/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template2 = {
  id: 2,
  name: "Elegant",
  description: "تصميم فخم بألوان ذهبية وداكنة",
  preview: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800",

  theme: {
    primaryColor: "#0d0d0d",
    secondaryColor: "#1a1a1a",
    accentColor: "#D4AF37",
    backgroundColor: "#0d0d0d",
    surfaceColor: "#1a1a1a",
    textPrimaryColor: "#ffffff",
    textSecondaryColor: "#a3a3a3",
    fontFamily: "'El Messiri', serif",
    radius: "0px",
    shadow: "dramatic",
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
      id: "navbar-2",
      type: "navbar",
      variant: "minimal",
      order: 0,
      visible: true,
      content: {
        title: "LUXE",
        logo: { url: "", publicId: "" },
        links: [
          { label: "المجموعة", href: "/products" },
          { label: "العلامة", href: "/about" },
          { label: "تواصل", href: "/contact" },
        ],
        showSearch: false,
        showCart: true,
        showUser: false,
        cartCount: 0,
      },
      style: {},
    },
    {
      id: "hero-2",
      type: "hero",
      variant: "split",
      order: 1,
      visible: true,
      content: {
        badge: "مجموعة 2026",
        title: "الفخامة في كل تفصيلة",
        subtitle: "قطع مختارة بعناية لعشاق التميّز",
        buttonText: "اكتشف المجموعة",
        buttonLink: "/products",
        image: {
          url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800",
          publicId: "",
        },
      },
      style: {},
    },
    {
      id: "products-2",
      type: "products",
      variant: "list",
      order: 2,
      visible: true,
      content: {
        title: "المجموعة",
        subtitle: "قطع مختارة بعناية",
        columns: 3,
        showPrice: true,
        showRating: false,
        showAddToCart: true,
        items: [
          { id: "p1", name: "قطعة فاخرة 1", price: 1250, currency: "ج.م", image: { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", publicId: "" } },
          { id: "p2", name: "قطعة فاخرة 2", price: 980, currency: "ج.م", image: { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", publicId: "" } },
          { id: "p3", name: "قطعة فاخرة 3", price: 2100, currency: "ج.م", image: { url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", publicId: "" } },
        ],
      },
      style: {},
    },
    {
      id: "services-2",
      type: "services",
      variant: "list",
      order: 3,
      visible: true,
      content: {
        title: "خدماتنا المميزة",
        subtitle: "تجربة استثنائية",
        columns: 3,
        items: [
          { id: "s1", icon: "◆", title: "توصيل VIP", description: "توصيل فوري في نفس اليوم داخل القاهرة" },
          { id: "s2", icon: "◆", title: "تغليف فاخر", description: "تغليف حريري مجاني لكل قطعة" },
          { id: "s3", icon: "◆", title: "استشارة شخصية", description: "مستشار شخصي لكل عميل" },
        ],
      },
      style: {},
    },
    {
      id: "reviews-2",
      type: "reviews",
      variant: "carousel",
      order: 4,
      visible: true,
      content: {
        title: "شهادات عملائنا",
        subtitle: "تجارب حقيقية",
        columns: 3,
        items: [
          { id: "r1", name: "ليلى إبراهيم", role: "عميلة دائمة", text: "جودة استثنائية وخدمة راقية تستحق كل قرش", rating: 5 },
          { id: "r2", name: "كريم مصطفى", role: "عميل", text: "التغليف نفسه تحفة فنية. تجربة فخمة!", rating: 5 },
        ],
      },
      style: {},
    },
    {
      id: "cta-2",
      type: "cta",
      variant: "minimal",
      order: 5,
      visible: true,
      content: {
        title: "احصل على تجربة فاخرة",
        subtitle: "اشترك في نشرتنا الخاصة",
        buttonText: "اشترك",
        buttonLink: "/subscribe",
      },
      style: {},
    },
    {
      id: "footer-2",
      type: "footer",
      variant: "minimal",
      order: 6,
      visible: true,
      content: {
        title: "LUXE",
        description: "الفخامة في كل تفصيلة",
        phone: "+20 100 000 0000",
        email: "info@luxe.com",
        copyright: "© 2026 LUXE — جميع الحقوق محفوظة",
        social: { facebook: "", instagram: "", twitter: "" },
        columns: [],
      },
      style: {},
    },
  ],
};