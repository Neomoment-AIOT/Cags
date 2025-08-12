import Image from 'next/image';
import Link from 'next/link';
import styles from './../TimelineSection.module.css';

const timelineData = [
  {
    year: '1982',
    description: 'Компания была основана для импорта и экспорта табака для самокруток. ',
    imageUrl: '/history/67694f7c4c8f446588d840f9ddd0f0a2.png',
  },
  {
    year: '1986',
    description: 'Началось производство плоских буклетов.',
    imageUrl: '/history/c0574d8822244d98ab8a1d7a791d8579.png',
  },
  {
    year: '2004',
    description: 'Начато производство сигаретных гильз. ',
    imageUrl: '/history/f00c0e6a66b545bbb842d4a95bc91ed2.png',
  },
  {
    year: '2011',
    description: 'Произведена установка оборудования для первичной обработки и упаковки резаного табака. ',
    imageUrl: '/history/0a6778b701524e9395eb494e1556c49e.png',
  },
  {
    year: '2012',
    description: 'Начато производство интерлинейных бумаг для самокруток. ',
    imageUrl: '/history/fa5ea6151eab4785b51bb05af8cfdd0e.png',
  },
  {
    year: '2016',
    description: 'Стартовали продажи на международном рынке.',
    imageUrl: '/history/8d95ce9971de47668800993e09710068.png',
  },
  {
    year: '2017',
    description: 'Начаты производство и продажа резаного табака для сигаретных гильз (MYO - Make Your Own). ',
    imageUrl: '/history/ec8d53d4196b469a80fb307e122b554e.png',
  },
  {
    year: '2019',
    description: 'Начаты производство и продажа резаного табака для самокруток (RYO - Roll Your Own). ',
    imageUrl: '/history/05eaa5ad1b7348c99d593eade7b4bc09.png',
  },
  {
    year: '2022',
    description: 'Начаты производство и продажа табака для кальяна.',
    imageUrl: '/history/d6da844eb75e456f82de4eb69db35f47.png',
  },
];

const TimelineSectionRu = () => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.timelineContainer}>
          {/* Timeline Start */}
          <div className={styles.timelineStart}>
            <h2 className={styles.startCaption}>CAGS</h2>
            <p className={styles.startDate}>История вех</p>
          </div>

          {/* Timeline Blocks */}
          {timelineData.map((item, index) => (
            <div key={index} className={styles.timelineBlock}>
              <div className={styles.timelineImg}></div>
              <div className={styles.date}>{item.year}</div>
              <div className={styles.timelineContent}>
                <div className={styles.contentWrapper}>
                  <div className={styles.text}>
                    <p>{item.description}</p>
                  </div>
                </div>
                {item.imageUrl && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.imageUrl}
                      alt={`Milestone from year ${item.year}`}
                      width={200}
                      height={150}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Timeline End */}
          <div className={`${styles.timelineEnd} ${styles.final}`}>
            <h2 className={styles.EndCaption}>НЕДАВНИЙ ДЕНЬ</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSectionRu;
