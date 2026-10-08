// website-builder/templates/template1/Reviews.jsx
import { Star } from "lucide-react";

export default function Reviews({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12" style={{ color: theme?.textPrimaryColor }}>{c.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((r) => (
            <div key={r.id} className="p-6 rounded-3xl bg-white shadow-sm">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < r.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: theme?.textSecondaryColor }}>"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black" style={{ backgroundColor: theme?.textPrimaryColor }}>
                  {r.name?.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{r.name}</h4>
                  <p className="text-xs text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}