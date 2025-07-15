import React from 'react';
import styles from './OurValuesSection.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Font Awesome icon components
const GearIcon = () => <i className="fas fa-gear fa-3x" />;
const LightbulbIcon = () => <i className="fas fa-lightbulb fa-3x" />;
const PaperplaneIcon = () => <i className="fas fa-paper-plane fa-3x" />;

// Features data using FA icons
const featuresData = [
  {
    icon: <GearIcon />,
    title: 'Our Values',
    description: 'Our core values are to be Reliable, Innovative, Competent, Modern, and Empathetic.',
  },
  {
    icon: <LightbulbIcon />,
    title: 'Our Vision',
    description: 'To be the best and fastest growing producer of high-quality tobacco and tobacco related products while taking into account our overall responsibilities. Build joint, solid, and long-term value relationships with our customers/brand stakeholders.',
  },
  {
    icon: <PaperplaneIcon />,
    title: 'Our Mission',
    description: 'Our mission is to provide the highest quality products with our most innovative and technologically advanced experience designs.',
  },
];

const OurValuesSection = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureBox}>
                <div className={styles.iconbox}>
                      <div className={styles.iconWrapper}>{feature.icon}</div>
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

export default OurValuesSection;
