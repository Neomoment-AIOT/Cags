import Image from 'next/image';
import styles from './JourneySection.module.css';

const JourneySectionAr = () => {
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
          <h1 className={styles.sectionheading}>
            <span className={styles.fontLight}>СЛЕДУЙТЕ ЗА НАШИМ УВЛЕКАТЕЛЬНЫМ ПУТЕШЕСТВИЕМ</span>
          </h1>
          <p className={styles.mb60}>
             Откройте для себя CAGS, семейный табачный бренд с богатым наследием и стремлением к совершенству. Оцените наши современные производственные мощности, инновации и удовлетворенность клиентов. Присоединяйтесь к нашему стремлению формировать будущее табачной промышленности с помощью надежного и предпочтительного бренда.

          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySectionAr;