// website-builder/templates/template3/Navbar.jsx
import { Menu, X, ShoppingCart, User, Search, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
    >
      {/* ===== Top Bar ===== */}
      <div
        className="py-2 px-6 text-xs"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-80">
              <Phone size={12} /> تواصل معنا: +20 100 000 0000
            </span>
            <span className="opacity-80">🇪🇬 مصر</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="opacity-80 hover:opacity-100">تتبع طلبك</a>
            <span className="opacity-40">|</span>
            <a href="#" className="opacity-80 hover:opacity-100">العربية</a>
          </div>
        </div>
      </div>

      {/* ===== Main Bar ===== */}
      <div
        className="px-6 py-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black"
              style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
            >
              T
            </div>
            <span className="text-2xl font-black tracking-tight">{c.title || "TechMart"}</span>
          </div>

          {/* Search */}
          {c.showSearch && (
            <div className="hidden md:flex flex-1 max-w-xl items-center gap-2 bg-white rounded-xl px-4 py-2.5">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                readOnly={isBuilder}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700"
              />
              <button
                className="px-4 py-1.5 rounded-lg text-xs font-bold"
                style={{ backgroundColor: theme?.accentColor, color: "#fff" }}
              >
                بحث
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button className="p-2.5 rounded-xl hover:bg-white/10 relative">
              <User size={20} />
            </button>
            {c.showCart && (
              <button className="p-2.5 rounded-xl hover:bg-white/10 relative">
                <ShoppingCart size={20} />
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
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2.5 rounded-xl hover:bg-white/10"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Categories Bar (Desktop) ===== */}
      <div
        className="hidden md:block px-6 py-2"
        style={{ backgroundColor: theme?.secondaryColor }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-1">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-4 py-1.5 rounded-lg text-sm font-bold text-gray-800 hover:bg-white/40 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-auto flex items-center gap-2 px-4 py-1.5 rounded-lg bg-red-500 text-white text-xs font-black">
            🔥 عروض خاصة
          </div>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {open && (
        <div className="md:hidden px-6 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div className="flex flex-col gap-1">
            {(c.links || []).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="py-2.5 px-3 rounded-lg text-sm font-bold hover:bg-white/10"
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