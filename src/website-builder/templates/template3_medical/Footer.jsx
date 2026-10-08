// website-builder/templates/template4/Footer.jsx
import { Phone, Mail, MapPin,MessageCircle } from "lucide-react";

export default function Footer({ section, theme, isBuilder }) {
  const c = section.content || {};
  const columns = c.columns || [];
  const social = c.social || {};
  const logo = c.logo?.url;

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
            {logo ? (
              <img src={logo} alt={c.title} className="h-12 mb-4 object-contain" />
            ) : (
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl"
                  style={{
                    backgroundColor: theme?.secondaryColor,
                    color: theme?.primaryColor,
                  }}
                >
                  +
                </div>
                <h3 className="text-2xl font-black">{c.title || "CuraMed"}</h3>
              </div>
            )}

            {c.description && (
              <p className="text-sm leading-relaxed opacity-70 mb-6 max-w-sm">
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
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
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
              <h4 className="font-black text-sm mb-5">{col.title}</h4>
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

        {/* Bottom */}
        <div
          className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-70"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <div>{c.copyright}</div>
          <div className="flex gap-6">
            {c.phone && (
              <div className="flex items-center gap-2">
                <Phone size={12} /> <span dir="ltr">{c.phone}</span>
              </div>
            )}
            {c.email && (
              <div className="flex items-center gap-2">
                <Mail size={12} /> <span dir="ltr">{c.email}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}