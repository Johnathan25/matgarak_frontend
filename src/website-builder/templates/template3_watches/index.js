// website-builder/templates/template8/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template10 = {
  id: 10,
  name: "CodexMart",
  description: "متجر ساعات فخمة بتصميم أسود وذهبي",
  preview: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",

  theme: {
    primaryColor: "#0D0D0D",
    secondaryColor: "#C9A961",
    accentColor: "#C9A961",
    backgroundColor: "#FFFFFF",
    surfaceColor: "#1A1A1A",
    textPrimaryColor: "#0D0D0D",
    textSecondaryColor: "#8B8B8B",
    fontFamily: "'Tajawal', Arial, sans-serif",
    radius: "4px",
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
      id: "navbar-8",
      type: "navbar",
      order: 0,
      visible: true,
      content: {
        title: "CODEX.MART",
        logo: { url: "", publicId: "" },
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about" },
          { label: "المتجر", href: "/shop" },
          { label: "المدونة", href: "/blog" },
          { label: "تواصل", href: "/contact" },
        ],
        welcomeText: "مرحباً بك في متجر الساعات",
        showSearch: true,
        showUser: true,
        showWishlist: true,
        showCart: true,
        cartTotal: 0.00,
      },
      style: {},
    },
    {
      id: "hero-8",
      type: "hero",
      order: 1,
      visible: true,
      content: {
        title: "GRAND",
        subtitle: "SALE",
        discount: "خصم يصل إلى 40%",
        buttonText: "تسوق الآن",
        buttonLink: "/shop",
        backgroundImage: {
          url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200",
          publicId: "",
        },
        cards: [
          {
            id: "c1",
            title: "NEW COLLECTION",
            subtitle: "مجموعة جديدة",
            buttonText: "تسوق المجموعة",
            buttonLink: "/new",
            bgColor: "#1A1A1A",
            textColor: "#FFFFFF",
            image: {
              url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
              publicId: "",
            },
          },
          {
            id: "c2",
            title: "SIMPLE ELEGANCE",
            subtitle: "أناقة بسيطة",
            buttonText: "تسوق الآن",
            buttonLink: "/simple",
            bgColor: "#E8D5B7",
            textColor: "#1A1A1A",
            image: {
              url: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
              publicId: "",
            },
          },
          {
            id: "c3",
            title: "SPECIAL EDITION",
            subtitle: "إصدار خاص",
            buttonText: "استكشف المنتج",
            buttonLink: "/special",
            bgColor: "#F5F5F5",
            textColor: "#1A1A1A",
            image: {
              url: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
              publicId: "",
            },
          },
        ],
      },
      style: {},
    },
    {
      id: "products-8",
      type: "products",
      order: 2,
      visible: true,
      content: {
        title: "الأكثر مبيعاً",
        subtitle: "BEST SELLERS",
        columns: 4,
        showPrice: true,
        showRating: false,
        showAddToCart: true,
        tabs: ["Watches", "Men's", "Ladies", "Smartwatches"],
        items: [
          {
            id: "w1",
            name: "Black Brown Genuine Leather Bernsley 39",
            price: 177.63,
            oldPrice: "",
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
              publicId: "",
            },
          },
          {
            id: "w2",
            name: "Silver Brown Leather Bernsley 39",
            price: 198.60,
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
              publicId: "",
            },
          },
          {
            id: "w3",
            name: "Black Silver Bernsley 39",
            price: 127.68,
            oldPrice: 148.00,
            currency: "$",
            badge: "خصم",
            image: {
              url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
              publicId: "",
            },
          },
          {
            id: "w4",
            name: "Black Black Leather Yountville 40",
            price: 310.36,
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500",
              publicId: "",
            },
          },
        ],
      },
      style: {},
    },
    {
      id: "services-8",
      type: "services",
      order: 3,
      visible: true,
      content: {
        title: "NEW WATCH COLLECTION",
        subtitle: "PLATINUM DESIGN",
        description: "اكتشف مجموعة بلاتينيوم الجديدة من الساعات الفاخرة بتصميم عصري وأداء عالي.",
        buttonText: "تسوق الآن",
        buttonLink: "/platinum",
        image: {
          url: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
          publicId: "",
        },
        stats: [
          { id: "s1", value: "464", label: "الساعات" },
          { id: "s2", value: "11", label: "الماركات" },
          { id: "s3", value: "66", label: "المتاجر" },
          { id: "s4", value: "22", label: "الدول" },
        ],
      },
      style: {},
    },
    {
      id: "reviews-8",
      type: "reviews",
      order: 4,
      visible: true,
      content: {
        title: "CLEARANCE",
        subtitle: "FEATURED PRODUCTS",
        layout: "featured",
        mainImage: {
          url: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800",
          publicId: "",
        },
        mainProduct: {
          name: "Classic Chronograph",
          description: "أيقونة الأصالة والأناقة",
          price: 199.99,
          currency: "$",
          buttonText: "اشتر الآن",
        },
        items: [
          {
            id: "f1",
            name: "Brown Leather Watch",
            price: 129.00,
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400",
              publicId: "",
            },
          },
          {
            id: "f2",
            name: "White Dial Leather Watch",
            price: 149.00,
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400",
              publicId: "",
            },
          },
          {
            id: "f3",
            name: "Black Face Silver Watch",
            price: 179.00,
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400",
              publicId: "",
            },
          },
          {
            id: "f4",
            name: "Gold Classic Watch",
            price: 249.00,
            currency: "$",
            image: {
              url: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400",
              publicId: "",
            },
          },
        ],
      },
      style: {},
    },
    {
      id: "cta-8",
      type: "cta",
      order: 5,
      visible: true,
      content: {
        title: "اشترك في نشرتنا البريدية",
        subtitle: "خصم 10% على أول عملية شراء + عروض حصرية",
        buttonText: "اشترك الآن",
        buttonLink: "/subscribe",
      },
      style: {},
    },
    {
      id: "footer-8",
      type: "footer",
      order: 6,
      visible: true,
      content: {
        title: "CODEX.MART",
        description: "متجر الساعات الفاخرة — أصالة وأناقة",
        logo: { url: "", publicId: "" },
        phone: "+20 100 000 0000",
        email: "info@codexmart.com",
        address: "القاهرة، مصر",
        copyright: "© 2026 CODEX.MART — جميع الحقوق محفوظة",
        social: { facebook: "#", instagram: "#", twitter: "#", whatsapp: "#" },
        columns: [
          {
            title: "روابط سريعة",
            links: [
              { label: "من نحن", href: "/about" },
              { label: "المتجر", href: "/shop" },
              { label: "المدونة", href: "/blog" },
              { label: "تواصل", href: "/contact" },
            ],
          },
          {
            title: "خدمة العملاء",
            links: [
              { label: "الشحن", href: "/shipping" },
              { label: "الإرجاع", href: "/returns" },
              { label: "الأسئلة الشائعة", href: "/faq" },
              { label: "الضمان", href: "/warranty" },
            ],
          },
          {
            title: "تابعنا",
            links: [
              { label: "Facebook", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "Twitter", href: "#" },
            ],
          },
        ],
      },
      style: {},
    },
  ],
};