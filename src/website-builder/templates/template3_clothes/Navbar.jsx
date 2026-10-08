// website-builder/templates/template1/Navbar.jsx
import { Menu, X, ShoppingCart, LogIn } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full py-4 px-6"
      style={{ backgroundColor: theme?.backgroundColor, color: theme?.textPrimaryColor }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 bg-white rounded-full px-6 py-3 shadow-sm border" style={{ borderColor: `${theme?.textPrimaryColor}08` }}>
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full" style={{ backgroundColor: theme?.secondaryColor }} />
          <span className="text-lg font-black">{c.title}</span>
        </div>

        <div className="hidden md:flex gap-1">
          {(c.links || []).map((link, i) => (
            <a key={i} href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className={`px-3 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition ${i === 0 ? "" : ""}`}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {c.showCart && (
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart size={18} />
              {(c.cartCount || 0) > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] text-[9px] rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: theme?.secondaryColor, color: "#000" }}>
                  {c.cartCount}
                </span>
              )}
            </button>
          )}
          <button className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold"
            style={{ backgroundColor: theme?.secondaryColor, color: "#000" }}>
            <LogIn size={14} />
            تسجيل الدخول
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}