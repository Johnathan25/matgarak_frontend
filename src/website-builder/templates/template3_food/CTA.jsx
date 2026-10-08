// website-builder/templates/template6/CTA.jsx
import { ArrowLeft } from "lucide-react";

export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
          style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
        >
          {/* Decorations */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
            style={{ backgroundColor: theme?.secondaryColor, transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
            style={{ backgroundColor: theme?.accentColor, transform: "translate(-40%, 40%)" }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              {c.title}
            </h2>
            {c.subtitle && (
              <p className="text-base opacity-80 mb-8 max-w-lg mx-auto">
                {c.subtitle}
              </p>
            )}

            {c.buttonText && (
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-sm transition-all hover:scale-105"
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