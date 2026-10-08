// website-builder/templates/template7/Navbar.jsx
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: theme?.primaryColor, color: theme?.secondaryColor }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black"
            style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
          >
            F
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">
            {c.title || "FAYP"}
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-1">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 shrink-0">
          {c.showSearch && (
            <button className="p-2.5 rounded-full hover:bg-white/10 transition">
              <Search size={18} />
            </button>
          )}
          {c.showUser && (
            <button className="p-2.5 rounded-full hover:bg-white/10 transition">
              <User size={18} />
            </button>
          )}
          {c.showCart && (
            <button className="relative p-2.5 rounded-full hover:bg-white/10 transition">
              <ShoppingCart size={18} />
              {(c.cartCount || 0) > 0 && (
                <span
                  className="absolute -top-1 -right-1 min-w-[18px] h-[18px] text-[10px] rounded-full flex items-center justify-center font-black"
                  style={{ backgroundColor: theme?.accentColor, color: "#fff" }}
                >
                  {c.cartCount}
                </span>
              )}
            </button>
          )}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2.5">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden px-6 py-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col gap-1">
            {(c.links || []).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="py-3 px-4 rounded-xl text-sm font-bold uppercase hover:bg-white/10"
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