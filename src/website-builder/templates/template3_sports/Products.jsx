// website-builder/templates/template7/Products.jsx
import { Star, ShoppingCart, Heart } from "lucide-react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
            style={{ color: theme?.textPrimaryColor }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p
              className="text-sm font-bold uppercase tracking-widest mt-2 opacity-40"
              style={{ color: theme?.textPrimaryColor }}
            >
              {c.subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((p) => (
            <div key={p.id} className="group">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white mb-3">
                {p.image?.url ? (
                  <img
                    src={p.image.url}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl opacity-10">
                    👕
                  </div>
                )}

                {/* Badge */}
                {p.badge && (
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide"
                    style={{
                      backgroundColor: theme?.accentColor,
                      color: "#fff",
                    }}
                  >
                    {p.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  <Heart size={14} />
                </button>

                {/* Add to Cart */}
                <button
                  onClick={(e) => isBuilder && e.preventDefault()}
                  className="absolute bottom-3 left-3 right-3 py-2.5 rounded-xl font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                  style={{ backgroundColor: theme?.primaryColor, color: theme?.secondaryColor }}
                >
                  <ShoppingCart size={14} />
                  أضف للسلة
                </button>
              </div>

              {/* Info */}
              <div>
                <h3
                  className="font-bold text-sm mb-1 line-clamp-2"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  {p.name}
                </h3>

                {/* Stars */}
                {c.showRating && p.rating && (
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className={
                          i < Math.round(p.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-[10px] opacity-50 ml-1">{p.rating}</span>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-base font-black"
                    style={{ color: theme?.textPrimaryColor }}
                  >
                    {p.price} {p.currency}
                  </span>
                  {p.oldPrice && (
                    <span className="text-xs line-through opacity-40">
                      {p.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}