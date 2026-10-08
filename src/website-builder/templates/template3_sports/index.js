// website-builder/templates/template7/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template7 = {
  id: 7,
  name: "FAYP Sport",
  description: "متجر ملابس رياضية بتصميم Bold أسود وأبيض",
  preview: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",

  theme: {
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    accentColor: "#2563EB",
    backgroundColor: "#f5f5f5",
    surfaceColor: "#ffffff",
    textPrimaryColor: "#000000",
    textSecondaryColor: "#666666",
    fontFamily: "'Tajawal', Arial, sans-serif",
    radius: "24px",
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
      id: "navbar-7",
      type: "navbar",
      order: 0,
      visible: true,
      content: {
        title: "FAYP",
        logo: { url: "", publicId: "" },
        links: [
          { label: "الرجال", href: "/men" },
          { label: "النساء", href: "/women" },
          { label: "اللياقة", href: "/fitness" },
          { label: "الرياضة", href: "/sports" },
        ],
        showSearch: true,
        showUser: true,
        showCart: true,
        cartCount: 2,
      },
      style: {},
    },
    {
      id: "hero-7",
      type: "hero",
      order: 1,
      visible: true,
      content: {
        badge: "جديد 2026",
        title: "الرجال",
        subtitle: "النساء",
        backgroundImage: {
          url: "",
          publicId: "",
        },
        cards: [
          {
            id: "c1",
            title: "MEN'S",
            image: {
              url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
              publicId: "",
            },
            href: "/men",
          },
          {
            id: "c2",
            title: "GIRL'S",
            image: {
              url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800",
              publicId: "",
            },
            href: "/women",
          },
        ],
      },
      style: {},
    },
    {
      id: "products-7",
      type: "products",
      order: 2,
      visible: true,
      content: {
        title: "الأكثر مبيعاً",
        subtitle: "TOP SALES",
        columns: 4,
        showPrice: true,
        showRating: true,
        showAddToCart: true,
        items: [
          {
            id: "p1",
            name: "تيشيرت رياضي رجالي",
            price: 189,
            currency: "ج.م",
            rating: 4.7,
            badge: "جديد",
            image: {
              url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
              publicId: "",
            },
          },
          {
            id: "p2",
            name: "ليقنز رياضي نسائي",
            price: 249,
            currency: "ج.م",
            rating: 4.8,
            image: {
              url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
              publicId: "",
            },
          },
          {
            id: "p3",
            name: "سويت شيرت أسود",
            price: 320,
            oldPrice: 420,
            currency: "ج.م",
            rating: 4.5,
            badge: "خصم 25%",
            image: {
              url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
              publicId: "",
            },
          },
          {
            id: "p4",
            name: "شورت رياضي",
            price: 149,
            currency: "ج.م",
            rating: 4.6,
            image: {
              url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
              publicId: "",
            },
          },
        ],
      },
      style: {},
    },
    {
      id: "services-7",
      type: "services",
      order: 3,
      visible: true,
      content: {
        title: "لماذا FAYP؟",
        subtitle: "مميزاتنا",
        columns: 4,
        items: [
          {
            id: "s1",
            icon: "🚚",
            title: "توصيل سريع",
            description: "شحن مجاني للطلبات فوق 500 ج.م",
          },
          {
            id: "s2",
            icon: "↩️",
            title: "إرجاع مجاني",
            description: "خلال 30 يوم من الاستلام",
          },
          {
            id: "s3",
            icon: "💳",
            title: "دفع آمن",
            description: "طرق دفع متعددة ومؤمنة",
          },
          {
            id: "s4",
            icon: "⚡",
            title: "جودة عالية",
            description: "خامات مستوردة مريحة",
          },
        ],
      },
      style: {},
    },
    {
      id: "reviews-7",
      type: "reviews",
      order: 4,
      visible: true,
      content: {
        title: "آراء الرياضيين",
        subtitle: "تقييمات حقيقية",
        columns: 3,
        items: [
          {
            id: "r1",
            name: "أحمد المصري",
            role: "لاعب كمال أجسام",
            text: "خامات ممتازة وتتحمل التمرين الشديد. أنصح به بشدة!",
            rating: 5,
          },
          {
            id: "r2",
            name: "سارة يوسف",
            role: "مدربة لياقة",
            text: "تصاميم عصرية ومريحة جداً أثناء التمرين.",
            rating: 5,
          },
          {
            id: "r3",
            name: "محمد رضا",
            role: "عدّاء",
            text: "جودة تستاهل كل قرش، والتوصيل كان سريع.",
            rating: 5,
          },
        ],
      },
      style: {},
    },
    {
      id: "cta-7",
      type: "cta",
      order: 5,
      visible: true,
      content: {
        title: "خصم 30% على المجموعة الجديدة",
        subtitle: "لفترة محدودة — استخدم كود FAYP30",
        buttonText: "تسوق الآن",
        buttonLink: "/products",
      },
      style: {},
    },
    {
      id: "footer-7",
      type: "footer",
      order: 6,
      visible: true,
      content: {
        title: "FAYP",
        description: "ملابس رياضية بأسلوب عصري",
        logo: { url: "", publicId: "" },
        phone: "+20 100 000 0000",
        email: "info@fayp.com",
        address: "القاهرة، مصر",
        copyright: "© 2026 FAYP — جميع الحقوق محفوظة",
        social: { facebook: "#", instagram: "#", twitter: "#", whatsapp: "#" },
        columns: [
          {
            title: "الأقسام",
            links: [
              { label: "الرجال", href: "/men" },
              { label: "النساء", href: "/women" },
              { label: "اللياقة", href: "/fitness" },
              { label: "الرياضة", href: "/sports" },
            ],
          },
          {
            title: "مساعدة",
            links: [
              { label: "تواصل معنا", href: "/contact" },
              { label: "سياسة الاستبدال", href: "/returns" },
              { label: "الشحن", href: "/shipping" },
              { label: "الأسئلة الشائعة", href: "/faq" },
            ],
          },
          {
            title: "النشرة البريدية",
            links: [],
            isNewsletter: true,
          },
        ],
      },
      style: {},
    },
  ],
};