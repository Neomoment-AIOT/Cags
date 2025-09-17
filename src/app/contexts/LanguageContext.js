"use client";

import { createContext, useState, useEffect, useContext } from "react";
import enContent from "../locales/en.json";
import frContent from "../locales/fr.json";
import ruContent from "../locales/ru.json";
import arContent from "../locales/ar.json";

const translations = {
  en: enContent,
  fr: frContent,
  ru: ruContent,
  ar: arContent,
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [content, setContent] = useState(translations.en);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
      setContent(translations[savedLang]);
    }
  }, []);

  useEffect(() => {
    setContent(translations[language]);
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
