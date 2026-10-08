// website-builder/templates/template7/Reviews.jsx
import { Star } from "lucide-react";

export default function Reviews({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-black uppercase tracking-tighter"
            style={{ color: theme?.textPrimaryColor }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-xs font-bold uppercase tracking-widest mt-2 opacity-40">
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((r) => (
            <div
              key={r.id}
              className="p-6 rounded-3xl bg-white border hover:shadow-lg transition-all"
              style={{ borderColor: "rgba(0,0,0,0.05)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < r.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <p
                className="text-sm leading-relaxed mb-5 min-h-[60px]"
                style={{ color: theme?.textPrimaryColor }}
              >
                "{r.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                  style={{ backgroundColor: theme?.primaryColor }}
                >
                  {r.name?.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-sm" style={{ color: theme?.textPrimaryColor }}>
                    {r.name}
                  </h4>
                  {r.role && (
                    <p className="text-[10px] uppercase tracking-widest opacity-50">
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