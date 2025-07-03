import styles from '../CommitmentSection.module.css';

const CommitmentSection = () => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          {/* The original HTML had invalid nesting (<p> inside <p>). 
            This has been corrected to a single, valid paragraph.
          */}
          <p className={styles.text}>
            Our dedication to delivering exceptional products and services is evident in our ISO 9001 certification, which validates our commitment to quality management systems. With ISO 14001 certification, we demonstrate our commitment to environmental management practices and sustainability. Furthermore, our ISO 45001 certification showcases our emphasis on occupational health and safety, prioritizing the well-being of our employees and stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;