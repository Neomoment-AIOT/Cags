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
            <span className={styles.fontLight}>تابع رحلتنا الرائعة</span>
          </h1>
          <p className={styles.mb60}>
           ، العلامة التجارية العائلية للتبغ ذات التراث العريق والالتزام بالتميز ورضا العملاء. اختبر مرافقنا الحديثة وابتكراتنا. انضم إلى
          </p>
          <p className={styles.mb60}>
            رحلتنا في تشكيل مستقبل صناعة التبغ بعلامة تجارية موثوقة , CAGS كتشف 
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySectionAr;