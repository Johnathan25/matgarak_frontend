// website-builder/templates/template6/Services.jsx
import { ArrowLeft } from "lucide-react";

export default function Services({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-black leading-tight mb-4"
              style={{ color: theme?.textPrimaryColor }}
            >
              {c.title}
            </h2>
            {c.subtitle && (
              <p className="text-sm font-bold uppercase tracking-widest opacity-50 mb-6">
                {c.subtitle}
              </p>
            )}

            {c.ctaText && (
              <a
                href="/menu"
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs"
                style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
              >
                {c.ctaText}
                <ArrowLeft size={14} />
              </a>
            )}
          </div>

          {/* Center + Right: Circular cards */}
          <div className="lg:col-span-2 relative">
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className={`group cursor-pointer ${idx % 2 === 1 ? "mt-8" : ""}`}
                >
                  <div className="relative">
                    {/* Circle image */}
                    <div className="aspect-square rounded-full overflow-hidden bg-white shadow-lg mb-3 group-hover:shadow-2xl transition-all group-hover:scale-105">
                      {item.image?.url ? (
                        <img
                          src={item.image.url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl">
                          {item.icon}
                        </div>
                      )}
                    </div>
                    {/* Label */}
                    <div
                      className="text-center px-3 py-2 rounded-xl bg-white shadow-sm"
                      style={{ border: `1px solid ${theme?.textPrimaryColor}08` }}
                    >
                      <div
                        className="text-xs font-black mb-0.5"
                        style={{ color: theme?.textPrimaryColor }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-[10px] font-bold opacity-50"
                        style={{ color: theme?.textSecondaryColor }}
                      >
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}