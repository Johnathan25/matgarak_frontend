// website-builder/templates/template9/Services.jsx
export default function Services({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section
      className="py-12 px-6"
      style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
    >
      <div className="max-w-7xl mx-auto">
        {c.subtitle && (
          <p className="text-center text-xs font-black tracking-[0.4em] uppercase mb-8 opacity-70">
            {c.subtitle}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex flex-col items-center gap-3 py-6 px-4 group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 group-hover:scale-110 transition-transform"
                style={{ borderColor: theme?.primaryColor }}
              >
                {item.icon}
              </div>
              <div className="text-center">
                <div className="text-sm font-black uppercase tracking-[0.2em]">
                  {item.title}
                </div>
                <div className="text-[10px] font-bold mt-1 opacity-60 uppercase tracking-wide">
                  {item.description}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}