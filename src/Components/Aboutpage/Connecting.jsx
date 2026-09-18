  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useLanguage } from '../../i18n.js';

  import connecting1 from '../../assets/connecting1.webp';
  import connecting2 from '../../assets/connecting2.webp';
  import connecting3 from '../../assets/connecting3.webp';

  const Connecting = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleDiscoverClick = () => {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <section className="w-full bg-[#f8fafc] text-gray-900 py-12 px-6 lg:px-16 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wide">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-bold">
                W
              </span>

              <span>{t('who_we_are')}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              {t('connecting_people')} <br />

              <span className="text-amber-500">
                {t('businesses_opportunities')}
              </span>{' '}
              <br />

              {t('opportunities_full')}
            </h1>

            {/* Descriptive Text */}
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">

              <p>
                {t('connecting_intro_1')}
              </p>

              <p>
                {t('connecting_intro_2')}
              </p>

            </div>

            {/* OUR CORE PILLARS */}
            <div className="bg-[#f1f5f9]/80 border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">

              <h3 className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-4">
                {t('our_core_pillars')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                {/* Mission Pillar */}
                <div className="group bg-[#090d16] p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:border hover:border-amber-500/40 hover:-translate-y-0.5">

                  <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>

                  <h4 className="text-white text-sm font-bold">
                    {t('mission')}
                  </h4>

                  <p className="text-gray-400 text-[11px] mt-0.5">
                    {t('connect_empower')}
                  </p>

                </div>

                {/* Vision Pillar */}
                <div className="group bg-[#090d16] p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:border hover:border-amber-500/40 hover:-translate-y-0.5">

                  <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>

                  <h4 className="text-white text-sm font-bold">
                    {t('vision')}
                  </h4>

                  <p className="text-gray-400 text-[11px] mt-0.5">
                    {t('global_leadership')}
                  </p>

                </div>

                {/* Values Pillar */}
                <div className="group bg-[#090d16] p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:border hover:border-amber-500/40 hover:-translate-y-0.5">

                  <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  <h4 className="text-white text-sm font-bold">
                    {t('core_values')}
                  </h4>

                  <p className="text-gray-400 text-[11px] mt-0.5">
                    {t('trust_innovation')}
                  </p>

                </div>

              </div>
            </div>

            {/* Bottom Feature Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-200/70 text-gray-700 text-xs font-semibold">
                <span className="text-amber-500">🌐</span>
                {t('global_reach')}
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-200/70 text-gray-700 text-xs font-semibold">
                <span className="text-amber-500">🛡️</span>
                {t('transparent_100')}
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-200/70 text-gray-700 text-xs font-semibold">
                <span className="text-amber-500">🤝</span>
                {t('strategic_partners')}
              </div>

            </div>

            {/* Call to Action Button */}
            <div className="pt-2">
              <button
                onClick={handleDiscoverClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-bold text-sm rounded-full shadow-md shadow-amber-500/20 hover:bg-amber-600 transition-all duration-300 cursor-pointer"
              >
                <span>{t('discover_full_story_button')}</span>

                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-5 space-y-4">

            {/* Main Top Banner Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer bg-[#050b14] h-64">

              <img
                src={connecting1}
                alt="Global Opportunities Programs"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-blue-600 border border-blue-200 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                {t('since_2023')}
              </div>

            </div>

            {/* Bottom 2 Split Cards */}
            <div className="grid grid-cols-2 gap-4">

              {/* Left Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 group cursor-pointer bg-[#03153d] h-44">

                <img
                  src={connecting2}
                  alt="Yes Time Global Network"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {t('global_network_label')}
                </div>

              </div>

              {/* Right Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 group cursor-pointer bg-slate-100 h-44">

                <img
                  src={connecting3}
                  alt="Community First"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {t('community_first')}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    );
  };

  export default Connecting;