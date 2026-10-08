// website-builder/templates/template9/Reviews.jsx
import { ArrowLeft } from "lucide-react";

export default function Reviews({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            {c.image?.url && (
              <div className="relative">
                {/* Yellow shape behind */}
                <div
                  className="absolute -top-4 -right-4 w-full h-full"
                  style={{ backgroundColor: theme?.secondaryColor }}
                />
                <img
                  src={c.image.url}
                  alt=""
                  className="relative w-full aspect-[4/3] object-cover"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {c.subtitle && (
              <div
                className="inline-block px-3 py-1 mb-4 text-xs font-black uppercase tracking-widest"
                style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
              >
                {c.subtitle}
              </div>
            )}

            <h2
              className="text-4xl md:text-5xl font-black italic uppercase tracking-tight leading-none mb-6"
              style={{ color: theme?.textPrimaryColor }}
            >
              {c.title}
            </h2>

            {c.description && (
              <p
                className="text-sm leading-relaxed mb-8 max-w-lg"
                style={{ color: theme?.textSecondaryColor }}
              >
                {c.description}
              </p>
            )}

            {c.buttonText && (
              <a
                href={c.buttonLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-wider transition-all hover:scale-105"
                style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
              >
                {c.buttonText}
                <ArrowLeft size={14} />
              </a>
            )}

            {/* Features Row */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t" style={{ borderColor: `${theme?.textPrimaryColor}10` }}>
              {(c.items || []).slice(0, 3).map((item) => (
                <div key={item.id}>
                  <div
                    className="text-xl font-black mb-1"
                    style={{ color: theme?.textPrimaryColor }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-wider opacity-60"
                    style={{ color: theme?.textSecondaryColor }}
                  >
                    {item.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}