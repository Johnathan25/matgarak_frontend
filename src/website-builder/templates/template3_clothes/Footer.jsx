// website-builder/templates/template1/Footer.jsx
import { Phone, Mail } from "lucide-react";

export default function Footer({ section, theme, isBuilder }) {
  const c = section.content || {};

  return (
    <footer className="py-12 px-6" style={{ backgroundColor: theme?.textPrimaryColor, color: "#fff" }}>
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-black mb-3">{c.title}</h3>
        <p className="text-sm opacity-70 mb-6">{c.description}</p>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          {c.phone && <div className="flex items-center gap-2 opacity-80"><Phone size={14} /> {c.phone}</div>}
          {c.email && <div className="flex items-center gap-2 opacity-80"><Mail size={14} /> {c.email}</div>}
        </div>
        <div className="pt-6 border-t border-white/10 text-xs opacity-60">{c.copyright}</div>
      </div>
    </footer>
  );
}