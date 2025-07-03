// app/papers/page.tsx
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb';
import styles from '../products.module.css';

// The type definition for a paper product
type Product = {
  id: number;
  brand: string;
  name: string;
  size: '1 1/4' | 'Regular' | 'King Size' | 'King Size Slim' | 'King Size XXL';
  imageUrl: string;
  detailUrl: string;
};

// The list of all paper products
const allProducts: Product[] = [
    { id: 325, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Blue', size: '1 1/4', imageUrl: '/products/papers/c3afe70350844fc2b329831d3ada741b.png', detailUrl: '/Home/PaperDetail/325' },
    { id: 326, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Black', size: '1 1/4', imageUrl: '/products/papers/1a27a04563b240dc8edb543b8ff1b36c.png', detailUrl: '/Home/PaperDetail/326' },
    { id: 327, brand: 'CRP', name: 'CRP 1 1/4 - Closing Flap Beige', size: '1 1/4', imageUrl: '/products/papers/9f2544277d534d12ba7b21f6fa92cea8.png', detailUrl: '/Home/PaperDetail/327' },
    { id: 332, brand: 'CRP', name: 'CRP King Size + Tips - Closing Flap Beige', size: 'King Size', imageUrl: '/products/papers/565c5a5256e54fd8aa619854d35392a8.png', detailUrl: '/Home/PaperDetail/332' },
    { id: 333, brand: 'CRP', name: 'CRP King Size + Tips - Closing Flap Black', size: 'King Size', imageUrl: '/products/papers/78036dfccb5b4747b38ffb32b6897bd0.png', detailUrl: '/Home/PaperDetail/333' },
    { id: 354, brand: 'CRP', name: 'CRP Regular Beige', size: 'Regular', imageUrl: '/products/papers/6e9d659f3148473f8bd5cdcf9edd73da.png', detailUrl: '/Home/PaperDetail/354' },
    { id: 361, brand: 'Sir Badger', name: 'Sir Badger 1 1/4 - Closing Flap Beige', size: '1 1/4', imageUrl: '/products/papers/dfa0b41ada4b4630bd795e8ecf244453.png', detailUrl: '/Home/PaperDetail/361' },
    { id: 363, brand: 'Sir Badger', name: 'Sir Badger King Size Slim Beige', size: 'King Size Slim', imageUrl: '/products/papers/6b348c75c8da49a294cb0c5329b063a5.png', detailUrl: '/Home/PaperDetail/363' },
    { id: 372, brand: 'The Saint', name: 'The Saint Regular White', size: 'Regular', imageUrl: '/products/papers/674b0c0c32004bdfa53333c682067255.png', detailUrl: '/Home/PaperDetail/372' },
    { id: 373, brand: 'Watson', name: 'Watson 1 1/4 - Closing Flap Beige', size: '1 1/4', imageUrl: '/products/papers/4726061228c74094bd68c6e0a0de7555.png', detailUrl: '/Home/PaperDetail/373' },
    { id: 409, brand: 'Young Master', name: 'Young Master King Size Slim + Tips', size: 'King Size Slim', imageUrl: '/products/papers/4ebde2b8c795482e856ce179ce6e65c7.png', detailUrl: '/Home/PaperDetail/409' },
    { id: 416, brand: 'Young Master', name: 'Young Master King Size XXL + Tips', size: 'King Size XXL', imageUrl: '/products/papers/087a921322314928ae8dd45fa00931df.png', detailUrl: '/Home/PaperDetail/416' },
  // ... Add all your other paper products here
];

// --- Static Filter Options (UPDATED) ---
// These arrays are based on the HTML you provided.
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

const filterSizes = [
    { value: 'all', label: '- Size -' },
    { value: '1 1/4', label: '1 1/4' },
    { value: 'Regular', label: 'Regular' },
    { value: 'King Size', label: 'King Size' },
    { value: 'King Size Slim', label: 'King Size Slim' },
    { value: 'King Size XXL', label: 'King Size XXL' },
];


export default function PapersPage() {
  const [tempBrand, setTempBrand] = useState('all');
  const [tempSize, setTempSize] = useState('all');
  const [appliedBrand, setAppliedBrand] = useState('all');
  const [appliedSize, setAppliedSize] = useState('all');
  
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const brandMatch = appliedBrand === 'all' || product.brand === appliedBrand;
      const sizeMatch = appliedSize === 'all' || product.size === appliedSize;
      return brandMatch && sizeMatch;
    });
  }, [appliedBrand, appliedSize]);

  const handleApplyFilters = () => {
    setAppliedBrand(tempBrand);
    setAppliedSize(tempSize);
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

          {/* Size Select now uses the static list */}
          <div className="flex-1">
            <select
              id="size-select"
              aria-label="Filter by size"
              value={tempSize}
              onChange={(e) => setTempSize(e.target.value)}
              className={styles.filterSelect}
            >
              {filterSizes.map(size => (
                <option key={size.value} value={size.value}>
                  {size.label}
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
                    <span>{product.brand}</span> • <strong>{product.size}</strong>
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
    </section>
  );
}