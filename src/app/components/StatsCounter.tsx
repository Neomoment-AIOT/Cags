"use client"; // Add this line at the top

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from './StatsCounter.module.css';

// You can define your stats data here or pass it as a prop
const statsData = [
  { number: 33, title: 'Countries' },
  { number: 14, title: 'Flagship Brands' }, // Corrected "Brand" to "Brands"
  { number: 100, title: 'Generic Brands' }, // Corrected "Brand" to "Brands"
  { number: 110, title: 'Registered Trademarks' } // Corrected "Trademark" to "Trademarks"
];

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.1,    // Triggers when 10% of the component is visible
  });

  return (
    <div id="counter-1" className={styles.pageSection}>
      <div className={styles.container}>
        <div ref={ref} className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.countNumber}>
                {inView ? <CountUp end={stat.number} duration={2.75} /> : '0'}
              </div>
              <div className={styles.countDescr}>
                <span className={styles.countTitle}>{stat.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;