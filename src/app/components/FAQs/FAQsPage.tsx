import Image from 'next/image';
import Link from 'next/link';
import styles from './FAQsPage.module.css';

const FAQsData = [
   {
    question: "Who is CAGS and what do you do?",
    answer: "CAGS is a renowned family-owned tobacco brand with a rich heritage and a commitment to excellence. We are dedicated to producing high-quality tobacco and tobacco-related products."
  },
  {
    question: "Where are your production facilities located?",
    answer: "Our state-of-the-art production facilities are located in Turkey, allowing us to maintain the highest levels of quality in every aspect of our operations."
  },
  {
    question: "What brands and products does CAGS offer?",
    answer: "CAGS offers a wide range of brands and products in the tobacco industry, including rolling tobacco, flat booklets, cigarette tubes, interleaving rolling papers, waterpipe tobacco, and more. Please visit our Brands and Products pages for more information."
  },
  {
    question: "Are your products locally produced?",
    answer: "Yes, we take pride in our 100% local production assurance, ensuring that our products meet high-class global quality standards."
  },
  {
    question: "How can I become a distributor of CAGS tobacco products?",
    answer: "We welcome distributors to join our network and grow their businesses with us. To learn more about our distributorship program and get in touch with our team, please visit our Distribution page."
  },
  {
    question: "What certifications does CAGS hold?",
    answer: "CAGS holds internationally recognized ISO certifications, including ISO 9001:2015 for quality management, ISO 14001:2015 for environmental management, and ISO 45001:2018 for occupational health and safety. These certifications reflect our commitment to excellence and adherence to industry standards."
  },
  {
    question: "How can I contact CAGS?",
    answer: "You can contact us through our Contact Us page. We value your inquiries and feedback."
  },
  {
    question: "Does CAGS offer career opportunities?",
    answer: "Yes, we believe in nurturing talent and providing career growth opportunities. We regularly update our Career page with job openings. Check back frequently or subscribe to our newsletter for updates on new positions."
  },
  {
    question: "What is CAGS's approach to innovation?",
    answer: "At CAGS, we are committed to innovation and constantly pushing the boundaries of what is possible in the tobacco industry. Our highly-preferred application and production studies position us as one of the leading production companies in the sector."
  },
  {
    question: "How does CAGS ensure customer satisfaction?",
    answer: "Customer satisfaction is a top priority for us. We have an international distributing network and strive to provide 100% customer satisfaction through our high-quality products, innovative designs, and professional support."
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
            <Link href="/">HOME</Link>
            <span className={styles.divider}>/</span>
            <span>FAQS</span>
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
                    Your Ultimate Resource for<br />
                    <span className={styles.fontLight}>Tobacco Information</span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                   Find answers to frequently asked questions about CAGS, a leading tobacco brand known for its exceptional products and customer satisfaction. Get insights on our offerings, production facilities, certifications, and more. </p>
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
        <h2 className={styles.mainHeading}>A Family-Owned Tobacco Brand with a Rich Heritage and a Strong Commitment to Excellence</h2>
        <p className={styles.introParagraph}>
          CAGS is a distinguished family-owned tobacco brand with a rich heritage and a strong commitment to excellence. With a global presence, we have established ourselves as a renowned name in the tobacco industry, proudly representing Turkey.
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
                <p>Should you have any further questions or require additional information, please do not hesitate to reach out to our customer support team. We are here to assist you and provide the information you need. Contact us.</p>
            </div>
         </div>
      </section>
    </>
  );
};

export default FAQsPage;