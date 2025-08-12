import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandsPage.module.css';
import FooterAr from '../FooterAr';

const brandsData = [
  
  {
    title: '10BAK',
    tagline: 'لا تتنازل أبدًا',
    description: " في عالم تبغ الشيشة في بحث لا هوادة فيه عن الأفضل، مستوحاة من الأسد رمز فخرو المعايير الملكية10bak تنطلق , مع ثلاثة اختيارات فريدة ومئات النكهات المكررة، فإن السعي وراء الجودة لا ينتهي ولا يتسامح. اكتشف إرث النكهة الذي صُنع لأولئك الذين يسعون إلى الاستثنائي ولا يترددون في المبادرة, اطلع على المزيد",
    imageUrl: '/brands/f94b971222f249aba28dcd7a9929ef47.png',
    imagePosition: 'left'
  },
{
    title: 'ALLS',
    tagline: 'متأصلة على الثقة والرضا',
    description: " اسمًا متميزًا في عالم أوراق اللف ALLS مبنية على مبادئ الثقة والرضا، تع , ALLS تم صنع منتجات  بفهم دقيق لتفضيلات ورغبات المدخنين، , بعناية للحفاظ على أعلى معايير الجودة. يمتد هذا التعهد إلى ما هو أبعد من مجرد منتجات، حيث يُشكل رابطة من الاعتمادية مع أولئك الذين يقدرون النزاهة والاستمرارية ,اكتشف المزيد",
    imageUrl: '/brands/73ce0ed9b2e84356aef3a2b3de4eaaef.png',
    imagePosition: 'right'
  },
{
    title: 'CRP',
    tagline: 'الجودة الفائقة في كل لفة',
        description: "CRP تأسست العلامة التجارية ,  وأصبحت اسمًا معروفًا في السوق، تقدم مجموعة واسعة من أوراق اللف والفلاتر المصممة خصيصًا لتلبية احتياجات كل من المدخنين المبتدئين والمحترفين، حيث تم تصنيعها لتلبية أعلى المعايير، مما يضمن تجربة تدخين متفوقة تلقى صدى بين الناس في جميع أنحاء العالم. , لأولئك الذين يبحثون عن أنابيب الكربون الفاخرة، فعلامتنا التجارية , متوفرة لخدمتكCRT,  اطلع على المزيد",
    imageUrl: '/brands/d2b14e986a1a493e8ac75d73c09171c8.png',
    imagePosition: 'left'
  },
   {
    title: 'IMPRT',
    tagline: 'صُنع الجودة للعالم',
    description: "   أسواقًا متنوعة من خلال مجموعت  IMPRTتخدم علامة بتركيز على الجودة والتكيف , سجائر الفاخرة. مصممة لتلبية الاحتياجات الفريدة لمختلف المناطق ترمز لى الاعتمادية والتميز. اكتشف فن التدخين الرفيع مع , حيث تمثل كل أنبوبة شهادة على الجودة الفائقة غير المتناهية .IMPRT , اطلع على المزيد ",
    imageUrl: '/brands/d107bcbd3bc04996aafbc37e52c7a496.png',
    imagePosition: 'right'
  },
    {
    title: 'Sir Badger',
    tagline: 'مصممة للمتذوق المتميز',
    description: " بالنسبة لأولئك الذين يبحثون عن تجربة تدخين استثنائية، يقدم السيد بادجر مجموعة استثنائية من أوراق اللف العضوية من القنب، وأنابيب السجائر من القنب، مع التركيز البارز على أهمية نصائح الورق. يُعد كل منتج شهادة على الحرفية والأناقة، مع التركيز الخاص على المواصفات الفائقة لورق القنب العضوي لدينا، مما يستهوي أولئك الذين يتمتعون بعين حساسة للفن الدقيق والأناقة. تستلذ بمنتجات السيد بادجر يتجاوز مجرد وقت الفراغ، فهو يصبح غمرًا في نمط حياة يعرف بالمواد العضوية عالية الجودة والذوق الرفيع. , اطلع على المزيد",
    imageUrl: '/brands/6f1bf66d75a947e5badb9047a8185567.png',
    imagePosition: 'left'
  },
   {
    title: 'The Saint',
    tagline: 'بسيطة بلمسة رفيعة',
    description: "  معتنقًا نهجًا بسيطًا نحو الكمال، تتخصص العلامة التجارية في صناعة أرق أوراق اللف وأنابيب السجائر في السوق. هذا التركيز الفريد، المتوازن بفن، ينتج منتجًا يجمع بين الرقة والصلابة. اختبر اللمسة الرقيقة والمتعة المفصلة التي تميزها،  , حيث تُعد كل لفة تعبيرًا متقنًا عن الأناقة والنقاء   , اطلع على المزيد ",
    imageUrl: '/brands/985aaee3ea4c4f449ed807614fcf7575.png',
    imagePosition: 'right'
  },
  {
    title: 'Watson',
    tagline: 'قليد عريق من الجودة',
    description: '  رمز حقيقي للجودة والتقاليد، تقف علامة واتسون كمصباح يضيء الطريق للتقاليد والتميز. تقدم واتسون مجموعة مشهورة من أوراق اللف، وأنابيب السجائر، وتبغ ,RYO-MYO بمزجات مميزة،   ,بالإضافة إلى الإكسسوارات العملية، وتعد الخيار الأمثل لأولئك الذين يقدرون التاريخ والجودة. سمعتها كعلامة ثقافية تنبع من التفاني في الحرفية التي تتجاوز الاتجاهات، معبرة عن التزام دائم بفن التدخين الرفيع. مع واتسون، كل تجربة تمثل احتراماً لتراث يتسم بالأناقة والجودة.  ,اطلع على المزيد',
    imageUrl: '/brands/5e4254ebeb4f4a749ccb95e04cdfec07.png',
    imagePosition: 'left' // 'left' or 'right'
  },
  {
    title: 'Young Master',
    tagline: 'لأولئك الجريئين والمغامرين',
    description: " مستوحاة من الأرواح الحرة والجريئة، تقدم العلامة مجموعة من أوراق اللف البنية غير المبيضة وأنابيب السجائر ونصائح الورق التي تردد نداء البرية. مصممة للمتمردين والحالمين، تحتفل كل منتج، خاصة أوراق اللف المميزة لدينا، بالغير تقليدي. مواصفاتها الفريدة تكون شهادة على طبيعة العلامة التجارية الجريئة. غمر نفسك في إثارة عروض الشاب الماجستير، واسمح لكل لفة من أوراقنا البنية غير المبيضة بإشعال روح المغامرة , اطلع على المزيد  ",
    imageUrl: '/brands/860c9cdd0b974149bfbe914829c56c86.png',
    imagePosition: 'right'
  },
 
];

const BrandFeature = ({ title, tagline, description, imageUrl, imagePosition }) => {
  const desktopLayoutClass = imagePosition === 'right' 
    ? styles.imageRightOnDesktop 
    : styles.imageLeftOnDesktop;

  const textColumn = (
    <div className={styles.column}>
      <div className={imagePosition === 'right' ? styles.textContainer : styles.textContainerRight}>
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

const BrandsPageAr = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/homeAr">العلامات التجارية</Link>
            <span className={styles.divider}>/</span>
            <span>الصفحة الرئيسية</span>
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
                    <span className={styles.fontLight}>أفضل علامة تجارية للتبغ لك</span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                 

تتميز مجموعة علامتنا التجارية بتاريخ غني يشمل علامات تجارية شهيرة مثل

CRP®, SIR BADGER®, WATSON®, YOUNG MASTER®, 10BAK®, IMPRT®, ALLS®,

والعديد من العلامات الأخرى. مع أكثر من أربعة عقود في الصناعة، يُميز إرثنا بالابتكار، وجودة المنتجات الممتازة،

ورابطة دائمة مع عملائنا. تمتد تأثيراتنا إلى 33 دولة، وتعززها مجموعة من العلامات التجارية المسجلة والموقرة

التي أسرت قلوب المتابعين حول العالم
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
            <p>نحن ملتزمون بالجودة، والابتكار، والرضا. تُصنع منتجاتنا بأعلى جودة من المكونات، ونتابع الابتكار باستمرار لخلق
نكهات جديدة ومثيرة. كما نقدم ضمان الرضا، لذا يمكنك أن تكون متأكدًا أنك تحصل على أفضل منتج ممكن</p>
          </div>
        </div>
      </section>
      <FooterAr />
    </>
  );
};

export default BrandsPageAr;