import Image from 'next/image';
import styles from './infosection.module.css';

const Productinfosection = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.textContainer}>
            <h1>
              <b>Experience</b><br />
              <span className={styles.fontLight}>The difference
</span>
            </h1>
            <div className={styles.line}></div>
            <p>
              Browse through our range of rolling papers, cigarette tubes, tobacco, waterpipe tobacco and other smoking accessories to find your perfect match. Whether you are a connoisseur seeking a refined smoking experience or simply looking for a high-quality tobacco product, CAGS has you covered.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/about/4204f3afad75491bb45f78b21a62dc6f.png"
              alt="Remarkable Journey visual"
              width={800} // Original image width
              height={600} // Original image height
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productinfosection;