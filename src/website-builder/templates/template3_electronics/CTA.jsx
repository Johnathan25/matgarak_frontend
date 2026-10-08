// website-builder/templates/template3/CTA.jsx
import { Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14"
          style={{
            background: `linear-gradient(135deg, ${theme?.primaryColor}, ${theme?.accentColor})`,
          }}
        >
          {/* Decorations */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ backgroundColor: "#fff", transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
            style={{ backgroundColor: theme?.secondaryColor, transform: "translate(-40%, 40%)" }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                {c.title}
              </h2>
              {c.subtitle && <p className="text-lg opacity-90">{c.subtitle}</p>}
            </div>

            {/* Form */}
            <div className="flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-2xl border border-white/20">
              <div className="flex items-center flex-1 gap-2 px-3 py-2.5 rounded-xl bg-white/90">
                <Mail size={16} className="text-gray-400 shrink-0" />
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={isBuilder}
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 font-medium"
                />
              </div>
              <button
                className="px-6 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 shrink-0"
                style={{ backgroundColor: theme?.secondaryColor, color: theme?.primaryColor }}
              >
                {c.buttonText || "اشترك"}
                <ArrowLeft size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}