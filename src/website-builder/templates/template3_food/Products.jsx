// website-builder/templates/template6/Products.jsx
import { Star, Plus, Flame } from "lucide-react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-black mb-2"
            style={{ color: theme?.textPrimaryColor }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-sm font-bold uppercase tracking-widest opacity-40">
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-3xl overflow-hidden border hover:shadow-2xl transition-all hover:-translate-y-1"
              style={{ borderColor: `${theme?.textPrimaryColor}08` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                {p.image?.url ? (
                  <img
                    src={p.image.url}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl opacity-20">
                    🍽️
                  </div>
                )}

                {p.badge && (
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black flex items-center gap-1"
                    style={{ backgroundColor: theme?.accentColor, color: "#fff" }}
                  >
                    <Flame size={10} />
                    {p.badge}
                  </span>
                )}

                {p.rating && (
                  <div
                    className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white/95 backdrop-blur flex items-center gap-1"
                    style={{ color: theme?.textPrimaryColor }}
                  >
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-black">{p.rating}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                {p.description && (
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: theme?.textSecondaryColor }}>
                    {p.description}
                  </div>
                )}
                <h3
                  className="font-black text-sm mb-1 line-clamp-1"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  {p.name}
                </h3>

                {p.calories && (
                  <div className="text-[10px] font-bold opacity-50 mb-3">
                    {p.calories}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-lg font-black"
                      style={{ color: theme?.textPrimaryColor }}
                    >
                      {p.currency}{p.price}
                    </span>
                    {p.oldPrice && (
                      <span className="text-xs line-through opacity-40">
                        {p.currency}{p.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => isBuilder && e.preventDefault()}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      backgroundColor: theme?.secondaryColor,
                      color: theme?.primaryColor,
                    }}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}