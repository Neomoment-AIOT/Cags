import Image from 'next/image';
import styles from './JourneySection.module.css';

const JourneySection = () => {
  return (
    <div className={styles.pageSection}>
      {/* Left side: Image */}
      <div className={styles.imageContainer}>
        <Image
          src="/fes7-2.jpg"
          alt="A remarkable journey with CAGS"
          layout="fill"
          objectFit="cover"
          quality={85}
        />
      </div>

      {/* Right side: Content */}
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1>
            <span className={styles.fontLight}>Follow Our remarkable journey</span>
          </h1>
          <p className={styles.mb60}>
            Discover CAGS, a family-owned tobacco brand with a rich heritage and a commitment to excellence. Experience our state-of-the-art facilities, innovation, and customer satisfaction. Join our journey in shaping the future of the tobacco industry with a trusted and preferred brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;