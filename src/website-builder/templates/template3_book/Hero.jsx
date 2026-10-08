// website-builder/templates/template2/Hero.jsx
import { Search, ArrowLeft } from "lucide-react";

export default function Hero({ section, theme, isBuilder }) {
  const c = section.content || {};
  const imgUrl = c.image?.url;

  return (
    <section className="py-16 px-6 text-center" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-4xl mx-auto">
        {c.title && (
          <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.05]" style={{ color: theme?.textPrimaryColor }}>
            {c.title}
          </h1>
        )}

        <div className="max-w-xl mx-auto flex items-center gap-2 bg-white rounded-full p-2 shadow-md mb-12 border" style={{ borderColor: `${theme?.textPrimaryColor}10` }}>
          <Search size={18} className="ml-3 text-gray-400" />
          <input
            type="text"
            placeholder={c.placeholder || "ابحث..."}
            readOnly={isBuilder}
            className="flex-1 bg-transparent outline-none text-sm font-medium py-2"
          />
          <button
            className="px-5 py-3 rounded-full text-xs font-black flex items-center gap-1"
            style={{ backgroundColor: theme?.secondaryColor, color: theme?.textPrimaryColor }}
          >
            {c.buttonText || "ابحث"}
            <ArrowLeft size={14} />
          </button>
        </div>

        {imgUrl && (
          <img src={imgUrl} alt="" className="w-full max-w-2xl mx-auto object-contain" />
        )}
      </div>
    </section>
  );
}