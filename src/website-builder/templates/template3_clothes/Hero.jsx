// website-builder/templates/template1/Hero.jsx
import { Star, ArrowLeft } from "lucide-react";

export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const imgUrl = c.image?.url;

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-sm">
        {/* Text */}
        <div className="order-2 lg:order-1 text-right">
          {c.badge && (
            <div className="flex items-center gap-2 mb-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-yellow-300" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-300" />
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-black bg-black text-white">
                  +1K
                </div>
              </div>
            </div>
          )}

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.05]" style={{ color: theme?.textPrimaryColor }}>
            {c.title}
          </h1>
          <p className="text-3xl md:text-4xl font-bold mb-6" style={{ color: theme?.textSecondaryColor }}>
            {c.subtitle}
          </p>
          <p className="text-base text-gray-500 mb-10 max-w-md">
            {c.description || "متجرك الموثوق لأفضل الأزياء العصرية بجودة عالية"}
          </p>

          <div className="flex flex-wrap gap-4">
            {c.buttonText && (
              <a href={c.buttonLink || "#"} onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-sm transition-all hover:scale-105"
                style={{ backgroundColor: theme?.secondaryColor, color: "#000" }}>
                {c.buttonText}
                <ArrowLeft size={16} />
              </a>
            )}
            <button className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-white border">
              <span className="text-xl">G</span>
              Google
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative">
          {imgUrl ? (
            <img src={imgUrl} alt="" className="w-full max-w-md mx-auto object-contain" />
          ) : (
            <div className="w-full aspect-square bg-gray-100 rounded-3xl" />
          )}

          {/* Floating price tag */}
          <div className="absolute bottom-4 right-4 bg-white rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold ml-1">{c.rating || 4.9} ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black" style={{ color: theme?.textPrimaryColor }}>
                ${c.productPrice || 78}
              </span>
              <span className="text-xs font-bold px-2 py-1 rounded-full bg-amber-100">Top Sale</span>
            </div>
            {/* Colors */}
            <div className="flex gap-1 mt-2">
              {(c.colorOptions || []).map((color, i) => (
                <div key={i} className="w-6 h-6 rounded-md border border-gray-200" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}