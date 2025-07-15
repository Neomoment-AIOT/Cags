import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

// Store all product data in an array of objects
const products = [
  {
    title: 'CAGS',
    subtitle: 'ROLLING PAPERS',
    link: '/products/papers',
    productImg: '/rollingpaper.png',
  },
  {
    title: 'CAGS',
    subtitle: 'CIGARETTE TUBES',
    link: '/products/tubes',
    productImg: '/cigarettetubes.png',
  },
  {
    title: 'CAGS',
    subtitle: 'TOBACCO',
    link: '/products/tobacco',
    productImg: '/tobacco.png',
  },
  {
    title: 'CAGS',
    subtitle: 'WATERPIPE TOBACCO',
    link: 'http://www.my10bak.com/',
    productImg: '/waterpipetobacco.png',
    isExternal: true, // Mark this link as external
  },
];

const ProductGrid = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              subtitle={product.subtitle}
              link={product.link}
              productImg={product.productImg}
              isExternal={product.isExternal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;