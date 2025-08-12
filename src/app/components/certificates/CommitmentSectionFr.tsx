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
            Notre engagement à fournir des produits et services exceptionnels est évident dans notre certification ISO 9001, qui valide notre engagement envers les systèmes de gestion de la qualité. Avec la certification ISO 14001, nous démontrons notre engagement envers les pratiques de gestion environnementale et la durabilité. De plus, notre certification ISO 45001 met en valeur notre accent sur la santé et la sécurité au travail, en priorisant le bien-être de nos employés et parties prenantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;