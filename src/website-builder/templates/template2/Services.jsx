// website-builder/templates/template1/Services.jsx
export default function Services({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];
  const columns = c.columns || 3;

  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: theme?.textPrimaryColor }}>
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-base opacity-70" style={{ color: theme?.textSecondaryColor }}>
              {c.subtitle}
            </p>
          )}
        </div>

        <div className={`grid ${gridClass} gap-6`}>
          {items.map((item) => (
            <div
              key={item.id}
              className="group p-8 rounded-2xl bg-white border transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ borderColor: `${theme?.textPrimaryColor}10`, borderRadius: theme?.radius }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${theme?.primaryColor}10`, color: theme?.primaryColor }}
              >
                {item.icon || "✨"}
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: theme?.textPrimaryColor }}>
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm leading-relaxed" style={{ color: theme?.textSecondaryColor }}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}