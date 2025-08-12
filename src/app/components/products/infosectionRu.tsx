import Image from 'next/image';
import styles from './infosection.module.css';

const ProductinfosectionRu = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.containerFluid}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.textContainer}>
            <h1>
              <b>Опыт</b><br />
              <span className={styles.fontLight}>Разница 
</span>
            </h1>
            <div className={styles.line}></div>
            <p>
          Ознакомьтесь с нашим ассортиментом бумаги для скручивания, сигаретных трубок, табака, ватерпаса и других курительных принадлежностей, чтобы найти свой идеальный вариант. Если вы ценитель, ищущий изысканные ощущения от курения, или просто ищете высококачественные табачные изделия, CAGS поможет вам. 
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

export default ProductinfosectionRu;