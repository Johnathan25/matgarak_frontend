// website-builder/templates/template2/Products.jsx
export default function Products({ section, theme, isBuilder }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black" style={{ color: theme?.textPrimaryColor }}>{c.title}</h2>
          <a href="/shop" className="text-sm font-bold hover:opacity-60">اعرض الكل ←</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {items.map((b) => (
            <div key={b.id} className="group cursor-pointer">
              <div className="aspect-[2/3] rounded-xl overflow-hidden bg-gray-100 mb-3 group-hover:shadow-lg transition">
                {b.image?.url && (
                  <img src={b.image.url} alt={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
              </div>
              <h3 className="font-bold text-sm mb-1 line-clamp-2" style={{ color: theme?.textPrimaryColor }}>{b.name}</h3>
              <span className="text-xs text-gray-500">{b.price} {b.currency}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}