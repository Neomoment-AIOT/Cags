import styles from './../CommitmentSection.module.css';
import Image from 'next/image';
import Link from 'next/link';


const CommitmentSectionRu = () => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <p className={styles.text}>
            На протяжении всей своей истории CAGS стремится предоставлять высококачественную табачную продукцию потребителям по всему миру.  Преданность компании инновациям и удовлетворению рыночных требований помогла ей достичь значительного роста и успеха. CAGS — это надежный бренд, известный своим качеством, стабильностью и обслуживанием клиентов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSectionRu;