import Link from 'next/link';
import Image from 'next/image';
import styles from "@/app/distribution/distribution.module.css";
import FooterRu from '@/app/components/FooterRu';

const DistributionPageRu = () => {
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
            <span className={styles.current}>Дистрибуция</span>
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
                  ПРИСОЕДИНЯЙТЕСЬ
К НАШЕЙ <br className={styles.br} /></h1>
                  <h2 className={styles.subtitle}><span className={styles.fontLight}> ДИСТРИБЬЮТОРСКОЙ СЕТИ И РАЗВИВАЙТЕ СВОЙ БИЗНЕС </span>
                </h2>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                 Мы очень гордимся тем, что можем поделиться своими глобальными масштабами и постоянным ростом, который мы поддерживаем с 1982 года благодаря нашему стремлению к совершенствованию и успеху с нашими дистрибьюторами. Мы расширяем наш штат по всему миру благодаря нашему обязательству к инновациям и удовлетворению потребностей клиентов, а также нашим производственным технологиям соответствующим мировым стандартам.
                </p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/distribution/272d020ff34542ed935c85a3f0cd7b2c.png"
                  alt="Global Distribution Network"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split-Screen Detailed Info Section */}
      <section className={`${styles.pageSection} ${styles.splitSection}`}>
        <div className={styles.splitImageColumn}>
          <Image
            src="/distribution/distrub01.png"
            alt="Distribution and logistics"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.splitTextColumn}>
          <div className={styles.detailedTextContainer}>
            <p>
              Мы рады встрече с нашими новыми дистрибьюторами, которые присоединятся к нашей профессиональной и энергичной команде и будут представлять наши самые востребованные бренды и нашу продукцию, отвечающую различным предпочтениям и потребностям, широко распространенным на рынках, где мы работаем, такие как табак, бумага для самокруток, сигаретные гильзы и машины для наполнения сигаретных гильз.
            </p>
            <p>
             С помощью нашей команды по послепродажному обслуживанию мы направляем наших дистрибьюторов в каждом процессе, в котором им может потребоваться помощь; мы также организуем тренинговые программы и лагеря по продуктам и рынкам, объединяя вместе всех сотрудников CAGS Tobacco по всему миру. Мы регулярно посещаем места, чтобы убедиться, что наши команды всегда в курсе событий, а предложение новых решений для увеличения нашей доли рынка является одной из самых важных целей наших команд по послепродажному обслуживанию.
            </p>
            <p>
             Регулярно анализируя и отслеживая текущие маркетинговые тренды, а также потребности и запросы новой глобальной модели потребителя, наш отдел маркетинговых коммуникаций использует все каналы 360-градусного маркетинга для удовлетворения потребностей в маркетинговых коммуникациях наших дистрибьюторов как на локальном, так и на глобальном уровнях благодаря умению применять правильные стратегии, каналы и коммуникационные материалы. Мы также всегда стремимся к лучшему опыту для клиентов, активно и напрямую взаимодействуя со всеми заинтересованными сторонами нашего бренда.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Call-to-Action Section */}
      <section className={styles.closingSection}>
        <div className={styles.container}>
          <div className={styles.closingBox}>
            <p>
              Если Вы хотите присоединиться к нам в этом путешествии, где мы всегда поддерживаем наших дистрибьюторов с нашими производственными, операционными и маркетинговыми коммуникационными мероприятиями и послепродажными приложениями поддержки, а также получить дополнительную информацию, просто заполните форму дистрибьюторства и свяжитесь с нашей командой!
            </p>
            <p>
              Для подачи заявки и получения дополнительной информации о дистрибьюторстве, пожалуйста, свяжитесь с нами.
            </p>
          </div>
        </div>
       
      </section>
       <FooterRu />
    </>
  );
};

export default DistributionPageRu;