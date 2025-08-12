import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

// Store all product data in an array of objects
const products = [
  
  {
    title: 'CAGS',
    subtitle: ' أوراق الل ',
    link: '/products/productsAr/papers',
    productImg: '/rollingpaper.png',
  },
  {
    title: 'CAGS',
    subtitle: 'نابيب السجائ ',
    link: '/products/productsAr/tubes',
    productImg: '/cigarettetubes.png',
  },
  {
    title: 'CAGS',
    subtitle: 'التبغ',
    link: '/products/productsAr/tobacco',
    productImg: '/tobacco.png',
  },
  {
    title: 'CAGS',
    subtitle: 'الإكسسوارات',
    link: 'http://www.my10bak.com/',
    productImg: '/waterpipetobacco.png',
    isExternal: true, // Mark this link as external
  },
];

const ProductGridAr = () => {
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

export default ProductGridAr;