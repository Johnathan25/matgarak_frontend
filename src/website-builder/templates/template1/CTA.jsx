// website-builder/templates/template2/CTA.jsx
export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <section className="py-24 px-8 text-center" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-3xl mx-auto">
        {c.title && (
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ color: theme?.textPrimaryColor, fontFamily: "'El Messiri', serif" }}
          >
            {c.title}
          </h2>
        )}
        {c.subtitle && (
          <p className="text-sm mb-10 tracking-wider" style={{ color: theme?.textSecondaryColor }}>
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
    </section>
  );
}