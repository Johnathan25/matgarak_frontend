// website-builder/templates/template8/Navbar.jsx
import { Menu, X, Search, User, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full" style={{ backgroundColor: theme?.primaryColor }}>
      {/* Top bar */}
      <div className="py-1.5 px-6 text-[11px] opacity-60 text-center" style={{ color: "#fff" }}>
        {c.welcomeText}
      </div>

      {/* Main bar */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-lg font-black"
              style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
            >
              ⌚
            </div>
            <span className="text-lg font-black tracking-widest uppercase" style={{ color: "#fff" }}>
              {c.title || "CODEX.MART"}
            </span>
          </div>

          {/* Search */}
          {c.showSearch && (
            <div className="hidden lg:flex flex-1 max-w-md items-center bg-white/5 rounded-lg px-3 py-2 border border-white/10">
              <Search size={14} className="text-white/50 mr-2" />
              <input
                type="text"
                placeholder="ابحث عن منتجات..."
                readOnly={isBuilder}
                className="flex-1 bg-transparent outline-none text-xs text-white placeholder:text-white/40"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0" style={{ color: "#fff" }}>
            {c.showUser && (
              <button className="p-2 rounded-full hover:bg-white/10">
                <User size={16} />
              </button>
            )}
            {c.showWishlist && (
              <button className="relative p-2 rounded-full hover:bg-white/10">
                <Heart size={16} />
              </button>
            )}
            {c.showCart && (
              <button className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10">
                <ShoppingCart size={16} />
                <span className="text-xs font-black" style={{ color: theme?.secondaryColor }}>
                  ${c.cartTotal?.toFixed(2) || "0.00"}
                </span>
              </button>
            )}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Nav links bar */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-1">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-white/10 transition"
              style={{ color: theme?.secondaryColor }}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-auto text-xs opacity-60" style={{ color: "#fff" }}>
            🎁 شحن مجاني للطلبات فوق $100
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 py-4 border-t border-white/10 bg-black/50">
          <div className="flex flex-col gap-1">
            {(c.links || []).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="py-2.5 px-4 rounded-lg text-sm font-bold uppercase hover:bg-white/10 text-white"
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