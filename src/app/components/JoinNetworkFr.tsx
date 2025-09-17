import Link from 'next/link';
import Image from 'next/image';
import styles from './JoinNetwork.module.css';

const JoinNetworkFr = () => {
  return (
    <div className={`${styles.pageSection} ${styles.bgLightGray}`}>
      <div className={styles.container}>
        {/* The main wrapper that creates the two-column layout */}
        <div className={styles.contentWrapper}>

          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>
              Rejoindre  <br />
              <span className={styles.bold}>notre réseau</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <p style={{lineHeight: '28px', textAlign: 'start', fontSize: '12.5pt', color: 'black', fontFamily: 'Aptos, sans-serif', }}>
             Tout au long de son histoire, CAGS s'est engagé à fournir des produits du tabac de haute qualité à ses clients à travers le monde. La dédication de l'entreprise à l'innovation et à répondre aux exigences du marché lui a permis d'atteindre une croissance et un succès significatifs. CAGS est une marque de confiance reconnue pour sa qualité, sa constance et son service clientèle.
            </p>
            <div className={styles.linksContainer}>
              <Link href="/distribution/distributionFr" className={styles.learnMoreLink}>
                <h5 className={styles.ctalink}>
                 En savoir plus  &nbsp; &nbsp;
                  <Image
                    src="/righticon.png"
                    alt="Learn more icon"
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px' }}
                  />
                </h5>
              </Link>
              <Link href="/contact/contactFr" className={styles.learnMoreLink}>
                <h5 className={styles.ctalink}>
                 Contactez nous&nbsp; &nbsp;
                  <Image
                    src="/righticon.png"
                    alt="Contact us icon"
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px' }}
                  />
                </h5>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinNetworkFr;