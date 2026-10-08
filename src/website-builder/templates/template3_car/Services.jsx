// website-builder/templates/template5/Services.jsx
import { Check, ArrowRight } from "lucide-react";

export default function Services({ section, theme, isBuilder }) {
  const c = section.content || {};
  const features = c.features || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src={c.image?.url || "https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e1e?w=800"}
            alt=""
            className="w-full rounded-2xl shadow-2xl"
          />
          <div
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full hidden lg:flex items-center justify-center text-5xl"
            style={{ backgroundColor: theme?.secondaryColor, color: "#fff" }}
          >
            🔧
          </div>
        </div>

        {/* Content */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-3"
            style={{ color: theme?.textPrimaryColor }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-6" style={{ color: theme?.secondaryColor }}>
              {c.subtitle}
            </p>
          )}
          {c.description && (
            <p className="text-sm leading-relaxed mb-8" style={{ color: theme?.textSecondaryColor }}>
              {c.description}
            </p>
          )}

          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f.id} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: theme?.secondaryColor, color: "#fff" }}
                >
                  <Check size={12} />
                </div>
                <div>
                  <div className="font-black text-sm" style={{ color: theme?.textPrimaryColor }}>{f.title}</div>
                  <div className="text-xs" style={{ color: theme?.textSecondaryColor }}>{f.description}</div>
                </div>
              </li>
            ))}
          </ul>

          {c.buttonText && (
            <a
              href={c.buttonLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wide transition-all hover:scale-105"
              style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
            >
              {c.buttonText}
              <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}