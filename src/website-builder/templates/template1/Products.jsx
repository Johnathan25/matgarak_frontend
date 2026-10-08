// website-builder/templates/template2/Products.jsx
export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-24 px-8" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: theme?.textPrimaryColor, fontFamily: "'El Messiri', serif" }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-sm tracking-[0.3em] uppercase" style={{ color: theme?.accentColor }}>
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="space-y-12">
          {items.map((p, idx) => (
            <div
              key={p.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative overflow-hidden" style={{ backgroundColor: theme?.surfaceColor }}>
                  {p.image?.url ? (
                    <img src={p.image.url} alt={p.name} className="w-full aspect-square object-cover" />
                  ) : (
                    <div className="w-full aspect-square flex items-center justify-center text-6xl opacity-20">🖼️</div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className={idx % 2 === 1 ? "md:order-1 text-left" : "text-right"}>
                <div className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: theme?.accentColor }}>
                  قطعة #{String(idx + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black mb-6"
                  style={{ color: theme?.textPrimaryColor, fontFamily: "'El Messiri', serif" }}
                >
                  {p.name}
                </h3>
                <div className="flex items-baseline gap-3 mb-8" style={{ justifyContent: idx % 2 === 1 ? "flex-start" : "flex-end" }}>
                  <span className="text-2xl font-black" style={{ color: theme?.accentColor }}>
                    {p.price} {p.currency || "ج.م"}
                  </span>
                </div>
                {c.showAddToCart && (
                  <a
                    href={`/product/${p.id}`}
                    onClick={(e) => isBuilder && e.preventDefault()}
                    className="inline-block px-8 py-4 font-bold text-xs uppercase tracking-[0.3em] transition-all hover:tracking-[0.5em]"
                    style={{ backgroundColor: theme?.accentColor, color: theme?.backgroundColor }}
                  >
                    اكتشف
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}