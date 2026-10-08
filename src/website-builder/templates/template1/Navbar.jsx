// website-builder/templates/template2/Navbar.jsx
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full py-6 px-8"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textPrimaryColor,
        borderBottom: `1px solid ${theme?.accentColor}20`,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo — على اليسار */}
        <div className="text-2xl font-black tracking-[0.3em] uppercase" style={{ color: theme?.accentColor }}>
          {c.title || "LUXE"}
        </div>

        {/* Links — على اليمين */}
        <div className="hidden md:flex gap-10">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="text-xs font-bold uppercase tracking-[0.2em] transition-all hover:tracking-[0.3em]"
              style={{ color: theme?.textPrimaryColor }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {c.showCart && (
            <button className="relative" style={{ color: theme?.accentColor }}>
              <ShoppingCart size={18} />
              {(c.cartCount || 0) > 0 && (
                <span
                  className="absolute -top-1 -right-1 min-w-[16px] h-[16px] text-[9px] rounded-full flex items-center justify-center text-black font-bold"
                  style={{ backgroundColor: theme?.accentColor }}
                >
                  {c.cartCount}
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ color: theme?.textPrimaryColor }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-6 pt-6 border-t" style={{ borderColor: `${theme?.accentColor}30` }}>
          <div className="flex flex-col gap-4">
            {(c.links || []).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: theme?.textPrimaryColor }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}