import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandsPage.module.css';
import Footer from '../Footer';

// Define the type for brand data
interface BrandData {
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

const brandsData: BrandData[] = [
  {
    title: 'Watson',
    tagline: 'A Time-Honored Tradition of Quality.',
    description: 'A true symbol of quality and tradition, the Watson brand stands as a beacon of tradition and excellence. Offering a renowned selection of rolling papers, cigarette tubes, RYO-MYO tobacco with distinctive blends, and practical accessories, Watson is the choice for those who value history and quality. Its reputation as a cult brand stems from a dedication to craftsmanship that transcends trends, reflecting a timeless commitment to the fine art of smoking. With Watson, every experience is a nod to a heritage defined by elegance and quality.',
    imageUrl: '/brands/5e4254ebeb4f4a749ccb95e04cdfec07.png',
    imagePosition: 'right' // 'left' or 'right'
  },
  {
    title: 'CRP',
    tagline: 'Excellence in Every Roll.',
    description: "Established with a commitment to quality, the CRP brand has become a recognized name in the industry, providing a wide variety of rolling papers and specially designed paper/filter tips. Catering to both novice and seasoned smokers, CRP's products are crafted to meet the highest standards, ensuring a superior smoking experience that resonates with people all over the world. For those looking for premium carbon tubes, our CRT brand has you covered.",
    imageUrl: '/brands/d2b14e986a1a493e8ac75d73c09171c8.png',
    imagePosition: 'left'
  },
  {
    title: 'Sir Badger',
    tagline: 'Crafted for the Discerning Connoisseur.',
    description: "For those who seek more than a standard smoking experience, Sir Badger crafts an exceptional selection of organic hemp rolling papers, hemp cigarette tubes, and notably accentuates the importance of paper tips. Each product is an testament to craftsmanship and elegance, with special focus on the superior specifications of our organic hemp paper, appealing to those with a discerning eye for subtle artistry and sophistication. Indulging in Sir Badger's offering transcends mere pastime, it becomes an immersion in a lifestyle defined by high-quality organic materials and refined taste.",
    imageUrl: '/brands/6f1bf66d75a947e5badb9047a8185567.png',
    imagePosition: 'right'
  },
  {
    title: 'The Saint',
    tagline: 'Simply Crafted.',
    description: "Embracing a minimalist approach to perfection, The Saint specializes in crafting the market's thinnest rolling papers and cigarette tubes. This singular focus, balanced by an art form, results in a product that combines delicacy with resilience. Experience the gentle touch and nuanced pleasure that sets The Saint apart, where every roll is a masterful expression of elegance and purity.",
    imageUrl: '/brands/985aaee3ea4c4f449ed807614fcf7575.png',
    imagePosition: 'left'
  },
  {
    title: 'ALLS',
    tagline: 'Rooted in Trust and Satisfaction.',
    description: "Built on the principles of trust and satisfaction, ALLS is a distinguished name in the world of rolling papers. With a precise understanding of smokers' preferences and desires, ALLS's products are carefully crafted to uphold the highest standards of quality. This commitment extends beyond mere products, forging a bond of reliability that resonates with those who value integrity and consistency.",
    imageUrl: '/brands/73ce0ed9b2e84356aef3a2b3de4eaaef.png',
    imagePosition: 'right'
  },
  {
    title: 'Young Master',
    tagline: 'For the Bold and Adventurous.',
    description: "Inspired by the free-spirited and daring, the Young Master brand curates a selection of unbleached brown rolling papers, cigarette tubes, and paper tips that echo the call of the wild. Designed for wanderers, rebels, and dreamers, each product, especially our distinctive rolling papers, celebrates the unconventional. Their unique specifications serve as a testament to the brand's daring nature. Immerse yourself in the thrill of Young Master's offerings, and let every roll of our unbleached brown paper ignite the adventurous spirit in you.",
    imageUrl: '/brands/860c9cdd0b974149bfbe914829c56c86.png',
    imagePosition: 'left'
  },
  {
    title: '10BAK',
    tagline: 'Never Settle.',
    description: "In the realm of shisha tobacco, 10BAK embarks on a relentless hunt for the best, guided by the lion in its symbol, a proud emblem of royal standards. With three unique selections and hundreds of refined flavors, the pursuit of quality is endless and uncompromising. Experience a legacy of flavor crafted for those who seek the extraordinary and never settle.",
    imageUrl: '/brands/f94b971222f249aba28dcd7a9929ef47.png',
    imagePosition: 'right'
  },
  {
    title: 'IMPRT',
    tagline: 'Crafting Quality for the World.',
    description: "With a focus on quality and adaptability, the IMPRT brand caters to diverse markets with its selection of superior cigarette tubes. Crafted to meet the unique needs of various regions, IMPRT symbolizes reliability and excellence. Experience the fine art of smoking with IMPRT, where every tube is a testament to unmatched quality.",
    imageUrl: '/brands/d107bcbd3bc04996aafbc37e52c7a496.png',
    imagePosition: 'left'
  },
];

// Define the props interface for BrandFeature component
interface BrandFeatureProps {
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

const BrandFeature = ({ title, tagline, description, imageUrl, imagePosition }: BrandFeatureProps) => {
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

const BrandsPage = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/">HOME</Link>
            <span className={styles.divider}>/</span>
            <span>BRANDS</span>
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
                    <span className={styles.fontLight}>The best tobacco brand for you</span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                  Our brand lineup boasts a rich history featuring renowned brands such as CRP®, SIR BADGER®, WATSON®, YOUNG MASTER®, 10BAK®, IMPRT®, ALLS®, and many others. With over four decades in the industry, our legacy is marked by innovation, outstanding product quality, and an enduring bond with our customers. Spanning 33 countries, our influence is strengthened by our variety of registered trademarks and esteemed brands that have won the hearts of global followers.
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
            <p>We are committed to quality, innovation, and satisfaction. Our products are made with the highest quality ingredients, and we are constantly innovating to create new and exciting flavors. We also offer a satisfaction guarantee, so you can be sure that you're getting the best possible product.</p>
          </div>
        </div>
      </section>
         <Footer />
    </>
  );
};

export default BrandsPage;