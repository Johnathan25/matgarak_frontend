// website-builder/builder/SectionList.jsx
import {
  Eye,
  EyeOff,
  Navigation,
  Image as ImageIcon,
  ShoppingBag,
  Settings,
  Star,
  Megaphone,
  LayoutPanelTop,
  Package,
} from "lucide-react";

const SECTION_LABELS = {
  navbar: "شريط التنقل",
  hero: "البانر الرئيسي",
  products: "المنتجات",
  services: "الخدمات",
  reviews: "التقييمات",
  cta: "دعوة للعمل",
  footer: "التذييل",
};

// ✅ مكونات Lucide بدل الإيموجي
const SECTION_ICONS = {
  navbar: Navigation,
  hero: ImageIcon,
  products: ShoppingBag,
  services: Settings,
  reviews: Star,
  cta: Megaphone,
  footer: LayoutPanelTop,
};

export default function SectionList({
  sections,
  selectedId,
  onSelect,
  onToggleVisible,
}) {
  return (
    <div className="space-y-2">
      {sections.map((sec, idx) => {
        const isSelected = selectedId === sec.id;
        const isHidden = sec.visible === false;
        const label = SECTION_LABELS[sec.type] || sec.type;
        const Icon = SECTION_ICONS[sec.type] || Package;

        return (
          <div
            key={sec.id}
            onClick={() => onSelect(sec.id)}
            className={`
              p-3 rounded-xl border-2 cursor-pointer transition-all
              ${
                isSelected
                  ? "border-[#0A2947] bg-blue-50"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }
              ${isHidden ? "opacity-50" : ""}
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* ✅ Icon بالمكون */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-[#0A2947] text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon size={14} strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold">{label}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleVisible(sec.id);
                }}
                className="p-1 rounded hover:bg-white"
                title={isHidden ? "إظهار" : "إخفاء"}
              >
                {isHidden ? <EyeOff size={12} /> : <Eye size={12} />}
              </button>
            </div>
            <div className="text-[10px] text-gray-400 mt-1">#{idx + 1}</div>
          </div>
        );
      })}
    </div>
  );
}