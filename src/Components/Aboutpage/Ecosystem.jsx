import React from 'react';

const Ecosystem = () => {
  const ecosystemItems = [
    {
      id: 1,
      title: 'Shopping & Savings',
      subtitle: 'Smart shopping, better savings',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop',
      icon: (
        <svg
          className="w-4 h-4 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Vehicles Solutions',
      subtitle: 'Mobility solutions made easy',
      image:
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop',
      icon: (
        <svg
          className="w-4 h-4 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4m1 4H2v-4h18v4z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Property Opportunities',
      subtitle: 'Access to property & real estate',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop',
      icon: (
        <svg
          className="w-4 h-4 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Agriculture & Farming',
      subtitle: 'Supporting farmers & agriculture',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop',
      icon: (
        <svg
          className="w-4 h-4 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m9-9H3"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Business Solutions',
      subtitle: 'Empowering businesses for growth',
      image:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
      icon: (
        <svg
          className="w-4 h-4 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16 font-sans select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Hoverable Pill Tag Button */}
        <div className="mb-4">
          <button className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#090d16] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-amber-500/20 hover:border-amber-400 border border-transparent cursor-pointer">
            OUR ECOSYSTEM
          </button>
        </div>

        {/* Main Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-[#0f172a] tracking-tight mb-16">
          One Ecosystem. Multiple <br className="hidden sm:block" />
          <span className="text-amber-500">Opportunities.</span>
        </h2>

        {/* Ecosystem Timeline / Cards Grid Container */}
        <div className="relative w-full max-w-6xl">
          
          {/* Dashed Connecting Line Behind Circles (Desktop/Tablet) */}
          <div className="hidden md:block absolute top-[90px] left-[10%] right-[10%] h-[2px] border-b-2 border-dashed border-amber-300/80 z-0" />

          {/* Cards Flex Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {ecosystemItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Circle Container with Golden Border & Hover Zoom */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full border-2 border-amber-400 p-1 bg-white transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-amber-500 group-hover:shadow-xl group-hover:shadow-amber-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Bottom Center Floating Icon Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-50">
                    {item.icon}
                  </div>
                </div>

                {/* Text Information Section */}
                <div className="mt-6 flex flex-col items-center max-w-[180px]">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Ecosystem;