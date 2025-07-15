import Link from 'next/link';
import Image from 'next/image';
import styles from './JoinNetwork.module.css';

const JoinNetwork = () => {
  return (
    <div className={`${styles.pageSection} ${styles.bgLightGray}`}>
      <div className={styles.container}>
        {/* The main wrapper that creates the two-column layout */}
        <div className={styles.contentWrapper}>

          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>
              Join <br />
              <span className={styles.bold}>our network</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <p style={{lineHeight: '28px', textAlign: 'start', fontSize: '12.5pt', color: 'black', fontFamily: 'Aptos, sans-serif', }}>
              Throughout its history, CAGS has been committed to providing high-quality tobacco products to customers around the world. The company's dedication to innovation and meeting market demands has helped it to achieve significant growth and success. CAGS is a trusted brand that is known for its quality, consistency, and customer service.
            </p>
            <div className={styles.linksContainer}>
              <Link href="/distribution" className={styles.learnMoreLink}>
                <h4>
                  Learn more&nbsp; &nbsp;
                  <Image
                    src="/righticon.png"
                    alt="Learn more icon"
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px' }}
                  />
                </h4>
              </Link>
              <Link href="/contact" className={styles.learnMoreLink}>
                <h4>
                  Contact us&nbsp; &nbsp;
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

export default JoinNetwork;