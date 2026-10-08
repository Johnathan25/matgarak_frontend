// website-builder/templates/template2/Reviews.jsx
import { Star } from "lucide-react";

export default function Reviews({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-24 px-8" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-black mb-4"
            style={{ color: theme?.textPrimaryColor, fontFamily: "'El Messiri', serif" }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: theme?.accentColor }}>
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="space-y-12">
          {items.map((r) => (
            <div key={r.id} className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < r.rating ? "fill-amber-400 text-amber-400" : "text-gray-600"}
                  />
                ))}
              </div>
              <p
                className="text-xl md:text-2xl leading-relaxed italic mb-8"
                style={{ color: theme?.textPrimaryColor, fontFamily: "'El Messiri', serif" }}
              >
                "{r.text}"
              </p>
              <div className="text-xs tracking-[0.3em] uppercase" style={{ color: theme?.accentColor }}>
                — {r.name}
                {r.role && <span className="opacity-60"> · {r.role}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}