import Link from 'next/link';
import styles from '../products.module.css';

const BreadcrumbRu = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/home.HomeRu">Главная</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="#">Продукция</Link>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbRu;