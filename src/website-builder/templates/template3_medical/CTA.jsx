// website-builder/templates/template4/CTA.jsx
import { Send } from "lucide-react";
import { useState } from "react";

export default function CTA({ section, theme, isBuilder }) {
  const c = section.content || {};
  const fields = c.formFields || [];
  const sideImage = c.sideImage;
  const [formData, setFormData] = useState({});

  return (
    <section className="py-16 px-6" style={{ backgroundColor: theme?.surfaceColor }}>
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ backgroundColor: theme?.primaryColor }}
        >
          {/* Image side */}
          {sideImage?.url && (
            <div className="hidden lg:block relative">
              <img
                src={sideImage.url}
                alt=""
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to left, ${theme?.primaryColor}, transparent)`,
                }}
              />
            </div>
          )}

          {/* Form side */}
          <div className="p-8 md:p-12 text-white">
            {c.title && (
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                {c.title}
              </h2>
            )}
            {c.subtitle && (
              <p className="text-sm opacity-80 mb-8">{c.subtitle}</p>
            )}

            <div className="space-y-3">
              {fields.map((field) => (
                <div key={field.id}>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    readOnly={isBuilder}
                    value={formData[field.id] || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.id]: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 outline-none placeholder:text-white/50 text-sm"
                  />
                </div>
              ))}

              {c.buttonText && (
                <button
                  className="w-full md:w-auto px-8 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all hover:scale-105"
                  style={{
                    backgroundColor: theme?.secondaryColor,
                    color: theme?.textPrimaryColor,
                  }}
                >
                  <Send size={14} />
                  {c.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}