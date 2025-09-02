import React from 'react';

// ✅ Import all page components
import Slider from '../../components/Slider';
import JourneySectionFr from '../../components/JourneySectionFr';
import ProductGridFr from '../../components/ProductGridFr';
import JoinNetworkFr from '../../components/JoinNetworkFr';
import StatsCounterFr from '../../components/StatsCounterFr';
import FooterFr from '@/app/components/FooterFr';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../components/DiscoverCags.module.css";

export default function HomeFr() {
  // ✅ Provide default fallback content
  const content = {
    title: "Découvrir",
    boldTitle: "CAGS",
    line1: "<b>Page d'accueil</b>",
    line2: "Définir l'avenir, honorer le passé.",
    line3: "Notre voyage a commencé il y a plus de 40 ans en Turquie...",
    button: "En savoir plus",
  };

  return (
    <main>
      <Slider />

      {/* Discover Section */}
      <div className={styles.DiscoverCagspageSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>
                {content.title}
                <br />
                <span className={styles.bold}>{content.boldTitle}</span>
              </h2>
            </div>
            <div className={styles.rightColumn}>
              <div
                className={styles.textContent}
                style={{ textAlign: 'start', lineHeight: '28px' }}
              >
                <p dangerouslySetInnerHTML={{ __html: content.line1 }} />
                <p><b>{content.line2}</b></p>
                <p>
                  Notre voyage a commencé il y a plus de 40 ans en Turquie, terre légendaire du tabac turc,
                  en tant que premier fabricant de papiers à rouler selon des normes internationales. Depuis lors,
                  nous sommes les créateurs, producteurs et distributeurs de produits appréciés par des millions
                  de personnes à travers le monde.
                </p>
                <p>
                  Des papiers à rouler aux tubes à cigarette, du tabac à narguilé aux accessoires... Avec une
                  vaste gamme de produits innovants, nous sommes fiers de répondre aux attentes élevées de
                  qualité de nos clients. Nous sommes animés par la fierté de repousser les limites pour toujours
                  faire mieux.
                </p>
                <p>{content.line3}</p>
              </div>
              <div className={styles.buttonContainer}>
                <Link href="/about/aboutFr" className={styles.button}>
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

      {/* Other sections */}
      <StatsCounterFr />
      <JourneySectionFr />
      <ProductGridFr />
      <JoinNetworkFr />
      <FooterFr />
    </main>
  );
}
