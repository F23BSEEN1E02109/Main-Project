import React from "react";

const InTouch = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-[#f4f6f8] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-4 bg-[#0a111a] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-gray-800">

          <div>
            <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase block mb-1">
              GET IN TOUCH
            </span>

            <h2 className="text-2xl font-extrabold tracking-tight mb-4">
              YES TIME GLOBAL
            </h2>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121f2f] border border-gray-800 text-[11px] font-medium text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Usually responds{" "}
              <span className="text-amber-400 font-semibold">
                within 24 hours
              </span>
            </div>

            <div className="space-y-3">

              {/* WhatsApp Item */}
              <a
                href="https://wa.me/923068509086"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-emerald-500/50 hover:bg-[#162537] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                    💬
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      WhatsApp Support
                    </p>
                    <p className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                      +92 306 8509086
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-emerald-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  →
                </div>
              </a>

              {/* Call 1 */}
              <a
                href="tel:+923196336984"
                className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-blue-500/50 hover:bg-[#162537] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    📞
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Direct Call
                    </p>
                    <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      +92 319 6336984
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-blue-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  →
                </div>
              </a>

              {/* Call 2 */}
              <a
                href="tel:03002550300"
                className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-blue-500/50 hover:bg-[#162537] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    📞
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Direct Call
                    </p>
                    <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      0300 2550300
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-blue-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  →
                </div>
              </a>

              {/* Call 3 */}
              <a
                href="tel:03032722020"
                className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-blue-500/50 hover:bg-[#162537] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    📞
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Direct Call
                    </p>
                    <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      0303 2722020
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-blue-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  →
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@yestimeglobal.com"
                className="group flex items-center justify-between p-3 rounded-xl bg-[#121d2b]/80 border border-gray-800/80 hover:border-red-500/50 hover:bg-[#162537] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    ✉
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Email Support
                    </p>
                    <p className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                      info@yestimeglobal.com
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-[#1c2c3e] group-hover:bg-red-500 group-hover:text-black flex items-center justify-center text-gray-400 transition-all">
                  →
                </div>
              </a>

            </div>

            {/* WhatsApp CTA Button */}
            <div className="mt-6 p-4 rounded-2xl bg-[#0d1c28] border border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center">
                  💬
                </div>

                <div>
                  <h4 className="text-xs font-bold text-amber-400">
                    Prefer WhatsApp?
                  </h4>
                  <p className="text-[10px] text-gray-400">
                    Chat directly with our team.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/923068509086"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-all"
              >
                💬 Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* Footer & Social Icons */}
          <div className="mt-8">
            <div className="flex justify-end mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#162333] border border-gray-700 text-[10px] text-gray-300">
                <span className="text-red-400">📍</span>
                <span className="font-semibold text-white">
                  YES TIME GLOBAL
                </span>
                <span className="text-gray-400">Lahore, Pakistan</span>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                FOLLOW US
              </p>

              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#121f2f] border border-gray-800 flex items-center justify-center text-xs text-gray-300 hover:text-amber-500 hover:border-amber-500 transition-all"
                >
                  f
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#121f2f] border border-gray-800 flex items-center justify-center text-xs text-gray-300 hover:text-amber-500 hover:border-amber-500 transition-all"
                >
                  𝕏
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#121f2f] border border-gray-800 flex items-center justify-center text-xs text-gray-300 hover:text-amber-500 hover:border-amber-500 transition-all"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: FORM ================= */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              SEND AN INQUIRY
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Let's Talk About Your Next{" "}
              <span className="text-amber-500">Opportunity.</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mb-6">
              Whether you have a question about our programs, partnerships,
              financial services or membership, our team is here to help.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600 mb-8 pb-6 border-b border-gray-100">
              <span className="flex items-center gap-1.5 text-amber-600">
                ⚡ Quick Response
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1.5">
                🛡️ Secure Inquiry
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1.5">
                ✨ Dedicated Support
              </span>
            </div>

            <form
              className="space-y-4"
              action="https://formspree.io/f/xgaegyza"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                      👤
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                      ✉️
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                      📞
                    </span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your number"
                      required
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Country *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                      🌐
                    </span>
                    <select
                      name="country"
                      required
                      className="w-full pl-9 pr-8 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-500 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none"
                    >
                      <option value="">Select your country</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="UAE">UAE</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 text-xs">
                      ▼
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Inquiry Type *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                    📑
                  </span>
                  <select
                    name="inquiry_type"
                    required
                    className="w-full pl-9 pr-8 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Membership">Membership</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 text-xs">
                    ▼
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us what you would like to discuss..."
                  required
                  className="w-full p-3.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-y"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                <label className="flex items-start gap-2 cursor-pointer text-gray-500 text-[11px] leading-tight max-w-sm">
                  <input
                    type="checkbox"
                    name="consent"
                    value="I agree"
                    required
                    className="mt-0.5 rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span>
                    I agree that YES TIME GLOBAL may use these details to
                    respond to my inquiry.
                  </span>
                </label>

                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 self-end sm:self-auto"
                >
                  <span>🚀</span>
                  Send Message
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