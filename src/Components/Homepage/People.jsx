import React from "react";

// Correct path to src/assets from src/Components/Homepage/
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.jpg";

const People = () => {
  const teamMembers = [
    {
      id: "01",
      nameEn: "Muhammad Afzal",
      nameUr: "محمد افضل",
      roleEn: "Chief Executive Officer (CEO)",
      roleUr: "چیف ایگزیکٹو آفیسر",
      image: a1,
      isCrown: false,
    },
    {
      id: "02",
      nameEn: "Hafiz Gulzar Ahmed Khalid",
      nameUr: "حافظ گلزار احمد خالد",
      roleEn: "Chief Operating Officer (COO)",
      roleUr: "چیف آپریٹنگ آفیسر",
      image: a2,
      isCrown: true, // COO Card uses Crown Icon
    },
    {
      id: "03",
      nameEn: "Haji Amanat Ali",
      nameUr: "حاجی امانت علی",
      roleEn: "Chairman",
      roleUr: "چیئرمین",
      image: a3,
      isCrown: false,
    },
    {
      id: "04",
      nameEn: "Sajjad Ahmed",
      nameUr: "سجاد احمد",
      roleEn: "Chief Financial Officer (CFO)",
      roleUr: "چیف فنانشل آفیسر",
      image: a4,
      isCrown: false,
    },
  ];

  return (
    <section className="min-h-screen bg-[#fcfdfe] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Tag Header */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 text-amber-800 border border-amber-200/50 text-xs font-bold uppercase tracking-wider">
            <span className="text-amber-600 text-sm">✨</span>
            MANAGEMENT TEAM
          </div>
        </div>

        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Meet the people behind <span className="text-[#d97706]">YES TIME GLOBAL.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Guided by experience, accountability, and a shared commitment to connecting opportunities worldwide.
          </p>
        </div>

        {/* 4 Cards Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-400 hover:ring-2 hover:ring-amber-400/20 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.nameEn}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* ID Tag Number Badge */}
                  <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-md border border-amber-500/40 text-amber-400 font-extrabold text-[11px] flex items-center justify-center shadow-md">
                    {member.id}
                  </div>

                  {/* Floating Shield/Crown Badge Overlap */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-9 h-9 rounded-xl bg-[#0f172a] border border-amber-500/50 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {member.isCrown ? (
                        /* Crown Icon */
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                        </svg>
                      ) : (
                        /* Shield Check Icon */
                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Member Profile Details */}
                <div className="pt-7 pb-6 px-4 text-center flex flex-col justify-between">
                  {/* English & Urdu Name */}
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-slate-900 leading-snug transition-colors duration-300 group-hover:text-amber-600">
                      {member.nameEn}
                    </h3>
                    <p className="text-xs text-amber-600/90 font-medium mt-1 dir-rtl" dir="rtl">
                      {member.nameUr}
                    </p>
                  </div>

                  {/* English & Urdu Role */}
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {member.roleEn}
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5 dir-rtl" dir="rtl">
                      {member.roleUr}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default People;