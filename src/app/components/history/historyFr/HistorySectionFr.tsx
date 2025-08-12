import Image from 'next/image';
import styles from './../HistorySection.module.css';
import Link from 'next/link';
const HistorySectionFr = () => {
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
               Une histoire de jalons 
                </span>
              </h1>
              <div className={styles.line}></div>
              <p>
                Chez CAGS, nous sommes fiers d'être une marque mondiale de tabac renommée avec un héritage captivant. Depuis notre fondation en 1982, nous avons accompli des étapes remarquables qui ont joué un rôle pivotal dans la formation de notre positionnement distingué de marque aujourd'hui.
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

export default HistorySectionFr;