// website-builder/templates/template9/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template11 = {
  id: 11,
  name: "Auragé",
  description: "متجر عطور فاخرة بتصميم أصفر وأسود",
  preview: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",

  theme: {
    primaryColor: "#0D0D0D",
    secondaryColor: "#FFD60A",
    accentColor: "#FFD60A",
    backgroundColor: "#FFFFFF",
    surfaceColor: "#F5F5F5",
    textPrimaryColor: "#0D0D0D",
    textSecondaryColor: "#8B8B8B",
    fontFamily: "'Cairo', Arial, sans-serif",
    radius: "4px",
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
      id: "navbar-9",
      type: "navbar",
      order: 0,
      visible: true,
      content: {
        title: "AURAGÉ",
        logo: { url: "", publicId: "" },
        links: [
          { label: "البداية", href: "/" },
          { label: "الأكثر رواجاً", href: "/trending" },
        ],
        ctaText: "تسوق الآن",
        ctaLink: "/shop",
      },
      style: {},
    },
    {
      id: "hero-9",
      type: "hero",
      order: 1,
      visible: true,
      content: {
        badge: "جديد",
        subBadge: "أُطلق في ديسمبر 2025",
        title: "FRAGRANCE",
        title2: "THAT INSPIRES",
        description: "عطور مستوحاة من أجمل اللحظات — اكتشف مجموعتنا الجديدة.",
        ribbon: "برعاية مصمم العطور الشهير",
        backgroundImage: {
          url: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600",
          publicId: "",
        },
        productImage: {
          url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600",
          publicId: "",
        },
        productName: "BLANC",
        productSubtitle: "Bergamot · Black Currant",
      },
      style: {},
    },
    {
      id: "products-9",
      type: "products",
      order: 2,
      visible: true,
      content: {
        title: "FEATURED PERFUMES",
        subtitle: "عطور مميزة",
        columns: 4,
        showPrice: true,
        showRating: false,
        showAddToCart: true,
        addToCartText: "أضف للحقيبة",
        items: [
          {
            id: "p1",
            name: "MYSTIC BLANC",
            price: 320,
            currency: "$",
            badge: "",
            image: {
              url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500",
              publicId: "",
            },
          },
          {
            id: "p2",
            name: "ROSE BLANC",
            price: 450,
            currency: "$",
            badge: "الأكثر مبيعاً",
            image: {
              url: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
              publicId: "",
            },
          },
          {
            id: "p3",
            name: "CRYSTAL BLANC",
            price: 380,
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
              publicId: "",
            },
          },
          {
            id: "p4",
            name: "GOLDEN BLANC",
            price: 520,
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500",
              publicId: "",
            },
          },
        ],
      },
      style: {},
    },
    {
      id: "services-9",
      type: "services",
      order: 3,
      visible: true,
      content: {
        title: "استكشف مجموعاتنا",
        subtitle: "EXPLORE OUR CATEGORIES",
        layout: "horizontal",
        items: [
          {
            id: "s1",
            icon: "🌸",
            title: "FOR HER",
            description: "عطور نسائية",
          },
          {
            id: "s2",
            icon: "🎩",
            title: "FOR HIM",
            description: "عطور رجالية",
          },
          {
            id: "s3",
            icon: "✨",
            title: "UNISEX",
            description: "عطور للجنسين",
          },
          {
            id: "s4",
            icon: "💎",
            title: "LUXURY",
            description: "المجموعة الفاخرة",
          },
        ],
      },
      style: {},
    },
    {
      id: "reviews-9",
      type: "reviews",
      order: 4,
      visible: true,
      content: {
        title: "OUR STORY",
        subtitle: "قصتنا",
        layout: "split",
        description: "بدأت Auragé من شغف حقيقي بالعطور الفاخرة. نؤمن أن كل عطر يحكي قصة — قصة عن شخص، لحظة، وذكرى. من أجود المكونات الطبيعية إلى التصاميم الأنيقة، كل تفصيلة في Auragé مصنوعة بعناية.",
        buttonText: "اقرأ قصتنا",
        buttonLink: "/about",
        image: {
          url: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800",
          publicId: "",
        },
        items: [
          { id: "r1", name: "منتج أصلي", role: "100% أصلي", text: "كل العطور أصلية 100%", rating: 5 },
          { id: "r2", name: "توصيل سريع", role: "شحن مجاني", text: "شحن مجاني للطلبات فوق $200", rating: 5 },
        ],
      },
      style: {},
    },
    {
      id: "cta-9",
      type: "cta",
      order: 5,
      visible: true,
      content: {
        title: "اشترك واحصل على خصم 10%",
        subtitle: "أول عملية شراء + عروض حصرية",
        buttonText: "اشترك الآن",
        buttonLink: "/subscribe",
      },
      style: {},
    },
    {
      id: "footer-9",
      type: "footer",
      order: 6,
      visible: true,
      content: {
        title: "AURAGÉ",
        description: "عطور فاخرة — Fragrance that Inspires",
        logo: { url: "", publicId: "" },
        phone: "+20 100 000 0000",
        email: "info@auraje.com",
        address: "القاهرة، مصر",
        copyright: "© 2026 AURAGÉ — جميع الحقوق محفوظة",
        social: { facebook: "#", instagram: "#", twitter: "#", whatsapp: "#" },
        columns: [
          {
            title: "تسوق",
            links: [
              { label: "FOR HER", href: "/her" },
              { label: "FOR HIM", href: "/him" },
              { label: "UNISEX", href: "/unisex" },
              { label: "LUXURY", href: "/luxury" },
            ],
          },
          {
            title: "خدمة العملاء",
            links: [
              { label: "الشحن", href: "/shipping" },
              { label: "الإرجاع", href: "/returns" },
              { label: "الأسئلة الشائعة", href: "/faq" },
            ],
          },
          {
            title: "عن Auragé",
            links: [
              { label: "قصتنا", href: "/about" },
              { label: "تواصل معنا", href: "/contact" },
              { label: "المدونة", href: "/blog" },
            ],
          },
        ],
      },
      style: {},
    },
  ],
};