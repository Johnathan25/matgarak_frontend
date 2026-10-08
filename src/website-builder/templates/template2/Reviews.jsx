// website-builder/templates/template1/Reviews.jsx
import { Star, Quote } from "lucide-react";

export default function Reviews({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  const renderStars = (rating = 5) => (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
      ))}
    </div>
  );

  return (
    <section className="py-20 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: theme?.textPrimaryColor }}>
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-base opacity-70" style={{ color: theme?.textSecondaryColor }}>
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((r) => (
            <div
              key={r.id}
              className="relative p-8 rounded-2xl bg-white border hover:shadow-xl transition-all"
              style={{ borderColor: `${theme?.textPrimaryColor}10`, borderRadius: theme?.radius }}
            >
              <div
                className="absolute -top-4 right-8 w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-white"
                style={{ backgroundColor: theme?.accentColor }}
              >
                <Quote size={18} />
              </div>
              {renderStars(r.rating)}
              <p className="text-sm leading-relaxed mb-6 min-h-[60px]" style={{ color: theme?.textSecondaryColor }}>
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: `${theme?.textPrimaryColor}10` }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg"
                  style={{ backgroundColor: theme?.primaryColor }}
                >
                  {r.name?.charAt(0) || "؟"}
                </div>
                <div>
                  <h4 className="font-black text-sm" style={{ color: theme?.textPrimaryColor }}>
                    {r.name}
                  </h4>
                  {r.role && <p className="text-xs" style={{ color: theme?.textSecondaryColor }}>{r.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}