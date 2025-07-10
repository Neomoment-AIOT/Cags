"use client"; // This is a Client Component, necessary for using state and event handlers.

import React, { useState, useEffect } from 'react';
import CompanySubMenu from './CompanySubMenu';
import ProductSubMenu from './ProductSubMenu';
import ContactSubMenu from './ContactSubMenu';


// --- Icon Components (replaces react-icons) ---
const IconChevronDown = ({ className }: { className: string }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
    </svg>
);

const IconMenu = ({ size }: { size: number }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
    </svg>
);

const IconX = ({ size }: { size: number }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M19.778,5.636L18.364,4.222l-6.364,6.364l-6.364-6.364l-1.414,1.414l6.364,6.364l-6.364,6.364l1.414,1.414l6.364-6.364l6.364,6.364l1.414-1.414l-6.364-6.364L19.778,5.636z"></path>
    </svg>
);


// --- TypeScript Type Definitions ---
type Translation = { [key: string]: string; };
type Translations = { [languageCode: string]: Translation; };

export default function TranslatedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState('en');

  // --- Translation Data Store for the Header ---
  const translations: Translations = {
    en: { home: "Home", company: "Company", company_overview: "Overview", company_history: "History", company_certs: "Certifications", brands: "Brands", products: "Products", products_papers: "Rolling Papers", products_tubes: "Cigarette Tubes", products_tobacco: "Tobacco", products_waterpipe: "Waterpipe", products_accessories: "Accessories", distribution: "Distribution", news: "News", contact: "Contact", language: "Language" },
    ru: { home: "Главная", company: "Компания", company_overview: "Обзор", company_history: "История", company_certs: "Сертификаты", brands: "Бренды", products: "Продукты", products_papers: "Бумага для самокруток", products_tubes: "Сигаретные гильзы", products_tobacco: "Табак", products_waterpipe: "Кальян", products_accessories: "Аксессуары", distribution: "Дистрибуция", news: "Новости", contact: "Контакт", language: "Язык" },
    fr: { home: "Accueil", company: "Entreprise", company_overview: "Aperçu", company_history: "Histoire", company_certs: "Certifications", brands: "Marques", products: "Produits", products_papers: "Papiers à rouler", products_tubes: "Tubes à cigarettes", products_tobacco: "Tabac", products_waterpipe: "Narguilé", products_accessories: "Accessoires", distribution: "Distribution", news: "Actualités", contact: "Contact", language: "Langue" },
    ar: { home: "الرئيسية", company: "الشركة", company_overview: "نظرة عامة", company_history: "التاريخ", company_certs: "الشهادات", brands: "العلامات التجارية", products: "المنتجات", products_papers: "ورق لف السجائر", products_tubes: "أنابيب السجائر", products_tobacco: "التبغ", products_waterpipe: "الشيشة", products_accessories: "ملحقات", distribution: "التوزيع", news: "الأخبار", contact: "اتصل بنا", language: "لغة" }
  };

  // --- Helper function for translation ---
  const t = (key: string): string => translations[language]?.[key] || key;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Set text direction for RTL languages
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [language]);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };
  
  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setOpenDropdown(null); // Close any open dropdown
    setIsMenuOpen(false); // Close mobile menu on language change
  };

  return (
    <header className={`w-full fixed top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="border-b border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                  onError={(e) => e.currentTarget.src = 'https://placehold.co/150x40?text=Logo'}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
              <a href="/home" className="font-medium text-gray-700 hover:text-blue-600">{t('home')}</a>
              
              {/* MODIFIED: Company dropdown now uses group-hover */}
              <div className="relative group">
                <a href="#" className="flex items-center font-medium text-gray-700 hover:text-blue-600 cursor-default">
                  <span>{t('company')}</span>
                  {/* The chevron is optional for a hover menu but can be kept for consistency */}
                  <IconChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </a>
                {/* The SubMenu component will be controlled by the parent's group-hover state */}
                <CompanySubMenu/>
              </div>

              <a href="/brands" className="font-medium text-gray-700 hover:text-blue-600">{t('brands')}</a>
              
              <div className="relative group">
                <a href="#" className="flex items-center font-medium text-gray-700 hover:text-blue-600 cursor-default">
                  <span>{t('product')}</span>
                  {/* The chevron is optional for a hover menu but can be kept for consistency */}
                  <IconChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </a>
                 <ProductSubMenu/>
              </div>
              
              <a href="/distribution" className="font-medium text-gray-700 hover:text-blue-600">{t('distribution')}</a>
              <a href="/events" className="font-medium text-gray-700 hover:text-blue-600">{t('news')}</a>

              <div className="relative group">
                <a href="/contact" className="flex items-center font-medium text-gray-700 hover:text-blue-600 cursor-default">
                  <span>{t('contact')}</span>
                  {/* The chevron is optional for a hover menu but can be kept for consistency */}
                  <IconChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </a>
                 <ContactSubMenu/>
              </div>
              
              <div className="relative">
                <button onClick={() => toggleDropdown('language')} className="flex items-center font-medium text-gray-700 hover:text-blue-600">
                  <span>{t('language')}</span>
                  <IconChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${openDropdown === 'language' ? 'transform rotate-180' : ''}`} />
                </button>
                {openDropdown === 'language' && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button onClick={() => handleLanguageChange('en')} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button>
                    <button onClick={() => handleLanguageChange('fr')} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</button>
                    <button onClick={() => handleLanguageChange('ru')} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Russian</button>
                    <button onClick={() => handleLanguageChange('ar')} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Arabic</button>
                  </div>
                )}
              </div>
            </nav>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">{t('home')}</a>
              
                <div>
                  <button onClick={() => toggleDropdown('company-mobile')} className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                    {t('company')}
                    <IconChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${openDropdown === 'company-mobile' ? 'transform rotate-180' : ''}`} />
                  </button>
                  {/* {openDropdown === 'company-mobile' && (
                    <div className="pl-4 mt-1 space-y-1">
                      <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{t('company_overview')}</a>
                      <a href="/history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{t('company_history')}</a>
                      <a href="/certificates" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{t('company_certs')}</a>
                    </div>
                  )} */}
                </div>
              
              <a href="/brands" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">{t('brands')}</a>
              
                <div>
                  <button onClick={() => toggleDropdown('products-mobile')} className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                    {t('products')}
                    <IconChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${openDropdown === 'products-mobile' ? 'transform rotate-180' : ''}`} />
                  </button>
                  {/* {openDropdown === 'products-mobile' && (
                    <div className="pl-4 mt-1 space-y-1">
                      <a href="/products/papers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{t('products_papers')}</a>
                      <a href="/products/tubes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{t('products_tubes')}</a>
                      <a href="/products/tobacco" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{t('products_tobacco')}</a>
                      <a href="http://www.my10bak.com/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{t('products_waterpipe')}</a>
                      <a href="/products/accessories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{t('products_accessories')}</a>
                    </div>
                  )} */}
                </div>

              <a href="/distribution" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">{t('distribution')}</a>
              <a href="/news" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">{t('news')}</a>
              {/* <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">{t('contact')}</a>
               */}
              <div>
                  <button onClick={() => toggleDropdown('company-mobile')} className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                    {t('contact')}
                    <IconChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${openDropdown === 'company-mobile' ? 'transform rotate-180' : ''}`} />
                  </button>
              </div>
                <div>
                  <button onClick={() => toggleDropdown('language-mobile')} className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                    {t('language')}
                    <IconChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${openDropdown === 'language-mobile' ? 'transform rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'language-mobile' && (
                    <div className="pl-4 mt-1 space-y-1">
                      <button onClick={() => handleLanguageChange('en')} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">English</button>
                      <button onClick={() => handleLanguageChange('fr')} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">French</button>
                      <button onClick={() => handleLanguageChange('ru')} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Russian</button>
                      <button onClick={() => handleLanguageChange('ar')} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Arabic</button>
                    </div>
                  )}
                </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}