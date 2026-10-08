// website-builder/templates/template1/CTA.jsx
export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-5xl mx-auto rounded-3xl p-12 text-center" style={{ backgroundColor: theme?.textPrimaryColor }}>
        {c.title && <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{c.title}</h2>}
        {c.subtitle && <p className="text-white/70 mb-8">{c.subtitle}</p>}
        {c.buttonText && (
          <a href={c.buttonLink || "#"} onClick={(e) => isBuilder && e.preventDefault()}
            className="inline-block px-10 py-4 rounded-xl font-black text-sm"
            style={{ backgroundColor: theme?.secondaryColor, color: "#000" }}>
            {c.buttonText}
          </a>
        )}
      </div>
    </section>
  );
}