// website-builder/builder/ThemeEditor.jsx
export default function ThemeEditor({ theme = {}, onChange }) {
  const update = (key, value) => onChange({ ...theme, [key]: value });

  const colorFields = [
    { key: "primaryColor", label: "اللون الأساسي" },
    { key: "secondaryColor", label: "اللون الثانوي" },
    { key: "accentColor", label: "لون التمييز" },
    { key: "backgroundColor", label: "الخلفية" },
    { key: "surfaceColor", label: "خلفية البطاقات" },
    { key: "textPrimaryColor", label: "النص الأساسي" },
    { key: "textSecondaryColor", label: "النص الثانوي" },
  ];

  return (
    <div className="space-y-3">
      {colorFields.map(({ key, label }) => (
        <div key={key}>
          <label className="block text-[11px] font-bold mb-1 text-gray-700">{label}</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={theme[key] || "#000000"}
              onChange={(e) => update(key, e.target.value)}
              className="w-10 h-10 rounded-lg cursor-pointer border border-gray-200 p-0.5"
            />
            <input
              value={theme[key] || ""}
              onChange={(e) => update(key, e.target.value)}
              className="input flex-1 font-mono text-xs"
              dir="ltr"
            />
          </div>
        </div>
      ))}

      <div className="pt-3 border-t">
        <label className="block text-[11px] font-bold mb-1 text-gray-700">الخط</label>
        <select
          value={theme.fontFamily || ""}
          onChange={(e) => update("fontFamily", e.target.value)}
          className="input"
        >
          <option value="'Cairo', Arial, sans-serif">Cairo</option>
          <option value="'Tajawal', Arial, sans-serif">Tajawal</option>
          <option value="'El Messiri', serif">El Messiri</option>
          <option value="'Amiri', serif">Amiri</option>
          <option value="system-ui, sans-serif">System</option>
        </select>
      </div>
    </div>
  );
}