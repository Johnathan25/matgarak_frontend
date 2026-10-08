// website-builder/templates/template7/Services.jsx
export default function Services({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: theme?.primaryColor, color: theme?.secondaryColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-xs font-bold uppercase tracking-widest mt-2 opacity-50">
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="text-center group">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                {item.icon}
              </div>
              <h3 className="text-sm font-black uppercase tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-xs opacity-60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}