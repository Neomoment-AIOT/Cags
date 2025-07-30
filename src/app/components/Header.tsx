"use client";

import React, { useState, useEffect, useRef } from 'react';
import CompanySubMenu from './CompanySubMenu';
import ProductSubMenu from './ProductSubMenu';
import ContactSubMenu from './ContactSubMenu';
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

type Translation = { [key: string]: string };
type Translations = { [lang: string]: Translation };

export default function TranslatedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState('English');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const translations: Translations = {
    English: { home: "Home", company: "Company", brands: "Brands", products: "Products", distribution: "Distribution", news: "News", contact: "Contact", language: "Language" },
    Russian: { home: "Главная", company: "Компания", brands: "Бренды", products: "Продукты", distribution: "Дистрибуция", news: "Новости", contact: "Контакт", language: "Язык" },
    French: { home: "Accueil", company: "Entreprise", brands: "Marques", products: "Produits", distribution: "Distribution", news: "Actualités", contact: "Contact", language: "Langue" },
    Arabic: { home: "الرئيسية", company: "الشركة", brands: "العلامات التجارية", products: "المنتجات", distribution: "التوزيع", news: "الأخبار", contact: "اتصل بنا", language: "لغة" }
  };

  const t = (key: string): string => translations[language]?.[key] || key;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.setAttribute('dir', language === 'Arabic' ? 'rtl' : 'ltr');
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

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
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  const otherLanguages = ['English', 'French', 'Russian', 'Arabic'].filter(lang => lang !== language);

  return (
    <header className={`w-full fixed top-0 z-[1000] transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="border-b border-black">
        <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 p-2">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src="/Logo.png" alt="Logo" className="h-10 mr-4 ml-2 p-1" onError={(e) => e.currentTarget.src = 'https://placehold.co/150x40?text=Logo'} />
            </a>

            {/* Desktop Navigation - Unchanged from your original */}
            <nav className={`hidden xl:flex`}>
              <a href="/" className={Styles.menu_item}>{t('home')}</a>
              <div className={`${Styles.dropdownMenu_Item} relative group`} onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
                <a href="#" className={Styles.menu_item}>{t('company')}</a>
                <CompanySubMenu isOpen={openDropdown === 'company'} />
              </div>

              <a href="/brands" className={Styles.menu_item}>{t('brands')}</a>
              <div className={`${Styles.dropdownMenu_Item} relative group`} onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
                <a href="#" className={Styles.menu_item}>{t('products')}</a>
                <ProductSubMenu isOpen={openDropdown === 'products'} />
              </div>

              <a href="/distribution" className={Styles.menu_item}>{t('distribution')}</a>
              <a href="/events" className={Styles.menu_item}>{t('news')}</a>

              <div className={`${Styles.dropdownMenu_Item} relative group`} onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>
                <a href="/contact" className={Styles.menu_item}>{t('contact')}</a>
                <ContactSubMenu isOpen={openDropdown === 'contact'} />
              </div>

              <div className="relative">
                <a onClick={() => toggleDropdown('language')} className={Styles.menu_item}>{t('language')}</a>
                {openDropdown === 'language' && (
                  <div className="absolute right-0 mt-4 w-48 bg-[#E7E6E6] shadow-lg py-1 z-50">
                    {otherLanguages.map(lang => (
                      <button key={lang} onClick={() => handleLanguageChange(lang)} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-white-100">
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile menu button - Now properly positioned */}
            <div className="xl:hidden flex items-center  ml-2">
              <button 
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-700 focus:outline-none p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <IconX size={20} /> : <IconMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tab Drawer Navigation - Improved positioning and animation */}
        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl z-[1001] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '80px' }}
        >
          <div className="h-full w-[100%] overflow-y-auto p-4 space-y-2">
            {/* Home */}
            <a
              href="/"
              className="block text-lg font-medium text-gray-700 hover:bg-gray-100 px-3 py-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </a>

            {/* Company */}
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown('company-mobile')}
                className="w-full flex justify-between items-center px-3 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {t('company')}
                <IconChevronDown className={`ml-2 h-4 w-4 transition-transform ${openDropdown === 'company-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'company-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  <a 
                    href="/about" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </a>
                  <a 
                    href="/history" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    History
                  </a>
                  <a 
                    href="/certificates" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Certification
                  </a>
                </div>
              )}
            </div>

            {/* Brands */}
            <a
              href="/brands"
              className="block text-lg font-medium text-gray-700 hover:bg-gray-100 px-3 py-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('brands')}
            </a>

            {/* Products */}
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown('products-mobile')}
                className="w-full flex justify-between items-center px-3 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {t('products')}
                <IconChevronDown className={`ml-2 h-4 w-4 transition-transform ${openDropdown === 'products-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'products-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  <a 
                    href="/products/papers" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Rolling Papers
                  </a>
                  <a 
                    href="/products/tubes" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cigarette Tubes
                  </a>
                  <a 
                    href="/products/tobacco" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tobacco
                  </a>
                  <a 
                    href="http://www.my10bak.com/" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                   Water Pipe
                  </a>
                  <a 
                    href="/products/accessories" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                   Accessories
                  </a>
                </div>
              )}
            </div>

            {/* Distribution */}
            <a
              href="/distribution"
              className="block text-lg font-medium text-gray-700 hover:bg-gray-100 px-3 py-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('distribution')}
            </a>

            {/* News */}
            <a
              href="/events"
              className="block text-lg font-medium text-gray-700 hover:bg-gray-100 px-3 py-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('news')}
            </a>

            {/* Contact */}
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown('contact-mobile')}
                className="w-full flex justify-between items-center px-3 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {t('contact')}
                <IconChevronDown className={`ml-2 h-4 w-4 transition-transform ${openDropdown === 'contact-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'contact-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  <a 
                    href="/career" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Career
                  </a>
                  <a 
                    href="/faqs" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </a>
                  <a 
                    href="/contact" 
                    className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Communications
                  </a>
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="space-y-1 border-t border-gray-200 pt-2">
              <button
                onClick={() => toggleDropdown('language-mobile')}
                className="w-full flex justify-between items-center px-3 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {t('language')}
                <IconChevronDown className={`ml-2 h-4 w-4 transition-transform ${openDropdown === 'language-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'language-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {otherLanguages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="block w-full text-left px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overlay - Improved click handling */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[1000] transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
