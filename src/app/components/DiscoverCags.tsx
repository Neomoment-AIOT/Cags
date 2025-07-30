import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './DiscoverCags.module.css';

// 1. Define the "shape" of the data the component expects to receive.
// This is the blueprint for its content.
type DiscoverCagsProps = {
  content?: { // The `?` makes the prop optional to prevent errors if it's not loaded yet.
    title: string;
    boldTitle: string;
    line1: string;
    line2: string;
    line3: string;
    button: string;
  };
};
const DiscoverCags = ({ content }: DiscoverCagsProps) => {
  if (!content) {
    return null;
  }
  return (
    <div className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>
              Discover<br />
              <span className={styles.bold}>Cags</span>
            </h2>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.textContent} style={{ textAlign: 'start', lineHeight: '28px' }}>
              <p dangerouslySetInnerHTML={{ __html: content.line1 }} />
              <p>Our journey begun more then 40 years ago in Turkey, the land of legendary Turkish Tobacco, as the first Rolling Paper Manufacturer producing with international standards. We’ve been the creator, producer and distributer of products enjoyed by millions around the world since then.</p>
              <p>{content.line3}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Link
                href="/about" className={styles.button} >
                {content.button} &nbsp;
                <Image
                  src="/righticon.png"
                  alt="Arrow icon"
                  width={20}
                  height={20}
                  style={{ maxWidth: '20px', height: 'auto' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCags;