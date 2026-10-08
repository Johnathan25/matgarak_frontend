// website-builder/templates/template2/Navbar.jsx
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full py-4 px-6 border-b"
      style={{ backgroundColor: theme?.backgroundColor, color: theme?.textPrimaryColor, borderColor: `${theme?.textPrimaryColor}10` }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-black tracking-[0.3em]">{c.title}</div>

        <div className="hidden md:flex gap-8">
          {(c.links || []).map((link, i) => (
            <a key={i} href={link.href} onClick={(e) => isBuilder && e.preventDefault()}
              className="text-sm font-medium hover:opacity-60 transition">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {c.showCart && (
            <button className="relative p-2">
              <ShoppingCart size={20} />
              {(c.cartCount || 0) > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full text-[9px] flex items-center justify-center bg-black text-white font-bold">
                  {c.cartCount}
                </span>
              )}
            </button>
          )}
          <button className="hidden md:block px-5 py-2 rounded-full text-xs font-bold"
            style={{ backgroundColor: theme?.secondaryColor, color: theme?.textPrimaryColor }}>
            تسجيل الدخول
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}