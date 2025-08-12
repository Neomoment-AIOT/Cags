import Link from 'next/link';
import Image from 'next/image';
import styles from "@/app/distribution/distribution.module.css";
import FooterAr from '@/app/components/FooterAr';

const DistributionPageAr = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeAr">التوزيع</Link>
            <span className={styles.divider}>/</span>
            <Link href="/about/aboutAr">الشركة</Link>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>الصفحة الرئيسية</span>
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
                  انضم إلى شبكة التوزيع الخاصة بنا و <br className={styles.br} /></h1>
                  <h2 className={styles.subtitle}><span className={styles.fontLight}> نمِّ عملك</span>
                </h2>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                 

انضم إلى شبكتنا التوزيعية ونمِّ قِدرات عملك

 نحن فخورون جدًا بمشاركتكم نمونا المتواصل على مدار العقود منذ عام 1982، وذلك بفضل شغفنا بالتحسين والنجاح مع موزعينا. نحن نوسع فرقنا حول العالم ملتزمين بالابتكار ورضا العملاء، وتقنيات الإنتاج لدينا تلبي معايير الجودة العالمية

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
             نحن نفرح بلقاء موزعينا الجدد، الذين سينضمون إلى فرقنا المحترفة والنشطة، وسيمثلون علاماتنا التجارية المطلوبة بشدة ومنتجاتنا. تتنوع منتجاتنا لتلبية مختلف الأذواق والاحتياجات المقبولة على نطاق واسع في الأسواق التي نعمل فيها، بما في ذلك التبغ وأوراق اللف وأنابيب السجائر وآلات ملء أنابيب السجائر  في رحلتنا لتقديم منتجاتنا عالية الجودة باستخدام أنظمة إنتاج مبتكرة، نقدم حلولًا مهنية للمشكلات العرضية التي قد تنشأ، حيث نتابع جميع عملياتنا بفريق عمل متمرس وموزعين ذوي خبرة.  مع فرق دعم ما بعد البيع لدينا، نوجه موزعينا في كل عملية قد يحتاجون المساعدة فيها؛ كما ننظم برامج تدريبية ومعسكرات تدريبية تستند إلى المنتجات والأسواق، حيث نجمع جميع موظفي الشركة حول العالم معًا. وبينما نقوم بزيارات منتظمة على الأرض للتأكد من أن فرقنا محدّثة دائمًا، فإن اقتراح حلول جديدة لزيادة حصتنا في السوق يعد من أهم أهداف فرق دعم ما بعد البيع لدينا.
            </p>
            
          </div>
        </div>
      </section>

      {/* Closing Call-to-Action Section */}
      <section className={styles.closingSection}>
        <div className={styles.container}>
          <div className={styles.closingBox}>
            <p>
             إذا كنت ترغب في الانضمام إلينا في هذه الرحلة، حيث نقف دائمًا إلى جانب موزعينا بفعاليات الإنتاج والتشغيل والاتصال التسويقي وتطبيقات دعم ما بعد البيع، وترغب في الحصول على مزيد من المعلومات، ما عليك سوى ملء استمارة الوكالة والتواصل مع فريقنا
            </p>
            <p>
             للتقديم ولمزيد من المعلومات حول التوزيع، يرجى التواصل معنا
            </p>
          </div>
        </div>
       
      </section>
       <FooterAr />
    </>
  );
};

export default DistributionPageAr;