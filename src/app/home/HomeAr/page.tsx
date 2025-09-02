import React from 'react';
import Slider from '@/app/components/SliderAr';
import JourneySectionAr from '@/app/components/JourneySectionAr';
import ProductGridAr from '../../components/ProductGridAr';
import JoinNetworkAr from '../../components/JoinNetworkAr';
import FooterAr from '@/app/components/FooterAr';
import StatsCounterAr from '@/app/components/StatsCounterAr';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../components/DiscoverCags.module.css";

export default function HomeAr() {
  // ✅ Provide default fallback content here
  const content = {
    title: "اكتشف",
    boldTitle: "CAGS",
    line1: " <b>الصفحة الرئيسية</b> ",
    line2: "تحديد المستقبل، تكريم الماضي",
    line3: "بدأت رحلتنا قبل أكثر من 40 عامًا في تركيا، أرض التبغ التركي الأسطوري...",
    button: "اعرف المزيد",
  };

  return (
    <main>
      <Slider />
      {/* Instead of redefining DiscoverCagsAr, directly render your content */}
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
                style={{ textAlign: 'start', lineHeight: '28px' }}
              >
                <p dangerouslySetInnerHTML={{ __html: content.line1 }} />
                <p>{content.line2}</p>
                <p>
                  بدأت رحلتنا قبل أكثر من 40 عامًا في تركيا، أرض التبغ التركي الأسطوري،
                  كأول منتج لورق لف السجائر بمعايير عالمية. منذ ذلك الحين كنا نبتكر وننتج
                  ونوزع منتجات تستمتع بها الملايين حول العالم.
                </p>
                <p>
                  من ورق السجائر إلى أنابيب السجائر، ومن تبغ الشيشة إلى الإكسسوارات...
                  نحن فخورون بخدمة عملائنا بالجودة العالية التي يتوقعونها، ونفخر بتحدي
                  أنفسنا لتقديم الأفضل دائمًا.
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

      <StatsCounterAr />
      <JourneySectionAr />
      <ProductGridAr />
      <JoinNetworkAr />
      <FooterAr />
    </main>
  );
}
