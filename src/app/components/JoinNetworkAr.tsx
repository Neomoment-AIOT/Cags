import Link from 'next/link';
import Image from 'next/image';
import styles from './JoinNetwork.module.css';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CAGS | الصفحة الرئيسية",
  description: "اكتشف CAGS - منتجات التبغ الفاخرة والمعايير العالمية منذ أكثر من 40 عامًا.",
};
const JoinNetworkAr = () => {
  return (
    <div className={`${styles.pageSection} ${styles.bgLightGray}`}>
      <div className={styles.container}>
        {/* The main wrapper that creates the two-column layout */}
        <div className={styles.contentWrapper}>

          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>
              انضم إلى <br />
              <span className={styles.bold}>شبكتنا</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <p style={{lineHeight: '28px', textAlign: 'start', fontSize: '12.5pt', color: 'black', fontFamily: 'Aptos, sans-serif', }}>
              على مدار تاريخه، التزمت شركة CAGS بتقديم منتجات تبغ عالية الجودة للعملاء في جميع أنحاء العالم. لقد ساعدت التزام الشركة بالابتكار وتلبية متطلبات السوق في تحقيق نمو ونجاح كبيرين. تعتبر CAGS علامة تجارية موثوقة تُعرف بجودتها وثباتها وخدمة عملائها 

            </p>
            <div className={styles.linksContainer}>
              <Link href="/distribution" className={styles.learnMoreLink}>
                <h5 className={styles.ctalink}>
                 اعرف المزيد &nbsp; &nbsp;
                  <Image
                    src="/righticon.png"
                    alt="Learn more icon"
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px' }}
                  />
                </h5>
              </Link>
              <Link href="/contact" className={styles.learnMoreLink}>
                <h5 className={styles.ctalink}>                
اتصل بنا &nbsp; &nbsp;
                  <Image
                    src="/righticon.png"
                    alt="Contact us icon"
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px' }}
                  />
                </h5>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinNetworkAr;