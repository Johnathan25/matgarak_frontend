// website-builder/templates/template3/Hero.jsx
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";

export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const bgUrl = c.backgroundImage?.url;
  const sideProduct = c.sideProduct;

  return (
    <section className="py-12 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* ===== Main Banner (2 cols) ===== */}
        <div
          className="lg:col-span-2 relative rounded-3xl overflow-hidden p-8 md:p-12 min-h-[400px] flex items-center"
          style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
        >
          {bgUrl && (
            <>
              <img
                src={bgUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to left, transparent, ${theme?.primaryColor})` }} />
            </>
          )}

          <div className="relative z-10 max-w-lg">
            {c.badge && (
              <span
                className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-black"
                style={{ backgroundColor: theme?.accentColor, color: "#fff" }}
              >
                {c.badge}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              {c.title}
            </h1>
            <p className="text-lg opacity-80 mb-8">{c.subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-sm transition-all hover:scale-105"
                style={{ backgroundColor: theme?.accentColor, color: "#fff" }}
              >
                {c.buttonText}
                <ArrowLeft size={16} />
              </a>
              <a
                href="/deals"
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm border-2 border-white/30 hover:bg-white/10 transition"
              >
                شاهد العروض
              </a>
            </div>
          </div>
        </div>

        {/* ===== Side Product Card ===== */}
        {sideProduct && (
          <div
            className="rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-white shadow-lg"
            style={{ border: `2px solid ${theme?.secondaryColor}20` }}
          >
            <div className="text-xs font-bold mb-3" style={{ color: theme?.accentColor }}>
              ⚡ عرض اليوم
            </div>
            {sideProduct.image?.url && (
              <img
                src={sideProduct.image.url}
                alt={sideProduct.name}
                className="w-full h-40 object-contain mb-4"
              />
            )}
            <h3 className="text-lg font-black mb-2" style={{ color: theme?.textPrimaryColor }}>
              {sideProduct.name}
            </h3>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs ml-1">4.8</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-black" style={{ color: theme?.accentColor }}>
                ${sideProduct.price}
              </span>
            </div>
            <button
              className="w-full py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2"
              style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
            >
              <ShoppingCart size={14} />
              أضف للسلة
            </button>
          </div>
        )}
      </div>
    </section>
  );
}