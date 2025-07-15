// components/TranslatedHeader.js
'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // IMPORT THE HOOK

import CompanySubMenu from './CompanySubMenu';
import ProductSubMenu from './ProductSubMenu';
import ContactSubMenu from './ContactSubMenu';
// ... other imports

// --- Your Icon Components (IconChevronDown, etc.) can remain here ---

export default function TranslatedHeader() {
  // --- REMOVE internal language state and translations object ---
  // const [language, setLanguage] = useState('en');
  // const translations = { ... };

  // --- USE the global context instead ---
  const { language, setLanguage, t } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode); // This now updates the global state
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  // ... rest of your component logic (toggleDropdown, etc.)

  // Your JSX remains almost identical, as it already uses the `t()` function.
  // The only change is that `t()` and `setLanguage` now come from the global context.
  return (
    <header className={/* ... */}>
      {/* All your header JSX remains the same */}
    </header>
  );
}