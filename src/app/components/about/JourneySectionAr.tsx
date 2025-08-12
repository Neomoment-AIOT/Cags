import Image from 'next/image';
import styles from './JourneySection.module.css';


const JourneySectionAr = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.textContainer}>
            <h1>
              <b>تابع</b><br />
              <span className={styles.fontLight}>رحلتنا الرائعة</span>
            </h1>
            <div className={styles.line}></div>
            <p className={styles.paragraph}>
، العلامة التجارية العائلية للتبغ ذات التراث العريق والالتزام بالتميز ورضا العملاء. اختبر مرافقنا الحديثة وابتكراتنا. انضم إلى رحلتنا في تشكيل مستقبل صناعة التبغ بعلامة تجارية موثوقة , CAGS كتشف
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

export default JourneySectionAr;