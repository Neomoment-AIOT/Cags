import React from 'react';
import styles from './OurValuesSection.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Features data using images
const featuresData = [
  {
    image: '/gear.jpg',
    title: 'ценности',
    description: "Наши основные ценности: Надежность, Инновации, Компетентность, Современность и Эмпатия.",
  },
  {
    image: '/bulb.jpg',
    title: 'Наше видение',
    description: 'Быть лучшим и наиболее быстрорастущим производителем высококачественного табака и сопутствующих табачных изделий, принимая во внимание наши общие обязанности. Строить совместные, устойчивые и долгосрочные отношения с нашими клиентами/владельцами бренда.',
  },
  {
    image: '/cta.jpg',
    title: 'миссия ',
    description: 'Наша миссия заключается в предоставлении продукции высочайшего качества с нашими самыми инновационными и технологически передовыми разработками.',
  },
];

function OurValuesSectionRu() {
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

export default OurValuesSectionRu;
