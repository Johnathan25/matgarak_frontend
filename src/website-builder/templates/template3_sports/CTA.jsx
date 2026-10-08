// website-builder/templates/template7/CTA.jsx
import { ArrowLeft } from "lucide-react";

export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16"
          style={{ backgroundColor: theme?.primaryColor, color: theme?.secondaryColor }}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ backgroundColor: theme?.accentColor, transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
            style={{ backgroundColor: "#fff", transform: "translate(-30%, 30%)" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                {c.title}
              </h2>
              {c.subtitle && (
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">
                  {c.subtitle}
                </p>
              )}
            </div>

            {c.buttonText && (
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 hover:gap-3"
                style={{
                  backgroundColor: theme?.accentColor,
                  color: "#fff",
                }}
              >
                {c.buttonText}
                <ArrowLeft size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}