// website-builder/templates/template8/Reviews.jsx
export default function Reviews({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];
  const mainProduct = c.mainProduct || {};

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
            style={{ color: theme?.textPrimaryColor }}
          >
            {c.title}
          </h2>
          {c.subtitle && (
            <p
              className="text-xs font-black tracking-[0.4em] uppercase mt-1"
              style={{ color: theme?.secondaryColor }}
            >
              {c.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Product */}
          <div
            className="lg:col-span-1 rounded-lg p-6 flex flex-col items-center justify-center text-center"
            style={{ backgroundColor: theme?.surfaceColor }}
          >
            {c.mainImage?.url && (
              <img
                src={c.mainImage.url}
                alt={mainProduct.name}
                className="w-full max-w-xs mb-6"
              />
            )}
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
              {mainProduct.name}
            </h3>
            <p className="text-xs opacity-60 text-white mb-4">
              {mainProduct.description}
            </p>
            <div
              className="text-3xl font-black mb-6"
              style={{ color: theme?.secondaryColor }}
            >
              {mainProduct.currency}{mainProduct.price}
            </div>
            <button
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-6 py-3 rounded-lg font-black text-xs uppercase tracking-widest"
              style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
            >
              {mainProduct.buttonText}
            </button>
          </div>

          {/* Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((p) => (
              <div key={p.id} className="group">
                <div
                  className="relative aspect-square overflow-hidden rounded-lg mb-2 flex items-center justify-center"
                  style={{ backgroundColor: theme?.surfaceColor }}
                >
                  {p.image?.url ? (
                    <img
                      src={p.image.url}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-4xl opacity-20">⌚</div>
                  )}
                </div>
                <h4
                  className="text-xs font-bold mb-1 line-clamp-1"
                  style={{ color: theme?.textPrimaryColor }}
                >
                  {p.name}
                </h4>
                <div
                  className="text-sm font-black"
                  style={{ color: theme?.secondaryColor }}
                >
                  {p.currency}{p.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}