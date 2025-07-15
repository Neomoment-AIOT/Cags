// app/contexts/LanguageContext.js
'use client';

import { createContext, useState, useEffect, useContext } from 'react';

// 1. Import all your translation files from the locales folder
import enContent from '../locales/en.json';
import frContent from '../locales/fr.json';
import ruContent from '../locales/ru.json';
// Assuming you have an ar.json file for Arabic based on your header
import arContent from '../locales/ar.json';

// 2. Combine all translations into a single object for easy access
const translations = {
  en: enContent,
  fr: frContent,
  ru: ruContent,
  ar: arContent
};

// 3. Create the context that components will subscribe to
const LanguageContext = createContext();

// 4. Create the Provider component that will wrap your application
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default language is English
  const [content, setContent] = useState(translations.en); // Default content

  // This effect hook runs whenever the 'language' state changes
  useEffect(() => {
    // Set the content to the newly selected language's translations
    setContent(translations[language]);

    // Update the document's text direction for RTL languages like Arabic
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  // The value object holds the state and functions to be shared globally
  const value = {
    language,    // The current language code (e.g., 'en')
    setLanguage, // The function to change the language
    content      // The full object of translated text
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// 5. Create a custom hook to make using the context simpler in other components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // This error ensures you don't use the hook outside of the provider
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}