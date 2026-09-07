import React from 'react';

const MapLocation = () => {
  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-12 bg-[#f4f6f8] flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        
        {/* Top Header Badge */}
        <div className="flex items-center gap-2 mb-4 px-2">
          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">
            📍
          </div>
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
            HEAD OFFICE LAHORE, PAKISTAN
          </span>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            title="Lahore Google Map"
            src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default MapLocation;