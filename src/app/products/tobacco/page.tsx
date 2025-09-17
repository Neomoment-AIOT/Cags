// app/tobacco/page.tsx
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb'; // Assuming a shared breadcrumb component
import styles from '../products.module.css';     // Reusing the same shared product styles
import Footer from '@/app/components/Footer';

// Type definition for Tobacco Products
type TobaccoProduct = {
  id: number;
  brand: string;
  name: string;
  grammage: number;
  imageUrl: string;
  detailUrl: string;
};

// The data for the products on the page
const allTobaccoProducts: TobaccoProduct[] = [
   { id: 2, brand: 'Watson', name: 'Watson MYO Red 50', grammage: 50, 
    imageUrl: '', 
    detailUrl: '/products/tobacco/2' },
    { id: 3, brand: 'Watson', name: 'Watson MYO Red 100', grammage: 100, 
      imageUrl: '', 
      detailUrl: '/products/tobacco/3' },
    { id: 4, brand: 'Watson', name: 'Watson MYO Red 200', grammage: 200, 
      imageUrl: '', 
      detailUrl: '/products/tobacco/4' },
    { id: 5, brand: 'Watson', name: 'Watson MYO Red 1000', grammage: 1000, 
      imageUrl: '', 
      detailUrl: '/products/tobacco/5' },
    { id: 6, brand: 'Watson', name: 'Watson MYO Blue 50', grammage: 50, 
      imageUrl: '', 
      detailUrl: '/products/tobacco/6' },
    { id: 7, brand: 'Watson', name: 'Watson MYO Blue 100', grammage: 100,
       imageUrl: '',
        detailUrl: '/products/tobacco/7' },
    { id: 8, brand: 'Watson', name: 'Watson MYO Blue 200', grammage: 200, 
      imageUrl: '', 
      detailUrl: '/products/tobacco/8' },
    { id: 9, brand: 'Watson', name: 'Watson MYO Blue 1000', grammage: 1000, 
      imageUrl: '',
       detailUrl: '/products/tobacco/9' },
    { id: 10, brand: 'Watson', name: 'Watson MYO Gray 50', grammage: 50, imageUrl: '', detailUrl: '/products/tobacco/10' },
    { id: 11, brand: 'Watson', name: 'Watson MYO Gray 100', grammage: 100, imageUrl: '', detailUrl: '/products/tobacco/11' },
    { id: 12, brand: 'Watson', name: 'Watson MYO Gray 200', grammage: 200, imageUrl: '', detailUrl: '/products/tobacco/12' },
    { id: 13, brand: 'Watson', name: 'Watson MYO Gray 1000', grammage: 1000, imageUrl: '', detailUrl: '/products/tobacco/13' },
    { id: 14, brand: 'Watson', name: 'Watson RYO Red 25', grammage: 25, imageUrl: '/products/tobacco/2bbcd0cd96ba4ee59b156f6478850b15.png', detailUrl: '/products/tobacco/14' },
    { id: 15, brand: 'Watson', name: 'Watson RYO Blue 25', grammage: 25, imageUrl: '/products/tobacco/b57f59066c4845e2a563869d0fe4c66d.png', detailUrl: '/products/tobacco/15' },
    { id: 16, brand: 'Watson', name: 'Watson RYO Gray 25', grammage: 25, imageUrl: '/products/tobacco/5b0a26426ef243dfb77bdc2cf9b58e66.png', detailUrl: '/products/tobacco/16' },
    { id: 17, brand: 'Watson', name: 'Watson RYO Yellow 25', grammage: 25, imageUrl: '/products/tobacco/a9527294f2f44ea2bd1f85f83104df61.png', detailUrl: '/products/tobacco/17' },
    { id: 18, brand: 'Watson', name: 'Watson RYO Beige 25', grammage: 25, imageUrl: '/products/tobacco/1d37419170a941e4bd25da16678614d1.png', detailUrl: '/products/tobacco/18' },
    { id: 19, brand: 'Watson', name: 'Watson RYO Green 25', grammage: 25, imageUrl: "/products/tobacco/aff2cc68e67745f18b941c3cf33a5a76.png", detailUrl: '/products/tobacco/19' },
    { id: 20, brand: 'Watson', name: 'Watson RYO White 25', grammage: 25, imageUrl: '/products/tobacco/21e60afcef6b4047a2e32f9ad377b32c.png', detailUrl: '/products/tobacco/20' },
    { id: 21, brand: 'Watson', name: 'Watson RYO Black 25', grammage: 25, imageUrl: '/products/tobacco/d035325ca0cd46dd89c0b03b7a3c7917.png', detailUrl: '/products/tobacco/21' },
    { id: 22, brand: 'Watson', name: 'Watson RYO Dark Blue 25', grammage: 25, imageUrl: '/products/tobacco/1e23e4c3cc57432791d3b44c9ab2bc97.png', detailUrl: '/products/tobacco/22' },
    { id: 23, brand: 'Watson', name: 'Watson RYO Red 50', grammage: 50, imageUrl: '/products/tobacco/b737bcec73ff4c1691939ceb4644ebff.png', detailUrl: '/products/tobacco/23' },
    { id: 24, brand: 'Watson', name: 'Watson RYO Blue 50', grammage: 50, imageUrl: '/products/tobacco/77452c7a001444f4a2f289859a6bb2f0.png', detailUrl: '/products/tobacco/24' },
    { id: 25, brand: 'Watson', name: 'Watson RYO Gray 50', grammage: 50, imageUrl: '/products/tobacco/bcc9e27deb7546ffa191f22f634c0607.png', detailUrl: '/products/tobacco/25' },
    { id: 26, brand: 'Watson', name: 'Watson RYO Yellow 50', grammage: 50, imageUrl: '/products/tobacco/5f6ce8f273ca449c9a9f65db3512c10b.png', detailUrl: '/products/tobacco/26' },
    { id: 27, brand: 'Watson', name: 'Watson RYO Beige 50', grammage: 50, imageUrl: '/products/tobacco/fbf2339428c0478e9e067c7caa8f4cb9.png', detailUrl: '/products/tobacco/27' },
    { id: 28, brand: 'Watson', name: 'Watson RYO Green 50', grammage: 50, imageUrl: '/products/tobacco/cab15279db034e2e82f90d7eb36f4447.png', detailUrl: '/products/tobacco/28' },
    { id: 29, brand: 'Watson', name: 'Watson RYO White 50', grammage: 50, imageUrl: '/products/tobacco/87d0789a4c2244579e32000a642dfb30.png', detailUrl: '/products/tobacco/29' },
    { id: 30, brand: 'Watson', name: 'Watson RYO Black 50', grammage: 50, imageUrl: '/products/tobacco/6bba2df290cc4c778f65e4fdff9743a5.png', detailUrl: '/products/tobacco/30' },
    { id: 31, brand: 'Watson', name: 'Watson RYO Dark Blue 50', grammage: 50, imageUrl: '/products/tobacco/3e368dc00bc240f6b41f68b2fae43a9f.png', detailUrl: '/products/tobacco/31' }

];

// --- Static Filter Options (UPDATED) ---
const filterBrands = [
    { value: 'all', label: '- Brand -' },
    { value: 'CRP', label: 'CRP' },
    { value: 'CRT', label: 'CRT' },
    { value: 'IMPRT', label: 'IMPRT' },
    { value: 'Sir Badger', label: 'Sir Badger' },
    { value: 'The Saint', label: 'The Saint' },
    { value: 'Watson', label: 'Watson' },
    { value: 'Young Master', label: 'Young Master' },
];

const filterGrammages = [
    { value: 'all', label: '- Grammage -' },
    { value: '25', label: '25 gr' },
    { value: '50', label: '50 gr' },
    { value: '100', label: '100 gr' },
    { value: '200', label: '200 gr' },
    { value: '1000', label: '1000 gr' },
];


export default function TobaccoPage() {
  const [tempBrand, setTempBrand] = useState('all');
  const [tempGrammage, setTempGrammage] = useState('all');
  const [appliedBrand, setAppliedBrand] = useState('all');
  const [appliedGrammage, setAppliedGrammage] = useState('all');
  
  const filteredProducts = useMemo(() => {
    return allTobaccoProducts.filter(product => {
      const brandMatch = appliedBrand === 'all' || product.brand === appliedBrand;
      const grammageMatch = appliedGrammage === 'all' || product.grammage === Number(appliedGrammage);
      return brandMatch && grammageMatch;
    });
  }, [appliedBrand, appliedGrammage]);

  const handleApplyFilters = () => {
    setAppliedBrand(tempBrand);
    setAppliedGrammage(tempGrammage);
  };

  return (
    <section className={styles.pageSection}>
      <Breadcrumb />
      <div className={styles.container}>
        
        {/* --- Filter Controls (UPDATED) --- */}
        <div className={styles.filterContainer}>
          {/* Brand Select now uses the static list */}
          <div className="flex-1">
            <select
              id="brand-select"
              aria-label="Filter by brand"
              value={tempBrand}
              onChange={(e) => setTempBrand(e.target.value)}
              className={styles.filterSelect}
            >
              {filterBrands.map(brand => (
                <option key={brand.value} value={brand.value}>
                  {brand.label}
                </option>
              ))}
            </select>
          </div>

          {/* Grammage Select now uses the static list */}
          <div className="flex-1">
            <select
              id="grammage-select"
              aria-label="Filter by grammage"
              value={tempGrammage}
              onChange={(e) => setTempGrammage(e.target.value)}
              className={styles.filterSelect}
            >
              {filterGrammages.map(grammage => (
                <option key={grammage.value} value={grammage.value}>
                  {grammage.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Filter Button */}
          <div>
            <button
              onClick={handleApplyFilters}
              className={styles.filterButton}
            >
              Filter
            </button>
          </div>
        </div>

        {/* --- Product Grid --- */}
        <div className={styles.productGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className={styles.productCard}>
                <Link href={product.detailUrl} className={styles.imageContainer}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    className={styles.productImage}
                  />
                </Link>
                <div className={styles.cardContent}>
                  <h3 className={styles.productName}>
                    <Link href={product.detailUrl}>
                      {product.name}
                    </Link>
                  </h3>
                  <div className={styles.productMeta}>
                    <span>{product.brand}</span> • {product.grammage} gr
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noProducts}>
              <h3 className="text-xl font-semibold text-gray-500">No products match your selection.</h3>
              <p className="mt-2 text-gray-400">Please try a different filter combination.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}