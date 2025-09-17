"use client";
import React from 'react';

// ✅ Import all page components
import Slider from '../../components/Slider';
import JourneySectionFr from '../../components/JourneySectionFr';
import ProductGridFr from '../../components/ProductGridFr';
import JoinNetworkFr from '../../components/JoinNetworkFr';
import FooterFr from '@/app/components/FooterFr';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/components/DiscoverCags.module.css';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import style from '@/app/components/StatsCounter.module.css';
// ❌ wrong
// import { useLanguage } from "@/app/context/LanguageContext";
// ✅ fixed
import { useLanguage } from "@/app/contexts/LanguageContext";

// Define translations with type safety
const translations = {
  French: {
    countries: 'Pays',
    flagshipBrands: 'Marques phares',
    genericBrands: 'Marques génériques',
    trademarks: 'Marques déposées',
  },
} as const;

type TranslationKey = keyof typeof translations['French'];
type Language = keyof typeof translations;

export default function HomeFr() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();

  const currentLanguage: Language = translations.hasOwnProperty(language)
    ? (language as Language)
    : 'French';

  const t = (key: TranslationKey) => translations[currentLanguage][key];

  const statsData = [
    { number: 33, titleKey: 'countries' as const },
    { number: 14, titleKey: 'flagshipBrands' as const },
    { number: 100, titleKey: 'genericBrands' as const },
    { number: 110, titleKey: 'trademarks' as const },
  ];

  const content = {
    title: "Découvrir",
    boldTitle: "CAGS",
    line1: "<b>Page d'accueil</b>",
    line2: "Définir l'avenir, honorer le passé.",
    line3: "Notre voyage a commencé il y a plus de 40 ans en Turquie...",
    button: "En savoir plus",
  };

  return (
    <main>
      <Slider />

      {/* Discover Section */}
      <div className={styles.DiscoverCagspageSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>
                {content.title}
                <br />
                <span className={styles.bold}>{content.boldTitle}</span>
              </h2>
            </div>
            <div className={styles.rightColumn}>
              <div
                className={styles.textContent}
                style={{ textAlign: 'start', lineHeight: '28px' }}
              >
                <p dangerouslySetInnerHTML={{ __html: content.line1 }} />
                <p><b>{content.line2}</b></p>
                <p>
                  Notre voyage a commencé il y a plus de 40 ans en Turquie, terre légendaire du tabac turc,
                  en tant que premier fabricant de papiers à rouler selon des normes internationales. Depuis lors,
                  nous sommes les créateurs, producteurs et distributeurs de produits appréciés par des millions
                  de personnes à travers le monde.
                </p>
                <p>
                  Des papiers à rouler aux tubes à cigarette, du tabac à narguilé aux accessoires... Avec une
                  vaste gamme de produits innovants, nous sommes fiers de répondre aux attentes élevées de
                  qualité de nos clients. Nous sommes animés par la fierté de repousser les limites pour toujours
                  faire mieux.
                </p>
                <p>{content.line3}</p>
              </div>
              <div className={styles.buttonContainer}>
                <Link href="/about/aboutFr" className={styles.button}>
                  {content.button} &nbsp;
                  <Image
                    src="/righticon.png"
                    alt="Arrow icon"
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px', height: 'auto' }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter */}
      <div id="counter-1" className={style.pageSection}>
        <div className={style.container}>
          <div ref={ref} className={style.statsGrid}>
            {statsData.map((stat, index) => (
              <div key={index} className={style.statItem}>
                <div className={style.countNumber}>
                  {inView ? <CountUp end={stat.number} duration={2.75} /> : 0}
                </div>
                <div className={style.countDescr}>
                  <span className={style.countTitle}>{t(stat.titleKey)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <JourneySectionFr />
      <ProductGridFr />
      <JoinNetworkFr />
      <FooterFr />
    </main>
  );
}
