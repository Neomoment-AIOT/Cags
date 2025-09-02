import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandsPage.module.css';
import FooterRu from '../FooterRu';

const brandsData = [
  {
    title: '10BAK',
    tagline: 'НЕ ОСТАНАВЛИВАЙТЕСЬ',
    description: "В мире табака для кальянов 10BAK ведет неустанную охоту за лучшим, вдохновляемый львом в своем символе - гордой эмблемой королевских стандартов. Три уникальных ассортимента и сотни изысканных ароматов - это бесконечное и бескомпромиссное стремление к качеству. Насладитесь наследием вкуса, созданным для тех, кто ищет необычное и никогда не останавливается на достигнутом.",
    imageUrl: '/brands/f94b971222f249aba28dcd7a9929ef47.png',
    imagePosition: 'left'
  },
  {
    title: 'ALLS',
    tagline: 'ОСНОВА ДОВЕРИЯ И УДОВЛЕТВОРЕННОСТИ',
    description: "Построенная на принципах доверия и удовлетворенности, бренд ALLS является выдающимся именем в мире бумаги для самокруток. Обладая четким пониманием предпочтений и желаний курильщиков, продукция ALLS тщательно разрабатывается для соблюдения высоких стандартов качества. Эта приверженность выходит за рамки просто продукции, формируя связь надежности, которая находит отклик у тех, кто ценит целостность и последовательность.",
    imageUrl: '/brands/73ce0ed9b2e84356aef3a2b3de4eaaef.png',
    imagePosition: 'right'
  },
  {
    title: 'CRP',
    tagline: 'ВЕЛИКОЛЕПИЕ В КАЖДОЙ САМОКРУТКЕ',
    description: "Завоевав репутацию бренда, ориентированного на качество, бренд CRP стал признанным именем в отрасли, предлагая широкий ассортимент бумаги для самокруток и специально разработанных бумажных фильтров – типсов. Охватывая как новичков, так и опытных курильщиков, продукция CRP создана для соответствия самым высоким стандартам, обеспечивая превосходный опыт курения, который находит отклик у людей по всему миру. Для тех, кто ищет сигаретные гильзы с угольным фильтром премиум-класса, мы предлагаем наш бренд CRT.",
    imageUrl: '/brands/d2b14e986a1a493e8ac75d73c09171c8.png',
    imagePosition: 'left'
  },

  {
    title: 'IMPRT',
    tagline: 'СОЗДАВАЯ КАЧЕСТВО ДЛЯ ВСЕГО МИРА',
    description: "С акцентом на качество и адаптивность, бренд IMPRT обслуживает разнообразные рынки своим выбором высококачественных сигаретных гильз.Созданные для удовлетворения уникальных потребностей различных регионов, IMPRT символизирует надежность и превосходство.Почувствуйте тонкое искусство курения вместе с IMPRT, где каждая гильза - свидетельство непревзойденного качества.",
    imageUrl: '/brands/d107bcbd3bc04996aafbc37e52c7a496.png',
    imagePosition: 'right'
  },
  {
    title: 'Sir Badger',
    tagline: 'СОЗДАН ДЛЯ ИЗЫСКАННОГО ГУРМАНА',
    description: "Для тех, кто ищет нечто большее, чем просто стандартный опыт курения, Sir Badger предлагает исключительный выбор органической конопляной бумаги для самокруток, конопляных сигаретных трубок и особо подчеркивает важность бумажных наконечников/типсов. Каждый продукт является свидетельством мастерства и изящества, с особым акцентом на превосходные характеристики нашей органической конопляной бумаги, привлекательной для тех, кто ценит тонкое мастерство и изысканный вкус. Погружение в предложение Sir Badger выходит за рамки простого времяпрепровождения, превращаясь в погружение в образ жизни, определяемый высококачественными органическими материалами и изысканным вкусом.",
    imageUrl: '/brands/6f1bf66d75a947e5badb9047a8185567.png',
    imagePosition: 'left'
  },
  {
    title: 'The Saint',
    tagline: 'ПРОСТО СОЗДАН',
    description: "Придерживаясь минималистского подхода к совершенству, The Saint специализируется на создании самых тонких бумаг для самокруток и сигаретных гильз на рынке. Этот особый подход, сбалансированный художественной формой, приводит к созданию продукта, который сочетает нежность с устойчивостью. Ощутите нежное прикосновение и тонкое удовольствие, которое выделяет The Saint, где каждая самокрутка — мастерское выражение элегантности и чистоты.",
    imageUrl: '/brands/985aaee3ea4c4f449ed807614fcf7575.png',
    imagePosition: 'right'
  },
   {
    title: 'Watson',
    tagline: 'ТРАДИЦИЯ КАЧЕСТВА, ПРОВЕРЕННАЯ ВРЕМЕНЕМ',
    description: 'Настоящий символ качества и традиций, бренд Watson является маяком традиций и совершенства. Предлагая знаменитый выбор бумаги для самокруток, сигаретных гильз, табака RYO-MYO с уникальными смесями и практичных аксессуаров, Watson - выбор тех, кто ценит историю и качество. Репутация культового бренда обусловлена преданностью к мастерству, которое превышает временные тренды. Каждое знакомство с Watson - это знак уважения к наследию, определяемому элегантностью и качеством.',
    imageUrl: '/brands/5e4254ebeb4f4a749ccb95e04cdfec07.png',
    imagePosition: 'left' // 'left' or 'right'
  },
  {
    title: 'Young Master',
    tagline: 'ДЛЯ СМЕЛЫХ И АВАНТЮРНЫХ',
    description: "Вдохновленный свободолюбивыми и дерзкими людьми, бренд Young Master создает выбор небеленых коричневых бумаг для самокруток, сигаретных гильз и бумажных наконечников/типсов, которые отзываются на призыв дикой природы. Разработанные для странников, бунтарей и мечтателей, каждый продукт, особенно наши уникальные бумаги для самокруток, воспевают нестандартность. Их уникальные характеристики служат свидетельством дерзкой природы бренда. Погрузитесь в ощущение возбуждения от предложения Young Master и позвольте каждой самокрутке нашей небеленой коричневой бумаги разжечь в Вас дух авантюризма.",
    imageUrl: '/brands/860c9cdd0b974149bfbe914829c56c86.png',
    imagePosition: 'right'
  },
];

interface BrandFeatureProps {
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imagePosition: string;
}

const BrandFeature = ({ title, tagline, description, imageUrl, imagePosition }: BrandFeatureProps) => {
  const desktopLayoutClass = imagePosition === 'left' 
    ? styles.imageRightOnDesktop 
    : styles.imageLeftOnDesktop;

  const textColumn = (
    <div className={styles.column}>
      <div className={imagePosition === 'left' ? styles.textContainer : styles.textContainerRight}>
        <div className={styles.title}>
          {title}
          <br />
          <span className={styles.bold}>{tagline}</span>
        </div>
        <div className={styles.lineSeparator}></div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );

  const imageColumn = (
    <div className={styles.column}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );

  return (
    <section className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={`${styles.row} ${desktopLayoutClass}`}>
          {imagePosition === 'left' ? (
            <>
              {textColumn}
              {imageColumn}
            </>
          ) : (
            <>
              {imageColumn}
              {textColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const BrandsPageRu = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/homeRu">Главная</Link>
            <span className={styles.divider}>/</span>
            <span>БРЕНДЫ</span>
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
                  <h1>
                    CAGS:<br />
                    <span className={styles.fontLight}>Лучший табачный бренд для вас</span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                 Следите за информацией о наших предстоящих встречах, презентациях и показах. Это отличная возможность пообщаться с нами, увидеть, над чем мы работаем, и попробовать наши первоклассные табачные изделия. Если Вы давний поклонник, человек, занимающийся бизнесом, или просто интересуетесь тем, чем мы занимаемся, эти мероприятия - отличное место, чтобы пообщаться, узнать и попробовать одни из лучших табачных изделий в мире.
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

      {/* Brand Features */}
      {brandsData.map((brand) => (
        <BrandFeature
          key={brand.title}
          title={brand.title}
          tagline={brand.tagline}
          description={brand.description}
          imageUrl={brand.imageUrl}
          imagePosition={brand.imagePosition}
        />
      ))}
      
      {/* Closing Banner Section */}
      <section className={`${styles.pageSection} ${styles.closingSection}`}>
        <div className={styles.container}>
          <div className={styles.closingBanner}>
            <p>
           Мы стремимся к качеству, инновациям и удовлетворению потребностей. Наша продукция производится из высококачественных ингредиентов, и мы постоянно внедряем инновации, чтобы создавать новые и захватывающие вкусы. Мы также предоставляем гарантию удовлетворения, поэтому Вы можете быть уверены, что получаете самый лучший продукт.

</p>
          </div>
        </div>
      </section>
         <FooterRu />
    </>
  );
};


export default BrandsPageRu;