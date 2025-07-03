import Link from 'next/link';
import Image from 'next/image';
import styles from './distribution.module.css';

const DistributionPage = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/">HOME</Link>
            <span className={styles.divider}>/</span>
            <Link href="/company">COMPANY</Link>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>DISTRIBUTION</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <h1 className={styles.title}>
                  Join Our Distribution Network &amp;<br />
                  <span className={styles.fontLight}>Grow Your Business</span>
                </h1>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                  We are very proud to share our global-scale, consistent growth that we have been maintaining since 1982, thanks to our passion for improvement and success with our distributors. We are expanding our staff around the world with our commitment to innovation and customer satisfaction and our production technologies meeting world standards.
                </p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/distribution/272d020ff34542ed935c85a3f0cd7b2c.png"
                  alt="Global Distribution Network"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split-Screen Detailed Info Section */}
      <section className={`${styles.pageSection} ${styles.splitSection}`}>
        <div className={styles.splitImageColumn}>
          <Image
            src="/distribution/distrub01.png"
            alt="Distribution and logistics"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.splitTextColumn}>
          <div className={styles.detailedTextContainer}>
            <p>
              We rejoice at meeting our new distributors, who will join our professional and energetic teams and represent our highly demanded brands and our products, addressing to different preferences and needswidely accepted in the markets we are in, such as tobacco, rolling paper, cigarette tubes and cigarette tubes filling machines.
            </p>
            <p>
              With our after-sales support teams, we guide our distributors in every process they may need help with; we also organize product-based and market-based training programs and camps, bringing all Cags Tobacco staff around the World together. While we make regular visits on the field to make sure our teams are always updated, suggesting new solutions to increase our market share is one of the most important goals of our aftersales support teams.
            </p>
            <p>
              By regularly analysing and keeping track of the current marketing trends and the demands and needs of the new global consumer model, our marketing communications department utilizes all channels of 360 degree marketing in order to answer to the marketing communications needs of our distributors locally and globally thanks to their ability to use of correct strategies, channels and communication materials. We also always strive for the best customer experience by communicating to our brand stakeholders actively and directly.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Call-to-Action Section */}
      <section className={styles.closingSection}>
        <div className={styles.container}>
          <div className={styles.closingBox}>
            <p>
              If you want to join us in this journey, where we always have our distributors’ backs with our production, operation, and marketing communication actions and after-sales support applications, and get more information, just fill the distributorship form and get in touch with our team!
            </p>
            <p>
              For application &amp; more information about distributorship please contact us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DistributionPage;