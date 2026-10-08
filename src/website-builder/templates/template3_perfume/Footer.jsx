// website-builder/templates/template9/Footer.jsx
import { Phone, Mail } from "lucide-react";

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
            <h3
              className="text-2xl font-black tracking-[0.3em] uppercase mb-4"
              style={{ color: theme?.secondaryColor }}
            >
              {c.title || "AURAGÉ"}
            </h3>
            {c.description && (
              <p className="text-xs leading-relaxed opacity-60 mb-5 max-w-xs">
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
                      className="text-xs opacity-60 hover:opacity-100 transition-opacity uppercase tracking-wider"
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
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 border-t text-center text-[10px] uppercase tracking-[0.3em] opacity-40"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {c.copyright || `© ${new Date().getFullYear()} جميع الحقوق محفوظة`}
        </div>
      </div>
    </footer>
  );
}