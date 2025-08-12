import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from "@/app/events/EventsPage.module.css";
import FooterRu from '@/app/components/FooterRu';

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
    description: "Не забудьте отметить даты и присоединиться к нам на InterTabac 2023 в Дортмунде. Нам не терпится встретиться с Вами и  поделиться возможностью нашей страстью к исключительным табачным продуктам. Приготовьтесь к незабываемому опыту на нашем стенде, где вы сможете лично увидеть, почему CAGS выделяется в отрасли.",
    details: ['Дата: 14-16 сентября 2023 года', 'Зал: 7', 'Стенд: 7.C16'],
  },
  {
    name: 'White Label World Expo',
    imageUrl: '/events/6efcfa80e0ce47c3a71294ba345d6a22.png',
    eventUrl: 'https://www.whitelabelworldexpo.de/index.asp',
    description: 'Мы с радостью объявляем о нашем участии в White Label World Expo, которая состоится во Франкфурте, Германия. Присоединяйтесь к нам на этом престижном мероприятии, где любители табака и профессионалы отрасли собираются для изучения последних тенденций и инноваций.',
    details: [' '],
  },
  {
    name: 'TPE International',
    imageUrl: '/events/2d704fa0bb834c10ab22ad90a4c7b47c.png',
    eventUrl: 'https://totalproductexpo.com/',
    description: 'Отметьте даты в календаре и присоединяйтесь к нам на TPE в Лас-Вегасе. Почувствуйте страсть, традиции и исключительное мастерство табачных изделий CAGS. Мы с нетерпением ждем встречи с Bами и возможности поделиться радостью от изысканного табака на этом престижном мероприятии.',
    details: ['Дата: 31 января – 2 февраля 2023'],
  },
  {
    name: 'World Shisha Dubai',
    imageUrl: '/events/3cd351f230de4ba9a724f9fc66a77f0d.png',
    eventUrl: 'https://worldshishadubai.com/',
    description: 'Приготовьтесь к незабываемому впечатлению от шикарного шоу по кальянам на World Shisha Dubai 2023! Отметьте эту дату в календаре и присоединяйтесь к нам на World Shisha Dubai 2023 для поистине удивительного опыта с кальянами. Познакомьтесь с нашей исключительной продукцией, насладитесь ароматными смесями и окунитесь в живую атмосферу события.',
    details: ['Дата: 14-15 февраля 2023'],
  },
];


const EventsPage = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeRu">Главная</Link>
            <span className={styles.divider}>/</span>
            <Link href="/about/aboutRu">О компании</Link>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>Новости</span>
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
                  ОСТАВАЙТЕСЬ<br />
                  <span className={styles.fontLight}>НА СВЯЗИ </span>
                </h1>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                 Ожидайте подробности о предстоящих событиях, отраслевых конференциях и выставках, где Вы сможете встретиться с нами, попробовать наши последние творения и погрузиться в мир CAGS. Независимо от того, являетесь ли Вы поклонником табака, профессионалом отрасли или просто интересуетесь нашим брендом, события, на которых мы присутствуем, предоставляют платформу для общения, обучения и знакомства с высочайшими качеством табачными продуктами.
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
              Следите за информацией о наших предстоящих встречах, презентациях и показах. Это отличная возможность пообщаться с нами, увидеть, над чем мы работаем, и попробовать наши первоклассные табачные изделия. Если Вы давний поклонник, человек, занимающийся бизнесом, или просто интересуетесь тем, чем мы занимаемся, эти мероприятия - отличное место, чтобы пообщаться, узнать и попробовать одни из лучших табачных изделий в мире.
            </p>
          </div>
        </div>
      </section>
      <FooterRu />
    </>
  );
};

export default EventsPage;