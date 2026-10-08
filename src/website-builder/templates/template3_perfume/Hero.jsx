// website-builder/templates/template9/Hero.jsx
export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const bgUrl = c.backgroundImage?.url;
  const productUrl = c.productImage?.url;

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: theme?.primaryColor }}>
      {/* Background Image */}
      {bgUrl && (
        <>
          <img
            src={bgUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[600px]">
        {/* Left: Badge */}
        <div className="hidden lg:block">
          {c.badge && (
            <div className="mb-4">
              <span
                className="inline-block text-3xl md:text-5xl font-black italic"
                style={{ color: theme?.secondaryColor }}
              >
                {c.badge}
              </span>
              {c.subBadge && (
                <p className="text-sm text-white mt-2 font-bold">{c.subBadge}</p>
              )}
            </div>
          )}
        </div>

        {/* Right: Product Image + Text */}
        <div className="relative">
          {/* Product Image Floating */}
          {productUrl && (
            <div className="relative mb-8">
              <img
                src={productUrl}
                alt={c.productName}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl mx-auto lg:mx-0 shadow-2xl"
              />
              <div className="mt-3 text-center lg:text-left">
                <div className="text-white font-black text-2xl tracking-widest">
                  {c.productName}
                </div>
                <div className="text-xs text-white/60 mt-1 tracking-wide">
                  {c.productSubtitle}
                </div>
              </div>
            </div>
          )}

          {/* Big Title */}
          <div className="text-center lg:text-right">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black italic leading-[0.9] uppercase"
              style={{ color: theme?.secondaryColor }}
            >
              {c.title}
            </h1>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-black italic leading-[0.9] uppercase text-white"
            >
              {c.title2}
            </h2>

            {c.description && (
              <p className="text-sm md:text-base text-white/70 mt-6 max-w-lg ml-auto">
                {c.description}
              </p>
            )}

            {c.ribbon && (
              <div className="mt-6 inline-block">
                <div
                  className="px-4 py-1.5 text-xs font-black uppercase tracking-wider"
                  style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
                >
                  ✨ {c.ribbon} ✨
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}