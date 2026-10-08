// website-builder/templates/template4/Services.jsx
export default function Services({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];
  const sideImage = c.sideImage;

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Side Image */}
          {sideImage?.url && (
            <div className="lg:col-span-1 hidden lg:block">
              <img
                src={sideImage.url}
                alt=""
                className="w-full rounded-3xl object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          )}

          {/* Steps */}
          <div className="lg:col-span-2">
            {c.title && (
              <h2
                className="text-3xl md:text-4xl font-black mb-3"
                style={{ color: theme?.textPrimaryColor }}
              >
                {c.title}
              </h2>
            )}
            {c.subtitle && (
              <p
                className="text-sm mb-8"
                style={{ color: theme?.textSecondaryColor }}
              >
                {c.subtitle}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((step, idx) => (
                <div
                  key={step.id}
                  className="relative flex items-start gap-4 p-5 rounded-2xl bg-white border"
                  style={{ borderColor: `${theme?.textPrimaryColor}08` }}
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: theme?.surfaceColor }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-black mb-1"
                      style={{ color: theme?.textPrimaryColor }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: theme?.textSecondaryColor }}
                    >
                      {step.description}
                    </p>
                  </div>
                  <span
                    className="absolute top-4 left-4 text-[10px] font-black opacity-30"
                    style={{ color: theme?.primaryColor }}
                  >
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}