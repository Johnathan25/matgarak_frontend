// website-builder/templates/template8/CTA.jsx
import { ArrowLeft } from "lucide-react";

export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-lg p-10 md:p-14 text-center"
          style={{ backgroundColor: theme?.primaryColor }}
        >
          {/* Gold accents */}
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: theme?.secondaryColor, transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-5"
            style={{ backgroundColor: theme?.secondaryColor, transform: "translate(-40%, 40%)" }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              {c.title}
            </h2>
            {c.subtitle && (
              <p className="text-sm mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
                {c.subtitle}
              </p>
            )}

            {c.buttonText && (
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-black text-sm uppercase tracking-widest transition-all hover:scale-105"
                style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
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