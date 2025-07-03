import React from 'react';
import styles from './OurValuesSection.module.css';

// --- SVG Icon Components ---
// Define the icons FIRST, before they are used.
const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20v-4 M12 4v4 M20.78 16.24l-3-1.74 M3.22 7.76l3 1.74 M18.5 5.5l-3 1.74 M5.5 18.5l3-1.74 M12 14a2 2 0 100-4 2 2 0 000 4z" />
    <path d="M19.07 12.93a2.5 2.5 0 01-1.4 3.3l-2.43 1.4a2.5 2.5 0 01-3.3-1.4l-.73-2.53a2.5 2.5 0 011.4-3.3l2.43-1.4a2.5 2.5 0 013.3 1.4l.73 2.53z" />
    <path d="M4.93 11.07a2.5 2.5 0 011.4-3.3l2.43-1.4a2.5 2.5 0 013.3 1.4l.73 2.53a2.5 2.5 0 01-1.4 3.3l-2.43 1.4a2.5 2.5 0 01-3.3-1.4l-.73-2.53z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19a5 5 0 01-5-5 5 5 0 015-5h6a5 5 0 015 5 5 5 0 01-5 5H9z" />
    <path d="M12 14v5 M12 5V4 M8 5l-1-1 M16 5l1-1" />
    <path d="M9 2h6" />
  </svg>
);

const PaperplaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22l-4-9-9-4 21-7z" />
  </svg>
);

// NOW, you can safely use the icon components in your data array.
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
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValuesSection;