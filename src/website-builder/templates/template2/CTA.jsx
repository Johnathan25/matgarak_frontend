// website-builder/templates/template1/CTA.jsx
export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <section className="py-20 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
          style={{
            background: `linear-gradient(135deg, ${theme?.primaryColor}, ${theme?.secondaryColor})`,
            borderRadius: `calc(${theme?.radius} * 2)`,
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: theme?.accentColor, transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: "#fff", transform: "translate(-40%, 40%)" }} />

          <div className="relative z-10">
            {c.title && (
              <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
                {c.title}
              </h2>
            )}
            {c.subtitle && (
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {c.subtitle}
              </p>
            )}
            {c.buttonText && (
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-black text-sm transition-all hover:scale-105 shadow-2xl"
                style={{ backgroundColor: theme?.accentColor, color: "#fff" }}
              >
                {c.buttonText}
                <span>←</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}