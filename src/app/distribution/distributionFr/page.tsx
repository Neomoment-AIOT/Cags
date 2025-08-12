import Link from 'next/link';
import Image from 'next/image';
import styles from "@/app/distribution/distribution.module.css";
import FooterFr from '@/app/components/FooterFr';

const DistributionPageFr = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeFr">Accueil</Link>
            <span className={styles.divider}>/</span>
            <Link href="/about/aboutFr">Entreprise</Link>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>DISTRIBUTION</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <h1 className={styles.title}>
                 Rejoignez notre réseau de distribution &amp;<br className={styles.br} /></h1>
                  <h2 className={styles.subtitle}><span className={styles.fontLight}> et développez votre entreprise.</span>
                </h2>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                  Rejoignez notre réseau de distribution et développez votre entreprise Nous sommes très fiers de partager notre croissance constante à l'échelle mondiale que nous maintenons depuis 1982, grâce à notre passion pour l'amélioration et le succès avec nos distributeurs. Nous élargissons notre équipe dans le monde entier avec notre engagement envers l'innovation et la satisfaction client, nos technologies de production répondant aux normes mondiales.
                </p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/distribution/272d020ff34542ed935c85a3f0cd7b2c.png"
                  alt="Global Distribution Network"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split-Screen Detailed Info Section */}
      <section className={`${styles.pageSection} ${styles.splitSection}`}>
        <div className={styles.splitImageColumn}>
          <Image
            src="/distribution/distrub01.png"
            alt="Distribution and logistics"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.splitTextColumn}>
          <div className={styles.detailedTextContainer}>
            <p>
              Nous nous réjouissons de rencontrer nos nouveaux distributeurs, qui rejoindront nos équipes professionnelles et dynamiques et représenteront nos marques très demandées ainsi que nos produits, répondant à différentes préférences et besoins largement acceptés sur les marchés où nous opérons, tels que le tabac, les papiers à rouler, les tubes à cigarettes et les machines de remplissage de tubes à cigarettes.
            </p>
            <p>
              Avec nos équipes de support après-vente, nous guidons nos distributeurs dans tous les processus où ils pourraient avoir besoin d'aide ; nous organisons également des programmes de formation basés sur les produits et le marché, rassemblant tout le personnel de Cags Tobacco dans le monde entier. Alors que nous effectuons régulièrement des visites sur le terrain pour nous assurer que nos équipes sont toujours à jour, suggérer de nouvelles solutions pour augmenter notre part de marché est l'un des objectifs les plus importants de nos équipes de support après-vente.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Call-to-Action Section */}
      <section className={styles.closingSection}>
        <div className={styles.container}>
          <div className={styles.closingBox}>
            <p>
             Si vous souhaitez vous joindre à nous dans ce voyage, où nous soutenons toujours nos distributeurs avec nos actions de production, d'exploitation, de communication marketing et nos applications de support après-vente, et obtenir plus d'informations, remplissez simplement le formulaire de distribution et entrez en contact avec notre équipe !
            </p>
            <p>
              Pour toute demande d'application et plus d'informations sur la distribution, veuillez nous contacter.
            </p>
          </div>
        </div>
       
      </section>
       <FooterFr />
    </>
  );
};

export default DistributionPageFr;