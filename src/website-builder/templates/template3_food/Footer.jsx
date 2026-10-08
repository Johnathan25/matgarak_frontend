// website-builder/templates/template6/Footer.jsx
import { Phone, Mail, MapPin,MessageCircle } from "lucide-react";

export default function Footer({ section, theme, isBuilder }) {
  const c = section.content || {};
  const columns = c.columns || [];
  const social = c.social || {};

  const socialLinks = [

    { key: "whatsapp", icon: MessageCircle, url: social.whatsapp },
  ].filter((s) => s.url);

  return (
    <footer
      className="pt-14 pb-6 px-6"
      style={{ backgroundColor: theme?.primaryColor, color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
              >
                🍽️
              </div>
              <h3 className="text-2xl font-black">{c.title || "DelishDrop"}</h3>
            </div>
            {c.description && (
              <p className="text-sm leading-relaxed opacity-70 mb-5 max-w-sm">
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
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link Columns */}
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-black text-sm mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {(col.links || []).map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href || "#"}
                      onClick={(e) => isBuilder && e.preventDefault()}
                      className="text-xs opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        {(c.phone || c.email || c.address) && (
          <div
            className="flex flex-wrap gap-6 py-6 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {c.phone && (
              <div className="flex items-center gap-2 text-xs opacity-70">
                <Phone size={14} /> <span dir="ltr">{c.phone}</span>
              </div>
            )}
            {c.email && (
              <div className="flex items-center gap-2 text-xs opacity-70">
                <Mail size={14} /> <span dir="ltr">{c.email}</span>
              </div>
            )}
            {c.address && (
              <div className="flex items-center gap-2 text-xs opacity-70">
                <MapPin size={14} /> {c.address}
              </div>
            )}
          </div>
        )}

        {/* Bottom */}
        <div
          className="pt-6 border-t text-center text-xs opacity-50"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {c.copyright || `© ${new Date().getFullYear()} جميع الحقوق محفوظة`}
        </div>
      </div>
    </footer>
  );
}