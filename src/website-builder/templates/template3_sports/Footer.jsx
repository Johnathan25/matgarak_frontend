// website-builder/templates/template7/Footer.jsx
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Footer({ section, theme, isBuilder }) {
  const c = section.content || {};
  const columns = c.columns || [];
  const social = c.social || {};
  const [email, setEmail] = useState("");

  const socialLinks = [

    { key: "whatsapp", icon: MessageCircle, url: social.whatsapp },
  ].filter((s) => s.url);

  return (
    <footer
      className="pt-16 pb-8 px-4"
      style={{ backgroundColor: theme?.primaryColor, color: theme?.secondaryColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black"
                style={{
                  backgroundColor: theme?.secondaryColor,
                  color: theme?.primaryColor,
                }}
              >
                F
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                {c.title || "FAYP"}
              </h3>
            </div>
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
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Columns */}
          {columns
            .filter((col) => !col.isNewsletter)
            .map((col, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-black uppercase tracking-widest mb-5 opacity-90">
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

          {/* Newsletter */}
          {columns.find((col) => col.isNewsletter) && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-5 opacity-90">
                النشرة البريدية
              </h4>
              <p className="text-xs opacity-60 mb-4 leading-relaxed">
                اشترك ليصلك كل جديد وعروض حصرية
              </p>
              <div className="flex gap-2 bg-white/5 rounded-xl p-1.5 border border-white/10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  readOnly={isBuilder}
                  className="flex-1 bg-transparent outline-none text-xs px-3 text-white placeholder:text-white/40"
                />
                <button
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: theme?.accentColor,
                    color: "#fff",
                  }}
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom */}
        <div
          className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-widest opacity-50"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div>{c.copyright}</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:opacity-100">سياسة الخصوصية</a>
            <a href="/terms" className="hover:opacity-100">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}