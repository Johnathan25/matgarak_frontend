// website-builder/builder/TemplateSelector.jsx
import { getAllTemplates } from "../templates/templateRegistry";

export default function TemplateSelector({ onSelect }) {
  const templates = getAllTemplates();

  return (
    <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-black mb-2">اختر قالب موقعك</h1>
        <p className="text-gray-500 mb-8">اختر التصميم اللي يناسبك وابدأ التخصيص</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => onSelect(tpl.id)}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#0A2947] hover:shadow-xl transition-all text-start"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={tpl.preview}
                  alt={tpl.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-black text-xl mb-1">{tpl.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{tpl.description}</p>
                <div className="flex gap-2">
                  {["primaryColor", "accentColor", "backgroundColor"].map((k) => (
                    <div
                      key={k}
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: tpl.theme[k] }}
                    />
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}