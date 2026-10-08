// website-builder/templates/template1/Navbar.jsx
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [open, setOpen] = useState(false);
  const logo = c.logo?.url;

  return (
    <nav
      className="sticky top-0 z-50 w-full py-4 px-6 shadow-sm"
      style={{
        backgroundColor: theme?.surfaceColor || "#fff",
        color: theme?.textPrimaryColor,
        borderBottom: `1px solid ${theme?.textPrimaryColor}10`,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          {logo ? (
            <img src={logo} alt={c.title} className="h-10 object-contain" />
          ) : (
            <span className="text-xl font-black" style={{ color: theme?.primaryColor }}>
              {c.title || "متجري"}
            </span>
          )}
        </div>

        {/* Links — Desktop */}
        <div className="hidden md:flex gap-1">
          {(c.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => isBuilder && e.preventDefault()}
              className="px-4 py-2 rounded-lg font-bold text-sm hover:opacity-70 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {c.showSearch && (
            <button className="p-2 rounded-lg hover:opacity-70">
              <Search size={18} />
            </button>
          )}
          {c.showUser && (
            <button className="p-2 rounded-lg hover:opacity-70">
              <User size={18} />
            </button>
          )}
          {c.showCart && (
            <button className="relative p-2 rounded-lg hover:opacity-70">
              <ShoppingCart size={18} />
              {(c.cartCount || 0) > 0 && (
                <span
                  className="absolute -top-1 -right-1 min-w-[18px] h-[18px] text-[10px] rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: theme?.accentColor }}
                >
                  {c.cartCount}
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:opacity-70"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden mt-4 pt-4 border-t" style={{ borderColor: `${theme?.textPrimaryColor}10` }}>
          <div className="flex flex-col gap-1">
            {(c.links || []).map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => isBuilder && e.preventDefault()}
                className="py-2.5 px-3 rounded-lg font-bold text-sm hover:opacity-70"
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