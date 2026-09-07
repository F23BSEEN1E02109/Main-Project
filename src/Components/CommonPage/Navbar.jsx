import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { useLanguage } from '../../i18n.js';

const Navbar = () => {
  const { lang, changeLanguage, t } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check if a link or any of its children paths are active
  const isPathActive = (path) => location.pathname === path;
  const isDropdownActive = (paths) => paths.some((path) => location.pathname === path);

  // Mouse leave par thora delay dene ke liye functions
  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleDropdown = (menuName) => {
    setOpenDropdown(prev => (prev === menuName ? null : menuName));
  };

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleContactAction = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/contact-us');
  };

  return (
    <nav ref={navRef} className="w-full bg-[#010711] text-white border-b border-amber-400 sticky top-0 z-50 shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="Yes Time Global Logo" 
              className="h-10 sm:h-12 w-auto object-contain cursor-pointer" 
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[15px] font-semibold">
          
          <Link to="/" className={`transition-colors duration-200 ${isPathActive('/') ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}>
            {t('home')}
          </Link>

          <Link to="/about" className={`transition-colors duration-200 ${isPathActive('/about') ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}>
            {t('about')}
          </Link>

          {/* Programs Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('programs')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('programs')}
              className={`flex items-center space-x-1.5 cursor-pointer focus:outline-none transition-colors duration-200 ${
                openDropdown === 'programs' || isDropdownActive(['/our-programs', '/how-it-works']) ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              <span>{t('programs')}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'programs' ? 'rotate-180 text-amber-400' : 'text-white'
                }`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'programs' && (
              <div className="absolute left-0 mt-3 w-52 bg-[#0c0d0e] border border-[#262626] rounded-xl shadow-2xl py-2 overflow-hidden">
                <Link to="/our-programs" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/our-programs') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('our_programs') || 'Our Programs'}
                </Link>
                <Link to="/how-it-works" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/how-it-works') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('how_it_works') || 'How It Works'}
                </Link>
              </div>
            )}
          </div>

          {/* Business Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('business')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('business')}
              className={`flex items-center space-x-1.5 cursor-pointer focus:outline-none transition-colors duration-200 ${
                openDropdown === 'business' || isDropdownActive(['/business-partners', '/global-expansion']) ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              <span>{t('business')}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'business' ? 'rotate-180 text-amber-400' : 'text-white'
                }`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'business' && (
              <div className="absolute left-0 mt-3 w-52 bg-[#0c0d0e] border border-[#262626] rounded-xl shadow-2xl py-2 overflow-hidden">
                <Link to="/business-partners" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/business-partners') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('business_partners')}
                </Link>
                <Link to="/global-expansion" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/global-expansion') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('global_expansion')}
                </Link>
              </div>
            )}
          </div>

          {/* Finance Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('finance')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('finance')}
              className={`flex items-center space-x-1.5 cursor-pointer focus:outline-none transition-colors duration-200 ${
                openDropdown === 'finance' || isDropdownActive(['/investors', '/banks']) ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              <span>{t('finance')}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'finance' ? 'rotate-180 text-amber-400' : 'text-white'
                }`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'finance' && (
              <div className="absolute left-0 mt-3 w-52 bg-[#0c0d0e] border border-[#262626] rounded-xl shadow-2xl py-2 overflow-hidden">
                <Link to="/investors" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/investors') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('investors')}
                </Link>
                <Link to="/banks" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/banks') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('banks')}
                </Link>
              </div>
            )}
          </div>

          <Link to="/events" className={`transition-colors duration-200 ${isPathActive('/events') ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}>
            {t('events')}
          </Link>

          {/* Support Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('support')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('support')}
              className={`flex items-center space-x-1.5 cursor-pointer focus:outline-none transition-colors duration-200 ${
                openDropdown === 'support' || isDropdownActive(['/customer-support', '/faqs', '/refund', '/terms', '/privacy']) ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              <span>{t('support')}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'support' ? 'rotate-180 text-amber-400' : 'text-white'
                }`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'support' && (
              <div className="absolute left-0 mt-3 w-56 bg-[#0c0d0e] border border-[#262626] rounded-xl shadow-2xl py-2 overflow-hidden">
                <Link to="/customer-support" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/customer-support') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('customer_support') || 'Customer Support'}
                </Link>
                <Link to="/faqs" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/faqs') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('faqs') || 'FAQs'}
                </Link>
                <Link to="/refund" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/refund') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('Refund & Cancellation') || 'Refund & Cancellation'}
                </Link>
                <Link to="/terms" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/terms') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('terms') || 'Terms & Conditions'}
                </Link>
                <Link to="/privacy" onClick={() => setOpenDropdown(null)} className={`block px-4 py-3 text-sm transition-colors duration-150 ${isPathActive('/privacy') ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'}`}>
                  {t('privacy') || 'Privacy Policy'}
                </Link>
              </div>
            )}
          </div>

        </div>

        {/* Right Actions Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          
          {/* Language Selector Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('language')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('language')}
              className={`flex items-center justify-between space-x-2 px-4 py-2 border border-amber-400 rounded-full text-sm font-semibold transition-all duration-200 ${
                openDropdown === 'language' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              <span>{lang}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'language' ? 'rotate-180 text-amber-400' : 'text-white'
                }`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'language' && (
              <div className="absolute right-0 mt-3 w-44 bg-[#0c0d0e] border border-[#262626] rounded-xl shadow-2xl py-1 overflow-hidden">
                <button
                  onClick={() => handleLanguageChange('EN')}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-150 ${
                    lang === 'EN' ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'
                  }`}
                >
                  <span>English</span>
                  <span className="text-xs uppercase opacity-80">EN</span>
                </button>

                <button
                  onClick={() => handleLanguageChange('UR')}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-150 ${
                    lang === 'UR' ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'
                  }`}
                >
                  <span>Urdu</span>
                  <span className="text-xs uppercase opacity-80">UR</span>
                </button>

                <button
                  onClick={() => handleLanguageChange('AR')}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-150 ${
                    lang === 'AR' ? 'bg-[#1a1811] text-amber-400 font-semibold' : 'text-white hover:bg-[#1a1811] hover:text-amber-400'
                  }`}
                >
                  <span>Arabic</span>
                  <span className="text-xs uppercase opacity-80">AR</span>
                </button>
              </div>
            )}
          </div>

          {/* Contact Us Button */}
          <button
            onClick={handleContactAction}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer border border-amber-400 ${
              isPathActive('/contact-us') ? 'bg-amber-400 text-black' : 'bg-transparent text-white hover:bg-amber-400 hover:text-black'
            }`}
          >
            {t('contact_us') || 'Contact Us'}
          </button>

        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center space-x-3">
          {/* Mobile Language Static Badge/Button */}
          <button
            onClick={() => {
              const nextLang = lang === 'EN' ? 'UR' : lang === 'UR' ? 'AR' : 'EN';
              handleLanguageChange(nextLang);
            }}
            className="px-3 py-1 border border-amber-400 text-amber-400 rounded-full text-xs font-semibold"
          >
            {lang}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-amber-400 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#050b14] border-b border-amber-400 px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block py-1 font-semibold ${isPathActive('/') ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}>
            {t('home')}
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block py-1 font-semibold ${isPathActive('/about') ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}>
            {t('about')}
          </Link>

          {/* Mobile Programs Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown('m_programs')}
              className={`w-full flex justify-between items-center py-1 font-semibold ${isDropdownActive(['/our-programs', '/how-it-works']) ? 'text-amber-400' : 'text-white'}`}
            >
              <span>{t('programs')}</span>
              <svg className={`w-4 h-4 transform ${openDropdown === 'm_programs' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'm_programs' && (
              <div className="pl-4 py-2 space-y-2 border-l border-gray-800 my-1">
                <Link to="/our-programs" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/our-programs') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('our_programs') || 'Our Programs'}</Link>
                <Link to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/how-it-works') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('how_it_works') || 'How It Works'}</Link>
              </div>
            )}
          </div>

          {/* Mobile Business Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown('m_business')}
              className={`w-full flex justify-between items-center py-1 font-semibold ${isDropdownActive(['/business-partners', '/global-expansion']) ? 'text-amber-400' : 'text-white'}`}
            >
              <span>{t('business')}</span>
              <svg className={`w-4 h-4 transform ${openDropdown === 'm_business' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'm_business' && (
              <div className="pl-4 py-2 space-y-2 border-l border-gray-800 my-1">
                <Link to="/business-partners" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/business-partners') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('business_partners')}</Link>
                <Link to="/global-expansion" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/global-expansion') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('global_expansion')}</Link>
              </div>
            )}
          </div>

          {/* Mobile Finance Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown('m_finance')}
              className={`w-full flex justify-between items-center py-1 font-semibold ${isDropdownActive(['/investors', '/banks']) ? 'text-amber-400' : 'text-white'}`}
            >
              <span>{t('finance')}</span>
              <svg className={`w-4 h-4 transform ${openDropdown === 'm_finance' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'm_finance' && (
              <div className="pl-4 py-2 space-y-2 border-l border-gray-800 my-1">
                <Link to="/investors" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/investors') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('investors')}</Link>
                <Link to="/banks" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/banks') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('banks')}</Link>
              </div>
            )}
          </div>

          <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className={`block py-1 font-semibold ${isPathActive('/events') ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}>
            {t('events')}
          </Link>

          {/* Mobile Support Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown('m_support')}
              className={`w-full flex justify-between items-center py-1 font-semibold ${isDropdownActive(['/customer-support', '/faqs', '/refund', '/terms', '/privacy']) ? 'text-amber-400' : 'text-white'}`}
            >
              <span>{t('support')}</span>
              <svg className={`w-4 h-4 transform ${openDropdown === 'm_support' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'm_support' && (
              <div className="pl-4 py-2 space-y-2 border-l border-gray-800 my-1">
                <Link to="/customer-support" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/customer-support') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('customer_support')}</Link>
                <Link to="/faqs" onClick={() => setIsMobileMenuOpen(large = false)} onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/faqs') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('faqs')}</Link>
                <Link to="/refund" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/refund') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('refund_cancellation') || 'Refund & Cancellation'}</Link>
                <Link to="/terms" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/terms') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('terms')}</Link>
                <Link to="/privacy" onClick={() => setIsMobileMenuOpen(false)} className={`block text-xs ${isPathActive('/privacy') ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-400'}`}>{t('privacy')}</Link>
              </div>
            )}
          </div>

          {/* Language Selection inside Drawer */}
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
            <span className="text-xs text-gray-400">Select Language:</span>
            <div className="flex gap-2">
              {['EN', 'UR', 'AR'].map((code) => (
                <button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  className={`px-2.5 py-1 text-xs rounded-md ${
                    lang === code ? 'bg-amber-400 text-black font-bold' : 'bg-gray-800 text-white'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleContactAction}
            className="block w-full text-center py-2.5 bg-amber-400 text-black rounded-full font-bold text-sm mt-4 cursor-pointer"
          >
            {t('contact_us') || 'Contact Us'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;