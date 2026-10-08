// website-builder/templates/template2/Footer.jsx
export default function Footer({ section, theme }) {
  const c = section.content || {};
  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: `${theme?.textPrimaryColor}10` }}>
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-black mb-4">{c.title}</h3>
        <p className="text-sm text-gray-500 mb-6">{c.description}</p>
        <div className="text-xs text-gray-400">{c.copyright}</div>
      </div>
    </footer>
  );
}