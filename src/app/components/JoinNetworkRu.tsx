import Link from 'next/link';
import Image from 'next/image';
import styles from './JoinNetwork.module.css';

const JoinNetworkRu = () => {
  return (
    <div className={`${styles.pageSection} ${styles.bgLightGray}`}>
      <div className={styles.container}>
        {/* The main wrapper that creates the two-column layout */}
        <div className={styles.contentWrapper}>

          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>
             Присоединяйтесь к   <br />
              <span className={styles.bold}>наша сеть</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <p style={{lineHeight: '28px', textAlign: 'start', fontSize: '12.5pt', color: 'black', fontFamily: 'Aptos, sans-serif', }}>
           На протяжении всей своей истории CAGS стремится предоставлять высококачественную табачную продукцию потребителям по всему миру.  Преданность компании инновациям и удовлетворению рыночных требований помогла ей достичь значительного роста и успеха.

CAGS — это надежный бренд, известный своим качеством, стабильностью и обслуживанием клиентов.
            </p>
            <div className={styles.linksContainer}>
              <Link href="/distribution/distributionRu" className={styles.learnMoreLink}>
                <h4 className={styles.ctalink}>
                 Узнать больше  &nbsp; &nbsp;
                  <Image
                    src="/righticon.png"
                    alt="Learn more icon"
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px' }}
                  />
                </h4>
              </Link>
              <Link href="/contact/contactRu" className={styles.learnMoreLink}>
                <h4 className={styles.ctalink}>
                 Свяжитесь с нами&nbsp; &nbsp;
                  <Image
                    src="/righticon.png"
                    alt="Contact us icon"
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px' }}
                  />
                </h4>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinNetworkRu;