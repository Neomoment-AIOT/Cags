"use client";

import React, { useState, useEffect, useRef } from 'react';
import Styles from './style.module.css';

const IconChevronDown = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 011.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" />
  </svg>
);

const IconMenu = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
  </svg>
);

const IconX = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19.778 5.636L18.364 4.222 12 10.586 5.636 4.222 4.222 5.636 10.586 12l-6.364 6.364 1.414 1.414L12 13.414l6.364 6.364 1.414-1.414L13.414 12z" />
  </svg>
);

type Translations = {
  [lang: string]: {
    home: string;
    history: string;
    vision: string;
    mission: string;
    certifications: string;
    career: string;
    faqs: string;
    privacy: string;
    overview: string;
    homeUrl: string;
    company: string;
    companyUrl: string;
    overviewUrl: string;
    historyUrl: string;
    visionUrl: string;
    missionUrl: string;
    certificationsUrl: string;
    brands: string;
    brandsUrl: string;
    products: string;
    productsUrl: string;
    distribution: string;
    distributionUrl: string;
    news: string;
    newsUrl: string;
    contact: string;
    contactUrl: string;
    language: string;
    papersUrl: string;
    tubesUrl: string;
    accessoriesUrl: string;
    tobaccoUrl: string;
    careerUrl: string;
    faqsUrl: string;
    privacyUrl: string;
    tubes: string;
    accessories: string;
    tobacco: string;
    papers: string;
    communication: string;
    communicationUrl: string;
    waterpipe: string;
    waterpipeUrl: string;
  };
};

export default function TranslatedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState('English');
  let timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const translations: Translations = {
    English: {
      home: "Home", homeUrl: "/",
      company: "Company", companyUrl: "/about",
      brands: "Brands", brandsUrl: "/brands",
      products: "Products", productsUrl: "/products",
      distribution: "Distribution", distributionUrl: "/distribution",
      news: "News", newsUrl: "/events",
      contact: "Contact", contactUrl: "/contact",
      language: "Language",
      career: "Career", careerUrl: "/career",
      faqs: "FAQs", faqsUrl: "/faqs",
      privacy: "Privacy", privacyUrl: "/privacypolicy",
      overview: "Overview", overviewUrl: "/about/overview",
      history: "History", historyUrl: "/history",
      vision: "Vision", visionUrl: "/about/vision",
      mission: "Mission", missionUrl: "/about/mission",
      certifications: "Certifications", certificationsUrl: "/certificates",
      tubes: "Cigarette Tubes", tubesUrl: "/products/tubes",
      accessories: "Accessories", accessoriesUrl: "/products/accessories",
      tobacco: "Tobacco", tobaccoUrl: "/products/tobacco",
      papers: "Rolling Papers", papersUrl: "/products/papers",
      communication: "Communication", communicationUrl: "/contact",
      waterpipe: "Waterpipes", waterpipeUrl: "http://www.my10bak.com/",
    },
    Russian: {
      home: "Главная", homeUrl: "/home/HomeRu",
      company: "Компания", companyUrl: "/about/aboutRu",
      brands: "Бренды", brandsUrl: "/brands/brandsRu",
      products: "Продукты", productsUrl: "/products/productsRu",
      distribution: "Дистрибуция", distributionUrl: "/distribution/distributionRu",
      news: "Новости", newsUrl: "/events/eventsRu",
      contact: "Контакт", contactUrl: "/contact/contactRu",
      language: "Язык",
      career: "Карьера", careerUrl: "/career/careerRu",
      faqs: "Частые вопросы", faqsUrl: "/faqs/faqsRu",
      privacy: "Конфиденциальность", privacyUrl: "/privacypolicy/privacypolicyRu",
      overview: "Обзор", overviewUrl: "/about/aboutRu",
      history: "История", historyUrl: "/history/historyRu",
      vision: "Видение", visionUrl: "/about/visionRu",
      mission: "Миссия", missionUrl: "/about/missionRu",
      certifications: "Сертификаты", certificationsUrl: "/certificates/certificatesRu",
      tubes: "Трубки", tubesUrl: "/products/productsRu/tubes",
      accessories: "Аксессуары", accessoriesUrl: "/products/productsRu/accessories",
      tobacco: "Табак", tobaccoUrl: "/products/productsRu/tobacco",
      papers: "Бумага", papersUrl: "/products/productsRu/papers",
      communication: "Связь", communicationUrl: "/contact/contactRu",
      waterpipe: "Вода", waterpipeUrl: "http://www.my10bak.com/",
    },
    French: {
      home: "Accueil", homeUrl: "/home/HomeFr",
      company: "Entreprise", companyUrl: "/about/aboutFr",
      brands: "Marques", brandsUrl: "/brands/brandsFr",
      products: "Produits", productsUrl: "/products/productsFr",
      distribution: "Distribution", distributionUrl: "/distribution/distributionFr",
      news: "Actualités", newsUrl: "/events/eventsFr",
      contact: "Contact", contactUrl: "/contact/contactFr",
      language: "Langue",
      career: "Carrière", careerUrl: "/career/careerFr",
      faqs: "FAQ", faqsUrl: "/faqs/faqsFr",
      privacy: "Confidentialité", privacyUrl: "/privacypolicy/privacypolicyFr",
      overview: "Aperçu", overviewUrl: "/about/aboutFr",
      history: "Histoire", historyUrl: "/history/historyFr",
      vision: "Vision", visionUrl: "/about/visionFr",
      mission: "Mission", missionUrl: "/about/missionFr",
      certifications: "Certifications", certificationsUrl: "/certificates/certificatesFr",
      tubes: "Tubes", tubesUrl: "/products/productsFr/tubes",
      accessories: "Accessoires", accessoriesUrl: "/products/productsFr/accessories",
      tobacco: "Tabac", tobaccoUrl: "/products/productsFr/tobacco",
      papers: "Papiers", papersUrl: "/products/productsFr/papers",
      communication: "Communication", communicationUrl: "/contact/contactFr",
      waterpipe: "Eau", waterpipeUrl: "http://www.my10bak.com/",
    },
    Arabic: {
      home: "الرئيسية", homeUrl: "/home/HomeAr",
      company: "الشركة", companyUrl: "/about/aboutAr",
      brands: "العلامات التجارية", brandsUrl: "/brands/brandsAr",
      products: "المنتجات", productsUrl: "/products/productsAr/",
      distribution: "التوزيع", distributionUrl: "/distribution/distributionAr",
      news: "الأخبار", newsUrl: "/events/eventsAr",
      contact: "اتصل بنا", contactUrl: "/contact/contactAr",
      language: "لغة",
      career: "وظائف", careerUrl: "/career/careerAr",
      faqs: "الأسئلة الشائعة", faqsUrl: "/faqs/faqsAr",
      privacy: "الخصوصية", privacyUrl: "/privacypolicy/privacypolicyAr",
      overview: "نظرة عامة", overviewUrl: "/about/aboutAr",
      history: "التاريخ", historyUrl: "/history/historyAr",
      vision: "الرؤية", visionUrl: "/about/visionAr",
      mission: "المهمة", missionUrl: "/about/missionAr",
      certifications: "الشهادات", certificationsUrl: "/certificates/certificatesAr",
      tubes: "الأنابيب", tubesUrl: "/products/productsAr/tubes",
      accessories: "الاكسسوارات", accessoriesUrl: "/products/productsAr/accessories",
      tobacco: "التبغ", tobaccoUrl: "/products/productsAr/tobacco",
      papers: "أوراق", papersUrl: "/products/productsAr/papers",
      communication: "التواصل", communicationUrl: "/contact/contactAr",
      waterpipe: "الماء", waterpipeUrl: "http://www.my10bak.com/",
    }
  };

  // Initialize language from localStorage or default to English
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = translations[language];
  const otherLanguages = ['English', 'French', 'Russian', 'Arabic'].filter(lang => lang !== language);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.setAttribute('dir', language === 'Arabic' ? 'rtl' : 'ltr');
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1280;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 500);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLanguageChange = (lang: string) => {
    localStorage.setItem('selectedLanguage', lang);
    setLanguage(lang);
    setOpenDropdown(null);
    setIsMenuOpen(false);
    window.location.href = translations[lang].homeUrl;
  };

  const toggleMobileSubMenu = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Submenu items data
  const subMenus = {
    company: [
      { name: t.overview, url: t.companyUrl },
      { name: t.history, url: t.historyUrl },
      { name: t.certifications, url: t.certificationsUrl }
    ],
    products: [
      { name: t.papers, url: t.papersUrl },
      { name: t.tubes, url: t.tubesUrl },
      { name: t.tobacco, url: t.tobaccoUrl },
      { name: t.waterpipe, url: t.waterpipeUrl },
      { name: t.accessories, url: t.accessoriesUrl }
    ],
    contact: [
      { name: t.career, url: t.careerUrl },
      { name: t.faqs, url: t.faqsUrl },
      { name: t.communication, url: t.communicationUrl }
    ]
  };

  return (
    <header className={`w-full fixed top-0 z-[1000] transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="border-b border-black">
        <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between h-20 p-2`}>
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src="/Logo.png" alt="Logo" className="h-10 mr-4 ml-2 p-1" onError={(e) => e.currentTarget.src = 'https://placehold.co/150x40?text=Logo'} />
            </a>

            {/* Desktop Menu */}
            <nav className={`hidden xl:flex ${language === 'Arabic' ? 'flex-row' : ''}`}>
              <a href={t.homeUrl} className={Styles.menu_item}>{t.home}</a>
              
              {/* Company Dropdown */}
              <div className={Styles.dropdownMainMenu_Item}>
                <div
                  className={`${Styles.menu_item} cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter('company')}
                  onMouseLeave={handleMouseLeave}
                >
                  {t.company}
                </div>
                {openDropdown === 'company' && (
                  <div 
                    className={`absolute mt-4 w-48 bg-[#E7E6E6] shadow-lg py-1 z-50`}
                    onMouseEnter={() => handleMouseEnter('company')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {subMenus.company.map((item) => (
                      <a 
                        key={item.name}
                        href={item.url}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-white-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href={t.brandsUrl} className={Styles.menu_item}>{t.brands}</a>
              
              {/* Products Dropdown */}
              <div className={Styles.dropdownMainMenu_Item}>
                <div
                  className={`${Styles.menu_item} cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  {t.products}
                </div>
                {openDropdown === 'products' && (
                  <div 
                    className={`absolute mt-4 w-48 bg-[#E7E6E6] shadow-lg py-1 z-50`}
                    onMouseEnter={() => handleMouseEnter('products')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {subMenus.products.map((item) => (
                      <a 
                        key={item.name}
                        href={item.url}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-white-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href={t.distributionUrl} className={Styles.menu_item}>{t.distribution}</a>
              <a href={t.newsUrl} className={Styles.menu_item}>{t.news}</a>
              
              {/* Contact Dropdown */}
              <div className={Styles.dropdownMainMenu_Item}>
                <div
                  className={`${Styles.menu_item} cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter('contact')}
                  onMouseLeave={handleMouseLeave}
                >
                  {t.contact}
                </div>
                {openDropdown === 'contact' && (
                  <div 
                    className={`absolute mt-4 w-48 bg-[#E7E6E6] shadow-lg py-1 z-50`}
                    onMouseEnter={() => handleMouseEnter('contact')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {subMenus.contact.map((item) => (
                      <a 
                        key={item.name}
                        href={item.url}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-white-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Language Dropdown */}
              <div className="relative">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('language');
                  }}
                  className={Styles.menu_item}
                >
                  {t.language}
                </a>
                {openDropdown === 'language' && (
                  <div className={`${Styles.langMainmenu}`} style={{  top: '100%', [language === 'Arabic' ? 'left' : 'left']: 0, }}>
                    {otherLanguages.map(lang => (
                      <button 
                        key={lang} 
                        onClick={() => handleLanguageChange(lang)} 
                        className={Styles.langSubmenu}>
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            {isMobile && (
              <div className="xl:hidden flex items-center ml-2">
                <button
                  ref={menuButtonRef}
                  onClick={toggleMenu}
                  className="text-gray-700 focus:outline-none p-2"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMenuOpen ? <IconX size={20} /> : <IconMenu size={20} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobile && isMenuOpen && (
        <div
          ref={drawerRef}
          className="fixed inset-0 z-[1001] bg-white transition-transform overflow-y-auto"
          style={{ 
            top: '5rem',
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <nav className="flex flex-col p-4 space-y-4">
            <a href={t.homeUrl} className={Styles.menu_item} onClick={() => setIsMenuOpen(false)}>{t.home}</a>
            
            {/* Company Mobile Menu */}
            <div>
              <div 
                className={`${Styles.menu_item} flex justify-between items-center cursor-pointer`}
                onClick={() => toggleMobileSubMenu('company')}
              >
                <span>{t.company}</span>
                <IconChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'company' ? 'rotate-180' : ''}`} />
              </div>
              {openDropdown === 'company' && (
                <div className={`${language === 'Arabic' ? 'pr-4' : 'pl-4'} mt-2 space-y-2`}>
                  {subMenus.company.map((item) => (
                    <a 
                      key={item.name}
                      href={item.url}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href={t.brandsUrl} className={Styles.menu_item} onClick={() => setIsMenuOpen(false)}>{t.brands}</a>
            
            {/* Products Mobile Menu */}
            <div>
              <div 
                className={`${Styles.menu_item} flex justify-between items-center cursor-pointer`}
                onClick={() => toggleMobileSubMenu('products')}
              >
                <span>{t.products}</span>
                <IconChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
              </div>
              {openDropdown === 'products' && (
                <div className={`${language === 'Arabic' ? 'pr-4' : 'pl-4'} mt-2 space-y-2`}>
                  {subMenus.products.map((item) => (
                    <a 
                      key={item.name}
                      href={item.url}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href={t.distributionUrl} className={Styles.menu_item} onClick={() => setIsMenuOpen(false)}>{t.distribution}</a>
            <a href={t.newsUrl} className={Styles.menu_item} onClick={() => setIsMenuOpen(false)}>{t.news}</a>
            
            {/* Contact Mobile Menu */}
            <div>
              <div 
                className={`${Styles.menu_item} flex justify-between items-center cursor-pointer`}
                onClick={() => toggleMobileSubMenu('contact')}
              >
                <span>{t.contact}</span>
                <IconChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'contact' ? 'rotate-180' : ''}`} />
              </div>
              {openDropdown === 'contact' && (
                <div className={`${language === 'Arabic' ? 'pr-4' : 'pl-4'} mt-2 space-y-2`}>
                  {subMenus.contact.map((item) => (
                    <a 
                      key={item.name}
                      href={item.url}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {/* Language Mobile Menu */}
            <div className="border-gray-200">
              <div 
                className={`${Styles.menu_item} flex justify-between items-center cursor-pointer`}
                onClick={() => toggleMobileSubMenu('language')}
              >
                <span>{t.language}</span>
                <IconChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'language' ? 'rotate-180' : ''}`} />
              </div>
              {openDropdown === 'language' && (
                <div className="mt-0 space-y-2">
                  {otherLanguages.map(lang => (
                    <button 
                      key={lang} 
                      onClick={() => handleLanguageChange(lang)} 
                      className="block text-left w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}