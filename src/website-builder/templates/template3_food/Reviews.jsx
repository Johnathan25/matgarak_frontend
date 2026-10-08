// website-builder/templates/template6/Reviews.jsx
import { Star, Plus } from "lucide-react";

export default function Reviews({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-black mb-2"
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

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 flex items-center gap-4 border hover:shadow-lg transition-all"
              style={{ borderColor: `${theme?.textPrimaryColor}08` }}
            >
              {/* Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                {item.image?.url ? (
                  <img src={item.image.url} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl opacity-30">🍔</div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className={
                          i < Math.round(item.rating || 0)
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-black opacity-40">{item.rating}</span>
                </div>
                <h3
                  className="text-sm md:text-base font-black mb-1 truncate"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-xs mb-2 line-clamp-1"
                  style={{ color: theme?.textSecondaryColor }}
                >
                  {item.role || item.text}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="text-base md:text-lg font-black"
                    style={{ color: theme?.textPrimaryColor }}
                  >
                    ${item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-xs line-through opacity-40">
                      ${item.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Add Button */}
              <button
                onClick={(e) => isBuilder && e.preventDefault()}
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110"
                style={{
                  backgroundColor: theme?.secondaryColor,
                  color: theme?.primaryColor,
                }}
              >
                <Plus size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}