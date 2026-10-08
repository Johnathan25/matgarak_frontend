// website-builder/templates/template9/CTA.jsx
import { ArrowLeft } from "lucide-react";

export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-black italic uppercase tracking-tight leading-tight mb-4"
          style={{ color: theme?.textPrimaryColor }}
        >
          {c.title}
        </h2>
        {c.subtitle && (
          <p className="text-sm mb-8" style={{ color: theme?.textSecondaryColor }}>
            {c.subtitle}
          </p>
        )}
        {c.buttonText && (
          <a
            href={c.buttonLink || "#"}
            onClick={(e) => isBuilder && e.preventDefault()}
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-black uppercase tracking-widest transition-all hover:scale-105"
            style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
          >
            {c.buttonText}
            <ArrowLeft size={16} />
          </a>
        )}
      </div>
    </section>
  );
}