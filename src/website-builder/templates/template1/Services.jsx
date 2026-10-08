// website-builder/templates/template2/Services.jsx
export default function Services({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-24 px-8" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-black mb-4"
            style={{ color: theme?.textPrimaryColor, fontFamily: "'El Messiri', serif" }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: theme?.accentColor }}>
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div key={item.id} className="text-center">
              <div className="text-5xl mb-6" style={{ color: theme?.accentColor }}>
                {item.icon || "◆"}
              </div>
              <h3
                className="text-xl font-black mb-4 tracking-wider"
                style={{ color: theme?.textPrimaryColor }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: theme?.textSecondaryColor }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}