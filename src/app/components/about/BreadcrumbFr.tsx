import Link from 'next/link';
import styles from '../Breadcrumb.module.css';

const BreadcrumbFr = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/">ACCUEIL</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="#">Entreprise</Link>
          <span className={styles.divider}>/</span>
          <span className={styles.current}>APERÇU</span>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbFr;