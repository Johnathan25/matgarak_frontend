// website-builder/templates/template4/Navbar.jsx
import { Menu, X, User, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full py-4 px-6"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textPrimaryColor,
        borderBottom: `1px solid ${theme?.textPrimaryColor}08`,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl"
            style={{ backgroundColor: theme?.primaryColor }}
          >
            <span style={{ color: theme?.secondaryColor }}>+</span>
          </div>
          <span className="text-2xl font-black" style={{ color: theme?.primaryColor }}>
            {c.title || "CuraMed"}
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex gap-1">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition"
              style={{ color: theme?.textPrimaryColor }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {c.showUser && (
            <button
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold"
              style={{ color: theme?.primaryColor }}
            >
              <User size={16} />
              تسجيل الدخول
            </button>
          )}

          {c.ctaText && (
            <a
              href={c.ctaLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-black transition-all hover:scale-105"
              style={{ backgroundColor: theme?.secondaryColor, color: theme?.textPrimaryColor }}
            >
              <Phone size={14} />
              {c.ctaText}
            </a>
          )}

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mt-4 pt-4 border-t flex flex-col gap-1" style={{ borderColor: `${theme?.textPrimaryColor}10` }}>
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="py-2.5 px-3 rounded-lg text-sm font-bold hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
          {c.ctaText && (
            <a
              href={c.ctaLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="mt-2 py-3 rounded-full text-center text-sm font-black"
              style={{ backgroundColor: theme?.secondaryColor, color: theme?.textPrimaryColor }}
            >
              {c.ctaText}
            </a>
          )}
        </div>
      )}
    </nav>
  );
}