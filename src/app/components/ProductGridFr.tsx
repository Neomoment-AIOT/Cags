import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

// Store all product data in an array of objects
const products = [
  
  {
    title: 'CAGS',
    subtitle: '  Papiers à Rouler',
    link: '/products/productsFr/papers',
    productImg: '/rollingpaper.png',
  },
  {
    title: 'CAGS',
    subtitle: 'Tubes à Cigarettes',
    link: '/products/productsFr/tubes',
    productImg: '/cigarettetubes.png',
  },
  {
    title: 'CAGS',
    subtitle: 'TABAC',
    link: '/products/productsFr/tobacco',
    productImg: '/tobacco.png',
  },
  {
    title: 'CAGS',
    subtitle: 'Tabac à Narguilé',
    link: 'http://www.my10bak.com/',
    productImg: '/waterpipetobacco.png',
    isExternal: true, // Mark this link as external
  },
];

const ProductGridFr = () => {
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

export default ProductGridFr;