import Link from 'next/link';
import styles from "@/app/products/products.module.css";

const Breadcrumb = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/home/HomeRu">Главная</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="/products/productsRu" className={styles.productsLink}>Продукция</Link>
          <span className={styles.divider}>/</span>
          <span className={styles.current}>Табак</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;