import Link from 'next/link';
import styles from '../products.module.css';

const Breadcrumb = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/">HOME</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="#">PRODUCTS</Link>
          <span className={styles.divider}>/</span>
          <span className={styles.current}>ACCESSORIES</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;