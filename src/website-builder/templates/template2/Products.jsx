// website-builder/templates/template1/Products.jsx
import { Star, ShoppingCart } from "lucide-react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];
  const columns = c.columns || 4;

  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  const renderStars = (rating = 0) => (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2" style={{ color: theme?.textPrimaryColor }}>
              {c.title}
            </h2>
            {c.subtitle && (
              <p className="text-sm opacity-70" style={{ color: theme?.textSecondaryColor }}>
                {c.subtitle}
              </p>
            )}
          </div>
          <a
            href="/products"
            onClick={(e) => isBuilder && e.preventDefault()}
            className="text-sm font-black hover:opacity-70 transition"
            style={{ color: theme?.primaryColor }}
          >
            عرض الكل ←
          </a>
        </div>

        <div className={`grid ${gridClass} gap-5`}>
          {items.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden border hover:shadow-2xl transition-all hover:-translate-y-1"
              style={{
                borderColor: `${theme?.textPrimaryColor}10`,
                borderRadius: theme?.radius,
              }}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                {p.image?.url ? (
                  <img
                    src={p.image.url}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">🖼️</div>
                )}
                {p.badge && (
                  <span
                    className="absolute top-3 right-3 px-3 py-1 rounded-lg text-[10px] font-black text-white shadow-lg"
                    style={{ backgroundColor: theme?.accentColor }}
                  >
                    {p.badge}
                  </span>
                )}
                {c.showAddToCart && (
                  <button
                    onClick={(e) => isBuilder && e.preventDefault()}
                    className="absolute bottom-3 left-3 right-3 py-2.5 rounded-xl font-black text-xs text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-center gap-1.5"
                    style={{ backgroundColor: theme?.primaryColor }}
                  >
                    <ShoppingCart size={14} />
                    أضف للسلة
                  </button>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 line-clamp-2 min-h-[40px]" style={{ color: theme?.textPrimaryColor }}>
                  {p.name}
                </h3>
                {c.showRating && p.rating && <div className="mb-2">{renderStars(p.rating)}</div>}
                {c.showPrice !== false && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black" style={{ color: theme?.primaryColor }}>
                      {p.price} {p.currency || "ج.م"}
                    </span>
                    {p.oldPrice && <span className="text-xs line-through opacity-40">{p.oldPrice}</span>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}