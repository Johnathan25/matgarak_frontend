// website-builder/templates/template5/Products.jsx
import { Star, Wrench } from "lucide-react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2"
            style={{ color: theme?.textPrimaryColor }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: theme?.secondaryColor }}>
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-xl overflow-hidden border hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ borderColor: `${theme?.textPrimaryColor}08` }}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                {p.image?.url ? (
                  <img
                    src={p.image.url}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl opacity-20">
                    <Wrench size={64} />
                  </div>
                )}

                {p.badge && (
                  <span
                    className="absolute top-3 right-3 px-2 py-1 text-[10px] font-black uppercase"
                    style={{ backgroundColor: theme?.secondaryColor, color: "#fff" }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 line-clamp-1" style={{ color: theme?.textPrimaryColor }}>
                  {p.name}
                </h3>

                {c.showRating && p.rating && (
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={10} className={i < Math.round(p.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <span className="text-lg font-black" style={{ color: theme?.secondaryColor }}>
                    {p.price} {p.currency}
                  </span>
                  {p.oldPrice && (
                    <span className="text-xs line-through opacity-40">{p.oldPrice}</span>
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