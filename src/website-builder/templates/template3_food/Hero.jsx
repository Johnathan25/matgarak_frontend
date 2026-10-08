// website-builder/templates/template6/Hero.jsx
import { Star, ArrowLeft } from "lucide-react";

export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const mainImg = c.image?.url;
  const floatImg = c.floatingImage?.url;
  const stats = c.stats || {};

  return (
    <section
      className="py-12 px-6"
      style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="text-right order-2 lg:order-1">
          {c.badge && (
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black mb-6"
              style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
            >
              <span>⚡</span>
              {c.badge}
            </div>
          )}

          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-6">
            {c.title}
          </h1>

          {c.subtitle && (
            <p className="text-base leading-relaxed mb-8 opacity-80 max-w-lg">
              {c.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4">
            {c.buttonText && (
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-black transition-all hover:scale-105"
                style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
              >
                {c.buttonText}
                <ArrowLeft size={16} />
              </a>
            )}

            {stats.rating && (
              <div className="flex items-center gap-3 text-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <div className="font-black">
                    {stats.customers} {stats.rating}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Images */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center min-h-[400px]">
          {/* Main Image */}
          {mainImg && (
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: theme?.secondaryColor, transform: "translate(20px, 20px)" }}
              />
              <img
                src={mainImg}
                alt=""
                className="relative w-full max-w-md aspect-square object-cover rounded-full"
              />
            </div>
          )}

          {/* Floating Image */}
          {floatImg && (
            <div
              className="absolute bottom-4 right-4 w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4"
              style={{ borderColor: theme?.primaryColor }}
            >
              <img src={floatImg} alt="" className="w-full h-full object-cover" />
            </div>
          )}

          {/* Rating Badge */}
          {stats.reviewsCount && (
            <div
              className="absolute top-4 right-4 px-3 py-2 rounded-2xl bg-white shadow-xl"
              style={{ color: theme?.primaryColor }}
            >
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <span className="text-sm font-black">{stats.rating}</span>
              </div>
              <div className="text-[10px] font-bold opacity-60">
                {stats.reviewsCount} تقييمات
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}