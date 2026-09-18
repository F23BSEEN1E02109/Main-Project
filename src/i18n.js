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
    refund_cancellation: "Refund & Cancellation",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    sign_in: "Sign In",
    contact_us: "Contact Us",

    // Connect
    connect_to: "Connect to",
    global_opportunities: "Global Opportunities.",
    connect_description:
      "YES TIME GLOBAL PRIVATE LIMITED creates accessible programs and partnerships that connect people, businesses, and opportunities across the world.",
    explore_programs: "Explore Programs",
    global_network: "Global Network",
    global_network_desc: "Connect with verified partners worldwide.",
    trusted_platform: "Trusted Platform",
    trusted_platform_desc: "Secure, transparent & member-focused.",
    real_impact: "Real Impact",
    real_impact_desc: "Opportunities that create growth & change.",
    always_with_you: "Always With You",
    always_with_you_desc: "24/7 support for all our members.",

    // Join
    why_choose_us: "WHY CHOOSE US",
    why_join: "Why Join",
    secure_reliable: "Secure & Reliable",
    secure_reliable_desc:
      "Your security and operational safety are always our top priority.",
    place_for_everyone: "A Place for Everyone",
    place_for_everyone_desc:
      "A welcoming space where everyone has an equal place to grow.",
    modern_solutions: "Modern Solutions",
    modern_solutions_desc:
      "Continuous technological improvements for a better experience.",
    creating_real_change: "Creating Real Change",
    creating_real_change_desc:
      "Accessible opportunities that create real, sustainable change.",
    success_comes_first: "Your Success Comes First",
    success_comes_first_desc:
      "We are committed to your growth, progress, and long term success.",
    join_description:
      "We are committed to building a transparent platform focused on your security, long-term growth, and financial empowerment.",

    // Journey
    start_your_journey: "START YOUR JOURNEY",
    move_forward_with: "Move forward with",
    confidence: "confidence.",
    journey_description:
      "Explore practical programs and trusted partnerships designed to connect your next opportunity with a bigger global community.",
    built_on_transparency: "Built on transparency, trust, and shared progress.",
    talk_to_our_team: "Talk to Our Team",

    // People
    management_team: "MANAGEMENT TEAM",
    meet_people_behind: "Meet the people behind",
    people_description:
      "Guided by experience, accountability, and a shared commitment to connecting opportunities worldwide.",

    // Program
    most_popular: "Most Popular",
    shopping_program: "Our Shopping Program",
    shopping_program_subtitle:
      "Shop with confidence, save more, and enjoy exclusive member benefits.",
    exclusive_discounts: "Exclusive Discounts",
    cashback_rewards: "Cashback Rewards",
    partner_shops: "Wide Network of Partner Shops",
    flexible_plan_terms: "Flexible Plan Terms",
    view_shopping_program: "View Shopping Program",

    car_program: "Car Program",
    car_program_subtitle:
      "Drive towards your dreams with affordable and flexible car plans.",
    easy_monthly_plans: "Easy Monthly Plans",
    car_options: "Wide Range of Car Options",
    transparent_process: "Transparent Process",
    ownership_with_confidence: "Ownership with Confidence",
    comprehensive_support: "Comprehensive Support & Guidance",
    view_car_program: "View Car Program",

    motorcycle_program: "Motorcycle Program",
    motorcycle_program_subtitle:
      "Freedom on the move with reliable motorcycle and scooter plans.",
    affordable_installments: "Affordable Installments",
    popular_brands: "Popular Brands & Models",
    quick_easy_process: "Quick & Easy Process",
    personal_family_use: "Ideal for Personal & Family Use",
    safety_maintenance_support: "Safety & Maintenance Support",
    view_motorcycle_program: "View Motorcycle Program",

    savings_programs: "Our Savings Programs",
    savings_programs_subtitle:
      "Explore approved programs designed for your growth and long-term security.",
    tailored_savings: "Tailored Savings Plans",
    flexible_contributions: "Flexible Contribution Options",
    secure_transparent_process: "Secure & Transparent Process",
    exclusive_opportunities: "Access to Exclusive Opportunities",
    dedicated_support: "Dedicated Support & Guidance",
    explore_savings_programs: "Explore Savings Programs",

    programs_for: "Programs for",
    participation_savings: "Participation & Savings.",
    programs_description:
      "Explore our approved programs and take the next step towards a brighter future. Simple, secure, and full of opportunities.",
    all_programs: "All Programs",
    shop_savings: "Shop & Savings",
    motorcycle_scooter: "Motorcycle / Scooter",
    other_programs: "Other Programs",

    // Time
    who_we_are_hero: "Who We Are",
    time_intro:
      "At YES TIME GLOBAL, we are a trusted international platform bridging members to accessible vehicle schemes, real estate ventures, and automated savings programs.",
    time_second:
      "We create accessible programs and strategic partnerships that empower individuals and communities to grow, achieve, and succeed together.",
    mission: "Mission",
    mission_text:
      "Empowering lives through global access & shared opportunities.",
    vision: "Vision",
    vision_text:
      "A connected world of transparent and equal opportunities for all.",
    core_values: "Core Values",
    core_values_text:
      "Built on trust, integrity, transparency, and sustainable growth.",
    discover_full_story: "Discover Full Story",

    // Works
    how_it_works_title: "HOW IT WORKS",
    getting_started: "Getting Started is",
    simple: "Simple",
    works_description:
      "Follow these easy steps and start your journey with YES TIME GLOBAL today.",
    choose_your_program: "Choose Your Program",
    choose_program_desc:
      "Select the program that suits your needs and future plans.",
    complete_the_process: "Complete the Process",
    complete_process_desc:
      "Follow our simple, transparent and secure membership process.",
    start_journey_desc:
      "Gain access to your program and step forward toward a better future.",
      footer_logoAlt: "YES TIME GLOBAL Logo",
    footer_companyName: "Yes Time Global Private Limited",
    footer_companyDescription: "Connecting global opportunities with innovation, transparency, and trust through car programs, real estate ventures, and automated savings plans.",
    footer_badgeText: "Transparency • Trust • Accessibility",
    footer_titles_ourPrograms: "OUR PROGRAMS",
    footer_titles_quickLinks: "QUICK LINKS",
    footer_titles_contactUs: "CONTACT US",
    footer_programs_carPlan: "Car Program",
    footer_programs_propertySaving: "Real Estate Program",
    footer_programs_motorcycleSaving: "Vehicles",
    footer_programs_shoppingSaving: "Shopping & Savings",
    footer_programs_selfSaving: "Automated Savings System",
    footer_quickLinks_about: "About Us",
    footer_quickLinks_visionMission: "Vision & Mission",
    footer_quickLinks_businessPartners: "Business Partners",
    footer_quickLinks_banks: "Banks & Financial",
    footer_quickLinks_faqs: "FAQs & Support",
    footer_contact_headOffice: "Yes Time Global Head",
    footer_contact_location: "Lahore, Pakistan",
    footer_legal_copyright: "© 2026 Yes Time Global Private Limited. All rights reserved.",
    footer_legal_privacy: "Privacy Policy",
    footer_legal_terms: "Terms & Conditions",
    footer_legal_disclaimer: "Legal Disclaimer",

    // Building
    about_yes_time_global: "ABOUT YES TIME GLOBAL",
    building_connections: "Building Connections.",
    creating_opportunities: "Creating Opportunities.",
    changing_futures: "Changing Futures.",
    discover_our_story: "Discover Our Story",
    founded: "Founded",
    powerful_programs: "Powerful Programs",
    transparent: "Transparent",
    global: "Global",
    opportunities: "Opportunities",

    // Connecting
    who_we_are_section: "WHO WE ARE",
    connecting_people: "Connecting People,",
    businesses_opportunities: "Businesses &",
    opportunities_full: "Opportunities.",
    connecting_intro_1:
      "Founded in 2023, YES TIME GLOBAL PRIVATE LIMITED emerged with a bold vision to revolutionize how people, businesses, and communities connect.",
    connecting_intro_2:
      "What started as an ambitious idea has grown into a trusted platform, connecting thousands of users to life-changing opportunities in shopping, vehicles, property, agriculture, and more. We empower individuals through transparent processes, helping you save more, invest smarter, and build lasting success.",
    our_core_pillars: "OUR CORE PILLARS",
    connect_empower: "Connect & Empower",
    global_leadership: "Global Leadership",
    trust_innovation: "Trust & Innovation",
    global_reach: "Global Reach",
    transparent_100: "100% Transparent",
    strategic_partners: "Strategic Partners",
    discover_full_story_button: "Discover Our Full Story",
    since_2023: "Since 2023",
    global_network_label: "Global Network",
    community_first: "Community First",

    // Ecosystem
    our_ecosystem: "OUR ECOSYSTEM",
    one_ecosystem: "One Ecosystem. Multiple",
    ecosystem_opportunities: "Opportunities.",
    shopping_savings: "Shopping & Savings",
    shopping_savings_desc: "Smart shopping, better savings",
    vehicles_solutions: "Vehicles Solutions",
    vehicles_solutions_desc: "Mobility solutions made easy",
    property_opportunities: "Property Opportunities",
    property_opportunities_desc: "Access to property & real estate",
    agriculture_farming: "Agriculture & Farming",
    agriculture_farming_desc: "Supporting farmers & agriculture",
    business_solutions: "Business Solutions",
    business_solutions_desc: "Empowering businesses for growth",

    // Vision & Mission
    our_vision_mission: "Our Vision & Mission",
    vision_mission_desc:
      "Guiding principles driving our ecosystem toward sustainable growth and shared success.",
    our_vision: "Our Vision",
    our_mission: "Our Mission",
    purpose: "01 / PURPOSE",
    action: "02 / ACTION",
    vision_description:
      "To be a global leader in creating a reliable and innovative ecosystem where individuals and businesses can access life-changing opportunities that bring growth, security, and prosperity to all.",
    vision_highlight:
      "A world of equal opportunities for everyone.",
    mission_description:
      "To connect people, businesses, and opportunities through accessible programs, strategic partnerships, and transparent processes — empowering communities to grow, achieve, and succeed together.",
    mission_highlight:
      "Empower people. Build trust. Create lasting impact.",
    sign_in: "Sign In",
    sign_up: "Sign Up",
    full_name: "Full Name",
    email_address: "Email Address",
    badge_why_attend: "WHY ATTEND",
    why_attend_heading_start: "Why Join Our",
    why_attend_heading_accent: "Events?",
    why_attend_subtext: "Our events are carefully designed to create meaningful connections and provide actionable insights that transform your business and personal growth.",

    why_attend_card1_title: "Global Networking",
    why_attend_card1_desc: "Connect directly with visionary entrepreneurs, experienced investors, and strategic industry partners hailing from over 30 countries worldwide to expand your international reach.",

    why_attend_card2_title: "Expert Insights",
    why_attend_card2_desc: "Learn from seasoned industry leaders and successful entrepreneurs who have scaled empires, sharing proven frameworks, hard-earned wisdom, and actionable market strategies.",

    why_attend_card3_title: "Secure & Inclusive",
    why_attend_card3_desc: "Experience a welcoming, professionally managed environment where diverse backgrounds are celebrated, ensuring everyone receives an equal opportunity to thrive and succeed securely.",

    why_attend_card4_title: "Business Growth",
    why_attend_card4_desc: "Discover real, high-impact business opportunities, funding channels, and disruptive ideas specifically curated to dramatically accelerate your personal trajectory and corporate expansion.",

    why_attend_card5_title: "Lasting Partnerships",
    why_attend_card5_desc: "Build deep, meaningful professional relationships that effortlessly evolve past casual networking events into long-term, profitable business collaborations and joint ventures.",

    why_attend_card6_title: "Exclusive Resources",
    why_attend_card6_desc: "Gain privileged entry to premium downloadable toolkits, proprietary strategic templates, and comprehensive market research reports designed to give your venture a competitive edge.",
    password: "Password",
    confirm_password: "Confirm Password",
    create_account: "Create Account",
    enter_your_name_placeholder: "Enter your name",
    passwords_do_not_match: "Passwords do not match",
    user_already_exists: "User with this email already exists!",
    account_created_success: "Account created successfully! Please sign in now.",
    invalid_email_password: "Invalid email or password!",
    logged_in_success: "Logged in successfully!",
    badge_global_events: "GLOBAL EVENTS",
    events_hero_title_part1: "Connect, Learn &",
    events_hero_title_part2: "Grow Together.",
    events_hero_description: "Join exclusive events where like-minded entrepreneurs, investors, and partners gather to build meaningful connections and unlock global opportunities.",
    stat_annual_events: "Annual Events",
    stat_attendees: "Attendees",
    stat_countries: "Countries",
    btn_explore_events: "Explore Events",
    btn_learn_more: "Learn More",
    alt_global_network_globe: "Global Network Globe",
    aria_scroll_down: "Scroll Down",
    badge_featured_events: "FEATURED EVENTS",
    featured_events_heading: "Global Events",
    featured_events_subtext: "Explore our featured events through engaging videos, discover new opportunities, and connect with global business leaders, entrepreneurs, and professionals.",
    watch_video_tag: "WATCH VIDEO",
    status_upcoming: "UPCOMING",
    category_conference: "CONFERENCE",
    category_workshop: "WORKSHOP",
    category_seminar: "SEMINAR",
    category_networking: "NETWORKING",
    // Event 1
    event1_title: "Global Business Summit 2026",
    event1_desc: "Experience global business conversations, connect with industry leaders, and discover new...",
    event1_date: "September 15, 2026",
    event1_time: "09:00 AM - 05:00 PM",
    event1_location: "Dubai, UAE",
    event1_attendees: "500 attendees",

    // Event 2
    event2_title: "Entrepreneurship Workshop",
    event2_desc: "Explore practical entrepreneurship strategies, business ideas, and valuable insights designed to...",
    event2_date: "September 22, 2026",
    event2_time: "10:00 AM - 04:00 PM",
    event2_location: "Mumbai, India",
    event2_attendees: "200 attendees",

    // Event 3
    event3_title: "Financial Insights Seminar",
    event3_desc: "Gain valuable financial perspectives, explore smart investment approaches, and learn how strategic...",
    event3_date: "October 5, 2026",
    event3_time: "02:00 PM - 05:00 PM",
    event3_location: "Singapore",
    event3_attendees: "300 attendees",

    // Event 4
    event4_title: "Women Leaders Networking Brunch",
    event4_desc: "Meet inspiring women leaders, exchange ideas, share experiences, and build meaningful professional...",
    event4_date: "October 12, 2026",
    event4_time: "10:30 AM - 01:00 PM",
    event4_location: "London, UK",
    event4_attendees: "150 attendees",

    // Event 5
    event5_title: "Digital Transformation Forum",
    event5_desc: "Discover how digital innovation, emerging technologies, and modern business solutions are...",
    event5_date: "October 20, 2026",
    event5_time: "09:00 AM - 06:00 PM",
    event5_location: "New York, USA",
    event5_attendees: "400 attendees",

    // Event 6
    event6_title: "Partnership & Growth Summit",
    event6_desc: "Explore strategic partnerships, connect with ambitious business leaders, and discover...",
    event6_date: "November 1, 2026",
    event6_time: "08:30 AM - 05:30 PM",
    event6_location: "Tokyo, Japan",
    event6_attendees: "350 attendees",
  },

  UR: {
    badge_featured_events: "نمایاں تقریبات",
    featured_events_heading: "عالمی تقریبات",
    featured_events_subtext: "دلچسپ ویڈیوز کے ذریعے ہماری نمایاں تقریبات دریافت کریں، نئے مواقع تلاش کریں اور عالمی کاروباری رہنماؤں اور پیشہ ور افراد سے جڑیں۔",
    watch_video_tag: "ویڈیو دیکھیں",
    status_upcoming: "آئندہ",
    category_conference: "کانفرنس",
    category_workshop: "ورکشاپ",
    category_seminar: "سیمینار",
    category_networking: "نیٹ ورکنگ",
    

    // Event 1
    event1_title: "گلوبل بزنس سمٹ 2026",
    event1_desc: "عالمی کاروباری گفتگو کا تجربہ کریں، انڈسٹری لیڈرز سے جڑیں اور نئے...",
    event1_date: "15 ستمبر 2026",
    event1_time: "09:00 AM - 05:00 PM",
    event1_location: "دبئی، متحدہ عرب امارات",
    event1_attendees: "500 شرکاء",

    // Event 2
    event2_title: "انٹرپرینیورشپ ورکشاپ",
    event2_desc: "عملی کاروباری حکمت عملیوں، بزنس آئیڈیاز اور قیمتی بصیرت کو دریافت کریں...",
    event2_date: "22 ستمبر 2026",
    event2_time: "10:00 AM - 04:00 PM",
    event2_location: "ممبئی، بھارت",
    event2_attendees: "200 شرکاء",

    // Event 3
    event3_title: "فنانشل انسائٹس سیمینار",
    event3_desc: "قیمتی مالیاتی نقطہ نظر حاصل کریں، سمارٹ سرمایہ کاری کے طریقوں کو دریافت کریں...",
    event3_date: "5 اکتوبر 2026",
    event3_time: "02:00 PM - 05:00 PM",
    event3_location: "سنگاپور",
    event3_attendees: "300 شرکاء",

    // Event 4
    event4_title: "ویمن لیڈرز نیٹ ورکنگ برنچ",
    event4_desc: "پرعزم خاتون رہنماؤں سے ملیں، خیالات کا تبادلہ کریں اور پیشہ ورانہ تعلقات بنائیں...",
    event4_date: "12 اکتوبر 2026",
    event4_time: "10:30 AM - 01:00 PM",
    event4_location: "لندن، برطانیہ",
    event4_attendees: "150 شرکاء",

    // Event 5
    event5_title: "ڈیجیٹل ٹرانسفارمیشن فورم",
    event5_desc: "دریافت کریں کہ ڈیجیٹل جدت، نئی ٹیکنالوجیز اور جدید کاروباری حل کیسے...",
    event5_date: "20 اکتوبر 2026",
    event5_time: "09:00 AM - 06:00 PM",
    event5_location: "نیویارک، امریکہ",
    event5_attendees: "400 شرکاء",

    // Event 6
    event6_title: "پارٹنرشپ اینڈ گروتھ سمٹ",
    event6_desc: "حکمت عملی پر مبنی شراکت داریوں کو دریافت کریں، بزنس لیڈرز سے جڑیں...",
    event6_date: "1 نومبر 2026",
    event6_time: "08:30 AM - 05:30 PM",
    event6_location: "ٹوکیو، جاپان",
    event6_attendees: "350 شرکاء",
    badge_global_events: "عالمی تقریبات",
    events_hero_title_part1: "جڑیں، سیکھیں اور",
    events_hero_title_part2: "ایک ساتھ آگے بڑھیں۔",
    events_hero_description: "خصوصی تقریبات میں شامل ہوں جہاں ہم خیال کاروباری افراد، سرمایہ کار اور شراکت دار با معنی تعلقات قائم کرنے اور عالمی مواقع حاصل کرنے کے لیے جمع ہوتے ہیں۔",
    stat_annual_events: "سالانہ تقریبات",
    stat_attendees: "شرکاء",
    stat_countries: "ممالک",
    badge_why_attend: "شرکت کیوں کریں",
    why_attend_heading_start: "ہمارے تقریبات میں",
    why_attend_heading_accent: "کیوں شامل ہوں؟",
    why_attend_subtext: "ہماری تقریبات کا مقصد معنی خیز روابط قائم کرنا اور عملی بصیرت فراہم کرنا ہے جو آپ کے کاروباری اور ذاتی ترقی کو بدل دے۔",

    why_attend_card1_title: "عالمی نیٹ ورکنگ",
    why_attend_card1_desc: "دنیا بھر کے 30 سے زائد ممالک سے آنے والے کاروباری رہنماؤں، سرمایہ کاروں اور اسٹریٹجک شراکت داروں سے براہ راست رابطہ قائم کریں۔",

    why_attend_card2_title: "ماہرانہ بصیرت",
    why_attend_card2_desc: "صنعت کے تجربہ کار رہنماؤں سے سیکھیں جنہوں نے کامیاب کاروبار قائم کیے ہیں، اور ان کے آزمودہ طریقوں اور حکمت عملیوں سے فائدہ اٹھائیں۔",

    why_attend_card3_title: "محفوظ اور جامع ماحول",
    why_attend_card3_desc: "ایک خوشگوار اور پیشہ ورانہ ماحول کا تجربہ کریں جہاں ہر پس منظر سے تعلق رکھنے والے افراد کو ترقی اور کامیابی کے مساوی مواقع ملتے ہیں۔",

    why_attend_card4_title: "کاروباری ترقی",
    why_attend_card4_desc: "اعلیٰ اثر انگیز کاروباری مواقع، فنڈنگ کے ذرائع، اور نئے خیالات دریافت کریں جو آپ کے کاروبار کی رفتار کو تیز کر سکیں۔",

    why_attend_card5_title: "پائیدار شراکت داری",
    why_attend_card5_desc: "ایسے گہرے پیشہ ورانہ تعلقات استوار کریں جو محض تقریبات تک محدود نہ رہیں بلکہ طویل المدتی اور منافع بخش کاروباری شراکت میں بدل جائیں۔",

    why_attend_card6_title: "خصوصی وسائل",
    why_attend_card6_desc: "پریمیئم ٹول کٹس، اسٹریٹجک ٹیمپلیٹس اور تفصیلی مارکیٹ ریسرچ رپورٹس تک رسائی حاصل کریں جو آپ کے کاروبار کو برتری فراہم کرتی ہیں۔",
    btn_explore_events: "تقریبات دریافت کریں",
    btn_learn_more: "مزید جانیں",
    alt_global_network_globe: "عالمی نیٹ ورک گلوب",
    aria_scroll_down: "نیچے اسکرول کریں",
    sign_in: "سائن ان کریں",
    sign_up: "سائن اپ کریں",
    full_name: "مکمل نام",
    email_address: "ای میل ایڈریس",
    password: "پاس ورڈ",
    confirm_password: "پاس ورڈ کی تصدیق کریں",
    create_account: "اکاؤنٹ بنائیں",
    enter_your_name_placeholder: "اپنا نام درج کریں",
    passwords_do_not_match: "پاس ورڈ یکساں نہیں ہیں",
    user_already_exists: "اس ای میل سے صارف پہلے سے موجود ہے!",
    account_created_success: "اکاؤنٹ کامیابی کے ساتھ بن گیا! اب سائن ان کریں۔",
    invalid_email_password: "غیر درست ای میل یا پاس ورڈ!",
    logged_in_success: "کامیابی کے ساتھ لاگ ان ہو گئے!",
    home: "ہوم",
    about: "ہمارے بارے میں",
    programs: "پروگرامز",
    our_programs: "ہمارے پروگرامز",
    how_it_works: "یہ کیسے کام کرتا ہے",
    business: "کاروبار",
    business_partners: "کاروباری شراکت دار",
    global_expansion: "عالمی توسیع",
    finance: "مالیات",
    investors: "سرمایہ کار",
    banks: "بینک اور مالیاتی ادارے",
    events: "تقریبات",
    support: "مدد",
    customer_support: "کسٹمر سپورٹ",
    faqs: "عام سوالات",
    refund_cancellation: "ریفنڈ اور منسوخی",
    terms: "شرائط و ضوابط",
    privacy: "پرائیویسی پالیسی",
    sign_in: "سائن ان",
    contact_us: "ہم سے رابطہ کریں",
    footer_logoAlt: "یس ٹائم گلوبل لوگو",
    footer_companyName: "یس ٹائم گلوبل پرائیویٹ لمیٹڈ",
    footer_companyDescription: "کار پروگرامز، رئیل اسٹیٹ کے منصوبوں اور خودکار بچت کے منصوبوں کے ذریعے جدت، شفافیت اور اعتماد کے ساتھ عالمی مواقع کو جوڑنا۔",
    footer_badgeText: "شفافیت • اعتماد • رسائی",
    footer_titles_ourPrograms: "ہمارے پروگرامز",
    footer_titles_quickLinks: "اہم لنکس",
    footer_titles_contactUs: "ہم سے رابطہ کریں",
    footer_programs_carPlan: "کار پروگرام",
    footer_programs_propertySaving: "رئیل اسٹیٹ پروگرام",
    footer_programs_motorcycleSaving: "گاڑیاں",
    footer_programs_shoppingSaving: "خریداری اور بچت",
    footer_programs_selfSaving: "خودکار بچت کا نظام",
    footer_quickLinks_about: "ہمارے بارے میں",
    footer_quickLinks_visionMission: "وژن اور مشن",
    footer_quickLinks_businessPartners: "کاروباری شراکت دار",
    footer_quickLinks_banks: "بینکس اور مالیاتی ادارے",
    footer_quickLinks_faqs: "سوالات اور مدد",
    footer_contact_headOffice: "یس ٹائم گلوبل ہیڈ آفس",
    footer_contact_location: "لاہور، پاکستان",
    footer_legal_copyright: "© 2026 یس ٹائم گلوبل پرائیویٹ لمیٹڈ۔ جملہ حقوق محفوظ ہیں۔",
    footer_legal_privacy: "پرائیویسی پالیسی",
    footer_legal_terms: "قواعد و ضوابط",
    footer_legal_disclaimer: "قانونی ڈسکلیمر",

    connect_to: "رابطہ کریں",
    global_opportunities: "عالمی مواقع سے۔",
    connect_description:
      "YES TIME GLOBAL PRIVATE LIMITED ایسے پروگرامز اور شراکت داری فراہم کرتا ہے جو دنیا بھر کے لوگوں، کاروباروں اور مواقع کو آپس میں جوڑتے ہیں۔",
    explore_programs: "پروگرامز دیکھیں",
    global_network: "عالمی نیٹ ورک",
    global_network_desc: "دنیا بھر میں تصدیق شدہ شراکت داروں سے رابطہ کریں۔",
    trusted_platform: "قابل اعتماد پلیٹ فارم",
    trusted_platform_desc: "محفوظ، شفاف اور ممبران پر مرکوز۔",
    real_impact: "حقیقی اثر",
    real_impact_desc: "ترقی اور تبدیلی پیدا کرنے والے مواقع۔",
    always_with_you: "ہمیشہ آپ کے ساتھ",
    always_with_you_desc: "تمام ممبران کے لیے 24/7 سپورٹ۔",

    why_choose_us: "ہمیں کیوں منتخب کریں",
    why_join: "YES TIME GLOBAL میں کیوں شامل ہوں؟",
    secure_reliable: "محفوظ اور قابل اعتماد",
    secure_reliable_desc:
      "آپ کی سیکیورٹی اور آپریشنل حفاظت ہمیشہ ہماری اولین ترجیح ہے۔",
    place_for_everyone: "سب کے لیے جگہ",
    place_for_everyone_desc:
      "ایک خوش آئند جگہ جہاں ہر شخص کو ترقی کے مساوی مواقع ملیں۔",
    modern_solutions: "جدید حل",
    modern_solutions_desc:
      "بہتر تجربے کے لیے مسلسل تکنیکی بہتری۔",
    creating_real_change: "حقیقی تبدیلی پیدا کرنا",
    creating_real_change_desc:
      "ایسے قابل رسائی مواقع جو حقیقی اور پائیدار تبدیلی پیدا کریں۔",
    success_comes_first: "آپ کی کامیابی سب سے پہلے",
    success_comes_first_desc:
      "ہم آپ کی ترقی، کامیابی اور طویل مدتی کامیابی کے لیے پرعزم ہیں۔",
    join_description:
      "ہم ایک شفاف پلیٹ فارم بنانے کے لیے پرعزم ہیں جو آپ کی سیکیورٹی، طویل مدتی ترقی اور مالی بااختیاری پر مرکوز ہو۔",

    start_your_journey: "اپنا سفر شروع کریں",
    move_forward_with: "اعتماد کے ساتھ",
    confidence: "آگے بڑھیں۔",
    journey_description:
      "عملی پروگرامز اور قابل اعتماد شراکت داری دریافت کریں جو آپ کے اگلے موقع کو ایک بڑی عالمی کمیونٹی سے جوڑنے کے لیے بنائے گئے ہیں۔",
    built_on_transparency: "شفافیت، اعتماد اور مشترکہ ترقی پر مبنی۔",
    talk_to_our_team: "ہماری ٹیم سے بات کریں",

    management_team: "انتظامی ٹیم",
    meet_people_behind: "ان لوگوں سے ملیں جو",
    people_description:
      "تجربے، جواب دہی اور دنیا بھر کے مواقع کو جوڑنے کے مشترکہ عزم کے ساتھ رہنمائی کرتے ہیں۔",

    most_popular: "سب سے مقبول",
    shopping_program: "ہمارا شاپنگ پروگرام",
    shopping_program_subtitle:
      "اعتماد کے ساتھ خریداری کریں، زیادہ بچت کریں اور خصوصی ممبر فوائد حاصل کریں۔",
    exclusive_discounts: "خصوصی رعایتیں",
    cashback_rewards: "کیش بیک انعامات",
    partner_shops: "شراکت دار دکانوں کا وسیع نیٹ ورک",
    flexible_plan_terms: "لچکدار پلان کی شرائط",
    view_shopping_program: "شاپنگ پروگرام دیکھیں",

    car_program: "کار پروگرام",
    car_program_subtitle:
      "سستے اور لچکدار کار پلانز کے ساتھ اپنے خوابوں کی طرف بڑھیں۔",
    easy_monthly_plans: "آسان ماہانہ پلانز",
    car_options: "کار کے وسیع اختیارات",
    transparent_process: "شفاف طریقہ کار",
    ownership_with_confidence: "اعتماد کے ساتھ ملکیت",
    comprehensive_support: "مکمل سپورٹ اور رہنمائی",
    view_car_program: "کار پروگرام دیکھیں",

    motorcycle_program: "موٹر سائیکل پروگرام",
    motorcycle_program_subtitle:
      "قابل اعتماد موٹر سائیکل اور اسکوٹر پلانز کے ساتھ سفر کی آزادی۔",
    affordable_installments: "سستی اقساط",
    popular_brands: "مشہور برانڈز اور ماڈلز",
    quick_easy_process: "تیز اور آسان طریقہ کار",
    personal_family_use: "ذاتی اور خاندانی استعمال کے لیے بہترین",
    safety_maintenance_support: "حفاظت اور دیکھ بھال کی سپورٹ",
    view_motorcycle_program: "موٹر سائیکل پروگرام دیکھیں",

    savings_programs: "ہمارے سیونگ پروگرامز",
    savings_programs_subtitle:
      "اپنی ترقی اور طویل مدتی تحفظ کے لیے منظور شدہ پروگرامز دریافت کریں۔",
    tailored_savings: "حسب ضرورت سیونگ پلانز",
    flexible_contributions: "لچکدار شراکت کے اختیارات",
    secure_transparent_process: "محفوظ اور شفاف طریقہ کار",
    exclusive_opportunities: "خصوصی مواقع تک رسائی",
    dedicated_support: "مخصوص سپورٹ اور رہنمائی",
    explore_savings_programs: "سیونگ پروگرامز دیکھیں",

    programs_for: "پروگرامز برائے",
    participation_savings: "شرکت اور بچت۔",
    programs_description:
      "ہمارے منظور شدہ پروگرامز دریافت کریں اور روشن مستقبل کی طرف اگلا قدم بڑھائیں۔ آسان، محفوظ اور مواقع سے بھرپور۔",
    all_programs: "تمام پروگرامز",
    shop_savings: "شاپ اور سیونگ",
    motorcycle_scooter: "موٹر سائیکل / اسکوٹر",
    other_programs: "دیگر پروگرامز",

    who_we_are_hero: "ہم کون ہیں",
    time_intro:
      "YES TIME GLOBAL ایک قابل اعتماد بین الاقوامی پلیٹ فارم ہے جو ممبران کو قابل رسائی گاڑیوں کے منصوبوں، رئیل اسٹیٹ منصوبوں اور خودکار سیونگ پروگرامز سے جوڑتا ہے۔",
    time_second:
      "ہم ایسے پروگرامز اور اسٹریٹجک شراکت داریاں بناتے ہیں جو افراد اور کمیونٹیز کو ترقی، کامیابی اور مشترکہ پیش رفت کے لیے بااختیار بناتے ہیں۔",
    mission: "مشن",
    mission_text:
      "عالمی رسائی اور مشترکہ مواقع کے ذریعے زندگیوں کو بااختیار بنانا۔",
    vision: "ویژن",
    vision_text:
      "سب کے لیے شفاف اور مساوی مواقع کی ایک مربوط دنیا۔",
    core_values: "بنیادی اقدار",
    core_values_text:
      "اعتماد، دیانت، شفافیت اور پائیدار ترقی پر مبنی۔",
    discover_full_story: "مکمل کہانی دریافت کریں",

    how_it_works_title: "یہ کیسے کام کرتا ہے",
    getting_started: "شروع کرنا ہے",
    simple: "آسان",
    works_description:
      "ان آسان مراحل پر عمل کریں اور آج ہی YES TIME GLOBAL کے ساتھ اپنا سفر شروع کریں۔",
    choose_your_program: "اپنا پروگرام منتخب کریں",
    choose_program_desc:
      "اپنی ضروریات اور مستقبل کے منصوبوں کے مطابق پروگرام منتخب کریں۔",
    complete_the_process: "عمل مکمل کریں",
    complete_process_desc:
      "ہمارے آسان، شفاف اور محفوظ ممبرشپ کے طریقہ کار پر عمل کریں۔",
    start_journey_desc:
      "اپنے پروگرام تک رسائی حاصل کریں اور بہتر مستقبل کی طرف قدم بڑھائیں۔",

    // Building
    about_yes_time_global: "YES TIME GLOBAL کے بارے میں",
    building_connections: "رابطے قائم کرنا۔",
    creating_opportunities: "مواقع پیدا کرنا۔",
    changing_futures: "مستقبل بدلنا۔",
    discover_our_story: "ہماری کہانی دریافت کریں",
    founded: "قیام",
    powerful_programs: "طاقتور پروگرامز",
    transparent: "شفاف",
    global: "عالمی",
    opportunities: "مواقع",

    // Connecting
    who_we_are_section: "ہم کون ہیں",
    connecting_people: "لوگوں،",
    businesses_opportunities: "کاروباروں اور",
    opportunities_full: "مواقع کو جوڑنا۔",
    connecting_intro_1:
      "2023 میں قائم ہونے والی YES TIME GLOBAL PRIVATE LIMITED ایک ایسے وژن کے ساتھ وجود میں آئی جس کا مقصد لوگوں، کاروباروں اور کمیونٹیز کے آپس میں رابطے کے طریقے کو بہتر بنانا تھا۔",
    connecting_intro_2:
      "ایک پُرعزم خیال سے شروع ہونے والا یہ سفر ایک قابل اعتماد پلیٹ فارم بن چکا ہے، جو ہزاروں صارفین کو شاپنگ، گاڑیوں، پراپرٹی، زراعت اور دیگر شعبوں میں زندگی بدلنے والے مواقع سے جوڑتا ہے۔ ہم شفاف طریقہ کار کے ذریعے افراد کو زیادہ بچت، بہتر سرمایہ کاری اور مستقل کامیابی حاصل کرنے کے لیے بااختیار بناتے ہیں۔",
    our_core_pillars: "ہماری بنیادی اقدار",
    connect_empower: "رابطہ اور بااختیار بنانا",
    global_leadership: "عالمی قیادت",
    trust_innovation: "اعتماد اور جدت",
    global_reach: "عالمی رسائی",
    transparent_100: "100% شفاف",
    strategic_partners: "اسٹریٹجک شراکت دار",
    discover_full_story_button: "ہماری مکمل کہانی دریافت کریں",
    since_2023: "2023 سے",
    global_network_label: "عالمی نیٹ ورک",
    community_first: "کمیونٹی پہلے",

    // Ecosystem
    our_ecosystem: "ہمارا ایکو سسٹم",
    one_ecosystem: "ایک ایکو سسٹم۔ متعدد",
    ecosystem_opportunities: "مواقع۔",
    shopping_savings: "شاپنگ اور بچت",
    shopping_savings_desc: "سمارٹ شاپنگ، بہتر بچت",
    vehicles_solutions: "گاڑیوں کے حل",
    vehicles_solutions_desc: "آسان نقل و حرکت کے حل",
    property_opportunities: "پراپرٹی کے مواقع",
    property_opportunities_desc: "پراپرٹی اور رئیل اسٹیٹ تک رسائی",
    agriculture_farming: "زراعت اور کاشتکاری",
    agriculture_farming_desc: "کسانوں اور زراعت کی معاونت",
    business_solutions: "کاروباری حل",
    business_solutions_desc: "کاروباروں کو ترقی کے لیے بااختیار بنانا",

    // Vision & Mission
    our_vision_mission: "ہمارا وژن اور مشن",
    vision_mission_desc:
      "رہنما اصول جو ہمارے ایکو سسٹم کو پائیدار ترقی اور مشترکہ کامیابی کی طرف لے جاتے ہیں۔",
    our_vision: "ہمارا وژن",
our_mission: "ہمارا مشن",
    purpose: "01 / مقصد",
    action: "02 / عمل",
    vision_description:
      "ایک عالمی رہنما بننا جہاں افراد اور کاروبار ایک قابل اعتماد اور جدید ایکو سسٹم کے ذریعے ایسے مواقع تک رسائی حاصل کر سکیں جو سب کے لیے ترقی، تحفظ اور خوشحالی لائیں۔",
    vision_highlight:
      "سب کے لیے مساوی مواقع کی دنیا۔",
    mission_description:
      "قابل رسائی پروگرامز، اسٹریٹجک شراکت داری اور شفاف طریقہ کار کے ذریعے لوگوں، کاروباروں اور مواقع کو جوڑنا، تاکہ کمیونٹیز کو ترقی، کامیابی اور مشترکہ پیش رفت کے لیے بااختیار بنایا جا سکے۔",
    mission_highlight:
      "لوگوں کو بااختیار بنائیں۔ اعتماد قائم کریں۔ دیرپا اثر پیدا کریں۔",
  },

  AR: {
    badge_featured_events: "الفعاليات المميزة",
    featured_events_heading: "الفعاليات العالمية",
    featured_events_subtext: "استكشف فعالياتنا المميزة من خلال مقاطع الفيديو الجذابة، واكتشف فرصاً جديدة وتواصل مع قادة الأعمال الدوليين والمستثمرين.",
    watch_video_tag: "شاهد الفيديو",
    status_upcoming: "قادم",
    category_conference: "مؤتمر",
    category_workshop: "ورشة عمل",
    category_seminar: "ندوة",
    category_networking: "تواصل",

    // Event 1
    event1_title: "قمة الأعمال العالمية 2026",
    event1_desc: "تجربة حوارات الأعمال العالمية، والتواصل مع قادة القطاع واكتشاف...",
    event1_date: "15 سبتمبر 2026",
    event1_time: "09:00 صباحاً - 05:00 مساءً",
    event1_location: "دبي، الإمارات",
    event1_attendees: "500 مشارك",

    // Event 2
    event2_title: "ورشة عمل ريادة الأعمال",
    event2_desc: "استكشف استراتيجيات ريادة الأعمال العملية، وأفكار المشاريع والرؤى القيمة...",
    event2_date: "22 سبتمبر 2026",
    event2_time: "10:00 صباحاً - 04:00 مساءً",
    event2_location: "مومباي، الهند",
    event2_attendees: "200 مشارك",

    // Event 3
    event3_title: "ندوة الرؤى المالية",
    event3_desc: "احصل على رؤى مالية قيمة، واستكشف أساليب الاستثمار الذكي وتعلم التخطيط...",
    event3_date: "5 أكتوبر 2026",
    event3_time: "02:00 مساءً - 05:00 مساءً",
    event3_location: "سنغافورة",
    event3_attendees: "300 مشارك",

    // Event 4
    event4_title: "ملتقى القيادات النسائية",
    event4_desc: "التقِ برائدات الأعمال الملهمات، وتبادل الأفكار والخبرات وابنِ علاقات مهنية...",
    event4_date: "12 أكتوبر 2026",
    event4_time: "10:30 صباحاً - 01:00 مساءً",
    event4_location: "لندن، المملكة المتحدة",
    event4_attendees: "150 مشارك",

    // Event 5
    event5_title: "منتدى التحول الرقمي",
    event5_desc: "اكتشف كيف تساهم الابتكارات الرقمية والتقنيات الحديثة في تطوير الأعمال...",
    event5_date: "20 أكتوبر 2026",
    event5_time: "09:00 صباحاً - 06:00 مساءً",
    event5_location: "نيويورك، الولايات المتحدة",
    event5_attendees: "400 مشارك",
    footer_logoAlt: "شعار يس تايم جوبال",
    footer_companyName: "يس تايم جوبال المحدودة",
    footer_companyDescription: "ربط الفرص العالمية بالابتكار والشفافية والثقة من خلال برامج السيارات والمشاريع العقارية وخطط التوفير الآلية.",
    footer_badgeText: "الشفافية • الثقة • سهولة الوصول",
    footer_titles_ourPrograms: "برامجنا",
    footer_titles_quickLinks: "روابط سريعة",
    footer_titles_contactUs: "اتصل بنا",
    footer_programs_carPlan: "برنامج السيارات",
    footer_programs_propertySaving: "البرنامج العقاري",
    footer_programs_motorcycleSaving: "المركبات",
    footer_programs_shoppingSaving: "التسوق والادخار",
    footer_programs_selfSaving: "نظام الادخار الآلي",
    footer_quickLinks_about: "من نحن",
    footer_quickLinks_visionMission: "الرؤية والرسالة",
    footer_quickLinks_businessPartners: "شركاء الأعمال",
    footer_quickLinks_banks: "البنوك والمؤسسات المالية",
    footer_quickLinks_faqs: "الأسئلة الشائعة والدعم",
    footer_contact_headOffice: "المقر الرئيسي ليس تايم جوبال",
    footer_contact_location: "لاهور، باكستان",
    footer_legal_copyright: "© 2026 يس تايم جوبال المحدودة. جميع الحقوق محفوظة.",
    footer_legal_privacy: "سياسة الخصوصية",
    footer_legal_terms: "الشروط والأحكام",
    footer_legal_disclaimer: "إخلاء المسؤولية القانونية",

    // Event 6
    event6_title: "قمة الشراكة والنمو",
    event6_desc: "استكشف الشراكات الاستراتيجية، وتواصل مع قادة الأعمال الطموحين واكتشف...",
    event6_date: "1 نوفمبر 2026",
    event6_time: "08:30 صباحاً - 05:30 مساءً",
    event6_location: "طوكيو، اليابان",
    event6_attendees: "350 مشارك",
    badge_global_events: "الفعاليات العالمية",
    events_hero_title_part1: "تواصل، تعلّم و",
    events_hero_title_part2: "تنامى معاً.",
    events_hero_description: "انضم إلى فعاليات حصرية حيث يجتمع رواد الأعمال والمستثمرون والشركاء لبناء روابط ذات مغزى وفتح فرص عالمية.",
    stat_annual_events: "فعاليات سنوية",
    stat_attendees: "حاضرون",
    stat_countries: "دول",
    btn_explore_events: "استكشف الفعاليات",
    btn_learn_more: "اعرف المزيد",
    alt_global_network_globe: "شبكة العالم",
    aria_scroll_down: "التمرير لأسفل",
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
    refund_cancellation: "الاسترداد والإلغاء",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    sign_in: "تسجيل الدخول",
    contact_us: "اتصل بنا",

    connect_to: "تواصل مع",
    global_opportunities: "الفرص العالمية.",
    connect_description:
      "تقدم YES TIME GLOBAL PRIVATE LIMITED برامج وشراكات ميسرة تربط الأشخاص والشركات والفرص حول العالم.",
    explore_programs: "استكشف البرامج",
    global_network: "شبكة عالمية",
    global_network_desc: "تواصل مع شركاء موثوقين حول العالم.",
    trusted_platform: "منصة موثوقة",
    trusted_platform_desc: "آمنة وشفافة وتركز على الأعضاء.",
    real_impact: "تأثير حقيقي",
    real_impact_desc: "فرص تخلق النمو والتغيير.",
    always_with_you: "دائماً معك",
    always_with_you_desc: "دعم على مدار الساعة لجميع أعضائنا.",

    why_choose_us: "لماذا تختارنا",
    why_join: "لماذا تنضم إلى YES TIME GLOBAL؟",
    secure_reliable: "آمن وموثوق",
    secure_reliable_desc:
      "أمنك وسلامتك التشغيلية دائماً على رأس أولوياتنا.",
    place_for_everyone: "مكان للجميع",
    place_for_everyone_desc:
      "مساحة ترحيبية يتمتع فيها الجميع بفرصة متساوية للنمو.",
    modern_solutions: "حلول حديثة",
    modern_solutions_desc:
      "تحسينات تقنية مستمرة لتجربة أفضل.",
    creating_real_change: "إحداث تغيير حقيقي",
    creating_real_change_desc:
      "فرص ميسرة تخلق تغييراً حقيقياً ومستداماً.",
    success_comes_first: "نجاحك أولاً",
    success_comes_first_desc:
      "نحن ملتزمون بنموك وتقدمك ونجاحك على المدى الطويل.",
    join_description:
      "نحن ملتزمون ببناء منصة شفافة تركز على أمنك ونموك طويل الأمد وتمكينك المالي.",

    start_your_journey: "ابدأ رحلتك",
    move_forward_with: "تقدم إلى الأمام",
    confidence: "بثقة.",
    journey_description:
      "استكشف البرامج العملية والشراكات الموثوقة المصممة لربط فرصتك القادمة بمجتمع عالمي أكبر.",
    built_on_transparency: "مبني على الشفافية والثقة والتقدم المشترك.",
    talk_to_our_team: "تحدث إلى فريقنا",

    management_team: "فريق الإدارة",
    meet_people_behind: "تعرف على الأشخاص وراء",
    people_description:
      "نسترشد بالخبرة والمساءلة والالتزام المشترك بربط الفرص حول العالم.",

    most_popular: "الأكثر شعبية",
    shopping_program: "برنامج التسوق لدينا",
    shopping_program_subtitle:
      "تسوق بثقة ووفر أكثر واستمتع بمزايا الأعضاء الحصرية.",
    exclusive_discounts: "خصومات حصرية",
    cashback_rewards: "مكافآت استرداد نقدي",
    partner_shops: "شبكة واسعة من المتاجر الشريكة",
    flexible_plan_terms: "شروط خطط مرنة",
    view_shopping_program: "عرض برنامج التسوق",

    car_program: "برنامج السيارات",
    car_program_subtitle:
      "توجه نحو أحلامك مع خطط سيارات ميسرة ومرنة.",
    easy_monthly_plans: "خطط شهرية سهلة",
    car_options: "مجموعة واسعة من السيارات",
    transparent_process: "عملية شفافة",
    ownership_with_confidence: "ملكية بثقة",
    comprehensive_support: "دعم وإرشاد شامل",
    view_car_program: "عرض برنامج السيارات",

    motorcycle_program: "برنامج الدراجات النارية",
    motorcycle_program_subtitle:
      "حرية الحركة مع خطط موثوقة للدراجات النارية والسكوترات.",
    affordable_installments: "أقساط ميسرة",
    popular_brands: "علامات ونماذج مشهورة",
    quick_easy_process: "عملية سريعة وسهلة",
    personal_family_use: "مثالية للاستخدام الشخصي والعائلي",
    safety_maintenance_support: "دعم السلامة والصيانة",
    view_motorcycle_program: "عرض برنامج الدراجات",

    savings_programs: "برامج الادخار لدينا",
    savings_programs_subtitle:
      "استكشف البرامج المعتمدة المصممة لنموك وأمانك على المدى الطويل.",
    tailored_savings: "خطط ادخار مخصصة",
    flexible_contributions: "خيارات مساهمة مرنة",
    secure_transparent_process: "عملية آمنة وشفافة",
    exclusive_opportunities: "الوصول إلى فرص حصرية",
    dedicated_support: "دعم وإرشاد مخصص",
    explore_savings_programs: "استكشف برامج الادخار",
    badge_why_attend: "لماذا تحضر",
    why_attend_heading_start: "لماذا تنضم إلى",
    why_attend_heading_accent: "فعالياتنا؟",
    why_attend_subtext: "تم تصميم فعالياتنا بعناية لخلق اتصالات ذات مغزى وتقديم رؤى قابلة للتطبيق تُحدث تحولاً في نموك الشخصي والمهني.",

    why_attend_card1_title: "التواصل العالمي",
    why_attend_card1_desc: "تواصل مباشرة مع رواد الأعمال والمستثمرين والشركاء الاستراتيجيين من أكثر من 30 دولة حول العالم لتوسيع نطاقك الدولي.",

    why_attend_card2_title: "رؤى الخبراء",
    why_attend_card2_desc: "تعلم من قادة الصناعة البارزين وراد الأعمال الناجحين الذين يشاركون استراتيجيات سوقية مثبتة وحكمة اكتسبوها عبر الخبرة.",

    why_attend_card3_title: "بيئة آمنة وشاملة",
    why_attend_card3_desc: "استمتع ببيئة مرحبة تدار باحترافية تضمن للجميع الحصول على فرصة متساوية للنمو والنجاح بأمان.",

    why_attend_card4_title: "نمو الأعمال",
    why_attend_card4_desc: "اكتشف فرص أعمال عالية التأثير وقنوات تمويل وأفكاراً مبتكرة مخصصة لتسريع نمو مؤسستك وتوسعك.",

    why_attend_card5_title: "شراكات دائمة",
    why_attend_card5_desc: "ابنِ علاقات مهنية عميقة تتطور بسلاسة من مجرد تواصل عابر إلى تعاون تجاري طويل الأجل ومربح.",

    why_attend_card6_title: "موارد حصرية",
    why_attend_card6_desc: "احصل على وصول حصري لأدوات ممتازة قابلة للتنزيل وقوالب استراتيجية وتقارير بحثية لمنح مشروعك ميزة تنافسية.",

    programs_for: "برامج",
    participation_savings: "المشاركة والادخار.",
    programs_description:
      "استكشف برامجنا المعتمدة واتخذ الخطوة التالية نحو مستقبل أكثر إشراقاً. بسيطة وآمنة ومليئة بالفرص.",
    all_programs: "جميع البرامج",
    shop_savings: "التسوق والادخار",
    motorcycle_scooter: "دراجة نارية / سكوتر",
    other_programs: "برامج أخرى",

    who_we_are_hero: "من نحن",
    time_intro:
      "في YES TIME GLOBAL، نحن منصة دولية موثوقة تربط الأعضاء ببرامج السيارات المتاحة والمشاريع العقارية وبرامج الادخار الآلية.",
    time_second:
      "ننشئ برامج وشراكات استراتيجية تمكن الأفراد والمجتمعات من النمو وتحقيق النجاح معاً.",
    mission: "المهمة",
    mission_text:
      "تمكين الحياة من خلال الوصول العالمي والفرص المشتركة.",
    vision: "الرؤية",
    vision_text:
      "عالم مترابط من الفرص الشفافة والمتساوية للجميع.",
    core_values: "القيم الأساسية",
    core_values_text:
      "مبنية على الثقة والنزاهة والشفافية والنمو المستدام.",
    discover_full_story: "اكتشف القصة الكاملة",

    how_it_works_title: "كيف يعمل",
    getting_started: "البدء",
    simple: "بسيط",
    works_description:
      "اتبع هذه الخطوات السهلة وابدأ رحلتك مع YES TIME GLOBAL اليوم.",
    choose_your_program: "اختر برنامجك",
    choose_program_desc:
      "اختر البرنامج الذي يناسب احتياجاتك وخططك المستقبلية.",
    complete_the_process: "أكمل العملية",
    complete_process_desc:
      "اتبع عملية العضوية البسيطة والشفافة والآمنة.",
    start_journey_desc:
      "احصل على برنامجك وابدأ طريقك نحو مستقبل أفضل.",

    // Building
    about_yes_time_global: "عن YES TIME GLOBAL",
    building_connections: "بناء الروابط.",
    creating_opportunities: "خلق الفرص.",
    changing_futures: "تغيير المستقبل.",
    discover_our_story: "اكتشف قصتنا",
    founded: "تأسست",
    powerful_programs: "برامج قوية",
    transparent: "شفاف",
    global: "عالمي",
    opportunities: "الفرص",

    // Connecting
    who_we_are_section: "من نحن",
    connecting_people: "ربط الأشخاص،",
    businesses_opportunities: "والشركات و",
    opportunities_full: "الفرص.",
    connecting_intro_1:
      "تأسست YES TIME GLOBAL PRIVATE LIMITED في عام 2023 برؤية طموحة لإحداث تغيير في طريقة تواصل الأشخاص والشركات والمجتمعات.",
    connecting_intro_2:
      "ما بدأ كفكرة طموحة أصبح منصة موثوقة تربط آلاف المستخدمين بفرص مؤثرة في التسوق والمركبات والعقارات والزراعة وغيرها. نحن نمكّن الأفراد من خلال عمليات شفافة تساعدهم على الادخار بشكل أفضل والاستثمار بذكاء وبناء نجاح مستدام.",
    our_core_pillars: "ركائزنا الأساسية",
    connect_empower: "التواصل والتمكين",
    global_leadership: "القيادة العالمية",
    trust_innovation: "الثقة والابتكار",
    global_reach: "الوصول العالمي",
    transparent_100: "شفافية 100%",
    strategic_partners: "شركاء استراتيجيون",
    discover_full_story_button: "اكتشف قصتنا الكاملة",
    since_2023: "منذ 2023",
    global_network_label: "شبكة عالمية",
    community_first: "المجتمع أولاً",

    // Ecosystem
    our_ecosystem: "منظومتنا",
    one_ecosystem: "منظومة واحدة. فرص",
    ecosystem_opportunities: "متعددة.",
    shopping_savings: "التسوق والادخار",
    shopping_savings_desc: "تسوق ذكي، ادخار أفضل",
    vehicles_solutions: "حلول المركبات",
    vehicles_solutions_desc: "حلول تنقل سهلة",
    property_opportunities: "فرص العقارات",
    property_opportunities_desc: "الوصول إلى العقارات والاستثمار العقاري",
    agriculture_farming: "الزراعة",
    agriculture_farming_desc: "دعم المزارعين والزراعة",
    business_solutions: "حلول الأعمال",
    business_solutions_desc: "تمكين الشركات من النمو",

    // Vision & Mission
    our_vision_mission: "رؤيتنا ورسالتنا",
    vision_mission_desc:
      "مبادئ توجيهية تدفع منظومتنا نحو النمو المستدام والنجاح المشترك.",
    our_vision: "رؤيتنا",
    our_mission: "رسالتنا",
    purpose: "01 / الهدف",
    action: "02 / العمل",
    vision_description:
      "أن نكون رائدًا عالميًا في إنشاء منظومة موثوقة ومبتكرة تتيح للأفراد والشركات الوصول إلى فرص مؤثرة تحقق النمو والأمان والازدهار للجميع.",
    vision_highlight:
      "عالم من الفرص المتساوية للجميع.",
    mission_description:
      "ربط الأشخاص والشركات والفرص من خلال البرامج المتاحة والشراكات الاستراتيجية والعمليات الشفافة، وتمكين المجتمعات من النمو والإنجاز والنجاح معًا.",
    mission_highlight:
      "تمكين الناس. بناء الثقة. خلق تأثير مستدام.",
      sign_in: "تسجيل الدخول",
    sign_up: "إنشاء حساب",
    full_name: "الاسم الكامل",
    email_address: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirm_password: "تأكيد كلمة المرور",
    create_account: "إنشاء حساب",
    enter_your_name_placeholder: "أدخل اسمك",
    passwords_do_not_match: "كلمتا المرور غير متطابقتين",
    user_already_exists: "المستخدم بهذا البريد الإلكتروني موجود بالفعل!",
    account_created_success: "تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول الآن.",
    invalid_email_password: "البريد الإلكتروني أو كلمة المرور غير صالحة!",
    logged_in_success: "تم تسجيل الدخول بنجاح!"
  }
};

export const useLanguage = () => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_lang') || 'EN';
  });

  useEffect(() => {
    // 1. Sync document direction
    const isRtl = lang === 'UR' || lang === 'AR';
    const direction = isRtl ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.body.dir = direction;

    // 2. Custom event listener (within-app tab updates)
    const handleLanguageChanged = (event) => {
      const newLang = event.detail || localStorage.getItem('app_lang') || 'EN';
      setLang(newLang);
    };

    // 3. Storage listener (cross-tab updates)
    const handleStorageChange = (e) => {
      if (e.key === 'app_lang' && e.newValue) {
        setLang(e.newValue);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChanged);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChanged);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [lang]);

  const changeLanguage = (code) => {
    setLang(code);
    localStorage.setItem('app_lang', code);

    // Notify all instances in current tab
    window.dispatchEvent(
      new CustomEvent('languageChanged', {
        detail: code
      })
    );
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations.EN?.[key] || key;
  };

  return {
    lang,
    changeLanguage,
    t
  };
};