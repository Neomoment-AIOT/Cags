import Image from 'next/image';
import Link from 'next/link';
import styles from './CareerPage.module.css';
import FooterAr from '../FooterAr';
// --- The Main Career Page Component ---
const CareerPageAr = () => {
  return (
     <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link className="link " href="/home/homeAr">الصفحة الرئيسية</Link>
            <span className= "slash-divider  ml-[7px] mr-[7px]">/</span>
             <Link  className="link " href="/about/aboutAr">الشركة</Link>
            <span className="slash-divider ml-[7px] mr-[7px]">/</span>
            <span className="bread-current">الوظائف</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            {/* Text Column */}
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <div className={styles.title}>
                  <h1 >
                    انضم إلى CAGS
                    <br />
                    <span className={styles.fontLight}>
                     طلق مسيرتك المهنية مع رائد عالمي في صناعة التبغ
                    </span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                 نحن علامة تجارية مشهورة ملتزمة بتقديم منتجات استثنائية وتفضيل رضا العملاء والجودة المستمرة. نبحث عن أفراد موهوبين للانضمام إلى فريقنا ومساعدتنا في مواصلة نجاحنا الملحوظ
                </p>
              </div>
            </div>
            {/* Image Column */}
            <div className={styles.column}>
              <div className={styles.imageWrapper}>
                {/* Ensure you replace this src with the correct path to your image */}
                <Image 
                  src="/career/Career.png" 
                  alt="Tobacco production machinery" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* No Open Positions Section */}
      <section className={`${styles.pageSection} ${styles.closingSection}`}>
         <div className={styles.container}>
           <div className={styles.closingBanner}>
              <h2 className={styles.h2}>لا توجد حالياً وظائف شاغرة</h2>
              <p>كموظف في CAGS ستكون جزءًا من فريق عمل ملتزم ومبتكر. ستحظى بفرصة للنمو وتطوير مهاراتك في بيئة داعمة وشاملة. نقدم مجموعة من الفرص للتقدم في الحياة المهنية والموارد التي تحتاجها للتفوق
 </p>
              <p>نحن نؤمن بقوة التطوير والابتكار، ونسعى باستمرار لنكون رواد الصناعة. انضم إلينا في رحلتنا لتشكيل مستقبل قطاع التبغ</p>
              <p>
استكشف الوظائف الشاغرة الحالية لدينا وانضم إلى اليوم. معًا، يمكننا تحقيق إنجازات ملحوظة وخلق مستقبل ناجح</p>
           </div>
         </div>
      </section>
        <FooterAr />
    </>
  );
};

export default CareerPageAr;