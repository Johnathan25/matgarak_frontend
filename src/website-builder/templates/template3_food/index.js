// website-builder/templates/template6/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template8 = {
  id: 8,
  name: "DelishDrop",
  description: "مطعم وديليفري بتصميم أخضر وأصفر",
  preview: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",

  theme: {
    primaryColor: "#1B4332",
    secondaryColor: "#FFD60A",
    accentColor: "#FF6B35",
    backgroundColor: "#F9F7F2",
    surfaceColor: "#ffffff",
    textPrimaryColor: "#1B4332",
    textSecondaryColor: "#6B7C70",
    fontFamily: "'Cairo', Arial, sans-serif",
    radius: "20px",
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
      id: "navbar-6",
      type: "navbar",
      order: 0,
      visible: true,
      content: {
        title: "DelishDrop",
        logo: { url: "", publicId: "" },
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about" },
          { label: "المنيو", href: "/menu" },
          { label: "العروض", href: "/offers" },
          { label: "التقييمات", href: "/reviews" },
        ],
        ctaText: "تسجيل الدخول",
        ctaLink: "/login",
        showCart: true,
        cartCount: 2,
      },
      style: {},
    },
    {
      id: "hero-6",
      type: "hero",
      order: 1,
      visible: true,
      content: {
        badge: "توصيل مجاني",
        title: "طعام لذيذ حتى باب منزلك",
        subtitle:
          "مهمتنا ربط عشاق الطعام بمطاعمهم المفضلة. سواء كنت تشتهي وجبة سريعة أو مغامرة طهي، نحن هنا لتحويل طلبك القادم إلى تجربة لا تُنسى.",
        buttonText: "ابدأ الآن",
        buttonLink: "/menu",
        image: {
          url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
          publicId: "",
        },
        floatingImage: {
          url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500",
          publicId: "",
        },
        stats: {
          customers: "1500+",
          rating: 4.9,
          reviewsCount: 5,
        },
      },
      style: {},
    },
    {
      id: "products-6",
      type: "products",
      order: 2,
      visible: true,
      content: {
        title: "الأطباق المميزة",
        subtitle: "Our Top Picks",
        columns: 4,
        showPrice: true,
        showRating: true,
        showAddToCart: true,
        items: [
          {
            id: "f1",
            name: "سلطة خضراء طازجة",
            description: "Healthy Bites",
            price: 12.75,
            currency: "$",
            rating: 4.8,
            calories: "450 كالوري",
            image: {
              url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
              publicId: "",
            },
          },
          {
            id: "f2",
            name: "بيتزا مارغريتا",
            description: "Italian Classics",
            price: 30.00,
            currency: "$",
            rating: 4.9,
            calories: "980 كالوري",
            image: {
              url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
              publicId: "",
            },
          },
          {
            id: "f3",
            name: "تشيز كيك ثلاثي",
            description: "Desserts & Treats",
            price: 5.50,
            currency: "$",
            rating: 4.8,
            calories: "420 كالوري",
            image: {
              url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500",
              publicId: "",
            },
          },
          {
            id: "f4",
            name: "برجر لحم واجيو",
            description: "Premium Burgers",
            price: 22.00,
            oldPrice: 28.00,
            currency: "$",
            rating: 4.9,
            badge: "الأكثر مبيعاً",
            calories: "850 كالوري",
            image: {
              url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
              publicId: "",
            },
          },
        ],
      },
      style: {},
    },
    {
      id: "services-6",
      type: "services",
      order: 3,
      visible: true,
      content: {
        title: "استكشف المأكولات اللذيذة حسب الفئة",
        subtitle: "Explore Delicious Cuisine by Category",
        layout: "circular",
        items: [
          {
            id: "s1",
            icon: "🍔",
            title: "برجر",
            description: "Burgers & Fries",
            image: {
              url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
              publicId: "",
            },
          },
          {
            id: "s2",
            icon: "🍕",
            title: "بيتزا",
            description: "Pizza Paradise",
            image: {
              url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300",
              publicId: "",
            },
          },
          {
            id: "s3",
            icon: "🌮",
            title: "ساندويتشات",
            description: "Sandwiches & Wraps",
            image: {
              url: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300",
              publicId: "",
            },
          },
          {
            id: "s4",
            icon: "🍗",
            title: "مقليات",
            description: "Fried & Crispy",
            image: {
              url: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300",
              publicId: "",
            },
          },
        ],
        ctaText: "اعرض كل الفئات",
      },
      style: {},
    },
    {
      id: "reviews-6",
      type: "reviews",
      order: 4,
      visible: true,
      content: {
        title: "عروض فلاش تنتهي قريباً",
        subtitle: "Flash Deals: Ending Soon!",
        layout: "compact",
        items: [
          {
            id: "r1",
            name: "تشيز برجر لحم",
            role: "Signature Cheeseburger",
            text: "برجر لحم مع جبن شيدر مذاب وخس طازج",
            price: 4.99,
            oldPrice: 6.99,
            rating: 4.7,
            image: {
              url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
              publicId: "",
            },
          },
          {
            id: "r2",
            name: "بيتزا سبايسي تشيكن",
            role: "Spicy Chicken BBQ Pizza",
            text: "بيتزا بالدجاج الحار مع صوص باربكيو",
            price: 8.99,
            rating: 4.9,
            image: {
              url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300",
              publicId: "",
            },
          },
          {
            id: "r3",
            name: "سلطة خضراء طازجة",
            role: "Fresh Garden Salad",
            text: "خضروات موسمية طازجة مع دريسنج خفيف",
            price: 5.50,
            rating: 4.8,
            image: {
              url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
              publicId: "",
            },
          },
        ],
      },
      style: {},
    },
    {
      id: "cta-6",
      type: "cta",
      order: 5,
      visible: true,
      content: {
        title: "اطلب الآن واستمتع بتوصيل مجاني",
        subtitle: "لأول طلب فوق 25$",
        buttonText: "اطلب الآن",
        buttonLink: "/menu",
      },
      style: {},
    },
    {
      id: "footer-6",
      type: "footer",
      order: 6,
      visible: true,
      content: {
        title: "DelishDrop",
        description: "طعام لذيذ حتى باب منزلك — أسرع خدمة توصيل",
        logo: { url: "", publicId: "" },
        phone: "+20 100 000 0000",
        email: "info@delishdrop.com",
        address: "القاهرة، مصر",
        copyright: "© 2026 DelishDrop — جميع الحقوق محفوظة",
        social: { facebook: "#", instagram: "#", twitter: "#", whatsapp: "#" },
        columns: [
          {
            title: "الشركة",
            links: [
              { label: "من نحن", href: "/about" },
              { label: "الوظائف", href: "/careers" },
              { label: "الشركاء", href: "/partners" },
            ],
          },
          {
            title: "المنيو",
            links: [
              { label: "برجر", href: "/menu/burgers" },
              { label: "بيتزا", href: "/menu/pizza" },
              { label: "مشروبات", href: "/menu/drinks" },
            ],
          },
          {
            title: "المساعدة",
            links: [
              { label: "تواصل معنا", href: "/contact" },
              { label: "الأسئلة الشائعة", href: "/faq" },
              { label: "سياسة الاسترجاع", href: "/returns" },
            ],
          },
        ],
      },
      style: {},
    },
  ],
};