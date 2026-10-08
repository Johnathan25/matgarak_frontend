// website-builder/templates/template9/Products.jsx
import { ShoppingBag } from "lucide-react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-black italic uppercase tracking-tight mb-2"
            style={{ color: theme?.textPrimaryColor }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: theme?.textSecondaryColor }}
            >
              {c.subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-lg overflow-hidden border-2 transition-all hover:shadow-xl"
              style={{ borderColor: `${theme?.textPrimaryColor}08` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center">
                {p.image?.url ? (
                  <img
                    src={p.image.url}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-6xl opacity-20">🌸</div>
                )}

                {p.badge && (
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide"
                    style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3
                  className="text-sm font-black uppercase tracking-wider mb-2"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  {p.name}
                </h3>

                <div
                  className="text-base font-black mb-4"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  {p.currency}{p.price}
                </div>

                {c.showAddToCart && (
                  <button
                    onClick={(e) => isBuilder && e.preventDefault()}
                    className="w-full py-2.5 text-xs font-black uppercase tracking-wider border-2 transition-all hover:opacity-80"
                    style={{
                      borderColor: theme?.primaryColor,
                      color: theme?.primaryColor,
                    }}
                  >
                    {c.addToCartText || "أضف للحقيبة"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}