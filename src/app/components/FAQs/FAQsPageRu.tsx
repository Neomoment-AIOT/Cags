import Image from 'next/image';
import Link from 'next/link';
import styles from './FAQsPage.module.css';
import FooterRu from '../FooterRu';

const FAQsData = [
   {
    question: "В: Кто такой CAGS и чем Вы занимаетесь?",
    answer: "О: CAGS - это известный семейный табачный бренд с богатым наследием и стремлением к совершенству. Мы занимаемся производством высококачественного табака и табачных продуктов."
  },
  {
    question: "В: Где расположены Ваши производственные мощности?",
    answer: "О: Наши самые современные производственные мощности расположены в Турции, что позволяет нам поддерживать высочайший уровень качества во всех аспектах нашей деятельности."
  },
  {
    question: "В: Какие бренды и продукты предлагает CAGS?",
    answer: "О: CAGS предлагает широкий ассортимент брендов и продуктов табачной промышленности, включая табак для самокруток, бумагу для самокруток, сигаретные гильзы, табак для кальянa и многое другое. Пожалуйста, посетите наши страницы Бренды и Продукты для получения дополнительной информации."
  },
  {
    question: "В: Ваша продукция местного производства?",
    answer: "О: Да, мы гордимся тем, что на 100% обеспечиваем местное производство, гарантируя, что наша продукция соответствует высококлассным мировым стандартам качества."
  },
  {
    question: "В: Как я могу стать дистрибьютором табачных продуктов CAGS?",
    answer: "О: Мы приглашаем дистрибьюторов желающих присоединиться к нашей сети и развивать свой бизнес вместе с нами. Чтобы узнать больше о нашей дистрибьюторской программе и связаться с нашей командой, посетите нашу страницу 'Дистрибуция'."
  },
  {
    question: "В: Какие сертификаты имеет CAGS?",
    answer: "О: CAGS имеет международно признанные сертификаты ISO, включая ISO 9001:2015 по управлению качеством, ISO 14001:2015 по экологическому менеджменту и ISO 45001:2018 по охране труда и технике безопасности. Эти сертификаты отражают наше стремление к совершенству и соблюдение стандартов отрасли. "
  },
  {
    question: "В: Как можно связаться с CAGS?",
    answer: "О: Вы можете связаться с нами через нашу страницу 'Контакты', где Bы найдете наш адрес электронной почты, номера телефонов и адрес нашего офиса для любых вопросов или запросов. Мы ценим Bаши запросы и отзывы. Следите за нами в социальных сетях, чтобы узнавать первыми о наших новостях, событиях, продуктах и многое другое. Вы можете найти нас на Facebook, Instagram, YouTube и LinkedIn."
  },
  {
    question: "В: Предлагает ли CAGS возможности для карьерного роста?",
    answer: "О: Да, мы верим в развитие талантов и предоставление возможностей для карьерного роста. Мы регулярно обновляем нашу страницу 'Карьера' с вакансиями. Заходите на неё чаще или подписывайтесь на нашу рассылку, чтобы получать обновления о новых позициях. "
  },
  {
    question: "В: Каков подход CAGS к инновациям?",
    answer: "О: В компании CAGS мы привержены инновациям и постоянно расширяем границы возможного в табачной индустрии. Наши высокопроизводительные исследования и производственные практики позволяют нам занимать лидирующие позиции среди производственных компаний в этом секторе."
  },
  {
    question: "В: Как CAGS обеспечивает удовлетворенность клиентов?",
    answer: "A: Удовлетворение потребностей клиентов является для нас главным приоритетом. Мы располагаем международной дистрибьюторской сетью и стремимся обеспечить 100% удовлетворение потребностей клиентов благодаря высококачественной продукции, инновационному дизайну и профессиональной поддержке"
  }
  // ... Add more brand objects here as needed
];


  const imageColumn = (
    <div className={styles.column}>
      <div className={styles.imageWrapper}>
        {/* <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" /> */}
      </div>
    </div>
  );

  // return (

    <section className={styles.pageSection}>
      <div className={styles.containerFluid}>
        {/* <div className={styles.row}>
          {imagePosition === 'right' ? (
            <> {textColumn} {imageColumn} </>
          ) : (
            <> {imageColumn} {textColumn} </>
          )}
        </div> */}
      </div>
    </section>
  // );



// --- The Main Page Component ---
const FAQsPage = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeRu">Главная</Link>
            <span className={styles.divider}>/</span>
            <span>Часто задаваемые вопросы</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <div className={styles.title}>
                  <h1 className={styles.h1}>
                    ВАШ ИСТОЧНИК<br />
                    <span className={styles.fontLight}>ИНФОРМАЦИИ О ТАБАКЕ</span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
Найдите ответы на часто задаваемые вопросы о CAGS, ведущем табачном бренде, известном своими исключительными продуктами и удовлетворением клиентов. Узнайте о наших предложениях, производственных мощностях, сертификатах и o многом другом.
 </p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.imageWrapper}>
                <Image src="/brands/headrpic.png" alt="CAGS Brands" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Main FAQs section*/}
 <div className={styles.container}>
      <div className={styles.introSection}>
        <h2 className={styles.mainHeading}>СЕМЕЙНЫЙ ТАБАЧНЫЙ БРЕНД С БОГАТЫМ НАСЛЕДИЕМ И ТВЕРДОЙ ПРИВЕРЖЕННОСТЬЮ К СОВЕРШЕНСТВУ</h2>
        <p className={styles.introParagraph}>
         CAGS - это выдающийся семейный табачный бренд с богатым наследием и стремлением к совершенству. С глобальным присутствием мы утвердили себя как известное имя в табачной промышленности, с гордостью представляя Турцию. 
        </p>
      </div>

      <div className={styles.faqList}>
        {FAQsData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <h5 className={styles.question}>{item.question}</h5>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
      
      {/* Closing Banner Section */}
      <section className={`${styles.pageSection} ${styles.closingSection}`}>
         <div className={styles.container}>
            <div className={styles.closingBanner}>
                <p>

Если у Вас возникнут дополнительные вопросы или Вам понадобится дополнительная информация, пожалуйста, не стесняйтесь обращаться в нашу службу поддержки клиентов. Мы готовы помочь Вам и предоставить необходимую информацию. Свяжитесь с нами.
</p>
            </div>
         </div>
      </section>
        <FooterRu />
    </>
  );
};

export default FAQsPage;