// website-builder/templates/template9/Navbar.jsx
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xl font-black tracking-[0.3em] uppercase">
            {c.title || "AURAGÉ"}
          </span>
          <div
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: theme?.secondaryColor }}
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="text-xs font-bold uppercase tracking-[0.2em] hover:opacity-70 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider"
            style={{ color: theme?.secondaryColor }}>
            <ShoppingBag size={14} />
            الحقيبة
          </button>

          {c.ctaText && (
            <a
              href={c.ctaLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="hidden md:inline-block px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all hover:scale-105"
              style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
            >
              {c.ctaText}
            </a>
          )}

          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 border-t border-white/10">
          <div className="flex flex-col gap-1">
            {(c.links || []).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="py-2.5 px-4 text-sm font-bold uppercase tracking-wider hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            {c.ctaText && (
              <a
                href={c.ctaLink || "#"}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="mt-2 py-3 text-center text-sm font-black uppercase tracking-wider"
                style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
              >
                {c.ctaText}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}