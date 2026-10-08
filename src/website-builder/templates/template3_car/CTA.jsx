// website-builder/templates/template5/CTA.jsx
import { ArrowRight } from "lucide-react";

export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};
  const bgUrl = c.backgroundImage?.url;

  return (
    <section className="relative overflow-hidden py-20 px-6" style={{ backgroundColor: theme?.primaryColor }}>
      {bgUrl && (
        <>
          <img src={bgUrl} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-transparent" />
        </>
      )}

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
          {c.title}
        </h2>
        {c.subtitle && (
          <p className="text-sm opacity-80 mb-8 uppercase tracking-wider">
            {c.subtitle}
          </p>
        )}
        {c.buttonText && (
          <a
            href={c.buttonLink || "#"}
            onClick={(e) => isBuilder && e.preventDefault()}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all hover:scale-105"
            style={{ backgroundColor: theme?.secondaryColor, color: "#fff" }}
          >
            {c.buttonText}
            <ArrowRight size={16} />
          </a>
        )}
      </div>
    </section>
  );
}