import Image from 'next/image';
import styles from './JourneySection.module.css';

const JourneySectionFr = () => {
  return (
    <div className={styles.pageSection}>
      {/* Left side: Image */}
      <div className={styles.imageContainer}>
        <Image
          src="/fes7-2.jpg"
          alt="A remarkable journey with CAGS"
          layout="fill"
          objectFit="cover"
          quality={85}
        />
      </div>

      {/* Right side: Content */}
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.sectionheading}>
            <span className={styles.fontLight}>Suivez notre remarquable parcours</span>
          </h1>
          <p className={styles.mb60}>
          Découvrez CAGS, une marque de tabac familiale avec un patrimoine riche et un engagement envers l'excellence. Découvrez nos installations à la pointe de la technologie, notre innovation et notre satisfaction client. Rejoignez notre voyage pour façonner l'avenir de l'industrie du tabac avec une marque fiable. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySectionFr;