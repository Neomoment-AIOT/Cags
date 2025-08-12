import Image from 'next/image';
import Link from 'next/link';
import styles from './CareerPage.module.css';
import FooterFr from '../FooterFr';
// --- The Main Career Page Component ---
const CareerPageFr= () => {
  return (
     <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link className="link " href="/home/HomeFr">ACCUEIL</Link>
            <span className= "slash-divider  ml-[7px] mr-[7px]">/</span>
             <Link  className="link " href="/about/aboutFr">Entreprise</Link>
            <span className="slash-divider ml-[7px] mr-[7px]">/</span>
            <span className="bread-current">Carrière</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            {/* Text Column */}
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <div className={styles.title}>
                  <h1 >
                    Rejoignez CAGS
                    <br />
                    <span className={styles.fontLight}>
                      donnez un nouvel élan à votre carrière avec un leader mondial de l'industrie du tabac ! 
                    </span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                  Nous sommes une marque renommée dédiée à fournir des produits exceptionnels et à prioriser la satisfaction clientèle ainsi que la qualité perpétuelle. Nous recherchons des individus talentueux pour rejoindre notre équipe et nous aider à poursuivre notre succès remarquable.
                </p>
              </div>
            </div>
            {/* Image Column */}
            <div className={styles.column}>
              <div className={styles.imageWrapper}>
                {/* Ensure you replace this src with the correct path to your image */}
                <Image 
                  src="/career/Career.png" 
                  alt="Tobacco production machinery" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* No Open Positions Section */}
      <section className={`${styles.pageSection} ${styles.closingSection}`}>
         <div className={styles.container}>
           <div className={styles.closingBanner}>
              <h2 className={styles.h2}>Il n'y a actuellement aucune offre d'emploi disponible</h2>
              <p>En tant qu'employé chez CAGS, vous ferez partie d'une équipe passionnée et innovante. Vous aurez l'opportunité de développer vos compétences dans un environnement de soutien et inclusif. Nous offrons diverses opportunités d'avancement de carrière et les ressources nécessaires pour exceller.</p>
              <p>Nous croyons au pouvoir du développement et de l'innovation, nous efforçant constamment d'être des leaders de l'industrie. Rejoignez-nous dans notre voyage pour façonner l'avenir du secteur du tabac.</p>
              <p>Explorez nos opportunités actuelles et rejoignez CAGS dès aujourd'hui. Ensemble, nous pouvons atteindre des jalons remarquables et créer un avenir réussi.</p>
           </div>
         </div>
      </section>
        <FooterFr/>
    </>
  );
};

export default CareerPageFr;