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

/**
 * This is a dynamic and reusable component.
 * It does NOT contain any hardcoded text.
 * It receives all its text content via the `content` prop from a parent component.
 */
const DiscoverCags = ({ content }: DiscoverCagsProps) => {
  // 2. Add a "guard clause". If for any reason the content isn't passed,
  // the component will simply render nothing instead of crashing.
  if (!content) {
    return null;
  }

  // 3. The JSX now acts as a template, filled in by the `content` prop variables.
  return (
    <div className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>

          {/* Left Column: Heading */}
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>
              Discover<br />
              <span className={styles.bold}>Cags</span>
            </h2>
          </div>

          {/* Right Column: Content and Button */}
          <div className={styles.rightColumn}>
            <div className={styles.textContent} style={{ textAlign: 'start', lineHeight: '28px' }}>
              {/* The `dangerouslySetInnerHTML` is used for the line that contains <strong> tags */}
              <p dangerouslySetInnerHTML={{ __html: content.line1 }} />
              <p>Our journey begun more then 40 years ago in Turkey, the land of legendary Turkish Tobacco, as the first Rolling Paper Manufacturer producing with international standards. We’ve been the creator, producer and distributer of products enjoyed by millions around the world since then.</p>
              <p>{content.line3}</p>
            </div>

            <div className={styles.buttonContainer}>
              <Link
                href="https://cagsgrp.com/Home/About"
                className={styles.button}
              >
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