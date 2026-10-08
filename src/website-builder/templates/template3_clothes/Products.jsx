// website-builder/templates/template1/Products.jsx
import { Star, ShoppingCart } from "lucide-react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  const renderStars = (rating = 0) => (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className={i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
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
            {c.subtitle && <p className="text-sm text-gray-500">{c.subtitle}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p) => (
            <div key={p.id} className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                {p.image?.url ? (
                  <img src={p.image.url} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">👕</div>}
                {p.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-black bg-black text-white">
                    {p.badge}
                  </span>
                )}
                {c.showAddToCart && (
                  <button onClick={(e) => isBuilder && e.preventDefault()}
                    className="absolute bottom-3 left-3 right-3 py-2.5 rounded-xl font-black text-xs opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-center gap-1.5"
                    style={{ backgroundColor: theme?.secondaryColor, color: "#000" }}>
                    <ShoppingCart size={14} />
                    أضف للسلة
                  </button>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 line-clamp-2 min-h-[40px]" style={{ color: theme?.textPrimaryColor }}>{p.name}</h3>
                {c.showRating && p.rating && <div className="mb-2">{renderStars(p.rating)}</div>}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black">{p.price} {p.currency || "ج.م"}</span>
                  {p.oldPrice && <span className="text-xs line-through opacity-40">{p.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}