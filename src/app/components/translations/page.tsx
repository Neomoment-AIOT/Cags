"use client";

import React, { useState, useEffect, useRef } from 'react';

// You can imagine this is your page component located at a path like `app/translations/page.tsx`
// This setup assumes you have Tailwind CSS configured in your React project.

// --- TypeScript Type Definition for Translations ---
// This defines the structure of our translation data, ensuring type safety.
type Translation = {
    [key: string]: string;
};

type Translations = {
    [languageCode: string]: Translation;
};

// --- Main Page Component ---
export default function TranslationsPage() {
    // State to manage the currently selected language. Defaults to 'en' (English).
    const [language, setLanguage] = useState('en');
    // State to manage the visibility of the language dropdown menu.
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    
    // A ref to the dropdown element to detect clicks outside of it.
    const dropdownRef = useRef<HTMLLIElement>(null);


    // --- Translation Data Store ---
    // All text content for the website is stored here.
    // It's easily extensible with new languages or new text keys.
    const translations: Translations = {
        en: {
            nav_brand: "MyWebsite",
            nav_home: "Home",
            nav_about: "About",
            nav_language: "Language",
            welcome_title: "Welcome to Our Website!",
            welcome_message: "This is a demonstration of a multi-language website. Select a language from the dropdown menu to see the content change dynamically.",
            learn_more_button: "Learn More",
        },
        fr: {
            nav_brand: "MonSiteWeb",
            nav_home: "Accueil",
            nav_about: "À propos",
            nav_language: "Langue",
            welcome_title: "Bienvenue sur notre site web!",
            welcome_message: "Ceci est une démonstration d'un site web multilingue. Sélectionnez une langue dans le menu déroulant pour voir le contenu changer.",
            learn_more_button: "En savoir plus",
        },
        ru: {
            nav_brand: "МойСайт",
            nav_home: "Главная",
            nav_about: "О нас",
            nav_language: "Язык",
            welcome_title: "Добро пожаловать на наш сайт!",
            welcome_message: "Это демонстрация многоязычного веб-сайта. Выберите язык из выпадающего меню, чтобы увидеть, как контент меняется.",
            learn_more_button: "Узнать больше",
        },
        ar: {
            nav_brand: "موقعي",
            nav_home: "الرئيسية",
            nav_about: "حول",
            nav_language: "لغة",
            welcome_title: "مرحبا بكم في موقعنا!",
            welcome_message: "هذه نسخة تجريبية لموقع ويب متعدد اللغات. حدد لغة من القائمة المنسدلة لترى المحتوى يتغير ديناميكيًا.",
            learn_more_button: "اعرف المزيد",
        }
    };

    // --- Translation Helper Function ---
    // A simple function to get the translated string for a given key.
    // It falls back to the key itself if a translation is not found.
    const t = (key: string): string => {
        return translations[language][key] || key;
    };
    
    // --- Effect for Handling Text Direction ---
    // This `useEffect` hook runs whenever the `language` state changes.
    // It sets the text direction of the page for right-to-left languages like Arabic.
    useEffect(() => {
        if (language === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    }, [language]);
    
    // --- Effect for Closing Dropdown on Outside Click ---
    // This handles the user experience of closing the menu when clicking elsewhere on the page.
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        // Add event listener when the dropdown is open
        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener when the component unmounts or dropdown closes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);
    

    // --- Event Handler for Language Selection ---
    const handleLanguageChange = (langCode: string) => {
        setLanguage(langCode);
        setDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-indigo-600">{t('nav_brand')}</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{t('nav_home')}</a>
                                <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{t('nav_about')}</a>
                                
                                {/* Language Dropdown Component */}
                                <div className="relative">
                                    <li className="list-none" ref={dropdownRef}>
                                        <button 
                                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                                            className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center focus:outline-none"
                                        >
                                            <div className="main-menu-title">{t('nav_language')}</div>
                                            <span className={`open-sub ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                                        </button>
                                        
                                        {isDropdownOpen && (
                                            <ul className="sub absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-20">
                                                <li><a href="#" onClick={() => handleLanguageChange('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a></li>
                                                <li><a href="#" onClick={() => handleLanguageChange('fr')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a></li>
                                                <li><a href="#" onClick={() => handleLanguageChange('ru')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Russian</a></li>
                                                <li><a href="#" onClick={() => handleLanguageChange('ar')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Arabic</a></li>
                                            </ul>
                                        )}
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
        
        </div>
    );
}
