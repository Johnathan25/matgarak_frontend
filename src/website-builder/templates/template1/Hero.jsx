// website-builder/templates/template2/Hero.jsx
export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const imgUrl = c.image?.url;

  return (
    <section
      className="min-h-screen flex items-center"
      style={{ backgroundColor: theme?.backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text — على اليمين */}
        <div className="order-2 lg:order-1 text-right">
          {c.badge && (
            <div
              className="inline-block pb-1 mb-8 text-xs tracking-[0.4em] uppercase font-bold"
              style={{ color: theme?.accentColor, borderBottom: `1px solid ${theme?.accentColor}` }}
            >
              {c.badge}
            </div>
          )}

          {c.title && (
            <h1
              className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]"
              style={{ color: theme?.textPrimaryColor, fontFamily: "'El Messiri', serif" }}
            >
              {c.title}
            </h1>
          )}

          {c.subtitle && (
            <p className="text-lg mb-10 leading-relaxed max-w-md ml-auto" style={{ color: theme?.textSecondaryColor }}>
              {c.subtitle}
            </p>
          )}

          {c.buttonText && (
            <a
              href={c.buttonLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="inline-block px-12 py-5 font-bold text-xs uppercase tracking-[0.3em] transition-all hover:tracking-[0.5em]"
              style={{ backgroundColor: theme?.accentColor, color: theme?.backgroundColor }}
            >
              {c.buttonText}
            </a>
          )}
        </div>

        {/* Image — على الشمال */}
        <div className="order-1 lg:order-2 relative">
          {imgUrl ? (
            <div className="relative">
              <img
                src={imgUrl}
                alt=""
                className="w-full aspect-[3/4] object-cover"
                style={{ boxShadow: `24px 24px 0 ${theme?.accentColor}` }}
              />
            </div>
          ) : (
            <div
              className="w-full aspect-[3/4]"
              style={{ backgroundColor: theme?.surfaceColor, boxShadow: `24px 24px 0 ${theme?.accentColor}` }}
            />
          )}
        </div>
      </div>
    </section>
  );
}