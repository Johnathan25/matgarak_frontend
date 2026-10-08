// website-builder/templates/template3/Reviews.jsx
import { Star, Quote } from "lucide-react";

export default function Reviews({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {(c.title || c.subtitle) && (
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black mb-3"
              style={{ color: theme?.textPrimaryColor }}
            >
              {c.title}
            </h2>
            {c.subtitle && (
              <p className="text-sm" style={{ color: theme?.textSecondaryColor }}>
                {c.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((r) => (
            <div
              key={r.id}
              className="relative p-6 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition-all"
              style={{ borderColor: `${theme?.textPrimaryColor}10` }}
            >
              {/* Quote icon */}
              <div
                className="absolute -top-3 right-6 w-8 h-8 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: theme?.accentColor }}
              >
                <Quote size={14} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < r.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed mb-5 min-h-[60px]"
                style={{ color: theme?.textSecondaryColor }}
              >
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: `${theme?.textPrimaryColor}10` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black"
                  style={{ backgroundColor: theme?.primaryColor }}
                >
                  {r.name?.charAt(0) || "؟"}
                </div>
                <div>
                  <h4 className="font-black text-sm" style={{ color: theme?.textPrimaryColor }}>
                    {r.name}
                  </h4>
                  {r.role && (
                    <p className="text-xs" style={{ color: theme?.textSecondaryColor }}>
                      {r.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}