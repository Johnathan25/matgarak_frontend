// website-builder/templates/template1/Hero.jsx
export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const bgUrl = c.backgroundImage?.url;

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {bgUrl && (
        <>
          <img src={bgUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
          {c.overlayEnabled && (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: `rgba(0,0,0,${c.overlayOpacity ?? 0.5})` }}
            />
          )}
        </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
        {c.badge && (
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold">
            {c.badge}
          </span>
        )}
        {c.title && (
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{c.title}</h1>
        )}
        {c.subtitle && (
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">{c.subtitle}</p>
        )}
        <div className="flex flex-wrap gap-3 justify-center">
          {c.buttonText && (
            <a
              href={c.buttonLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-8 py-4 rounded-xl font-black text-sm transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.accentColor, color: "#fff" }}
            >
              {c.buttonText}
            </a>
          )}
          {c.secondaryButtonText && (
            <a
              href={c.secondaryButtonLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-8 py-4 rounded-xl font-black text-sm border-2 border-white/50 hover:bg-white/10 transition"
            >
              {c.secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}