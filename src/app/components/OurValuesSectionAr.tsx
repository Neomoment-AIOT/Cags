import React from 'react';
import styles from './OurValuesSection.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Features data using images
const featuresData = [
  {
    image: '/gear.jpg',
    title: 'والقيم',
    description: 'القيم قيمنا الأساسية هي أن نكون موثوقين، مبتكرين، كفؤين، حديثين، ومتفهمين',
  },
  {
    image: '/bulb.jpg',
    title: 'الرؤية',
    description: 'الرؤية أن نكون أفضل منتج للتبغ ومنتجاته ذات الجودة العالية، ونحقق أسرع وتيرة نمو، مع مراعاة مسؤولياتنا الشاملة. نبني علاقات قيمة مشتركة ومتينة وطويلة الأمد مع عملائنا وشركاء العلامات التجارية',
  },
  {
    image: '/cta.jpg',
    title: 'والرسالة',
    description: 'الرسالة رسالتنا هي تقديم منتجات عالية الجودة من خلال تصاميم مبتكرة وتقنيات متطورة',
  },
];

const OurValuesSectionAr = () => {
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
};

export default OurValuesSectionAr;
