import Image from 'next/image';
import styles from './../HistorySection.module.css';
import Link from 'next/link';
const HistorySectionRu = () => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.textContainer}>
            <div className={styles.textContent}>
              <h1>
                <b>CAGS:</b><br />
                <span className={styles.fontLight}>
                ЗНАЧИМЫЕ СОБЫТИЯ В НАШЕЙ ИСТОРИИ 
                </span>
              </h1>
              <div className={styles.line}></div>
              <p>
                

В CAGS мы гордимся тем, что являемся выдающимся всемирным табачным брендом с захватывающим наследием. С момента нашего основания в 1982 году мы достигли значительных успехов, которые сыграли ключевую роль в формировании нашего выдающегося статуса бренда сегодня.

              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/history/3cb38778b8464ca79f57ecb915b625a5.png"
              alt="CAGS History of Milestones"
              width={800} //  Provide the actual width of the image
              height={600} // Provide the actual height of the image
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySectionRu;