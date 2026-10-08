// website-builder/templates/template5/Hero.jsx
import { ArrowRight } from "lucide-react";

export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const bgUrl = c.backgroundImage?.url;
  const mechanicUrl = c.mechanicImage?.url;
  const features = c.features || [];

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
    >
      {/* Background */}
      {bgUrl && (
        <>
          <img src={bgUrl} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black/80" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="max-w-xl">
          {c.badge && (
            <div
              className="inline-block px-3 py-1 mb-5 text-xs font-black uppercase tracking-widest"
              style={{ color: theme?.secondaryColor }}
            >
              {c.badge}
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 uppercase">
            {c.title}
          </h1>

          {c.subtitle && (
            <p className="text-sm md:text-base leading-relaxed mb-8 opacity-80">
              {c.subtitle}
            </p>
          )}

          {c.buttonText && (
            <a
              href={c.buttonLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wide transition-all hover:scale-105"
              style={{ backgroundColor: theme?.secondaryColor, color: "#fff" }}
            >
              {c.buttonText}
              <ArrowRight size={16} />
            </a>
          )}
        </div>

        {/* Mechanic Image */}
        <div className="relative hidden lg:block">
          {mechanicUrl && (
            <img
              src={mechanicUrl}
              alt=""
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          )}
        </div>
      </div>

      {/* Features Strip */}
      <div className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((f) => (
            <div key={f.id} className="flex items-center gap-2 text-xs font-bold">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-base shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                {f.icon}
              </div>
              <span className="opacity-80 truncate">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}