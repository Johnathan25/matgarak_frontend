// website-builder/templates/template5/Footer.jsx
import { Phone, Mail, MapPin,  MessageCircle } from "lucide-react";

export default function Footer({ section, theme, isBuilder }) {
  const c = section.content || {};
  const columns = c.columns || [];
  const social = c.social || {};
  const brands = c.brands || [];

  const socialLinks = [

    { key: "whatsapp", icon: MessageCircle, url: social.whatsapp },
  ].filter((s) => s.url);

  return (
    <footer style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}>
      {/* Brands Strip */}
      {brands.length > 0 && (
        <div className="border-b border-white/10 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="text-sm md:text-base font-black uppercase tracking-wider opacity-40 hover:opacity-100 transition-opacity"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="px-6 pt-14 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg font-black"
                  style={{ backgroundColor: theme?.secondaryColor, color: "#fff" }}
                >
                  ⚙
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider">
                  {c.title || "Automize"}
                </h3>
              </div>
              {c.description && (
                <p className="text-xs leading-relaxed opacity-60 mb-5">
                  {c.description}
                </p>
              )}
              {socialLinks.length > 0 && (
                <div className="flex gap-2">
                  {socialLinks.map(({ key, icon: Icon, url }) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => isBuilder && e.preventDefault()}
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Columns */}
            {columns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: theme?.secondaryColor }}>
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {(col.links || []).map((link, j) => (
                    <li key={j}>
                      <a
                        href={link.href || "#"}
                        onClick={(e) => isBuilder && e.preventDefault()}
                        className="text-xs opacity-60 hover:opacity-100 hover:text-white transition-all"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: theme?.secondaryColor }}>
                تواصل معنا
              </h4>
              <ul className="space-y-3 text-xs opacity-70">
                {c.phone && (
                  <li className="flex items-center gap-2">
                    <Phone size={12} /> <span dir="ltr">{c.phone}</span>
                  </li>
                )}
                {c.email && (
                  <li className="flex items-center gap-2">
                    <Mail size={12} /> <span dir="ltr">{c.email}</span>
                  </li>
                )}
                {c.address && (
                  <li className="flex items-start gap-2">
                    <MapPin size={12} className="mt-0.5 shrink-0" /> {c.address}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div
            className="pt-6 border-t text-center text-xs opacity-50 uppercase tracking-wider"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {c.copyright || `© ${new Date().getFullYear()} جميع الحقوق محفوظة`}
          </div>
        </div>
      </div>
    </footer>
  );
}