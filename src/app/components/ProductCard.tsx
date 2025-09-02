import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductGrid.module.css';

interface ProductCardProps {
  title: string;
  subtitle: string;
  link: string;
  productImg: string;
  isExternal?: boolean;
}

const ProductCard = ({ title, subtitle, link, productImg, isExternal = false }: ProductCardProps) => {
  // --- A NOTE ON IMAGE PATHS ---
  // The paths "/fav.png" and "/righticon.png" assume these images
  // are located directly inside your project's "public" folder.
  // e.g., /public/fav.png

  const cardContent = (
    <div className={styles.cardInner}>
      <h3>
        {title} <Image src="/fav.png" alt="Icon" width={20} height={20} />
      </h3>
      <span>{subtitle}</span>
      <div className={styles.arrowIcon}>
        <Image src="/righticon.png" alt="Go to page" width={20} height={20} />
      </div>
      <div className={styles.productImage}>
        {/*
          FIX: The 'objectFit' prop is deprecated.
          It has been replaced with the 'style' prop below.
        */}
        <Image
          src={productImg}
          alt={`${subtitle} product image`}
          width={500}
          height={200}
          style={{ objectFit: 'contain' }} // This is the modern way
        />
      </div>
    </div>
  );

  // This logic for handling internal vs. external links is correct.
  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
        {cardContent}
      </a>
    );
  }

  // Your usage of <Link> is correct for modern Next.js.
  // The <Link> component now renders the <a> tag itself.
  // Do NOT add an <a> tag as a child of <Link>.
  return (
    <Link href={link} className={styles.card}>
      {cardContent}
    </Link>
  );
};

export default ProductCard;