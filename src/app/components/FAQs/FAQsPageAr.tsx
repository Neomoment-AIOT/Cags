import Image from 'next/image';
import Link from 'next/link';
import styles from './FAQsPage.module.css';
import FooterAr from '../FooterAr';

const FAQsData = [
   {
    question: "س: أين تقع منشآت الإنتاج الخاصة بكم؟ ",
    answer: "ج: تقع منشآت الإنتاج الحديثة لدينا في تركيا، مما يسمح لنا بالحفاظ على أعلى مستويات الجودة في كل جانب من جوانب عملياتنا"
  },
  {
    question: "س: ما هي العلامات التجارية والمنتجات التي تقدمونها؟",
    answer: "ج: نحن نقدم مجموعة واسعة من العلامات التجارية والمنتجات في صناعة التبغ، بما في ذلك التبغ ، والكتيبات المسطحة، وأنابيب السجائر، وأوراق اللف ، وتبغ الشيشة، وغير ذلك. يرجى زيارة صفحاتنا للعلامات التجارية والمنتجات للمزيد من المعلومات"
  },
  {
    question: "س: هل تنتج منتجاتك محلياً؟",
    answer: "ج: نعم، نحن نفخر بتأكيدنا على الإنتاج المحلي بنسبة 100%، مما يضمن أن منتجاتنا تلبي معايير الجودة العالمية الرفيعة"
  },
  {
    question: "س: كيف يمكنني أن أصبح موزعاً لمنتجات التبغ من CAGS",
    answer: " ج: نحن نرحب بالموزعين للانضمام إلى شبكتنا وتنمية أعمالهم معنا. لمعرفة المزيد عن برنامج التوزيع لدينا وللتواصل مع فريقنا، يرجى زيارة صفحة التوزيع الخاصة بنا"
  },
  {
    question: "س: كيف يمكنني الاتصال بـ؟ CAGS",
    answer: "ج: يمكنك الاتصال بنا عبر صفحة اتصل بنا الخاصة بنا. نحن نقدر استفساراتكم وملاحظاتكم"
  },
  {
    question: " س: هلcags تقدم فرص عمل؟",
    answer: "ج: نعم، نحن نؤمن بتنمية المواهب وتوفير فرص النمو المهني. نقوم بتحديث صفحة الوظائف الشاغرة بانتظام. تفقدوها بانتظام أو اشتركوا في النشرة الإخبارية لدينا للحصول على تحديثات حول الوظائف الجديدة"
  },
  {
    question: " س: ما هو نهج CAGS في مجال الابتكار؟",
    answer: "ج: في CAGS، نحن ملتزمون بالابتكار ونسعى باستمرار إلى تحدي الحدود في صناعة التبغ. دراساتنا المتقدمة في التطبيق والإنتاج تجعلنا واحدة من الشركات الرائدة في القطاع التصنيعي."
  },
  {
    question: "س: كيف يضمن CAGS رضا العملاء؟",
    answer: "ج: رضا العملاء هو أولوية قصوى بالنسبة لنا. لدينا شبكة توزيع دولية ونسعى جاهدين لتحقيق رضا العملاء بنسبة 100% من خلال منتجاتنا عالية الجودة، وتصاميمنا الابتكارية، والدعم المهني"
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
            <Link href="/home/HomeAr">الصفحة الرئيسية</Link>
            <span className={styles.divider}>/</span>
            <span>الأسئلة الشائعة</span>
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
                    مصدرك النهائي<br />
                    <span className={styles.fontLight}>لمعلومات التبغ</span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                   ,CAGS  اكتشف إجابات الأسئلة الشائعة حول
                   <br/>
                   العلامة التجارية البارزة في صناعة التبغ المعروفة بمنتجاتها المتميزة ورضا العملاء. احصل على رؤى حول عروضنا، ومنشآت الإنتاج، والشهادات، والمزيد
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
        <h2 className={styles.mainHeading}>وماذا تقومون به؟
س: من هو CAGS

        </h2>
        <p className={styles.introParagraph}>
          ج: هي علامة تجارية للتبغ ممتازة تملكها عائلة وتتمتع بتراث غني والتزام بالتميز. نحن مكرسون لإنتاج التبغ ومنتجاته ذات الجودة العالية
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
              <p>إذا كانت لديك أي أسئلة إضافية أو تحتاج إلى مزيد من المعلومات، فلا تتردد في التواصل مع فريق دعم العملاء</p>
                <p>لدينا. نحن هنا لمساعدتك وتوفير المعلومات التي تحتاجها. اتصل بنا</p>
            </div>
         </div>
      </section>
        <FooterAr />
    </>
  );
};

export default FAQsPage;