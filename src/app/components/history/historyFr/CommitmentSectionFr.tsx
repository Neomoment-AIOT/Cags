import styles from './../CommitmentSection.module.css';
import Image from 'next/image';
import Link from 'next/link';


const CommitmentSectionFr = () => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <p className={styles.text}>
          Tout au long de son histoire, CAGS s'est engagé à fournir des produits de tabac de haute qualité à ses clients à travers le monde. La dédication de l'entreprise à l'innovation et à répondre aux demandes du marché lui a permis de connaître une croissance et un succès significatifs. CAGS est une marque de confiance, reconnue pour sa qualité, sa constance et son service client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSectionFr;