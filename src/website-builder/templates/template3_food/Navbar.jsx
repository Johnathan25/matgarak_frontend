// website-builder/templates/template6/Navbar.jsx
import { Menu, X, ShoppingCart, LogIn } from "lucide-react";
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
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xl"
            style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
          >
            🍽️
          </div>
          <span className="text-xl font-black tracking-tight">
            {c.title || "DelishDrop"}
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex gap-1">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-4 py-2 rounded-full text-sm font-bold hover:bg-white/10 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {c.showCart && (
            <button className="relative p-2.5 rounded-full hover:bg-white/10 transition">
              <ShoppingCart size={18} />
              {(c.cartCount || 0) > 0 && (
                <span
                  className="absolute -top-1 -right-1 min-w-[18px] h-[18px] text-[10px] rounded-full flex items-center justify-center font-black"
                  style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
                >
                  {c.cartCount}
                </span>
              )}
            </button>
          )}

          {c.ctaText && (
            <a
              href={c.ctaLink || "#"}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-black transition-all hover:scale-105"
              style={{
                backgroundColor: theme?.secondaryColor,
                color: theme?.primaryColor,
              }}
            >
              <LogIn size={14} />
              {c.ctaText}
            </a>
          )}

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2.5">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden px-6 py-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col gap-1">
            {(c.links || []).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="py-3 px-4 rounded-xl text-sm font-bold hover:bg-white/10"
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