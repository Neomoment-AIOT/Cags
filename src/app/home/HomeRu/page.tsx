"use client";
import React from 'react';

import Slider from '../../components/Slider';
import JourneySectionRu from '../../components/JourneySectionRu';
import ProductGridRu from '../../components/ProductGridRu';
import JoinNetworkRu from '../../components/JoinNetworkRu';
import FooterRu from '@/app/components/FooterRu';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../components/DiscoverCags.module.css";

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import style from '@/app/components/StatsCounter.module.css';
// ❌ wrong: "@/app/context/LanguageContext"
// ✅ fixed:
import { useLanguage } from "@/app/contexts/LanguageContext";

// ✅ Translations
const translations = {
  Russian: {
    countries: 'Страны',
    flagshipBrands: 'Флагманские бренды',
    genericBrands: 'Дженерики',
    trademarks: 'Зарегистрированные товарные знаки',
  },
} as const;

type TranslationKey = keyof typeof translations['Russian'];
type Language = keyof typeof translations;

export default function HomeRu() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();

  // ✅ fallback to Russian if no valid language
  const currentLanguage: Language = translations.hasOwnProperty(language)
    ? (language as Language)
    : 'Russian';

  const t = (key: TranslationKey) => translations[currentLanguage][key];

  // ✅ Stats data
  const statsData = [
    { number: 33, titleKey: 'countries' as const },
    { number: 14, titleKey: 'flagshipBrands' as const },
    { number: 100, titleKey: 'genericBrands' as const },
    { number: 110, titleKey: 'trademarks' as const },
  ];

  // ✅ Page content
  const content = {
    title: "ОТКРОЙТЕ ДЛЯ СЕБЯ",
    boldTitle: "CAGS",
    line1: "<b>Главная страница</b>",
    line2: "ОПРЕДЕЛЯЯ БУДУЩЕЕ, ЧТИТЬ ПРОШЛОЕ",
    line3: "Наш путь начался более 40 лет назад в Турции...",
    button: "Узнайте больше",
  };

  return (
    <main>
      <Slider />

      {/* Discover Section */}
      <div className={styles.pageSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>
                {content.title} <br />
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
                  Наш путь начался более 40 лет назад в Турции, на родине легендарного турецкого табака,
                  как первый производитель бумаги для самокруток, выпускающего продукцию по международным
                  стандартам. С тех пор мы являемся создателями, производителями и распространителями
                  продукции, которой наслаждаются миллионы людей по всему миру.
                </p>
                <p>
                  От бумаги для самокруток до сигаретных гильз, от табака для кальянов до аксессуаров...
                  Мы готовы предложить широкий ассортимент инновационной продукции, радуя наших клиентов
                  высоким качеством, которое они ожидают.
                </p>
                <p>
                  Мы с гордостью продолжаем расширять границы, стремясь к совершенству.
                </p>
                <p>{content.line3}</p>
              </div>
              <div className={styles.buttonContainer}>
                <Link href="/about" className={styles.button}>
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

      <JourneySectionRu />
      <ProductGridRu />
      <JoinNetworkRu />
      <FooterRu />
    </main>
  );
}
