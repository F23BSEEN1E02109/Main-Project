import React from 'react';

const InTouch = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-[#f4f6f8] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* ================= LEFT SIDE: DARK CONTACT CARD ================= */}
        <div className="lg:col-span-4 bg-[#0a111a] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-gray-800">
          
          {/* Top Section */}
          <div>
            <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase block mb-1">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight mb-4">
              YES TIME GLOBAL
            </h2>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121f2f] border border-gray-800 text-[11px] font-medium text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Usually responds <span className="text-amber-400 font-semibold">within 24 hours</span>
            </div>

            {/* Contact Items List */}
            <div className="space-y-3">
              {/* WhatsApp Item */}
              <div className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-emerald-500/50 hover:bg-[#162537] transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">WhatsApp Support</p>
                    <p className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">+92 306 8509086</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-emerald-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </div>

              {/* Direct Call 1 */}
              <div className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-blue-500/50 hover:bg-[#162537] transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Direct Call</p>
                    <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">+92 319 6336984</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-blue-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </div>

              {/* Direct Call 2 */}
              <div className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-blue-500/50 hover:bg-[#162537] transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Direct Call</p>
                    <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">0300 2550300</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-blue-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </div>

              {/* Direct Call 3 */}
              <div className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-blue-500/50 hover:bg-[#162537] transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Direct Call</p>
                    <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">0303 2722020</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-blue-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </div>

              {/* Email Support */}
              <div className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-red-500/50 hover:bg-[#162537] transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Email Support</p>
                    <p className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">info@yestimeglobal.com</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-red-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </div>
            </div>

            {/* Green WhatsApp Callout Box */}
            <div className="mt-6 p-4 rounded-2xl bg-[#0d1c28] border border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-400">Prefer WhatsApp?</h4>
                  <p className="text-[10px] text-gray-400">Chat directly with our team.</p>
                </div>
              </div>
              <button className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                Chat on WhatsApp &rarr;
              </button>
            </div>
          </div>

          {/* Location Badge & Social Footer */}
          <div className="mt-8">
            <div className="flex justify-end mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#162333] border border-gray-700 text-[10px] text-gray-300">
                <span className="text-red-400">📍</span>
                <span className="font-semibold text-white">YES TIME GLOBAL</span>
                <span className="text-gray-400">Lahore, Pakistan</span>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">FOLLOW US</p>
              <div className="flex items-center gap-2">
                <a href="#facebook" className="w-8 h-8 rounded-full bg-[#121f2f] border border-gray-800 flex items-center justify-center text-xs text-gray-300 hover:text-amber-500 hover:border-amber-500 transition-all">f</a>
                <a href="#x" className="w-8 h-8 rounded-full bg-[#121f2f] border border-gray-800 flex items-center justify-center text-xs text-gray-300 hover:text-amber-500 hover:border-amber-500 transition-all">𝕏</a>
                <a href="#instagram" className="w-8 h-8 rounded-full bg-[#121f2f] border border-gray-800 flex items-center justify-center text-xs text-gray-300 hover:text-amber-500 hover:border-amber-500 transition-all">📷</a>
              </div>
            </div>
          </div>
        </div>


        {/* ================= RIGHT SIDE: FORM ================= */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              SEND AN INQUIRY
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Let's Talk About Your Next <span className="text-amber-500">Opportunity.</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mb-6">
              Whether you have a question about our programs, partnerships, financial services or membership, our team is here to help.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600 mb-8 pb-6 border-b border-gray-100">
              <span className="flex items-center gap-1.5 text-amber-600">⚡ Quick Response</span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1.5">🛡️ Secure Inquiry</span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1.5">✨ Dedicated Support</span>
            </div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">👤</span>
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">✉️</span>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone / WhatsApp *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">📞</span>
                    <input 
                      type="text" 
                      placeholder="Enter your number" 
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Country *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">🌐</span>
                    <select className="w-full pl-9 pr-8 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-500 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none">
                      <option value="">Select your country</option>
                      <option value="pk">Pakistan</option>
                      <option value="ae">UAE</option>
                      <option value="uk">United Kingdom</option>
                      <option value="us">United States</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 text-xs">▼</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Inquiry Type *</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">📑</span>
                  <select className="w-full pl-9 pr-8 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none">
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="membership">Membership</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 text-xs">▼</span>
                </div>
              </div>

              {/* Your Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Message *</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us what you would like to discuss..." 
                  className="w-full p-3.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-y"
                ></textarea>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                <label className="flex items-start gap-2 cursor-pointer text-gray-500 text-[11px] leading-tight max-w-sm">
                  <input type="checkbox" className="mt-0.5 rounded text-amber-500 focus:ring-amber-400" />
                  <span>I agree that YES TIME GLOBAL may use these details to respond to my inquiry.</span>
                </label>

                <button 
                  type="submit" 
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 self-end sm:self-auto"
                >
                  <span>🚀</span> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InTouch;