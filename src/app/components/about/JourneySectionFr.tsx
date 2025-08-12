import Image from 'next/image';
import styles from './JourneySection.module.css';


const JourneySectionFr = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.textContainer}>
            <h1>
              <b>Suivez</b><br />
              <span className={styles.fontLight}>Notre remarquable parcours </span>
            </h1>
            <div className={styles.line}></div>
            <p className={styles.paragraph}>
            Découvrez CAGS, une marque de tabac familiale avec un patrimoine riche et un engagement envers l'excellence. Découvrez nos installations à la pointe de la technologie, notre innovation et notre satisfaction client. Rejoignez notre voyage pour façonner l'avenir de l'industrie du tabac avec une marque fiable.
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

export default JourneySectionFr;