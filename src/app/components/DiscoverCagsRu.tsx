import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './DiscoverCags.module.css';

// 1. Define the "shape" of the data the component expects to receive.
// This is the blueprint for its content.
type DiscoverCagsProps = {
  content?: { // The `?` makes the prop optional to prevent errors if it's not loaded yet.
    title: string;
    boldTitle: string;
    line1: string;
    line2: string;
    line3: string;
    button: string;
  };
};
const DiscoverCagsRu = ({ content }: DiscoverCagsProps) => {
  if (!content) {
    return null;
  }
  return (
    <div className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>
              ОТКРОЙТЕ <br />ДЛЯ СЕБЯ<br />
              <span className={styles.bold}>Cags</span>
            </h2>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.textContent} style={{ textAlign: 'start', lineHeight: '28px' }}>
              <p dangerouslySetInnerHTML={{ __html: content.line1 }} />
              <p><b>ОПРЕДЕЛЯЯ БУДУЩЕЕ, ЧТИТЬ ПРОШЛОЕ</b></p>
              <p>Наш путь начался более 40 лет назад в Турции, на родине легендарного турецкого табака, как первый производитель бумаги для самокруток, выпускающего продукцию по международным стандартам. С тех пор мы являемся создателями, производителями и распространителями продукции, которой наслаждаются миллионы людей по всему миру.</p>
              <p>От бумаги для самокруток до сигаретных гильз, от табака для кальянов до аксессуаров... Мы готовы предложить широкий ассортимент инновационной продукции, радуя наших клиентов высоким качеством, которое они ожидают.</p>
              <p>Mы с гордостью продолжаем расширять границы, стремясь к совершенству.</p>
              <p>{content.line3}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Link
                href="/about" className={styles.button} >
                {/* {content.button} */}
                 Узнайте больше &nbsp;
                
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
  );
};

export default DiscoverCagsRu;