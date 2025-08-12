// import styles from "../history/CommitmentSection.module.css";
import styles from "./CertificateSection.module.css";

const CommitmentSection = () => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          {/* The original HTML had invalid nesting (<p> inside <p>). 
            This has been corrected to a single, valid paragraph.
          */}
          <p className={styles.text}>
           Наши сертификаты международного образца являются отражением нашего стремления к совершенству. Мы обладаем международно признанными сертификатами ISO, гарантирующими превосходное качество и соответствие стандартам отрасли.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;