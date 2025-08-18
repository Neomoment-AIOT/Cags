// app/tobacco/page.tsx
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb'; // Assuming a shared breadcrumb component
import styles from '@/app/products/products.module.css';     // Reusing the same shared product styles
import FooterAr from "@/app/components/FooterAr";
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
   { id: 2, brand: 'Watson', name: 'Watson MYO Red 50', grammage: 50, imageUrl: '/products/tobacco/7c926eba441c4ab387484dbca7317b9d.png', detailUrl: '/products/productsAr/tobacco/2' },
    { id: 3, brand: 'Watson', name: 'Watson MYO Red 100', grammage: 100, imageUrl: '/products/tobacco/ab333f45fbe64611a74e6920d31ee1ee.png', detailUrl: '/products/productsAr/tobacco/3' },
    { id: 4, brand: 'Watson', name: 'Watson MYO Red 200', grammage: 200, imageUrl: '/products/tobacco/09600a6210344fc0a23c98e9c29df687.png', detailUrl: '/products/productsAr/tobacco/4' },
    { id: 5, brand: 'Watson', name: 'Watson MYO Red 1000', grammage: 1000, imageUrl: '/products/tobacco/fdeb57c5665244bc8c3012a53aee1d03.png', detailUrl: '/products/productsAr/tobacco/5' },
    { id: 6, brand: 'Watson', name: 'Watson MYO Blue 50', grammage: 50, imageUrl: '/products/tobacco/17dab4e256454a3c86de85448cc8819a.png', detailUrl: '/products/productsAr/tobacco/6' },
    { id: 7, brand: 'Watson', name: 'Watson MYO Blue 100', grammage: 100, imageUrl: '/products/tobacco/1d1637a5615e4bfba7f2c9106e4fb587.png', detailUrl: '/products/productsAr/tobacco/7' },
    { id: 8, brand: 'Watson', name: 'Watson MYO Blue 200', grammage: 200, imageUrl: '/products/tobacco/1e1c60b25f6c4fc59391cb1afe1fc0d8.png', detailUrl: '/products/productsAr/tobacco/8' },
    { id: 9, brand: 'Watson', name: 'Watson MYO Blue 1000', grammage: 1000, imageUrl: '/products/tobacco/5213d17924d348179aebfd744e63d64f.png', detailUrl: '/products/productsAr/tobacco/9' },
    { id: 10, brand: 'Watson', name: 'Watson MYO Gray 50', grammage: 50, imageUrl: '/products/tobacco/4ae2f81979514e18af6433f4d96bed5c.png', detailUrl: '/products/productsAr/tobacco/10' },
    { id: 11, brand: 'Watson', name: 'Watson MYO Gray 100', grammage: 100, imageUrl: '/products/tobacco/473902a91bba46a4aa65e24403f5d0f1.png', detailUrl: '/products/productsAr/tobacco/11' },
    { id: 12, brand: 'Watson', name: 'Watson MYO Gray 200', grammage: 200, imageUrl: '/products/tobacco/5acc4d8a99bc4455aec7f6184abb97ae.png', detailUrl: '/products/productsAr/tobacco/12' },
    { id: 13, brand: 'Watson', name: 'Watson MYO Gray 1000', grammage: 1000, imageUrl: '/products/tobacco/503292a9122e45a8a37e592415933ad7.png', detailUrl: '/products/productsAr/tobacco/13' },
    { id: 14, brand: 'Watson', name: 'Watson RYO Red 25', grammage: 25, imageUrl: '/products/tobacco/2bbcd0cd96ba4ee59b156f6478850b15.png', detailUrl: '/products/productsAr/tobacco/14' },
    { id: 15, brand: 'Watson', name: 'Watson RYO Blue 25', grammage: 25, imageUrl: '/products/tobacco/b57f59066c4845e2a563869d0fe4c66d.png', detailUrl: '/products/productsAr/tobacco/15' },
    { id: 16, brand: 'Watson', name: 'Watson RYO Gray 25', grammage: 25, imageUrl: '/products/tobacco/5b0a26426ef243dfb77bdc2cf9b58e66.png', detailUrl: '/products/productsAr/tobacco/16' },
    { id: 17, brand: 'Watson', name: 'Watson RYO Yellow 25', grammage: 25, imageUrl: '/products/tobacco/a9527294f2f44ea2bd1f85f83104df61.png', detailUrl: '/products/productsAr/tobacco/17' },
    { id: 18, brand: 'Watson', name: 'Watson RYO Beige 25', grammage: 25, imageUrl: '/products/tobacco/1d37419170a941e4bd25da16678614d1.png', detailUrl: '/products/productsAr/tobacco/18' },
    { id: 19, brand: 'Watson', name: 'Watson RYO Green 25', grammage: 25, imageUrl: "/products/tobacco/aff2cc68e67745f18b941c3cf33a5a76.png", detailUrl: '/products/productsAr/tobacco/19' },
    { id: 20, brand: 'Watson', name: 'Watson RYO White 25', grammage: 25, imageUrl: '/products/tobacco/21e60afcef6b4047a2e32f9ad377b32c.png', detailUrl: '/products/productsAr/tobacco/20' },
    { id: 21, brand: 'Watson', name: 'Watson RYO Black 25', grammage: 25, imageUrl: '/products/tobacco/d035325ca0cd46dd89c0b03b7a3c7917.png', detailUrl: '/products/productsAr/tobacco/21' },
    { id: 22, brand: 'Watson', name: 'Watson RYO Dark Blue 25', grammage: 25, imageUrl: '/products/tobacco/1e23e4c3cc57432791d3b44c9ab2bc97.png', detailUrl: '/products/productsAr/tobacco/22' },
    { id: 23, brand: 'Watson', name: 'Watson RYO Red 50', grammage: 50, imageUrl: '/products/tobacco/b737bcec73ff4c1691939ceb4644ebff.png', detailUrl: '/products/productsAr/tobacco/23' },
    { id: 24, brand: 'Watson', name: 'Watson RYO Blue 50', grammage: 50, imageUrl: '/products/tobacco/77452c7a001444f4a2f289859a6bb2f0.png', detailUrl: '/products/productsAr/tobacco/24' },
    { id: 25, brand: 'Watson', name: 'Watson RYO Gray 50', grammage: 50, imageUrl: '/products/tobacco/bcc9e27deb7546ffa191f22f634c0607.png', detailUrl: '/products/productsAr/tobacco/25' },
    { id: 26, brand: 'Watson', name: 'Watson RYO Yellow 50', grammage: 50, imageUrl: '/products/tobacco/5f6ce8f273ca449c9a9f65db3512c10b.png', detailUrl: '/products/productsAr/tobacco/26' },
    { id: 27, brand: 'Watson', name: 'Watson RYO Beige 50', grammage: 50, imageUrl: '/products/tobacco/fbf2339428c0478e9e067c7caa8f4cb9.png', detailUrl: '/products/productsAr/tobacco/27' },
    { id: 28, brand: 'Watson', name: 'Watson RYO Green 50', grammage: 50, imageUrl: '/products/tobacco/cab15279db034e2e82f90d7eb36f4447.png', detailUrl: '/products/productsAr/tobacco/28' },
    { id: 29, brand: 'Watson', name: 'Watson RYO White 50', grammage: 50, imageUrl: '/products/tobacco/87d0789a4c2244579e32000a642dfb30.png', detailUrl: '/products/productsAr/tobacco/29' },
    { id: 30, brand: 'Watson', name: 'Watson RYO Black 50', grammage: 50, imageUrl: '/products/tobacco/6bba2df290cc4c778f65e4fdff9743a5.png', detailUrl: '/products/productsAr/tobacco/30' },
    { id: 31, brand: 'Watson', name: 'Watson RYO Dark Blue 50', grammage: 50, imageUrl: '/products/tobacco/3e368dc00bc240f6b41f68b2fae43a9f.png', detailUrl: '/products/productsAr/tobacco/31' }

];

// --- Static Filter Options (UPDATED) ---
const filterBrands = [
    { value: 'all', label: '- العلامات التجارية -' },
    { value: 'CRP', label: 'CRP' },
    { value: 'CRT', label: 'CRT' },
    { value: 'IMPRT', label: 'IMPRT' },
    { value: 'Sir Badger', label: 'Sir Badger' },
    { value: 'The Saint', label: 'The Saint' },
    { value: 'Watson', label: 'Watson' },
    { value: 'Young Master', label: 'Young Master' },
];

const filterGrammages = [
    { value: 'all', label: '- جراماج -' },
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
             الفلتر
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
      <FooterAr />
    </section>
  );
}