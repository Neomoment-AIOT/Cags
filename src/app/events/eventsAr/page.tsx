import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from "@/app/events/EventsPage.module.css";
import FooterAr from '@/app/components/FooterAr';

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
    description: "Make sure to save the dates and join us at InterTabac 2023 in Dortmund. We can't wait to meet you and share our passion for exceptional tobacco products. Get ready for an unforgettable experience at our booth, where you'll witness firsthand why CAGS stands out in the industry.",
    details: ['14-16 September 2023', 'Hall: 7', 'Booth: 7.C16'],
  },
  {
    name: 'White Label World Expo',
    imageUrl: '/events/6efcfa80e0ce47c3a71294ba345d6a22.png',
    eventUrl: 'https://www.whitelabelworldexpo.de/index.asp',
    description: 'We are excited to announce our participation in White Label World Expo, which will take place in Frankfurt, Germany. Join us at this prestigious event, where tobacco enthusiasts and industry professionals come together to explore the latest trends and innovations.',
    details: ['11-12 October 2023'],
  },
  {
    name: 'TPE International',
    imageUrl: '/events/2d704fa0bb834c10ab22ad90a4c7b47c.png',
    eventUrl: 'https://totalproductexpo.com/',
    description: 'Mark your calendars and join us at TPE in Las Vegas. Experience the passion, tradition, and exceptional craftsmanship of CAGS tobacco products. We look forward to welcoming you and sharing the joy of fine tobacco at this prestigious event.',
    details: ['31 Jan – 2 Feb 2023'],
  },
  {
    name: 'World Shisha Dubai',
    imageUrl: '/events/3cd351f230de4ba9a724f9fc66a77f0d.png',
    eventUrl: 'https://worldshishadubai.com/',
    description: 'Get ready for an unforgettable shisha extravaganza at World Shisha Dubai 2023! Mark your calendar and join us at World Shisha Dubai 2023 for a truly amazing shisha experience. Explore our exceptional products, indulge in flavorful blends, and immerse yourself in the lively ambiance of the event.',
    details: ['14-15 February 2023'],
  },
];


const EventsPage = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeAr">الصفحة الرئيسية</Link>
            <span className={styles.divider}>/</span>
            <Link href="/about/aboutAr">الشركة</Link>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>الأخبار</span>
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
                  Stay<br />
                  <span className={styles.fontLight}>Tuned</span>
                </h1>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                  Stay tuned for details on upcoming events, industry conferences, and trade shows where you can connect with us, explore our latest creations, and immerse yourself in the world of CAGS. Whether you are a tobacco enthusiast, industry professional, or simply curious about our brand, the events we attend provide a platform to engage, learn, and experience the finest quality tobacco products.
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
              Keep an eye out for more info about our upcoming meetups, presentations, and showcases. It's a chance to chat with us, see what we've been working on, and try out our top-notch tobacco products. Whether you're a long-time fan, someone in the business, or just interested in what we do, these events are a great place to chat, learn, and sample some of the best tobacco products around.
            </p>
          </div>
        </div>
      </section>
      <FooterAr />
    </>
  );
};

export default EventsPage;