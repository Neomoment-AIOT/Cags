import styles from './CommitmentSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
<style>

</style>

const CommitmentSection = () => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <p className={styles.text}>
            Throughout its history, CAGS has been committed to providing high-quality tobacco products to customers around the world. The company's dedication to innovation and meeting market demands has helped it to achieve significant growth and success. CAGS is a trusted brand that is known for its quality, consistency, and customer service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;