import Image from 'next/image';
import styles from './infosection.module.css';

const ProductinfosectionAr = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.textContainer}>
            <h1>
              <b>الخبرة</b><br />
              <span className={styles.fontLight}>الفرق 
</span>
            </h1>
            <div className={styles.line}></div>
            <p>
             تصفح مجموعتنا من أوراق لف السجائر، وأنابيب السجائر، والتبغ، وتبغ الشيشة وغيرها من مستلزمات التدخين لتجد ما يناسبك. سواءً كنت من الذواقة الذين يبحثون عن تجربة تدخين راقية أو تبحث ببساطة عن منتج تبغ عالي الجودة، فإن CAGS توفر لك كل ما تحتاج إليه 
            </p>
          </div>

          {/* Right Column: Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/about/4204f3afad75491bb45f78b21a62dc6f.png"
              alt="Remarkable Journey visual"
              width={800} // Original image width
              height={600} // Original image height
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductinfosectionAr;