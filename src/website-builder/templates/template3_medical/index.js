// website-builder/templates/template4/index.js
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

export const template6 = {
  id: 6,
  name: "CuraMed",
  description: "عيادة طبية بأزرق طبي وأبيض",
  preview: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",

  theme: {
    primaryColor: "#0B5FA5",
    secondaryColor: "#7FD4D4",
    accentColor: "#F4A6B8",
    backgroundColor: "#ffffff",
    surfaceColor: "#F0F7FC",
    textPrimaryColor: "#0B3D5C",
    textSecondaryColor: "#64748B",
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
      id: "navbar-4",
      type: "navbar",
      order: 0,
      visible: true,
      content: {
        title: "CuraMed",
        logo: { url: "", publicId: "" },
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about" },
          { label: "الخدمات", href: "/services" },
          { label: "المواعيد", href: "/appointments" },
          { label: "تواصل", href: "/contact" },
        ],
        ctaText: "احجز موعد",
        ctaLink: "/appointments",
        showCart: false,
        showUser: true,
      },
      style: {},
    },
    {
      id: "hero-4",
      type: "hero",
      order: 1,
      visible: true,
      content: {
        badge: "",
        title: "خبراء ورعاية صحية شغوفة، من باب منزلك",
        subtitle:
          "تواصل فوراً مع أطباء موثوقين، وأدر وصفاتك الطبية، واحجز التحاليل المعملية — كل ذلك من راحة منزلك.",
        buttonText: "تحدث مع طبيب الآن",
        buttonLink: "/consult",
        image: {
          url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
          publicId: "",
        },
        cards: [
          {
            id: "c1",
            icon: "🩺",
            title: "استشارة أونلاين",
            description: "من أطباء خبراء",
            color: "#E0F2E9",
            iconColor: "#2E7D32",
          },
          {
            id: "c2",
            icon: "💊",
            title: "اطلب أدويتك",
            description: "توصيل سريع",
            color: "#FCE4EC",
            iconColor: "#C2185B",
          },
          {
            id: "c3",
            icon: "🔬",
            title: "خدمات معملية",
            description: "نتائج دقيقة",
            color: "#E3F2FD",
            iconColor: "#1565C0",
          },
        ],
      },
      style: {},
    },
    {
      id: "products-4",
      type: "products",
      order: 2,
      visible: true,
      content: {
        title: "رعاية شاملة لكل مرحلة من حياتك",
        subtitle: "خدماتنا الطبية",
        columns: 4,
        showPrice: false,
        showRating: false,
        showAddToCart: false,
        showLearnMore: true,
        items: [
          {
            id: "m1",
            name: "استشارة عامة",
            description: "استشارة خبيرة لاحتياجاتك الصحية",
            icon: "👨‍⚕️",
            color: "#E0F2E9",
            image: {
              url: "https://images.unsplash.com/photo-1631815588090-d1bcbe9a8f4f?w=400",
              publicId: "",
            },
          },
          {
            id: "m2",
            name: "الرعاية الوقائية",
            description: "فحوصات، تطعيمات وفحص صحي",
            icon: "💉",
            color: "#FCE4EC",
            image: {
              url: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400",
              publicId: "",
            },
          },
          {
            id: "m3",
            name: "الطوارئ",
            description: "مساعدة على مدار الساعة عند الحاجة",
            icon: "🚑",
            color: "#E3F2FD",
            image: {
              url: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400",
              publicId: "",
            },
          },
          {
            id: "m4",
            name: "زيارات متخصصة",
            description: "تواصل مع أطباء متخصصين في مجالات مختلفة",
            icon: "👩‍⚕️",
            color: "#F3E5F5",
            image: {
              url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
              publicId: "",
            },
          },
        ],
      },
      style: {},
    },
    {
      id: "services-4",
      type: "services",
      order: 3,
      visible: true,
      content: {
        title: "كيف يعمل؟",
        subtitle: "4 خطوات سهلة للحصول على رعاية صحية",
        columns: 4,
        layout: "steps",
        items: [
          {
            id: "h1",
            icon: "📅",
            title: "احجز أونلاين",
            description: "احجز موعدك في دقائق",
          },
          {
            id: "h2",
            icon: "👨‍⚕️",
            title: "قابل طبيبك",
            description: "استشر عبر الفيديو أو شخصياً",
          },
          {
            id: "h3",
            icon: "💊",
            title: "احصل على خطة",
            description: "توصيات ورعاية شخصية",
          },
          {
            id: "h4",
            icon: "🔄",
            title: "متابعة مستمرة",
            description: "دعم على مدار الساعة",
          },
        ],
        sideImage: {
          url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600",
          publicId: "",
        },
      },
      style: {},
    },
    {
      id: "reviews-4",
      type: "reviews",
      order: 4,
      visible: true,
      content: {
        title: "ماذا يقول مرضانا",
        subtitle: "قصص نجاح حقيقية",
        columns: 3,
        items: [
          {
            id: "r1",
            name: "أم محمد",
            role: "مريضة",
            text: "خدمة ممتازة والأطباء محترفون جداً. أنصح به بشدة.",
            rating: 5,
          },
          {
            id: "r2",
            name: "أحمد سعيد",
            role: "مريض",
            text: "الحجز أونلاين سهل والاستشارة كانت مفيدة جداً.",
            rating: 5,
          },
          {
            id: "r3",
            name: "سمية علي",
            role: "مريضة",
            text: "تجربة رائعة، والمتابعة بعد الاستشارة ممتازة.",
            rating: 4,
          },
        ],
      },
      style: {},
    },
    {
      id: "cta-4",
      type: "cta",
      order: 5,
      visible: true,
      content: {
        title: "تواصل معنا اليوم!",
        subtitle: "نحن هنا لمساعدتك. املأ النموذج وسنعاود الاتصال بك قريباً.",
        buttonText: "أرسل رسالة",
        buttonLink: "/contact",
        showForm: true,
        formFields: [
          { id: "f1", label: "الاسم الكامل", type: "text", placeholder: "أدخل اسمك" },
          { id: "f2", label: "رقم الهاتف", type: "tel", placeholder: "05xxxxxxxx" },
          { id: "f3", label: "اختر الخدمة", type: "select", options: ["استشارة عامة", "استشارة متخصصة", "طوارئ"] },
        ],
        sideImage: {
          url: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600",
          publicId: "",
        },
      },
      style: {},
    },
    {
      id: "footer-4",
      type: "footer",
      order: 6,
      visible: true,
      content: {
        title: "CuraMed",
        description: "رعاية صحية موثوقة من باب منزلك",
        logo: { url: "", publicId: "" },
        phone: "+20 100 000 0000",
        email: "info@curamed.com",
        address: "القاهرة، مصر",
        copyright: "© 2026 CuraMed — جميع الحقوق محفوظة",
        social: { facebook: "#", instagram: "#", twitter: "#", whatsapp: "#" },
        columns: [
          {
            title: "الشركة",
            links: [
              { label: "من نحن", href: "/about" },
              { label: "فريقنا", href: "/team" },
              { label: "الوظائف", href: "/careers" },
            ],
          },
          {
            title: "الخدمات",
            links: [
              { label: "استشارات", href: "/consult" },
              { label: "تحاليل", href: "/labs" },
              { label: "أدوية", href: "/pharmacy" },
            ],
          },
          {
            title: "روابط سريعة",
            links: [
              { label: "الأسئلة الشائعة", href: "/faq" },
              { label: "سياسة الخصوصية", href: "/privacy" },
              { label: "الشروط", href: "/terms" },
            ],
          },
        ],
      },
      style: {},
    },
  ],
};