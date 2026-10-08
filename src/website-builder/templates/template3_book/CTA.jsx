// website-builder/templates/template2/CTA.jsx
export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl" style={{ backgroundColor: theme?.secondaryColor }}>
        <h2 className="text-3xl font-black mb-3" style={{ color: theme?.textPrimaryColor }}>{c.title}</h2>
        <p className="text-sm mb-8 opacity-80">{c.subtitle}</p>
        <a href={c.buttonLink} onClick={(e) => isBuilder && e.preventDefault()}
          className="inline-block px-8 py-4 rounded-full font-black text-sm bg-black text-white">
          {c.buttonText}
        </a>
      </div>
    </section>
  );
}