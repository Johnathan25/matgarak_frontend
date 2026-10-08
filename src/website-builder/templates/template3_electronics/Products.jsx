// website-builder/templates/template3/Products.jsx
import { Star, ShoppingCart, Heart } from "lucide-react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  const renderStars = (rating = 0) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={11}
          className={i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
        />
      ))}
      <span className="text-[10px] text-gray-400 ml-1">{rating}</span>
    </div>
  );

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2
              className="text-3xl md:text-4xl font-black mb-2"
              style={{ color: theme?.textPrimaryColor }}
            >
              {c.title}
            </h2>
            {c.subtitle && (
              <p className="text-sm" style={{ color: theme?.textSecondaryColor }}>
                {c.subtitle}
              </p>
            )}
          </div>
          <a
            href="/products"
            onClick={(e) => isBuilder && e.preventDefault()}
            className="text-sm font-black flex items-center gap-1 hover:gap-2 transition-all"
            style={{ color: theme?.accentColor }}
          >
            عرض الكل ←
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ borderColor: `${theme?.textPrimaryColor}10` }}
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
                  <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
                    📦
                  </div>
                )}

                {/* Badge */}
                {p.badge && (
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-black text-white shadow-lg"
                    style={{ backgroundColor: theme?.accentColor }}
                  >
                    {p.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                  style={{ color: theme?.accentColor }}
                >
                  <Heart size={14} />
                </button>

                {/* Add to cart */}
                {c.showAddToCart && (
                  <button
                    onClick={(e) => isBuilder && e.preventDefault()}
                    className="absolute bottom-3 left-3 right-3 py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    style={{
                      backgroundColor: theme?.primaryColor,
                      color: "#fff",
                    }}
                  >
                    <ShoppingCart size={14} />
                    أضف للسلة
                  </button>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3
                  className="font-bold text-sm mb-2 line-clamp-2 min-h-[40px]"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  {p.name}
                </h3>

                {c.showRating && p.rating && <div className="mb-3">{renderStars(p.rating)}</div>}

                {c.showPrice !== false && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-lg font-black"
                      style={{ color: theme?.accentColor }}
                    >
                      {p.price} {p.currency || "ج.م"}
                    </span>
                    {p.oldPrice && (
                      <span className="text-xs line-through text-gray-400">
                        {p.oldPrice}
                      </span>
                    )}
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