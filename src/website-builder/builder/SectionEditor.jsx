// website-builder/builder/SectionEditor.jsx
export default function SectionEditor({ section, onUpdate }) {
  if (!section) {
    return (
      <div className="p-6 text-center text-gray-400 text-sm">
        اختر قسم من القائمة لتعديله
      </div>
    );
  }

  const c = section.content || {};
  const updateContent = (key, value) => {
    onUpdate({ ...section, content: { ...c, [key]: value } });
  };

  // HERO
  if (section.type === "hero") {
    return (
      <div className="space-y-3">
        <Field label="Badge">
          <input value={c.badge || ""} onChange={(e) => updateContent("badge", e.target.value)} className="input" />
        </Field>
        <Field label="العنوان">
          <input value={c.title || ""} onChange={(e) => updateContent("title", e.target.value)} className="input" />
        </Field>
        <Field label="الوصف">
          <textarea value={c.subtitle || ""} onChange={(e) => updateContent("subtitle", e.target.value)} rows={3} className="input" />
        </Field>
        <Field label="نص الزر">
          <input value={c.buttonText || ""} onChange={(e) => updateContent("buttonText", e.target.value)} className="input" />
        </Field>
        <Field label="رابط الزر">
          <input value={c.buttonLink || ""} onChange={(e) => updateContent("buttonLink", e.target.value)} className="input" dir="ltr" />
        </Field>
        <Field label="رابط الصورة">
          <input
            value={c.backgroundImage?.url || c.image?.url || ""}
            onChange={(e) => {
              updateContent("backgroundImage", { url: e.target.value, publicId: "" });
              updateContent("image", { url: e.target.value, publicId: "" });
            }}
            className="input"
            dir="ltr"
          />
        </Field>
      </div>
    );
  }

  // NAVBAR
  if (section.type === "navbar") {
    return (
      <div className="space-y-3">
        <Field label="اسم المتجر">
          <input value={c.title || ""} onChange={(e) => updateContent("title", e.target.value)} className="input" />
        </Field>
        <Field label="رابط اللوجو">
          <input
            value={c.logo?.url || ""}
            onChange={(e) => updateContent("logo", { url: e.target.value, publicId: "" })}
            className="input"
            dir="ltr"
          />
        </Field>
        <Field label="الروابط">
          <LinksEditor links={c.links || []} onChange={(links) => updateContent("links", links)} />
        </Field>
      </div>
    );
  }

  // PRODUCTS
  if (section.type === "products") {
    return (
      <div className="space-y-3">
        <Field label="العنوان">
          <input value={c.title || ""} onChange={(e) => updateContent("title", e.target.value)} className="input" />
        </Field>
        <Field label="الوصف">
          <input value={c.subtitle || ""} onChange={(e) => updateContent("subtitle", e.target.value)} className="input" />
        </Field>
        <Field label={`المنتجات (${(c.items || []).length})`}>
          <ItemsEditor
            items={c.items || []}
            onChange={(items) => updateContent("items", items)}
            fields={[
              { key: "name", label: "الاسم", type: "text" },
              { key: "price", label: "السعر", type: "number" },
              { key: "badge", label: "الشارة", type: "text" },
              { key: "image", label: "الصورة", type: "image" },
            ]}
            newItemTemplate={{
              name: "منتج جديد",
              price: 100,
              currency: "ج.م",
              image: { url: "", publicId: "" },
            }}
          />
        </Field>
      </div>
    );
  }

  // SERVICES
  if (section.type === "services") {
    return (
      <div className="space-y-3">
        <Field label="العنوان">
          <input value={c.title || ""} onChange={(e) => updateContent("title", e.target.value)} className="input" />
        </Field>
        <Field label="الوصف">
          <input value={c.subtitle || ""} onChange={(e) => updateContent("subtitle", e.target.value)} className="input" />
        </Field>
        <Field label={`الخدمات (${(c.items || []).length})`}>
          <ItemsEditor
            items={c.items || []}
            onChange={(items) => updateContent("items", items)}
            fields={[
              { key: "icon", label: "الأيقونة", type: "text" },
              { key: "title", label: "العنوان", type: "text" },
              { key: "description", label: "الوصف", type: "textarea" },
            ]}
            newItemTemplate={{ icon: "✨", title: "خدمة جديدة", description: "الوصف" }}
          />
        </Field>
      </div>
    );
  }

  // REVIEWS
  if (section.type === "reviews") {
    return (
      <div className="space-y-3">
        <Field label="العنوان">
          <input value={c.title || ""} onChange={(e) => updateContent("title", e.target.value)} className="input" />
        </Field>
        <Field label={`التقييمات (${(c.items || []).length})`}>
          <ItemsEditor
            items={c.items || []}
            onChange={(items) => updateContent("items", items)}
            fields={[
              { key: "name", label: "الاسم", type: "text" },
              { key: "role", label: "الدور", type: "text" },
              { key: "text", label: "النص", type: "textarea" },
              { key: "rating", label: "التقييم (1-5)", type: "number", min: 1, max: 5 },
            ]}
            newItemTemplate={{ name: "عميل", role: "عميل", text: "تجربة رائعة", rating: 5 }}
          />
        </Field>
      </div>
    );
  }

  // CTA
  if (section.type === "cta") {
    return (
      <div className="space-y-3">
        <Field label="العنوان">
          <input value={c.title || ""} onChange={(e) => updateContent("title", e.target.value)} className="input" />
        </Field>
        <Field label="الوصف">
          <textarea value={c.subtitle || ""} onChange={(e) => updateContent("subtitle", e.target.value)} rows={2} className="input" />
        </Field>
        <Field label="نص الزر">
          <input value={c.buttonText || ""} onChange={(e) => updateContent("buttonText", e.target.value)} className="input" />
        </Field>
      </div>
    );
  }

  // FOOTER
  if (section.type === "footer") {
    return (
      <div className="space-y-3">
        <Field label="اسم المتجر">
          <input value={c.title || ""} onChange={(e) => updateContent("title", e.target.value)} className="input" />
        </Field>
        <Field label="الوصف">
          <textarea value={c.description || ""} onChange={(e) => updateContent("description", e.target.value)} rows={2} className="input" />
        </Field>
        <Field label="حقوق النشر">
          <input value={c.copyright || ""} onChange={(e) => updateContent("copyright", e.target.value)} className="input" />
        </Field>
      </div>
    );
  }

  return <p className="text-xs text-gray-400">لا يوجد محرر لهذا القسم</p>;
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-bold mb-1 text-gray-700">{label}</label>
      {children}
    </div>
  );
}

function LinksEditor({ links, onChange }) {
  const update = (i, key, val) => {
    const next = [...links];
    next[i] = { ...next[i], [key]: val };
    onChange(next);
  };
  const add = () => onChange([...links, { label: "رابط", href: "/" }]);
  const remove = (i) => onChange(links.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-1">
      {links.map((l, i) => (
        <div key={i} className="flex gap-1">
          <input value={l.label} onChange={(e) => update(i, "label", e.target.value)} className="input flex-1" />
          <input value={l.href} onChange={(e) => update(i, "href", e.target.value)} className="input flex-1" dir="ltr" />
          <button onClick={() => remove(i)} className="px-2 text-red-500">×</button>
        </div>
      ))}
      <button onClick={add} className="text-xs font-bold text-blue-600">+ إضافة</button>
    </div>
  );
}

function ItemsEditor({ items, onChange, fields, newItemTemplate }) {
  const update = (i, key, value) => {
    const next = [...items];
    next[i] = { ...next[i], [key]: value };
    onChange(next);
  };

  const updateImage = (i, key, url) => {
    const next = [...items];
    next[i] = { ...next[i], [key]: { url, publicId: "" } };
    onChange(next);
  };

  const add = () => {
    onChange([...items, { id: `item_${Date.now()}`, ...newItemTemplate }]);
  };

  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={item.id || i} className="border rounded-lg p-2 bg-gray-50 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-500">#{i + 1}</span>
            <button onClick={() => remove(i)} className="text-[10px] text-red-500">حذف</button>
          </div>
          {fields.map((f) => {
            if (f.type === "image") {
              return (
                <div key={f.key}>
                  <label className="block text-[10px] text-gray-500">{f.label}</label>
                  <input
                    value={item[f.key]?.url || ""}
                    onChange={(e) => updateImage(i, f.key, e.target.value)}
                    className="input text-xs"
                    dir="ltr"
                  />
                </div>
              );
            }
            if (f.type === "textarea") {
              return (
                <div key={f.key}>
                  <label className="block text-[10px] text-gray-500">{f.label}</label>
                  <textarea
                    value={item[f.key] || ""}
                    onChange={(e) => update(i, f.key, e.target.value)}
                    rows={2}
                    className="input text-xs"
                  />
                </div>
              );
            }
            return (
              <div key={f.key}>
                <label className="block text-[10px] text-gray-500">{f.label}</label>
                <input
                  type={f.type === "number" ? "number" : "text"}
                  value={item[f.key] ?? ""}
                  onChange={(e) => update(i, f.key, f.type === "number" ? Number(e.target.value) : e.target.value)}
                  className="input text-xs"
                />
              </div>
            );
          })}
        </div>
      ))}
      <button
        onClick={add}
        className="w-full py-2 rounded-lg border-2 border-dashed border-gray-300 text-xs font-bold text-gray-500 hover:border-[#0A2947]"
      >
        + إضافة
      </button>
    </div>
  );
}