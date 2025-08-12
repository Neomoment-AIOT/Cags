import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from "@/app/events/EventsPage.module.css";
import FooterFr from '@/app/components/FooterFr';

// --- Define the structure for a single event ---
interface Event {
  name: string;
  imageUrl: string;
  eventUrl: string;
  description: string;
  details: string[]; // An array for details like date, hall, booth
}

// --- All event data is stored here. To add/remove an event, edit this array. ---
const eventsData: Event[] = [
  {
    name: 'InterTabac',
    imageUrl: '/events/16c133e731a04fdd92a90607dadd5a03.jpg',
    eventUrl: 'https://www.intertabac.de/en-gb',
    description: "Assurez-vous de réserver vos dates et de nous rejoindre à InterTabac 2023 à Dortmund. Nous avons hâte de vous rencontrer et de partager notre passion pour les produits de tabac d'exception. Préparez-vous pour une expérience inoubliable à notre stand, où vous découvrirez par vous-même pourquoi CAGS se distingue dans l'industrie.",
    details: ['14-16 Septembre 2023', 'Hall: 7', 'Stand: 7.C16'],
  },
  {
    name: 'White Label World Expo',
    imageUrl: '/events/6efcfa80e0ce47c3a71294ba345d6a22.png',
    eventUrl: 'https://www.whitelabelworldexpo.de/index.asp',
    description: "Nous sommes ravis d'annoncer notre participation à la White Label World Expo qui se tiendra à Francfort, en Allemagne. Rejoignez-nous à cet événement prestigieux où les amateurs de tabac et les professionnels de l'industrie se réunissent pour découvrir les dernières tendances et innovations.",
    details: ['11-12 octobre 2023'],
  },
  {
    name: 'TPE International',
    imageUrl: '/events/2d704fa0bb834c10ab22ad90a4c7b47c.png',
    eventUrl: 'https://totalproductexpo.com/',
    description: 'Notez bien ces dates et rejoignez-nous au TPE à Las Vegas. Vivez la passion, la tradition et le savoir-faire exceptionnel des produits de tabac CAGS. Nous avons hâte de vous accueillir et de partager avec vous la joie du tabac de qualité lors de cet événement prestigieux.',
    details: ['31 janvier – 2 février 2023'],
  },
  {
    name: 'World Shisha Dubai',
    imageUrl: '/events/3cd351f230de4ba9a724f9fc66a77f0d.png',
    eventUrl: 'https://worldshishadubai.com/',
    description: "Préparez-vous pour une extravagance de shisha inoubliable à World Shisha Dubai 2023 ! Marquez vos calendriers et rejoignez-nous à World Shisha Dubai 2023 pour une expérience de shisha vraiment incroyable. Découvrez nos produits exceptionnels, savourez des mélanges aromatiques et plongez-vous dans l'ambiance animée de l'événement.",
    details: ['14-15 Février 2023'],
  },
];


const EventsPage = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeFr">Accueil</Link>
            <span className={styles.divider}>/</span>
            <Link href="/about/aboutFr">Entreprise</Link>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>Actualités</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <h1 className={styles.title}>
                  Restez<br />
                  <span className={styles.fontLight}>à l'écoute </span>
                </h1>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                  Restez à l'écoute pour plus de détails sur les événements à venir, les conférences industrielles et les salons commerciaux où vous pourrez nous rencontrer, découvrir nos dernières créations et vous plonger dans l'univers de CAGS. Que vous soyez un amateur de tabac, un professionnel de l'industrie ou simplement curieux de notre marque, les événements auxquels nous participons offrent une plateforme pour s'engager, apprendre et découvrir nos produits de tabac de la plus haute qualité.
                </p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/events/dc037af8b8d542648c3db95d6a45beea.png"
                  alt="Stay Tuned"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events List Section */}
      <section className={styles.eventsListSection}>
        <div className={styles.container}>
          {eventsData.map((event, index) => (
            <React.Fragment key={event.name}>
              <div className={styles.eventRow}>
                {/* Left Column: Event Logo */}
                <div className={styles.eventLogoColumn}>
                  <a href={event.eventUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={event.imageUrl}
                      alt={`${event.name} logo`}
                      width={250}
                      height={150} // Adjust height as needed for aspect ratio
                      objectFit="contain"
                    />
                  </a>
                </div>
                {/* Right Column: Event Details */}
                <div className={styles.eventDetailsColumn}>
                  <h2 className={styles.eventTitle}>{event.name}</h2>
                  <p className={styles.description}>{event.description}</p>
                  <div className={styles.eventMeta}>
                    {event.details.map((detail, i) => (
                      <React.Fragment key={i}>
                        {detail}<br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              {/* Render a separator unless it's the last event */}
              {index < eventsData.length - 1 && <hr className={styles.separator} />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Closing Banner Section */}
      <section className={styles.closingSection}>
        <div className={styles.container}>
          <div className={styles.closingBox}>
            <p>
             Gardez un œil sur nos prochaines rencontres, présentations et démonstrations. C'est l'occasion de discuter avec nous, de découvrir nos derniers projets et d'essayer nos produits de tabac de première qualité. Que vous soyez un fan de longue date, un professionnel du secteur ou simplement curieux de notre travail, ces événements sont l'endroit idéal pour échanger, apprendre et découvrir certains des meilleurs produits de tabac disponibles.
            </p>
          </div>
        </div>
      </section>
      <FooterFr />
    </>
  );
};

export default EventsPage;