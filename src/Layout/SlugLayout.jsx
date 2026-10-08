// src/layouts/SlugLayout.jsx
import { Outlet, useParams, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import useWebsiteSettings from "../hooks/useWebsiteSettings";
import { WebsiteThemeProvider } from "../context/WebsiteThemeContext";
import StoreRenderer from "../website-builder/renderer/StoreRenderer";

export default function SlugLayout() {
  const { slug: paramSlug } = useParams();
  const location = useLocation();

  // ============================================================
  // استخراج الـ slug من الـ subdomain
  // ahmed.localhost     → ahmed
  // ahmed.matgark.com   → ahmed
  // ============================================================
  const getSlugFromHostname = () => {
    const hostname = window.location.hostname;

    const IGNORED = [
      "localhost",
      "127.0.0.1",
      "www.localhost",
      "matgark.com",
      "www.matgark.com",
    ];

    if (IGNORED.includes(hostname)) return null;

    const parts = hostname.split(".");
    if (parts[0] === "www" && parts.length > 1) return parts[1];
    return parts[0];
  };

  const slug = getSlugFromHostname() || paramSlug;

  console.log("🌐 Hostname:", window.location.hostname);
  console.log("🏷️ Slug:", slug);
  console.log("📦 paramSlug:", paramSlug);

  const { settings, loading, error } = useWebsiteSettings(slug);

  // ============================================================
  // Loading
  // ============================================================
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <Loader2 className="w-12 h-12 animate-spin text-gray-600" />
        <p className="text-gray-500 font-bold">جاري تحميل المتجر...</p>
      </div>
    );
  }

  // ============================================================
  // مفيش slug
  // ============================================================
  if (!slug) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50" dir="rtl">
        <div className="text-6xl">🔗</div>
        <h1 className="text-2xl font-black text-gray-800">لم يتم تحديد المتجر</h1>
        <p className="text-gray-500">تأكد من الرابط أو الـ subdomain</p>
      </div>
    );
  }

  // ============================================================
  // خطأ
  // ============================================================
  if (error || !settings) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50" dir="rtl">
        <div className="text-6xl">😕</div>
        <h1 className="text-2xl font-black text-gray-800">المتجر غير موجود</h1>
        <p className="text-gray-500">{error || "تأكد من الرابط وحاول مرة أخرى"}</p>
      </div>
    );
  }

  // ============================================================
  // المتجر مش منشور (draft)
  // في التطوير نعرضه، في الإنتاج نمنعه
  // ============================================================
  const isDev = import.meta.env.DEV;
  if (settings.status !== "published" && !isDev) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
        <div className="text-7xl">🚧</div>
        <h1 className="text-3xl font-black text-gray-800">المتجر قيد الإنشاء</h1>
        <p className="text-gray-500 font-bold">سيتم النشر قريباً</p>
      </div>
    );
  }

  // ============================================================
  // المتجر جاهز
  // ============================================================
  return (
    <WebsiteThemeProvider theme={settings.theme}>
      <StoreRenderer settings={settings} isBuilder={false} />
      <Outlet context={{ settings, slug }} />
    </WebsiteThemeProvider>
  );
}