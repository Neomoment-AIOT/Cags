import Link from 'next/link';
import styles from "@/app/products/products.module.css";

const Breadcrumb = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/home/HomeAr">الصفحة الرئيسية</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="/products/productsAr" className={styles.productsLink}>المنتجات</Link>
          <span className={styles.divider}>/</span>
          <span className={styles.current}>نابيب السجائر</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;