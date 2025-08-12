import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandsPage.module.css';
import FooterFr from '../FooterFr';

const brandsData = [
  {
    title: '10BAK',
    tagline: 'Ne Jamais se Contenter.',
    description: "Dans le domaine du tabac à chicha, 10BAK se lance dans une quête implacable du meilleur, guidé par le lion de son symbole, fier emblème de normes royales. Avec trois sélections uniques et des centaines de saveurs raffinées, la recherche de la qualité est infinie et sans compromis. Découvrez un héritage de saveurs conçu pour ceux qui recherchent l'extraordinaire et ne se contentent jamais.",
    imageUrl: '/brands/f94b971222f249aba28dcd7a9929ef47.png',
    imagePosition: 'left'
  },
  {
    title: 'ALLS',
    tagline: 'Fondé sur la Confiance et la Satisfaction.',
    description: "Bâti sur les principes de la confiance et de la satisfaction, ALLS est un nom distingué dans le monde des papiers à rouler. Avec une compréhension précise des préférences et des désirs des fumeurs, les produits d'ALLS sont soigneusement conçus pour maintenir les normes de qualité les plus élevées. Cet engagement va au-delà des simples produits, créant un lien de fiabilité qui résonne avec ceux qui apprécient l'intégrité et la cohérence.",
    imageUrl: '/brands/73ce0ed9b2e84356aef3a2b3de4eaaef.png',
    imagePosition: 'right'
  },
  {
    title: 'CRP',
    tagline: 'L excellence dans chaque rouleau.',
    description: "Fondée avec un engagement envers la qualité, la marque CRP est devenue un nom reconnu dans l'industrie, offrant une large gamme de papiers à rouler et de conseils spécialement conçus en papier/filtre. Adaptés aussi bien aux fumeurs novices qu'expérimentés, les produits CRP sont fabriqués pour répondre aux normes les plus élevées, garantissant une expérience de fumage supérieure qui résonne avec les gens du monde entier. Pour ceux qui recherchent des tubes en carbone de première qualité, notre marque CRT est là pour vous.",
    imageUrl: '/brands/d2b14e986a1a493e8ac75d73c09171c8.png',
    imagePosition: 'left'
  },
{
    title: 'Sir Badger',
    tagline: 'Conçu pour les Connaisseurs Exigeants.',
    description: "Pour ceux qui recherchent plus qu'une simple expérience de fumage, Sir Badger propose une sélection exceptionnelle de papiers à rouler en chanvre biologique, de tubes à cigarettes en chanvre, mettant particulièrement en avant l'importance des filtres en papier. Chaque produit est un témoignage de savoir-faire et d'élégance, avec un accent particulier sur les spécifications supérieures de notre papier en chanvre biologique, attirant ceux qui ont un œil avisé pour l'art subtil et la sophistication. Se laisser aller à l'offre de Sir Badger dépasse le simple passe-temps, c'est s'immerger dans un style de vie défini par des matériaux biologiques de haute qualité et un goût raffiné.",
    imageUrl: '/brands/6f1bf66d75a947e5badb9047a8185567.png',
    imagePosition: 'right'
  },
  {
    title: 'The Saint',
    tagline: 'Simplicité Exquise.',
    description: "Adoptant une approche minimaliste vers la perfection, The Saint se spécialise dans la fabrication des papiers à rouler et des tubes à cigarettes les plus fins du marché. Cette concentration singulière, équilibrée par une forme d'art, donne lieu à un produit qui allie délicatesse et résilience. Découvrez le toucher doux et le plaisir nuancé qui distinguent The Saint, où chaque rouleau est une expression magistrale d'élégance et de pureté.",
    imageUrl: '/brands/985aaee3ea4c4f449ed807614fcf7575.png',
    imagePosition: 'left'
  },
   {
    title: 'Watson',
    tagline: 'Une tradition de qualité vénérée.',
    description: "Véritable symbole de qualité et de tradition, la marque Watson se distingue comme un phare d'excellence et de savoir-faire. Offrant une sélection renommée de papiers à rouler, de tubes à cigarettes, de tabac RYO-MYO avec des mélanges distinctifs, ainsi que des accessoires pratiques, Watson est le choix de ceux qui apprécient l'histoire et la qualité. Sa réputation en tant que marque culte découle d'un dévouement à l'artisanat qui transcende les tendances, reflétant un engagement intemporel envers l'art raffiné de fumer. Avec Watson, chaque expérience est un hommage à un héritage défini par l'élégance et la qualité.",
    imageUrl: '/brands/5e4254ebeb4f4a749ccb95e04cdfec07.png',
    imagePosition: 'right' // 'left' or 'right'
  },
  {
    title: 'Young Master',
    tagline: 'Pour les Audacieux et Aventuriers.',
    description: "Inspirée par l'esprit libre et audacieux, la marque Young Master propose une sélection de papiers à rouler bruns non blanchis, de tubes à cigarettes et de filtres en papier qui résonnent avec l'appel de la nature sauvage. Conçus pour les vagabonds, les rebelles et les rêveurs, chaque produit, notamment nos papiers à rouler distinctifs, célèbre l'inhabituel. Leurs spécifications uniques témoignent de la nature audacieuse de la marque. Plongez-vous dans l'excitation des offres de Young Master et laissez chaque rouleau de notre papier brun non blanchi enflammer l'esprit aventureux qui sommeille en vous.",
    imageUrl: '/brands/860c9cdd0b974149bfbe914829c56c86.png',
    imagePosition: 'left'
  },


  {
    title: 'IMPRT',
    tagline: 'Créer de la qualité pour le monde.',
    description: "Avec un accent sur la qualité et l'adaptabilité, la marque IMPRT répond aux besoins divers des marchés avec sa sélection de tubes à cigarettes supérieurs. Conçus pour répondre aux besoins uniques de différentes régions, IMPRT symbolise la fiabilité et l'excellence. Découvrez l'art du tabagisme avec IMPRT, où chaque tube est un témoignage d'une qualité inégalée.",
    imageUrl: '/brands/d107bcbd3bc04996aafbc37e52c7a496.png',
    imagePosition: 'right'
  },
 
];

const BrandFeature = ({ title, tagline, description, imageUrl, imagePosition }) => {
  const desktopLayoutClass = imagePosition === 'right' 
    ? styles.imageRightOnDesktop 
    : styles.imageLeftOnDesktop;

  const textColumn = (
    <div className={styles.column}>
      <div className={imagePosition === 'right' ? styles.textContainer : styles.textContainerRight}>
        <div className={styles.title}>
          {title}
          <br />
          <span className={styles.bold}>{tagline}</span>
        </div>
        <div className={styles.lineSeparator}></div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );

  const imageColumn = (
    <div className={styles.column}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );

  return (
    <section className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={`${styles.row} ${desktopLayoutClass}`}>
          {imagePosition === 'left' ? (
            <>
              {textColumn}
              {imageColumn}
            </>
          ) : (
            <>
              {imageColumn}
              {textColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const BrandsPageFr = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/homeFr">Accueil</Link>
            <span className={styles.divider}>/</span>
            <span>Marques</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <div className={styles.title}>
                  <h1>
                    CAGS:<br />
                    <span className={styles.fontLight}>La meilleure marque de tabac pour vous </span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
               Notre gamme de marques se distingue par une riche histoire incluant des marques renommées telles que CRP®, SIR BADGER®, WATSON®, YOUNG MASTER®, 10BAK®, IMPRT®, ALLS® et bien d'autres encore. Avec plus de quatre décennies d'expérience dans l'industrie, notre héritage est marqué par l'innovation, une qualité de produit exceptionnelle et un lien durable avec nos clients. Présents dans 33 pays, notre influence est renforcée par notre variété de marques déposées et de marques de prestige qui ont conquis le cœur des adeptes du monde entier.
                </p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.imageWrapper}>
                <Image src="/brands/headrpic.png" alt="CAGS Brands" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Features */}
      {brandsData.map((brand) => (
        <BrandFeature
          key={brand.title}
          title={brand.title}
          tagline={brand.tagline}
          description={brand.description}
          imageUrl={brand.imageUrl}
          imagePosition={brand.imagePosition}
        />
      ))}
      
      {/* Closing Banner Section */}
      <section className={`${styles.pageSection} ${styles.closingSection}`}>
        <div className={styles.container}>
          <div className={styles.closingBanner}>
            <p>
         Nous sommes engagés envers la qualité, l'innovation et la satisfaction. Nos produits sont fabriqués avec des ingrédients de la plus haute qualité, et nous innovons constamment pour créer de nouveaux arômes passionnants. Nous offrons également une garantie de satisfaction, pour que vous soyez sûr de recevoir le meilleur produit possible.

</p>
          </div>
        </div>
      </section>
         <FooterFr />
    </>
  );
};


export default BrandsPageFr;