// website-builder/templates/template8/Services.jsx
export default function Services({ section, theme, isBuilder }) {
  const c = section.content || {};
  const stats = c.stats || [];

  return (
    <section
      className="py-16 px-6"
      style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative">
            {c.image?.url && (
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: theme?.secondaryColor, transform: "translate(20px, 20px)" }}
                />
                <img
                  src={c.image.url}
                  alt=""
                  className="relative w-full rounded-lg object-cover aspect-square"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            {c.subtitle && (
              <div
                className="text-xs font-black tracking-[0.4em] uppercase mb-4"
                style={{ color: theme?.secondaryColor }}
              >
                {c.subtitle}
              </div>
            )}
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              {c.title}
            </h2>
            {c.description && (
              <p className="text-sm leading-relaxed mb-8 opacity-70">
                {c.description}
              </p>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-4 gap-4 mb-8 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                {stats.map((s) => (
                  <div key={s.id}>
                    <div
                      className="text-3xl md:text-4xl font-black mb-1"
                      style={{ color: theme?.secondaryColor }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {c.buttonText && (
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-block px-8 py-3 rounded-lg font-black text-sm uppercase tracking-widest transition-all hover:scale-105"
                style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
              >
                {c.buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}