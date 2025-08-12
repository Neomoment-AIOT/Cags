import Link from 'next/link';
import styles from '../../Breadcrumb.module.css';

const BreadcrumbAr = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/home/HomeAr">تاريخ الشركة</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="/about/aboutAr">الشركة</Link>
          <span className={styles.divider}>/</span>
          <span className={styles.current}>الصفحة الرئيسية</span>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbAr;