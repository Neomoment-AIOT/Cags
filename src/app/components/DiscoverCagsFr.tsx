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
const DiscoverCagsFr = ({ content }: DiscoverCagsProps) => {
  if (!content) {
    return null;
  }
  return (
    <div className={styles.DiscoverCagspageSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>
              Découvrir<br />
              <span className={styles.bold}>Cags</span>
            </h2>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.textContent} style={{ textAlign: 'start', lineHeight: '100%' }}>
              <p dangerouslySetInnerHTML={{ __html: content.line1 }} />
              <p><b>Définir l'avenir, honorer le passé.</b></p>
              <p>Notre voyage a commencé il y a plus de 40 ans en Turquie, terre légendaire du tabac turc, en tant que premier fabricant de papiers à rouler selon des normes internationales. Depuis lors, nous sommes les créateurs, producteurs et distributeurs de produits appréciés par des millions de personnes à travers le monde.</p>
              <p>Des papiers à rouler aux tubes à cigarette, du tabac à narguilé aux accessoires... Avec une vaste gamme de produits innovants, nous sommes fiers de répondre aux attentes élevées de qualité de nos clients. Nous sommes animés par la fierté de repousser les limites pour toujours faire mieux.</p>
              <p>{content.line3}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Link
                href="/about/aboutFr" className={styles.button} >
                {/* {content.button} */}
                En savoir plus  &nbsp;
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

export default DiscoverCagsFr;