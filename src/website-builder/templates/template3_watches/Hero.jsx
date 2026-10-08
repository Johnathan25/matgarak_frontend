// website-builder/templates/template8/Hero.jsx
export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const bgUrl = c.backgroundImage?.url;
  const cards = c.cards || [];

  return (
    <section style={{ backgroundColor: theme?.backgroundColor }}>
      {/* Main Hero */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-white">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-4">
              {c.title}
              <br />
              <span style={{ color: theme?.secondaryColor }}>{c.subtitle}</span>
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-0.5 w-8" style={{ backgroundColor: theme?.secondaryColor }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: theme?.secondaryColor }}>
                {c.discount}
              </span>
            </div>
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

          {/* Big Watch Image */}
          <div className="relative">
            {bgUrl && (
              <img
                src={bgUrl}
                alt=""
                className="w-full drop-shadow-2xl"
                style={{ transform: "rotate(-8deg)" }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Cards Row */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-lg p-6 min-h-[240px] flex flex-col justify-between group cursor-pointer"
              style={{ backgroundColor: card.bgColor, color: card.textColor }}
            >
              <div className="relative z-10">
                <div className="text-xs font-bold tracking-widest opacity-60 mb-2">
                  {card.subtitle}
                </div>
                <h3 className="text-2xl font-black leading-tight mb-4">
                  {card.title}
                </h3>
                <a
                  href={card.buttonLink}
                  onClick={(e) => isBuilder && e.preventDefault()}
                  className="inline-block text-xs font-black underline underline-offset-4 opacity-80 hover:opacity-100"
                >
                  {card.buttonText}
                </a>
              </div>

              {/* Image */}
              {card.image?.url && (
                <img
                  src={card.image.url}
                  alt={card.title}
                  className="absolute bottom-0 left-0 w-40 h-40 object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}