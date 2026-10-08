// website-builder/templates/template5/Reviews.jsx
import { Check } from "lucide-react";

export default function Reviews({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
            {c.title}
          </h2>
          {c.subtitle && (
            <p className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: theme?.secondaryColor }}>
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl p-6 transition-all hover:scale-105 ${
                plan.badge ? "ring-2" : ""
              }`}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-black uppercase whitespace-nowrap"
                  style={{ backgroundColor: theme?.secondaryColor, color: "#fff" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6 pb-6 border-b border-white/10">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">
                  {plan.role}
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-3xl font-black" style={{ color: theme?.secondaryColor }}>
                    {plan.price}
                  </span>
                  <span className="text-xs opacity-60">{plan.currency}</span>
                </div>
                <p className="text-xs opacity-70">{plan.text}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {(plan.features || []).map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.secondaryColor }}>
                      <Check size={10} />
                    </div>
                    <span className="opacity-80">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={(e) => isBuilder && e.preventDefault()}
                className="w-full py-3 rounded-lg font-black text-xs uppercase tracking-wide transition-all hover:opacity-90"
                style={{
                  backgroundColor: plan.badge ? theme?.secondaryColor : "rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              >
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}