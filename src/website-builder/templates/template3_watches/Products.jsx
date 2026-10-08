// website-builder/templates/template8/Products.jsx
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];
  const tabs = c.tabs || [];
  const [activeTab, setActiveTab] = useState(tabs[0] || "الكل");

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-1"
              style={{ color: theme?.textPrimaryColor }}
            >
              {c.title}
            </h2>
            {c.subtitle && (
              <p
                className="text-xs font-black tracking-[0.4em] uppercase"
                style={{ color: theme?.secondaryColor }}
              >
                {c.subtitle}
              </p>
            )}
          </div>

          {/* Tabs */}
          {tabs.length > 0 && (
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wide transition"
                  style={{
                    color: activeTab === tab ? theme?.secondaryColor : theme?.textSecondaryColor,
                    borderBottom: activeTab === tab ? `2px solid ${theme?.secondaryColor}` : "2px solid transparent",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p) => (
            <div key={p.id} className="group">
              {/* Image */}
              <div
                className="relative aspect-square overflow-hidden rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: theme?.surfaceColor }}
              >
                {p.image?.url ? (
                  <img
                    src={p.image.url}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-6xl opacity-20">⌚</div>
                )}

                {p.badge && (
                  <span
                    className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide"
                    style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
                  >
                    {p.badge}
                  </span>
                )}

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => isBuilder && e.preventDefault()}
                  className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-black uppercase tracking-wide flex items-center justify-center gap-1.5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                  style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
                >
                  <ShoppingCart size={12} />
                  أضف للسلة
                </button>
              </div>

              {/* Info */}
              <div>
                <h3
                  className="text-sm font-bold mb-2 line-clamp-2 min-h-[40px]"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  {p.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className="text-base font-black"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}