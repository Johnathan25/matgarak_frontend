// website-builder/templates/template8/Footer.jsx
import { Phone, Mail, MapPin,  } from "lucide-react";

export default function Footer({ section, theme, isBuilder }) {
  const c = section.content || {};
  const columns = c.columns || [];
  const social = c.social || {};

  const socialLinks = [
  
  ].filter((s) => s.url);

  return (
    <footer
      className="pt-14 pb-6 px-6"
      style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-lg font-black"
                style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
              >
                ⌚
              </div>
              <h3 className="text-lg font-black tracking-widest uppercase">
                {c.title || "CODEX.MART"}
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
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", color: theme?.secondaryColor }}
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
              <h4
                className="text-xs font-black uppercase tracking-[0.3em] mb-5"
                style={{ color: theme?.secondaryColor }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {(col.links || []).map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href || "#"}
                      onClick={(e) => isBuilder && e.preventDefault()}
                      className="text-xs opacity-60 hover:opacity-100 transition-opacity"
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
            <h4
              className="text-xs font-black uppercase tracking-[0.3em] mb-5"
              style={{ color: theme?.secondaryColor }}
            >
              تواصل معنا
            </h4>
            <ul className="space-y-3 text-xs opacity-60">
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
          className="pt-6 border-t text-center text-[10px] uppercase tracking-[0.3em] opacity-40"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {c.copyright || `© ${new Date().getFullYear()} جميع الحقوق محفوظة`}
        </div>
      </div>
    </footer>
  );
}