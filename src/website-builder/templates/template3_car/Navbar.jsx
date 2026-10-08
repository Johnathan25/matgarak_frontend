// website-builder/templates/template5/Navbar.jsx
import { Menu, X, Search, User, ShoppingCart, Heart, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: theme?.secondaryColor, color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-lg font-black"
            style={{ backgroundColor: "#fff", color: theme?.secondaryColor }}
          >
            ⚙
          </div>
          <span className="text-xl font-black uppercase tracking-wider">
            {c.title || "Automize"}
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex gap-1">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-white/10 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Search Bar */}
        {c.showSearch && (
          <div className="hidden xl:flex flex-1 max-w-xs items-center bg-white/15 rounded-full px-4 py-2 border border-white/20">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              readOnly={isBuilder}
              className="flex-1 bg-transparent outline-none text-xs text-white placeholder:text-white/60"
            />
            <Search size={14} />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-1 shrink-0">
          {c.phone && (
            <div className="hidden md:flex items-center gap-1.5 text-xs font-bold px-3">
              <Phone size={14} />
              <span dir="ltr">{c.phone}</span>
            </div>
          )}

          {c.showUser && (
            <button className="p-2 rounded-full hover:bg-white/10">
              <User size={16} />
            </button>
          )}

          {c.showWishlist && (
            <button className="relative p-2 rounded-full hover:bg-white/10">
              <Heart size={16} />
              {(c.wishlistCount || 0) > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[9px] rounded-full flex items-center justify-center bg-black font-black">
                  {c.wishlistCount}
                </span>
              )}
            </button>
          )}

          {c.showCart && (
            <button className="relative p-2 rounded-full hover:bg-white/10">
              <ShoppingCart size={16} />
              {(c.cartCount || 0) > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[9px] rounded-full flex items-center justify-center bg-black font-black">
                  {c.cartCount}
                </span>
              )}
            </button>
          )}

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-6 py-4 border-t border-white/10">
          <div className="flex flex-col gap-1">
            {(c.links || []).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="py-2.5 px-4 rounded-lg text-sm font-bold hover:bg-white/10"
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