// website-builder/templates/template2/Services.jsx
export default function Services({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-10" style={{ color: theme?.textPrimaryColor }}>{c.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-black text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}