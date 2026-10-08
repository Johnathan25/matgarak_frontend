import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Store,
  Palette,
  ArrowLeft,
  Server,
  Zap,
  Globe2,
  SlidersHorizontal,
  ShoppingBag,
} from "lucide-react";

export default function About() {
  const roles = [
    {
      id: 1,
      title: "مدير النظام",
      subtitle: "إدارة البنية التحتية",
      description:
        "فريق الدعم الفني المسؤول عن أمان وسرعة الموقع، استقرار شغلك 24 ساعة، وحماية بيانات مبيعاتك وزباينك عشان تركز في تجارتك وبس.",
      icon: ShieldCheck,
      badge: "الإدارة العليا",
    },
    {
      id: 2,
      title: "التاجر المشترك",
      subtitle: "صاحب المتجر المستقل",
      description:
        "بيسجّل حسابه ويستلم متجره برابط واسم خاص بيه في دقايق. يقدر يختار ألوانه وتصميمه على ذوقه، ويدير بضاعته ومخزونه ومبيعاته كلها من لوحة تحكم سهلة وسريعة.",
      icon: Store,
      badge: "شريك النجاح",
    },
    {
      id: 3,
      title: "المشتري النهائي",
      subtitle: "المستهلك النهائي",
      description:
        "يدخل على متجرك بكل سهولة، يختار المنتجات اللي عجباه، يشتري ويدفع بالطريقة اللي تريحه، ويتابع خطوة بخطوة لحد ما الأوردر يوصله لحد باب البيت.",
      icon: ShoppingBag,
      badge: "العميل النهائي",
    },
  ];

  const pillars = [
    {
      title: "عزل تام للبيانات",
      desc: "متجر منفصل وخاص بيك لوحدك، برابط مخصص لنشاطك، وحماية كاملة لحساباتك ومعاملاتك من غير أي تداخل مع غيرك.",
      icon: Server,
    },
    {
      title: "تخصيص بصري",
      desc: "تحكم كامل في مظهر متجرك؛ نسّق الألوان والأزرار والأقسام بالطريقة اللي تعجب زباينك وبكل سهولة وبدون أي مجهود تقني.",
      icon: Palette,
    },
    {
      title: "سرعة وأداء فائق",
      desc: "سرعة عالية واستقرار مستمر؛ نظام قوي يستحمل آلاف الزوار والطلبات في نفس اللحظة بكفاءة عالية وبدون أي تهنيج.",
      icon: Zap,
    },
    {
      title: "تجارة رقمية",
      desc: "ربط سريع وجاهز مع كل وسائل الدفع وشركات الشحن، عشان تدير توصيل طلباتك واستلام أرباحك من مكان واحد ومن غير أي مجهود.",
      icon: Globe2,
    },
  ];

  return (
    <div dir="rtl" className="bg-white text-gray-800 font-sans min-h-screen">
      <style>{`
        @keyframes fadeInSoft {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-fade {
          animation: fadeInSoft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .delay-1 {
          animation-delay: 0.15s;
        }

        .delay-2 {
          animation-delay: 0.3s;
        }

        .delay-3 {
          animation-delay: 0.45s;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-b border-accent/40">
        <div className="absolute inset-0 bg-ligth/20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3368a00d_1px,transparent_1px),linear-gradient(to_bottom,#3368a00d_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="anim-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-accent/40 border border-accent text-dark text-xs font-bold mb-6 transition-transform hover:scale-105 duration-200">
            <span>رؤيتنا ورسالتنا</span>
          </div>

          <h1 className="anim-fade delay-1 text-3xl sm:text-5xl font-light text-gray-900 tracking-tight leading-snug sm:leading-tight mb-4">
            نساعد التجار على إنشاء
            <br />
            <span className="font-bold text-dark inline-block mt-1">
              متاجر مستقلة بهوية خاصة
            </span>
          </h1>

          <p className="anim-fade delay-2 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            مكان واحد بيسهّل عليك بداية تجارتك، بنقدملك متجر كامل وخاص بيك
            لوحدك، تقدر تظبط تصميمه على ذوقك وتدير منتجاتك وطلباتك بكل راحة
            واحترافية.
          </p>
        </div>
      </section>

      {/* Roles & Ecosystem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 anim-fade">
            <span className="text-xs font-bold text-brown uppercase tracking-wider block mb-2">
              منظومة العمل المتكاملة
            </span>

            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              <span className="font-bold text-dark">
                كيف تترابط أطراف المنصة؟
              </span>
            </h2>

            <p className="text-gray-500 text-sm max-w-xl mx-auto mt-2">
              بنية ثلاثية تضمن لكل مستخدم التجربة والأدوات المناسبة لمهامه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center max-w-6xl mx-auto py-8">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              const isCenter = idx === 1; // التاجر المشترك (الكارت الأوسط)

              return (
                <div
                  key={role.id || idx}
                  className={`group bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${isCenter
                    ? "z-20 border-2 border-dark shadow-2xl scale-105 my-2 md:my-0" // الكارت الأوسط: بارز ومحدد وبظلال وثابت
                    : "z-10 border border-accent/60 shadow-none scale-100 opacity-95 hover:opacity-100" // الكارتان الجانبيان: بدون ظلال
                    } ${
                    // إدخال الكارت الأول والأخير خلف الكارت الأوسط في الشاشات الكبيرة
                    idx === 0
                      ? "md:-mr-6 md:translate-x-2"
                      : idx === 2
                        ? "md:-ml-6 md:-translate-x-2"
                        : ""
                    }`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-colors duration-300 ${isCenter
                          ? "bg-dark border-dark"
                          : "bg-accent/40 border-accent group-hover:bg-dark group-hover:border-dark"
                          }`}
                      >
                        <Icon
                          className={`w-7 h-7 transition-all duration-300 scale-110 ${isCenter
                            ? "text-white"
                            : "text-dark group-hover:text-white"
                            }`}
                          strokeWidth={1.8}
                        />
                      </div>

                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border transition-colors duration-300 ${isCenter
                          ? "bg-dark text-white border-dark"
                          : "bg-light/40 text-dark border-accent group-hover:bg-dark/10"
                          }`}
                      >
                        {role.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-dark mb-1">
                      {role.title}
                    </h3>

                    <p className="text-xs font-semibold text-brown mb-4">
                      {role.subtitle}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {role.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-accent/40 flex items-center gap-2 text-xs text-gray-400">
                    <SlidersHorizontal
                      size={14}
                      className="text-brown group-hover:rotate-45 transition-transform duration-300"
                    />
                    <span>صلاحيات وتجربة مستقلة 100%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-ligth/20 border-y border-accent/40 select-none overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-brown uppercase tracking-wider block mb-2">
              القيمة والمميزات
            </span>

            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              ليه أصحاب المتاجر بيختاروا{" "}
              <span className="font-bold text-dark">منصتنا؟</span>
            </h2>
          </div>

          {/* Main Container */}
          <div className="relative">
            {/* Vertical Line */}
            <span
              aria-hidden="true"
              className="absolute top-4 bottom-4 w-0.5 bg-gray-300 right-4 md:right-1/2 md:translate-x-1/2 block pointer-events-none"
              style={{ zIndex: 1 }}
            />

            <div
              className="space-y-12 md:space-y-16 relative"
              style={{ zIndex: 2 }}
            >
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isRight = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`relative flex items-center md:justify-between ${isRight ? "md:flex-row-reverse" : "md:flex-row"
                      }`}
                  >
                    {/* Space for large screens */}
                    <div className="hidden md:block md:w-[44%]" />

                    {/* Center Point */}
                    <div className="absolute right-4 md:right-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-dark flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-125">
                      <span className="w-2.5 h-2.5 rounded-full bg-brown block transition-transform duration-300 group-hover/row:scale-110" />

                    </div>

                    {/* Content Card */}
                    <div className="w-full pr-12 md:pr-0 md:w-[44%]">
                      <div className="group p-6 sm:p-8 text-white   border-gray-100 rounded-2xl hover:border-brown/40 hover:-xl hover:-translate-y-1.5 transition-all duration-300 bg-brown">
                        <div className="flex items-center gap-3.5 mb-3">
                          <div className="w-12 h-12 bg-accent/40 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/70 group-hover:rotate-6 transition-all duration-300">
                            <Icon
                              className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110"
                              strokeWidth={1.8}
                            />
                          </div>
<br />
                        <h3 className="text-lg sm:text-xl font-bold  mb-2 transition-colors duration-200 ">
                            {pillar.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ligth/20 border-t border-accent/40 bg-dark">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 text-white">
            <span className="font-semibold text-white">
              جاهز للانضمام إلي
            </span>
            <span> </span>
            <span className="font-bold text-brown">
              مجمع التجار؟
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-200 mb-8 font-normal leading-relaxed">
            احصل على نسختك من المتجر المستقل وابدأ البيع لعملائك بتجربة مخصصة
            لك بالكامل.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="px-8 py-3.5 bg-brown text-white rounded-xl hover:bg-brown-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-semibold text-sm shadow-md flex items-center gap-2 group"
            >
              <span>ابدأ متجرك مجاناً</span>

              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1.5 transition-transform duration-200"
              />
            </Link>

            <Link
              to="/pricing"
              className="px-8 py-3.5 border border-white/30 text-dark bg-white rounded-xl hover:bg-white hover:-translate-y-0.5 transition-all duration-200 font-semibold text-sm"
            >
              استعرض الخطط والأسعار
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}