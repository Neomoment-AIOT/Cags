import Image from 'next/image';
import Link from 'next/link';
import styles from './CareerPage.module.css';
// --- The Main Career Page Component ---
const CareerPage = () => {
  return (
     <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link className="link " href="/">HOME</Link>
            <span className= "slash-divider  ml-[7px] mr-[7px]">/</span>
             <Link  className="link " href="/">COMPANY</Link>
            <span className="slash-divider ml-[7px] mr-[7px]">/</span>
            <span className="bread-current">CAREER</span>
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
                    Join CAGS
                    <br />
                    <span className={styles.fontLight}>
                      Ignite your career with a global leader in the tobacco industry!
                    </span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                  We are a renowned brand dedicated to delivering exceptional products and prioritizing customer satisfaction and perpetual quality. We are looking for talented individuals to join our team and help us continue our remarkable success.
                </p>
              </div>
            </div>
            {/* Image Column */}
            <div className={styles.column}>
              <div className={styles.imageWrapper}>
                {/* Ensure you replace this src with the correct path to your image */}
                <Image 
                  src="/career/career.png" 
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
              <h2>There are currently no open positions.</h2>
              <p>As a CAGS employee, you will be part of a passionate and innovative workforce. You will have the opportunity to grow and develop your skills in a supportive and inclusive environment. We offer various career advancement opportunities and the resources you need to excel.</p>
              <p>We believe in the power of development and innovation, constantly striving to be industry leaders. Join us on our journey to shape the future of the tobacco sector.</p>
              <p>Explore our current openings and join CAGS today. Together, we can achieve remarkable milestones and create a successful future.</p>
           </div>
         </div>
      </section>
    </>
  );
};

export default CareerPage;