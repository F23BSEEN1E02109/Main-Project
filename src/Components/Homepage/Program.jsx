import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../i18n.js";

const Program = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToDesign && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const programs = [
    {
      id: "01",
      number: "01",
      badge: t("most_popular"),
      title: t("shopping_program"),
      subtitle: t("shopping_program_subtitle"),
      themeColor: "amber",
      accentBg: "bg-amber-500",
      btnBg: "bg-amber-500 hover:bg-amber-600 text-white",
      hoverBorder: "hover:border-amber-400/80",
      iconBg:
        "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
      imgUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      points: [
        t("exclusive_discounts"),
        t("cashback_rewards"),
        t("partner_shops"),
        t("flexible_plan_terms"),
      ],
      category: "shop",
    },
    {
      id: "02",
      number: "02",
      badge: null,
      title: t("car_program"),
      subtitle: t("car_program_subtitle"),
      themeColor: "blue",
      accentBg: "bg-blue-600",
      btnBg: "bg-[#0b438c] hover:bg-blue-900 text-white",
      hoverBorder: "hover:border-blue-400/80",
      iconBg:
        "bg-blue-100 text-blue-600 group-hover:bg-[#0b438c] group-hover:text-white",
      imgUrl:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      points: [
        t("easy_monthly_plans"),
        t("car_options"),
        t("transparent_process"),
        t("ownership_with_confidence"),
        t("comprehensive_support"),
      ],
      category: "car",
    },
    {
      id: "03",
      number: "03",
      badge: null,
      title: t("motorcycle_program"),
      subtitle: t("motorcycle_program_subtitle"),
      themeColor: "emerald",
      accentBg: "bg-emerald-600",
      btnBg: "bg-[#046338] hover:bg-emerald-900 text-white",
      hoverBorder: "hover:border-emerald-400/80",
      iconBg:
        "bg-emerald-100 text-emerald-600 group-hover:bg-[#046338] group-hover:text-white",
      imgUrl:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M15 6h2l3 7h-5l-2-4H9l-3 4H2" />
          <path d="M12 9l-2 5" />
        </svg>
      ),
      points: [
        t("affordable_installments"),
        t("popular_brands"),
        t("quick_easy_process"),
        t("personal_family_use"),
        t("safety_maintenance_support"),
      ],
      category: "bike",
    },
    {
      id: "04",
      number: "04",
      badge: null,
      title: t("savings_programs"),
      subtitle: t("savings_programs_subtitle"),
      themeColor: "purple",
      accentBg: "bg-purple-900",
      btnBg: "bg-[#4a154b] hover:bg-purple-950 text-white",
      hoverBorder: "hover:border-purple-400/80",
      iconBg:
        "bg-purple-100 text-purple-700 group-hover:bg-[#4a154b] group-hover:text-white",
      imgUrl:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      points: [
        t("tailored_savings"),
        t("flexible_contributions"),
        t("secure_transparent_process"),
        t("exclusive_opportunities"),
        t("dedicated_support"),
      ],
      category: "other",
    },
  ];

  const filteredPrograms =
    activeTab === "all"
      ? programs
      : programs.filter((p) => p.category === activeTab);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#fcfcfd] py-16 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 text-amber-700 border border-amber-200/50 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            {t("our_programs")}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t("programs_for")}{" "}
            <span className="text-amber-500">
              {t("participation_savings")}
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            {t("programs_description")}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center bg-slate-100/80 p-1.5 rounded-2xl border border-gray-200/60 gap-1 sm:gap-2">

            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-gray-600 hover:text-slate-900"
              }`}
            >
              {t("all_programs")}
            </button>

            <button
              onClick={() => setActiveTab("shop")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "shop"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-gray-600 hover:text-slate-900"
              }`}
            >
              {t("shop_savings")}
            </button>

            <button
              onClick={() => setActiveTab("car")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "car"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-gray-600 hover:text-slate-900"
              }`}
            >
              {t("car_program")}
            </button>

            <button
              onClick={() => setActiveTab("bike")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "bike"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-gray-600 hover:text-slate-900"
              }`}
            >
              {t("motorcycle_scooter")}
            </button>

            <button
              onClick={() => setActiveTab("other")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "other"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-gray-600 hover:text-slate-900"
              }`}
            >
              {t("other_programs")}
            </button>

          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl justify-center">
            {filteredPrograms.map((item) => (
              <div
                key={item.id}
                className={`group bg-white rounded-3xl border border-gray-100/80 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between w-full max-w-sm mx-auto ${item.hoverBorder}`}
              >
                <div>
                  <div className="relative h-48 w-full rounded-t-3xl overflow-hidden">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div
                      className={`absolute top-4 left-4 ${item.accentBg} text-white font-extrabold text-xs px-2.5 py-1 rounded-full shadow-md z-10`}
                    >
                      {item.number}
                    </div>

                    {item.badge && (
                      <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-md text-white font-bold text-[10px] px-3 py-1 rounded-full flex items-center gap-1 shadow-md uppercase tracking-wider z-10">
                        <span>★</span> {item.badge}
                      </div>
                    )}
                  </div>

                  <div className="relative z-20 -mt-6 flex justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300 group-hover:scale-110 ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <div className="pt-3 px-6 pb-6 text-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed mb-6 font-medium">
                      {item.subtitle}
                    </p>

                    <ul className="text-left space-y-2.5 text-xs text-slate-700 font-semibold mb-6">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5"
                        >
                          <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 border border-gray-200">
                            ✓
                          </span>

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => navigate("/our-programs")}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer ${item.btnBg}`}
                  >
                    <span>
                      {item.id === "01" && t("view_shopping_program")}
                      {item.id === "02" && t("view_car_program")}
                      {item.id === "03" && t("view_motorcycle_program")}
                      {item.id === "04" && t("explore_savings_programs")}
                    </span>

                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Program;