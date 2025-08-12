import React from 'react';
import styles from './OurValuesSection.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Features data using images
const featuresData = [
  {
    image: '/gear.jpg',
    title: 'Valeurs',
    description: "Nos valeurs fondamentales sont la Fiabilité, l'Innovation, la Compétence, la Modernité et l'Empathie.",
  },
  {
    image: '/bulb.jpg',
    title: 'Vision',
    description: 'Devenir le meilleur producteur de tabac et de produits connexes de haute qualité, tout en intégrant nos responsabilités globales. Établir des relations de valeur conjointe, solides et durables avec nos clients et les parties prenantes de la marque.',
  },
  {
    image: '/cta.jpg',
    title: 'Mission',
    description: 'Notre mission est de fournir des produits de la plus haute qualité grâce à des conceptions innovantes et technologiquement avancées.',
  },
];

function OurValuesSectionFr() {
  return (
    <div className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureBox}>
              <div className={styles.iconbox}>
                <div className={styles.iconWrapper}>
                  <img src={feature.image} alt={feature.title} className={styles.iconImage} />
                </div>
              </div>
              <div className={styles.contentBox}>
                <h3 className={styles.titles}>{feature.title}</h3>
                <p className={styles.desription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurValuesSectionFr;
