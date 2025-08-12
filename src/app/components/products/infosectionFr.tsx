import Image from 'next/image';
import styles from './infosection.module.css';

const ProductinfosectionFr = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.textContainer}>
            <h1>
              <b>Expérience</b><br />
              <span className={styles.fontLight}>La différence 
</span>
            </h1>
            <div className={styles.line}></div>
            <p>
             Parcourez notre gamme de papier à rouler, de tubes à cigarettes, de tabac, de tabac pour pipe à eau et d'autres accessoires pour fumeurs afin de trouver le produit qui vous convient. Que vous soyez un connaisseur à la recherche d'une expérience tabagique raffinée ou simplement à la recherche d'un produit du tabac de haute qualité, CAGS a tout ce qu'il vous faut. 
            </p>
          </div>

          {/* Right Column: Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/about/4204f3afad75491bb45f78b21a62dc6f.png"
              alt="Remarkable Journey visual"
              width={800} // Original image width
              height={600} // Original image height
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductinfosectionFr;