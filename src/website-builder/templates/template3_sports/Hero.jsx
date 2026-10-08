// website-builder/templates/template7/Hero.jsx
export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const cards = c.cards || [];

  return (
    <section className="py-8 px-4" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href || "#"}
            onClick={(e) => isBuilder && e.preventDefault()}
            className="group relative overflow-hidden rounded-3xl aspect-[4/3] block"
            style={{ backgroundColor: theme?.primaryColor }}
          >
            {/* Background Image */}
            {card.image?.url && (
              <img
                src={card.image.url}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
            )}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Circle behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500" />

            {/* Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2
                className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase text-center"
                style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
              >
                {card.title}
              </h2>
              <div className="mt-4 flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                <span>تسوق الآن</span>
                <span>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}