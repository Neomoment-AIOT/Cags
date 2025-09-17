"use client";
import React from "react";
import Slider from "@/app/components/SliderAr";
import JourneySectionAr from "@/app/components/JourneySectionAr";
import ProductGridAr from "@/app/components/ProductGridAr";
import JoinNetworkAr from "@/app/components/JoinNetworkAr";
import FooterAr from "@/app/components/FooterAr";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/DiscoverCags.module.css";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import style from "@/app/components/StatsCounter.module.css";
import { useLanguage } from "@/app/context/LanguageContext";

// ✅ Translations
const translations = {
  Arabic: {
    countries: "دول",
    flagshipBrands: "العلامات التجارية الرئيسية",
    genericBrands: "العلامات التجارية العامة",
    trademarks: "العلامات التجارية المسجلة",
  },
} as const;

type TranslationKey = keyof typeof translations["Arabic"];
type Language = keyof typeof translations;

export default function HomeAr() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // ✅ Safe useLanguage (fallback if provider missing)
  let language: string = "Arabic";
  try {
    const ctx = useLanguage();
    if (ctx?.language) {
      language = ctx.language;
    }
  } catch {
    language = "Arabic";
  }

  // ✅ Fallback to Arabic if no valid language
  const currentLanguage: Language = translations.hasOwnProperty(language)
    ? (language as Language)
    : "Arabic";

  const t = (key: TranslationKey) => translations[currentLanguage][key];

  // ✅ Stats data
  const statsData = [
    { number: 33, titleKey: "countries" as const },
    { number: 14, titleKey: "flagshipBrands" as const },
    { number: 100, titleKey: "genericBrands" as const },
    { number: 110, titleKey: "trademarks" as const },
  ];

  // ✅ Page content
  const content = {
    title: "اكتشف",
    boldTitle: "CAGS",
    line1: " <b>الصفحة الرئيسية</b> ",
    line2: "تحديد المستقبل، تكريم الماضي",
    line3:
      "بدأت رحلتنا قبل أكثر من 40 عامًا في تركيا، أرض التبغ التركي الأسطوري...",
    button: "اعرف المزيد",
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
                {content.title}
                <br />
                <span className={styles.bold}>{content.boldTitle}</span>
              </h2>
            </div>
            <div className={styles.rightColumn}>
              <div
                className={styles.textContent}
                style={{ textAlign: "start", lineHeight: "28px" }}
              >
                <p dangerouslySetInnerHTML={{ __html: content.line1 }} />
                <p>{content.line2}</p>
                <p>
                  بدأت رحلتنا قبل أكثر من 40 عامًا في تركيا، أرض التبغ التركي
                  الأسطوري، كأول منتج لورق لف السجائر بمعايير عالمية. منذ ذلك
                  الحين كنا نبتكر وننتج ونوزع منتجات تستمتع بها الملايين حول
                  العالم.
                </p>
                <p>
                  من ورق السجائر إلى أنابيب السجائر، ومن تبغ الشيشة إلى
                  الإكسسوارات... نحن فخورون بخدمة عملائنا بالجودة العالية التي
                  يتوقعونها، ونفخر بتحدي أنفسنا لتقديم الأفضل دائمًا.
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
                    style={{ maxWidth: "20px", height: "auto" }}
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

      <JourneySectionAr />
      <ProductGridAr />
      <JoinNetworkAr />
      <FooterAr />
    </main>
  );
}
