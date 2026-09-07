import React from 'react';
import { useNavigate } from 'react-router-dom';

const Connecting = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#f8fafc] text-gray-900 py-12 px-6 lg:px-16 font-sans">
      {/* items-start ki jagah items-center use kiya hai taaki right side media grid top se align hone ke bajaye vertically center ho jaye */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wide">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-bold">
              W
            </span>
            <span>WHO WE ARE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Connecting People, <br />
            <span className="text-amber-500">Businesses &amp;</span> <br />
            Opportunities.
          </h1>

          {/* Descriptive Text */}
          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              Founded in <strong className="text-gray-900 font-bold">2023</strong>, <strong className="text-gray-900 font-bold">YES TIME GLOBAL PRIVATE LIMITED</strong> emerged with a bold vision to revolutionize how people, businesses, and communities connect.
            </p>
            <p>
              What started as an ambitious idea has grown into a trusted platform, connecting thousands of users to life-changing opportunities in shopping, vehicles, property, agriculture, and more. We empower individuals through transparent processes, helping you save more, invest smarter, and build lasting success.
            </p>
          </div>

          {/* OUR CORE PILLARS Section */}
          <div className="bg-[#f1f5f9]/80 border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h3 className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-4">
              OUR CORE PILLARS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Mission Pillar */}
              <div className="group bg-[#090d16] p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:border hover:border-amber-500/40 hover:-translate-y-0.5">
                <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-bold">Mission</h4>
                <p className="text-gray-400 text-[11px] mt-0.5">Connect &amp; Empower</p>
              </div>

              {/* Vision Pillar */}
              <div className="group bg-[#090d16] p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:border hover:border-amber-500/40 hover:-translate-y-0.5">
                <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-bold">Vision</h4>
                <p className="text-gray-400 text-[11px] mt-0.5">Global Leadership</p>
              </div>

              {/* Values Pillar */}
              <div className="group bg-[#090d16] p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:border hover:border-amber-500/40 hover:-translate-y-0.5">
                <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-bold">Values</h4>
                <p className="text-gray-400 text-[11px] mt-0.5">Trust &amp; Innovation</p>
              </div>

            </div>
          </div>

          {/* Bottom Feature Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-200/70 text-gray-700 text-xs font-semibold">
              <span className="text-amber-500">🌐</span> Global Reach
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-200/70 text-gray-700 text-xs font-semibold">
              <span className="text-amber-500">🛡️</span> 100% Transparent
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-200/70 text-gray-700 text-xs font-semibold">
              <span className="text-amber-500">🤝</span> Strategic Partners
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="pt-2">
            <button
              onClick={handleDiscoverClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-bold text-sm rounded-full shadow-md shadow-amber-500/20 hover:bg-amber-600 transition-all duration-300 cursor-pointer"
            >
              <span>Discover Our Full Story</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

        {/* Right Media Column */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Main Top Banner Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer bg-[#050b14] h-64">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
              alt="Global Opportunities Programs"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-blue-600 border border-blue-200 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
              Since 2023
            </div>
          </div>

          {/* Bottom 2 Split Cards */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Left Card: YT Blue Network Graphic */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 group cursor-pointer bg-[#03153d] h-44">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
                alt="Yes Time Global Network"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                Global Network
              </div>
            </div>

            {/* Right Card: Luxury BMW Car */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 group cursor-pointer bg-slate-100 h-44">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop"
                alt="Community First Luxury Car"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                Community First
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Connecting;