// website-builder/builder/WebsiteBuilder.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Save, Loader2, Palette, Layers, RefreshCw } from "lucide-react";
import api from "../../services/api";
import { showAlert } from "../../services/alert";

import {
  buildSettingsFromTemplate,
  getTemplate,
} from "../templates/templateRegistry";
import StoreRenderer from "../renderer/StoreRenderer";
import TemplateSelector from "./TemplateSelector";
import SectionList from "./SectionList";
import SectionEditor from "./SectionEditor";
import ThemeEditor from "./ThemeEditor";

export default function WebsiteBuilder() {
  const { slug } = useParams();

  const [settings, setSettings] = useState(null);
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("sections");

  // ✅ للتحكم في عرض الـ TemplateSelector يدوياً
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  // ============================================================
  // تحميل البيانات من الباك
  // ============================================================
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/websiteSettings/${slug}`);
        setSettings(res.data?.data || null);
      } catch (err) {
        console.error("fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetch();
  }, [slug]);

  // ============================================================
  // اختيار Template
  // ============================================================
  const handleSelectTemplate = async (templateID) => {
    try {
      setSaving(true);

      // ✅ validate الأول
      const template = getTemplate(templateID);
      if (!template) {
        showAlert({
          title: `❌ القالب رقم ${templateID} غير موجود في الكود`,
          icon: "error",
        });
        return;
      }

      const newSettings = buildSettingsFromTemplate(templateID);

      // ✅ ابعت للباك
      try {
        await api.put(`/websiteSettings/${slug}`, {
          templateID: newSettings.templateID,
          website: newSettings.website,
          theme: newSettings.theme,
          pages: newSettings.pages,
          status: "draft",
        });
      } catch (e) {
        console.warn("Backend not available, using local state only", e);
      }

      setSettings(newSettings);
      setSelectedSectionId(null);
      setShowTemplateSelector(false);
      showAlert({ title: "✅ تم اختيار القالب", icon: "success" });
    } catch (err) {
      console.error(err);
      showAlert({ title: "❌ فشل حفظ القالب", icon: "error" });
    } finally {
      setSaving(false);
    }
  };

  // ============================================================
  // Update Home Page
  // ============================================================
  const updateHomePage = (updater) => {
    setSettings((prev) => ({
      ...prev,
      pages: prev.pages.map((p, i) => (i === 0 ? updater(p) : p)),
    }));
  };

  const updateSection = (updatedSection) => {
    updateHomePage((p) => ({
      ...p,
      sections: p.sections.map((s) =>
        s.id === updatedSection.id ? updatedSection : s
      ),
    }));
  };

  const toggleVisible = (id) => {
    updateHomePage((p) => ({
      ...p,
      sections: p.sections.map((s) =>
        s.id === id ? { ...s, visible: s.visible === false } : s
      ),
    }));
  };

  const updateTheme = (newTheme) => {
    setSettings((prev) => ({ ...prev, theme: newTheme }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      await api.put(`/websiteSettings/${slug}`, {
        templateID: settings.templateID,
        website: settings.website,
        theme: settings.theme,
        pages: settings.pages,
        status: settings.status || "draft",
      });
      showAlert({ title: "✅ تم الحفظ بنجاح", icon: "success" });
    } catch (err) {
      showAlert({ title: "❌ فشل الحفظ", icon: "error" });
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  // ============================================================
  // Loading
  // ============================================================
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  // ============================================================
  // ✅ شروط عرض TemplateSelector:
  // 1) المستخدم ضغط "تغيير القالب"
  // 2) مفيش templateID
  // 3) مفيش pages
  // 4) templateID مش موجود في الكود
  // ============================================================
  const templateExists = settings?.templateID && getTemplate(settings.templateID);

  const needsTemplate =
    showTemplateSelector ||
    !settings?.templateID ||
    !settings?.pages?.length ||
    !templateExists;

  if (needsTemplate) {
    return (
      <>
        <TemplateSelector
          onSelect={handleSelectTemplate}
          onCancel={
            // لو عنده template صالح من قبل → يقدر يلغي
            settings?.templateID && templateExists
              ? () => setShowTemplateSelector(false)
              : undefined
          }
        />

        {/* Overlay أثناء الحفظ */}
        {saving && (
          <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center">
            <Loader2 className="animate-spin text-white" size={40} />
          </div>
        )}

        {/* لو القالب الحالي مش موجود */}
        {settings?.templateID && !templateExists && !showTemplateSelector && (
          <div className="fixed top-4 right-4 z-[110] bg-red-50 border-2 border-red-200 rounded-xl p-4 max-w-sm shadow-lg">
            <div className="text-sm font-bold text-red-700 mb-1">
              ⚠️ القالب رقم {settings.templateID} غير موجود
            </div>
            <div className="text-xs text-red-600">
              اختر قالب جديد من القائمة أعلاه
            </div>
          </div>
        )}
      </>
    );
  }

  // ============================================================
  // Builder UI
  // ============================================================
  const homePage = settings.pages[0];
  const sortedSections = [...homePage.sections].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );
  const selectedSection = sortedSections.find(
    (s) => s.id === selectedSectionId
  );

  return (
    <div className="h-screen flex flex-col bg-gray-100" dir="rtl">
      {/* ===== Header ===== */}
      <header className="h-16 bg-white border-b flex items-center justify-between px-5 shrink-0">
        <div className="flex items-center gap-3">
          <h1 className="font-black text-lg">محرر المتجر</h1>
          <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
            {slug}
          </span>
          <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded">
            قالب #{settings.templateID}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* ✅ زر تغيير القالب — دايماً ظاهر */}
          <button
            onClick={() => setShowTemplateSelector(true)}
            className="text-xs font-bold px-3 py-2 rounded-lg border-2 border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white transition flex items-center gap-1.5"
          >
            <RefreshCw size={12} />
            تغيير القالب
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="text-xs font-bold px-4 py-2 rounded-lg bg-[#0A2947] text-white hover:bg-[#1e4064] flex items-center gap-2 disabled:opacity-50"
          >
            {saving ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Save size={14} />
            )}
            حفظ
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* ===== Sidebar Left ===== */}
        <aside className="w-72 bg-white border-l overflow-y-auto p-3 shrink-0">
          <div className="flex gap-1 mb-3 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("sections")}
              className={`flex-1 py-2 rounded text-xs font-bold flex items-center justify-center gap-1 ${
                activeTab === "sections"
                  ? "bg-white shadow text-[#0A2947]"
                  : "text-gray-500"
              }`}
            >
              <Layers size={12} />
              التصميم
            </button>
            <button
              onClick={() => setActiveTab("theme")}
              className={`flex-1 py-2 rounded text-xs font-bold flex items-center justify-center gap-1 ${
                activeTab === "theme"
                  ? "bg-white shadow text-[#0A2947]"
                  : "text-gray-500"
              }`}
            >
              <Palette size={12} />
              الألوان
            </button>
          </div>

          {activeTab === "sections" && (
            <SectionList
              sections={sortedSections}
              selectedId={selectedSectionId}
              onSelect={setSelectedSectionId}
              onToggleVisible={toggleVisible}
            />
          )}

          {activeTab === "theme" && (
            <ThemeEditor theme={settings.theme} onChange={updateTheme} />
          )}
        </aside>

        {/* ===== Preview ===== */}
        <main className="flex-1 overflow-y-auto bg-gray-200 p-4">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden mx-auto max-w-[1280px]">
            <StoreRenderer
              settings={settings}
              isBuilder={true}
              selectedSectionId={selectedSectionId}
              onSelectSection={setSelectedSectionId}
            />
          </div>
        </main>

        {/* ===== Sidebar Right ===== */}
        <aside className="w-80 bg-white border-r overflow-y-auto p-4 shrink-0">
          <h3 className="font-black text-sm mb-3">
            {selectedSection ? "تعديل القسم" : "اختر قسم"}
          </h3>
          <SectionEditor section={selectedSection} onUpdate={updateSection} />
        </aside>
      </div>
    </div>
  );
}