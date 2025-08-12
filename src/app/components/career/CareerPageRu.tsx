import Image from 'next/image';
import Link from 'next/link';
import styles from './CareerPage.module.css';
import FooterRu from '../FooterRu';
// --- The Main Career Page Component ---
const CareerPageRu = () => {
  return (
     <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link className="link " href="/home/HomeRu">Главная</Link>
            <span className= "slash-divider  ml-[7px] mr-[7px]">/</span>
             <Link  className="link " href="/about/aboutRu">О компании</Link>
            <span className="slash-divider ml-[7px] mr-[7px]">/</span>
            <span className="bread-current">Карьера</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            {/* Text Column */}
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <div className={styles.title}>
                  <h1 >
                    ПРИСОЕДИНЯЙТЕСЬ К CAGS
РАЗВИВАЙТЕ СВОЮ
                    <br />
                    <span className={styles.fontLight}>
                      Ignite your career with a global leader in the tobacco industry!КАРЬЕРУ С ГЛОБАЛЬНЫМ ЛИДЕРОМ В ТАБАЧНОЙ ИНДУСТРИИ 
                    </span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                 

Мы являемся известным брендом, посвятивший себя на выпуске исключительных продуктов и приоритету удовлетворения клиентов и постоянного качества. Мы ищем талантливых людей, которые присоединятся к нашей команде и помогут нам продолжить наш выдающийся успех.

                </p>
              </div>
            </div>
            {/* Image Column */}
            <div className={styles.column}>
              <div className={styles.imageWrapper}>
                {/* Ensure you replace this src with the correct path to your image */}
                <Image 
                  src="/career/Career.png" 
                  alt="Tobacco production machinery" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* No Open Positions Section */}
      <section className={`${styles.pageSection} ${styles.closingSection}`}>
         <div className={styles.container}>
           <div className={styles.closingBanner}>
              <h2 className={styles.h2}>В настоящее время нет открытых вакансий.</h2>
              <p>Став сотрудником CAGS, Bы станете частью увлеченного и инновационного трудового коллектива. У Bас будет возможность расти и развивать свои навыки в благоприятной среде. Мы предлагаем различные возможности для карьерного роста и ресурсы, необходимые для достижения успеха.</p>
              <p>Мы верим в силу развития и инноваций, постоянно стремясь стать лидерами отрасли. Присоединяйтесь к нам в нашем путешествии, чтобы формировать будущего табачного сектора.</p>
              <p>Ознакомьтесь с нашими текущими вакансиями и присоединяйтесь к CAGS уже сегодня. Вместе мы сможем достичь выдающихся результатов и создать успешное будущее.</p>
           </div>
         </div>
      </section>
        <FooterRu />
    </>
  );
};

export default CareerPageRu ;