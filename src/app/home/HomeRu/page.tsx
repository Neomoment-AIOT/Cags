import React from 'react';

import Slider from '../../components/Slider';
import JourneySectionRu from '../../components/JourneySectionRu';
import ProductGridRu from '../../components/ProductGridRu';
import JoinNetworkRu from '../../components/JoinNetworkRu';
import StatsCounterRu from '../../components/StatsCounterRu';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../components/DiscoverCags.module.css";
import FooterRu from '@/app/components/FooterRu';

export default function HomeRu() {
  // ✅ Provide default fallback content
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

      {/* Other sections */}
      <StatsCounterRu />
      <JourneySectionRu />
      <ProductGridRu />
      <JoinNetworkRu />
      <FooterRu />
    </main>
  );
}
