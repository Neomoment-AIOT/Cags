import Link from 'next/link';
import styles from '../Breadcrumb.module.css';

const BreadcrumbAr = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/">نظرة عامة</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="#">الشركة</Link>
          <span className={styles.divider}>/</span>
          <span className={styles.current}>الصفحة الرئيسية</span>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbAr;