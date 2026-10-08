// website-builder/templates/template4/Hero.jsx
import { Calendar } from "lucide-react";

export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const imgUrl = c.image?.url;
  const cards = c.cards || [];

  return (
    <section className="py-12 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-right">
            <h1
              className="text-4xl md:text-6xl font-black leading-tight mb-6"
              style={{ color: theme?.textPrimaryColor }}
            >
              {c.title}
            </h1>

            {c.subtitle && (
              <p
                className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: theme?.textSecondaryColor }}
              >
                {c.subtitle}
              </p>
            )}

            {c.buttonText && (
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-black transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
              >
                <Calendar size={16} />
                {c.buttonText}
              </a>
            )}
          </div>

          {/* Image + Cards */}
          <div className="relative">
            {/* Doctor image */}
            <div
              className="relative aspect-square rounded-full overflow-hidden mx-auto max-w-md"
              style={{
                background: `linear-gradient(135deg, ${theme?.surfaceColor}, ${theme?.secondaryColor}40)`,
              }}
            >
              {imgUrl ? (
                <img src={imgUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl">👨‍⚕️</div>
              )}
            </div>

            {/* Service cards around */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="p-4 rounded-2xl text-center transition-all hover:scale-105"
                  style={{ backgroundColor: card.color }}
                >
                  <div className="text-3xl mb-2">{card.icon}</div>
                  <div
                    className="text-xs font-black mb-1"
                    style={{ color: theme?.textPrimaryColor }}
                  >
                    {card.title}
                  </div>
                  <div
                    className="text-[10px]"
                    style={{ color: theme?.textSecondaryColor }}
                  >
                    {card.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}