import Image from 'next/image';
import styles from './HistorySection.module.css';
import Link from 'next/link';
const HistorySection = () => {
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
                  A History of Milestones
                </span>
              </h1>
              <div className={styles.line}></div>
              <p>
                At CAGS, we take pride in being a prominent worldwide tobacco brand with a captivating legacy. Since our establishment in 1982, we have accomplished remarkable milestones that have played a pivotal role in shaping our distinguished brand standing today.
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

export default HistorySection;