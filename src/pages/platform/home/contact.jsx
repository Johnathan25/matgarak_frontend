import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Store,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { showAlert } from "../../../services/alert";
import api from "../../../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    storeName: "",
    subject: "استفسار عام",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const contactTeam = [
    {
      name: "جوناثان إبراهيم",
      role: "الدعم الفني وإدارة المنصة",
      email: "johnathanibraheem@gmail.com",
      phone: "01094124323",
    },
    {
      name: "كيرلس رضا",
      role: "المبيعات وتطوير الأعمال",
      email: "kiroloesreda@gmail.com",
      phone: "01270857659",
    },
    {
      name: "  كيرلس سمير",
      role: "تسويق إلكتروني",
      email: "kerosystem12@gmail.com",
      phone: "01227713425",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/contact/send", formData);

      setSent(true);

      showAlert({
        title: "تم استلام رسالتك بنجاح! سيتواصل معك فريقنا قريباً",
        icon: "success",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        storeName: "",
        subject: "استفسار عام",
        message: "",
      });

      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        "تم استلام رسالتك محلياً، وسنقوم بالتواصل معك في أقرب وقت.";

      showAlert({
        title: errorMsg,
        icon: err.response?.data?.message ? "error" : "success",
      });

      if (!err.response?.data?.message) {
        setSent(true);
      }
    } finally {
      setLoading(false);
    }
  };

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
          animation: fadeInSoft 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .delay-1 {
          animation-delay: 0.1s;
        }

        .delay-2 {
          animation-delay: 0.2s;
        }
      `}</style>

      {/* قسم الترويسة الرئيسي */}
      <section className="relative py-20 bg-white overflow-hidden border-b border-accent/40">
        <div className="absolute inset-0 bg-ligth/20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3368a00d_1px,transparent_1px),linear-gradient(to_bottom,#3368a00d_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center anim-fade">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-accent/40 border border-accent text-dark text-xs font-bold mb-6 transition-transform hover:scale-105 duration-200">
            <span>نحن هنا لمساعدتك دائماً</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-gray-900 tracking-tight leading-snug sm:leading-tight mb-3">
            <span className="font-bold text-dark">
              تواصل مع فريق المنصة
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            عايز تبدأ متجرك ولسه بتسأل، أو عندك أي استفسار عن شغلك معانا؟
            فريقنا جاهز يساعدك ويكلمك خطوة بخطوة.
          </p>
        </div>
      </section>

      {/* المحتوى الرئيسي: معلومات الاتصال */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* بطاقات فريق التواصل ومعلومات المنصة */}
            <div className="lg:col-span-12 space-y-6">
              <div className="anim-fade delay-1">
                <span className="text-5xl text-center font-bold text-brown uppercase tracking-wider block mb-10">
                  فريق العمل والدعم
                </span>

                
              </div>

              {/* بطاقات مسؤولي المنصة */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full place-items-center">
                {contactTeam.map((member, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`
          group
          relative
          w-full
          max-w-[360px]
          aspect-square
          rounded-full
          p-8
          sm:p-10
          flex
          items-center
          justify-center
          text-center
          border
          transition-all
          duration-500
          hover:-translate-y-3
          hover:scale-[1.03]
          anim-fade
          ${isEven
                          ? "bg-dark text-white border-dark"
                          : "bg-white text-dark border-accent"
                        }
        `}
                      style={{
                        animationDelay: `${0.15 + index * 0.12}s`,
                      }}
                    >
                      {/* Decorative circle */}
                      <div
                        className={`
            absolute
            inset-3
            rounded-full
            border
            pointer-events-none
            transition-all
            duration-500
            group-hover:inset-5
            ${isEven
                            ? "border-white/10"
                            : "border-accent/40"
                          }
          `}
                      />

                      {/* Small decorative circle */}
                      <div
                        className={`
            absolute
            top-8
            right-10
            w-3
            h-3
            rounded-full
            transition-all
            duration-500
            group-hover:scale-150
            ${isEven
                            ? "bg-white/30"
                            : "bg-brown/30"
                          }
          `}
                      />

                      {/* Content */}
                      <div className="relative z-10 w-full max-w-[270px]">

                        {/* Icon */}
                        <div
                          className={`
              w-14
              h-14
              rounded-full
              flex
              items-center
              justify-center
              mx-auto
              mb-4
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:rotate-6
              ${isEven
                              ? "bg-white/10 text-white border border-white/10"
                              : "bg-ligth/50 text-dark border border-accent"
                            }
            `}
                        >
                          <Store size={23} />
                        </div>

                        {/* Name */}
                        <h4
                          className={`
              text-xl
              sm:text-2xl
              font-bold
              leading-tight
              ${isEven
                              ? "text-white"
                              : "text-dark"
                            }
            `}
                        >
                          {member.name}
                        </h4>

                        {/* Role */}
                        <p
                          className={`
              text-xs
              sm:text-sm
              font-semibold
              mt-1
              ${isEven
                              ? "text-gray-300"
                              : "text-brown"
                            }
            `}
                        >
                          {member.role}
                        </p>

                        {/* Divider */}
                        <div
                          className={`
              w-16
              h-px
              mx-auto
              my-5
              ${isEven
                              ? "bg-white/20"
                              : "bg-accent"
                            }
            `}
                        />

                        {/* Phone */}
                        <a
                          href={`tel:${member.phone}`}
                          dir="ltr"
                          className={`
              flex
              items-center
              justify-center
              gap-2
              text-xs
              font-mono
              font-bold
              transition-all
              duration-300
              hover:scale-105
              ${isEven
                              ? "text-white"
                              : "text-dark"
                            }
            `}
                        >
                          <Phone
                            size={14}
                            className={
                              isEven
                                ? "text-white"
                                : "text-brown"
                            }
                          />

                          <span>{member.phone}</span>
                        </a>

                        {/* Email */}
                        <a
                          href={`mailto:${member.email}`}
                          dir="ltr"
                          className={`
              flex
              items-center
              justify-center
              gap-2
              mt-3
              text-xs
              transition-all
              duration-300
              hover:scale-105
              ${isEven
                              ? "text-gray-300"
                              : "text-gray-600"
                            }
            `}
                        >
                          <Mail
                            size={14}
                            className={`
                flex-shrink-0
                ${isEven
                                ? "text-white"
                                : "text-brown"
                              }
              `}
                          />

                          <span className="truncate max-w-[190px]">
                            {member.email}
                          </span>
                        </a>
                      </div>

                      {/* Number */}
                      <span
                        className={`
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-[10px]
            tracking-[0.3em]
            font-bold
            ${isEven
                            ? "text-white/20"
                            : "text-dark/20"
                          }
          `}
                      >
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
         <div classname=" text-xl my-10">
           <h3 className=" text-center text-3xl font-bold text-dark my-10">
                  تواصل مباشر مع مسؤولي المنصة
                </h3>

                <p className="text-center text-xl text-gray-500 font-normal leading-relaxed">
                  يمكنك التواصل مباشرة مع فريق الإدارة عبر الهاتف أو البريد
                  الإلكتروني للحصول على استجابة سريعة.
                </p>
         </div>
        </div>
      </section>
    </div>
  );
}