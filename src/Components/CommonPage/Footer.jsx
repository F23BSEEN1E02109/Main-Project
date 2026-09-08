import React from "react";
import { Link } from "react-router-dom";
// Local logo asset path (adjust path according to your folder structure)
import logo from '../../assets/logo.webp';

const Footer = () => {
  // Our Programs Links Array mapped to actual routes
  const ourProgramsList = [
    { name: "Car Program", path: "/programs/car-plan" },
    { name: "Real Estate Program", path: "/programs/property-saving" },
    { name: "Vehicles", path: "/programs/motorcycle-saving" },
    { name: "Shopping & Savings", path: "/programs/shopping-saving" },
    { name: "Automated Savings System", path: "/programs/self-saving" },
  ];

  // Quick Links Array mapped to actual routes
  const quickLinksList = [
    { name: "About Us", path: "/about" },
    { name: "Vision & Mission", path: "/about" },
    { name: "Business Partners", path: "/business-partners" },
    { name: "Banks & Financial", path: "/banks" },
    { name: "FAQs & Support", path: "/faqs" },
  ];

  return (
    <footer className="relative bg-[#05070b] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden border-t border-amber-500/20">
      
      {/* Top Subtle Amber Border Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/80 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800/80">
          
          {/* Column 1: Company Info & Logo & Social Icons */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo with Link to Home */}
              <Link to="/" className="mb-6 inline-block group cursor-pointer">
                <img
                  src={logo}
                  alt="YES TIME GLOBAL Logo"
                  className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                />
              </Link>

              {/* Company Description */}
              <p className="text-gray-400 text-xs sm:text-sm font-normal leading-relaxed max-w-md mb-6">
                <strong className="text-white font-medium">Yes Time Global Private Limited</strong> Connecting global opportunities with innovation, transparency, and trust through car programs, real estate ventures, and automated savings plans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              {/* Transparency Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold w-max transition-all duration-300 cursor-default">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span>Transparency • Trust • Accessibility</span>
              </div>

              {/* SOCIAL ICONS (NON-FUNCTIONAL DIVS) */}
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-black/50 flex items-center justify-center text-gray-300 transition-all duration-300 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-500/10 hover:shadow-[0_0_10px_rgba(245,158,11,0.3)] hover:scale-105 select-none cursor-default">
                  <span className="font-serif font-bold text-xs">f</span>
                </div>

                {/* X (Twitter) */}
                <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-black/50 flex items-center justify-center text-gray-300 transition-all duration-300 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-500/10 hover:shadow-[0_0_10px_rgba(245,158,11,0.3)] hover:scale-105 select-none cursor-default">
                  <span className="font-sans font-bold text-[10px]">X</span>
                </div>

                {/* Instagram */}
                <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-black/50 flex items-center justify-center text-gray-300 transition-all duration-300 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-500/10 hover:shadow-[0_0_10px_rgba(245,158,11,0.3)] hover:scale-105 select-none cursor-default">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Our Programs */}
          <div className="lg:col-span-3">
            <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-6">
              OUR PROGRAMS
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm font-normal text-gray-300">
              {ourProgramsList.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 transition-all duration-300 hover:text-amber-400 hover:translate-x-1"
                  >
                    <span className="text-amber-400/70 text-xs transition-transform duration-300 group-hover:text-amber-400">
                      ›
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-6">
              QUICK LINKS
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm font-normal text-gray-300">
              {quickLinksList.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 transition-all duration-300 hover:text-amber-400 hover:translate-x-1"
                  >
                    <span className="text-amber-400/70 text-xs transition-transform duration-300 group-hover:text-amber-400">
                      ›
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-2">
            <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-6">
              CONTACT US
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm font-normal text-gray-300">
              
              {/* Address */}
              <Link to="/contact-us" className="flex items-start gap-3 group cursor-pointer">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
                <span className="group-hover:text-amber-400 transition-colors duration-300">
                  Yes Time Global Head <br /> Lahore, Pakistan
                </span>
              </Link>

              {/* Email */}
              <div className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <a href="mailto:info@yestimeglobal.com" className="group-hover:text-amber-400 transition-colors duration-300">
                  info@yestimeglobal.com
                </a>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+923196336984" className="group-hover:text-amber-400 transition-colors duration-300">
                  +92 319 6336984
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:03002550300" className="group-hover:text-amber-400 transition-colors duration-300">
                  0300 2550300
                </a>
              </div>

              {/* Phone 3 */}
              <div className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:03032722020" className="group-hover:text-amber-400 transition-colors duration-300">
                  0303 2722020
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <a href="https://wa.me/923068509086" target="_blank" rel="noopener noreferrer" className="group-hover:text-amber-400 transition-colors duration-300">
                  +92 306 8509086
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal text-gray-400">
          
          {/* Copyright Notice */}
          <p>© 2026 Yes Time Global Private Limited. All rights reserved.</p>

          {/* HAMAD KHAN (ROUNDED SOFT SHINE & CIRCULAR GLOW) */}
          <div className="relative group cursor-pointer inline-flex items-center justify-center py-1.5 px-5 rounded-full select-none overflow-hidden">
            
            {/* Round Sweeping Light Beam */}
            <div className="absolute inset-0 rounded-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent pointer-events-none" />

            {/* Metallic Gold Glitter Text */}
            <span className="text-sm font-extrabold tracking-widest bg-gradient-to-r from-amber-400 via-yellow-100 via-amber-300 to-amber-500 bg-[length:200%_auto] bg-clip-text text-transparent group-hover:bg-[position:200%_center] group-hover:drop-shadow-[0_0_18px_rgba(251,191,36,0.95)] transition-all duration-700 ease-in-out relative z-10">
              HAMAD KHAN
            </span>

            {/* Circular Ambient Glow Backdrop on Hover */}
            <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-110 pointer-events-none" />
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-amber-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-amber-400 transition-colors duration-300">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-amber-400 transition-colors duration-300">
              Legal Disclaimer
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;