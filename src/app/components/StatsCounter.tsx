"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from './StatsCounter.module.css';
import { useLanguage } from "@/app/context/LanguageContext";

// Define translations with type safety
const translations = {
  English: {
    countries: 'Countries',
    flagshipBrands: 'Flagship Brands',
    genericBrands: 'Generic Brands',
    trademarks: 'Registered Trademarks',
  },
  Russian: {
    countries: 'Страны',
    flagshipBrands: 'Флагманские бренды',
    genericBrands: 'Дженерики',
    trademarks: 'Зарегистрированные товарные знаки',
  },
  French: {
    countries: 'Pays',
    flagshipBrands: 'Marques phares',
    genericBrands: 'Marques génériques',
    trademarks: 'Marques déposées',
  },
  Arabic: {
    countries: 'دول',
    flagshipBrands: 'العلامات التجارية الرئيسية',
    genericBrands: 'العلامات التجارية العامة',
    trademarks: 'العلامات التجارية المسجلة',
  }
} as const;

type TranslationKey = keyof typeof translations['English'];
type Language = keyof typeof translations;

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();
  
  // Safely get the current language with fallback
  const currentLanguage: Language = translations.hasOwnProperty(language) 
    ? language as Language 
    : 'English';

  const t = (key: TranslationKey) => translations[currentLanguage][key];

  const statsData = [
    { number: 33, titleKey: 'countries' as const },
    { number: 14, titleKey: 'flagshipBrands' as const },
    { number: 100, titleKey: 'genericBrands' as const },
    { number: 110, titleKey: 'trademarks' as const },
  ];

  return (
    <div id="counter-1" className={styles.pageSection}>
      <div className={styles.container}>
        <div ref={ref} className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.countNumber}>
                {inView ? <CountUp end={stat.number} duration={2.75} /> : 0}
              </div>
              <div className={styles.countDescr}>
                <span className={styles.countTitle}>{t(stat.titleKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;