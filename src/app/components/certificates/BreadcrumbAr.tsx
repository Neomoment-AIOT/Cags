import Link from 'next/link';
import styles from '../Breadcrumb.module.css';

const Breadcrumb = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/home/HomeAr">الصفحة الرئيسية</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="/about/aboutAr">الشركة</Link>
          <span className={styles.divider}>/</span>
          <span className={styles.current}>الشهادات</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;