// website-builder/templates/template1/Services.jsx
export default function Services({ section, theme }) {
  const c = section.content || {};
  const items = c.items || [];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black" style={{ color: theme?.textPrimaryColor }}>~{c.title}~</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition min-w-[120px]">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: theme?.textPrimaryColor, color: "#fff" }}>
                {item.icon || "◆"}
              </div>
              <span className="text-sm font-bold" style={{ color: theme?.textPrimaryColor }}>{item.title}</span>
              <span className="text-[10px] text-gray-500">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}