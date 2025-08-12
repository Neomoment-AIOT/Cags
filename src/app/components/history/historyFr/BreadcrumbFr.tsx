import Link from 'next/link';
import styles from '../../Breadcrumb.module.css';

const BreadcrumbFr = () => {
  return (
    <div className={styles.pageTitleCont}>
      <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/home/HomeFr">Accueil</Link>
          <span className={styles.divider}>/</span>
          {/* This link can be updated if you create a "Company" page */}
          <Link href="/about/aboutFr">Entreprise</Link>
          <span className={styles.divider}>/</span>
          <span className={styles.current}>Histoire</span>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbFr;