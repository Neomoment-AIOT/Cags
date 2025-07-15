import Image from 'next/image';
import styles from './JourneySection.module.css';

const JourneySection = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.textContainer}>
            <h1>
              <b>Follow</b><br />
              <span className={styles.fontLight}>Our remarkable journey</span>
            </h1>
            <div className={styles.line}></div>
            <p>
              Discover CAGS, a family-owned tobacco brand with a rich heritage and a commitment to excellence. Experience our state-of-the-art facilities, innovation, and customer satisfaction. Join our journey in shaping the future of the tobacco industry with a trusted and preferred brand.
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

export default JourneySection;