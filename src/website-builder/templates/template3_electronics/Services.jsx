// website-builder/templates/template3/Services.jsx
export default function Services({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        {(c.title || c.subtitle) && (
          <div className="text-center mb-12">
            {c.title && (
              <h2
                className="text-3xl font-black mb-3"
                style={{ color: theme?.textPrimaryColor }}
              >
                {c.title}
              </h2>
            )}
            {c.subtitle && (
              <p className="text-sm" style={{ color: theme?.textSecondaryColor }}>
                {c.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group p-8 rounded-2xl bg-white border hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ borderColor: `${theme?.textPrimaryColor}10` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${theme?.secondaryColor}20`,
                  color: theme?.secondaryColor,
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-lg font-black mb-2"
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