// website-builder/renderer/StoreRenderer.jsx
import { getTemplate } from "../templates/templateRegistry";

export default function StoreRenderer({
  settings,
  isBuilder = false,
  selectedSectionId,
  onSelectSection,
}) {
  // ✅ اختار الـ Template
  const template = getTemplate(settings?.templateID);

  if (!template) {
    return (
      <div className="p-12 text-center text-gray-400" dir="rtl">
        ⚠️ القالب رقم {settings?.templateID} غير موجود
      </div>
    );
  }

  const page = settings?.pages?.[0];
  if (!page) {
    return (
      <div className="p-12 text-center text-gray-400" dir="rtl">
        لا توجد صفحات
      </div>
    );
  }

  const sections = [...(page.sections || [])]
    .filter((s) => s.visible !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div
      style={{
        fontFamily: settings.theme?.fontFamily || template.theme.fontFamily,
        backgroundColor: settings.theme?.backgroundColor || template.theme.backgroundColor,
        color: settings.theme?.textPrimaryColor || template.theme.textPrimaryColor,
      }}
    >
      {sections.map((section) => {
        // ✅ اختار الـ component من الـ Template
        const Component = template.components[section.type];
        if (!Component) {
          console.warn(`⚠️ Section "${section.type}" not found in template #${template.id}`);
          return null;
        }

        const isSelected = isBuilder && selectedSectionId === section.id;

        return (
          <div
            key={section.id}
            onClick={(e) => {
              if (isBuilder) {
                e.stopPropagation();
                onSelectSection?.(section.id);
              }
            }}
            className={`relative transition-all ${
              isBuilder
                ? `cursor-pointer hover:ring-2 hover:ring-blue-400 ${
                    isSelected ? "ring-4 ring-blue-600 z-10" : ""
                  }`
                : ""
            }`}
          >
            {/* ✅ شارة النوع في وضع البناء */}
            {isBuilder && (
              <div
                className={`absolute top-2 right-2 z-20 text-[10px] font-bold px-2 py-1 rounded shadow ${
                  isSelected ? "bg-blue-600 text-white" : "bg-black/70 text-white"
                }`}
              >
                {section.type}
              </div>
            )}

            <Component
              section={section}
              theme={settings.theme || template.theme}
              isBuilder={isBuilder}
            />
          </div>
        );
      })}
    </div>
  );
}