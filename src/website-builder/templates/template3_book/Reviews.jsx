// website-builder/templates/template2/Reviews.jsx
import { Star } from "lucide-react";

export default function Reviews({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-10" style={{ color: theme?.textPrimaryColor }}>{c.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((r) => (
            <div key={r.id} className="p-6 rounded-2xl bg-white">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < r.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-sm mb-4">"{r.text}"</p>
              <div className="text-xs font-bold">{r.name} — <span className="text-gray-500">{r.role}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}