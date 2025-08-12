import Image from 'next/image';
import styles from './CertificateSection.module.css';

// This component now accurately reflects the structure of the HTML you provided.
const CertificateSection = () => {
  return (
    // Use a React Fragment to return multiple root-level sections
    <>
      {/* Section 1: Discover Our Certificates (Hero) */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            {/* Left Column: Text Content */}
            <div className={styles.column}>
              <div className={styles.mainTextContainer}>
                <div className={styles.title}>
                  <h1>
                   НАШИ<br />
                    <span className={styles.fontLight}>СЕРТИФИКАТЫ </span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <div className={styles.textContent}>
                  <p>
                    

Наши сертификаты международного образца являются отражением нашего стремления к совершенству. Мы обладаем международно признанными сертификатами ISO, гарантирующими превосходное качество и соответствие стандартам отрасли.

                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className={styles.column}>
              {/* This div acts as the container for the responsive image */}
              <div className={styles.heroImageWrapper}>
                <Image
                  // Path assumes image is in /public/42e84bc2b2f6453089212018534226dd.png
                  src="/42e84bc2b2f6453089212018534226dd.png"
                  alt="Commitment to excellence"
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 1200px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Individual Certificate Links */}
      <section className={`${styles.pageSection} ${styles.paddedSection}`}>
        <div className={styles.container}>
          <div className={styles.row}>
            {/* Certificate 1 */}
            <div className={styles.certificateCard}>
              <a href="/certbel.pdf" target="_blank" rel="noopener noreferrer" className={styles.certificateLink}>
                <div className={styles.certificateImageWrapper}>
                  <Image
                    // Path assumes image is in /public/belcert.jpg
                    src="/belcert.jpg"
                    alt="BEL Certificate"
                    layout="responsive"
                    width={650}
                    height={500}
                  />
                </div>
              </a>
            </div>

            {/* Certificate 2 */}
            <div className={styles.certificateCard}>
              <a href="/CERT4_Cert.pdf" target="_blank" rel="noopener noreferrer" className={styles.certificateLink}>
                <div className={styles.certificateImageWrapper}>
                  <Image
                    // Path assumes image is in /public/cert9001.jpg
                    src="/cert9001.jpg"
                    alt="ISO 9001 Certificate"
                    layout="responsive"
                    width={650}
                    height={550}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificateSection;