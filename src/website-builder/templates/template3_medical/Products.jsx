// website-builder/templates/template4/Products.jsx
import { ArrowLeft } from "lucide-react";

export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {(c.title || c.subtitle) && (
          <div className="text-center mb-12">
            {c.title && (
              <h2
                className="text-3xl md:text-4xl font-black mb-3"
                style={{ color: theme?.textPrimaryColor }}
              >
                {c.title}
              </h2>
            )}
            {c.subtitle && (
              <p className="text-sm" style={{ color: theme?.textSecondaryColor }}>
                {c.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-5 bg-white border transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ borderColor: `${theme?.textPrimaryColor}08` }}
            >
              {/* Icon + Color */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: item.color || theme?.surfaceColor }}
              >
                {item.icon}
              </div>

              {/* Image (optional) */}
              {item.image?.url && (
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-50">
                  <img
                    src={item.image.url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <h3
                className="text-base font-black mb-2"
                style={{ color: theme?.textPrimaryColor }}
              >
                {item.name}
              </h3>
              <p
                className="text-xs leading-relaxed mb-4 min-h-[40px]"
                style={{ color: theme?.textSecondaryColor }}
              >
                {item.description}
              </p>

              {c.showLearnMore && (
                <a
                  href="#"
                  onClick={(e) => isBuilder && e.preventDefault()}
                  className="inline-flex items-center gap-1 text-xs font-black hover:gap-2 transition-all"
                  style={{ color: theme?.primaryColor }}
                >
                  اعرف المزيد
                  <ArrowLeft size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}