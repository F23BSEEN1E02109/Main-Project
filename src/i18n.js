import { useState, useEffect } from 'react';

// Dictionary / Translations Data
export const translations = {
  EN: {
    home: "Home",
    about: "About",
    programs: "Programs",
    our_programs: "Our Programs",
    how_it_works: "How It Works",
    business: "Business",
    business_partners: "Business Partners",
    global_expansion: "Global Expansion",
    finance: "Finance",
    investors: "Investors",
    banks: "Banks & Financial",
    events: "Events",
    support: "Support",
    customer_support: "Customer Support",
    faqs: "FAQs",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    contact_us: "Contact Us"
  },
  UR: {
    home: "ہوم",
    about: "ہمارے بارے میں",
    programs: "پروگرامز",
    our_programs: "ہمارے پروگرامز",
    how_it_works: "یہ کیسے کام کرتا ہے",
    business: "کاروبار",
    business_partners: "کاروباری شراکت دار",
    global_expansion: "عالمی توسع",
    finance: "مالیات",
    investors: "سرمایہ کار",
    banks: "بینک اور مالیاتی ادارے",
    events: "تقریبات",
    support: "مدد",
    customer_support: "کسٹمر سپورٹ",
    faqs: "عام سوالات",
    terms: "شرائط و ضوابط",
    privacy: "پرائیویسی پالیسی",
    contact_us: "ہم سے رابطہ کریں"
  },
  AR: {
    home: "الرئيسية",
    about: "من نحن",
    programs: "البرامج",
    our_programs: "برامجنا",
    how_it_works: "كيف يعمل",
    business: "الأعمال",
    business_partners: "شركاء الأعمال",
    global_expansion: "التوسع العالمي",
    finance: "المالية",
    investors: "المستثمرون",
    banks: "البنوك والخدمات المالية",
    events: "الفعاليات",
    support: "الدعم",
    customer_support: "دعم العملاء",
    faqs: "الأسئلة الشائعة",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    contact_us: "اتصل بنا"
  }
};

// Simple Hook for 1-Click Instant Language Change
export const useLanguage = () => {
  const [lang, setLang] = useState(localStorage.getItem('app_lang') || 'EN');

  const changeLanguage = (code) => {
    setLang(code);
    localStorage.setItem('app_lang', code);
    
    // Auto RTL for Urdu / Arabic
    if (code === 'UR' || code === 'AR') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }
  };

  useEffect(() => {
    if (lang === 'UR' || lang === 'AR') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }
  }, [lang]);

  // t(key) function returns the text instantly
  const t = (key) => translations[lang]?.[key] || translations['EN'][key] || key;

  return { lang, changeLanguage, t };
};