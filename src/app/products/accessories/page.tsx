// app/accessories/page.tsx
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb'; // Assuming a shared component
import styles from '../products.module.css';     // Assuming a shared component
import Footer from '@/app/components/Footer';


// 1. UPDATED Product Type: Added a 'type' property for better filtering.
type AccessoryProduct = {
  id: number;
  brand: string;
  name: string;
  type: 'Tubes Injector' | 'Individual Paper Tip';
  size: string; // The specific size/count description
  imageUrl: string;
  detailUrl: string;
};

// 2. UPDATED Product Data: Added the 'type' property to each object.
const allProducts: AccessoryProduct[] = [
  { id: 2, brand: 'CRP', name: 'CRP Individual Paper Tip', type: 'Individual Paper Tip', size: '50 leaves', imageUrl: '/products/accessories/3766a53e470a4498a0c39df4387757c2.png', detailUrl: '/products/accessories/2' },
  { id: 3, brand: 'Sir Badger', name: 'Sir Badger Individual Paper Tip', type: 'Individual Paper Tip', size: '50 leaves', imageUrl: '/products/accessories/4ce0f26ba67c486eb9d2195c4c1af5c7.png', detailUrl: '/products/accessories/3' },
  { id: 4, brand: 'Watson', name: 'Watson Tubes Injector Regular Red', type: 'Tubes Injector', size: 'Regular / 8,10mm', imageUrl: '/products/accessories/9d838d8a6d4e412b898ee3a22755cc65.png', detailUrl: '/products/accessories/4' },
  { id: 5, brand: 'Watson', name: 'Watson Tubes Injector Regular Blue', type: 'Tubes Injector', size: 'Regular / 8,10mm', imageUrl: '/products/accessories/ea5496a4316b4eac8ebd2418c7be55a9.png', detailUrl: '/products/accessories/5' },
  { id: 6, brand: 'Watson', name: 'Watson Tubes Injector Slim', type: 'Tubes Injector', size: 'Slim / 7,00mm', imageUrl: '/products/accessories/e9ae855998504c59b1aec69aab05cd40.png', detailUrl: '/products/accessories/6' },
  { id: 7, brand: 'Watson', name: 'Watson Individual Paper Tip', type: 'Individual Paper Tip', size: '50 leaves', imageUrl: '/products/accessories/b3428621cb57453bb7ae0b6c58f7c167.png', detailUrl: '/products/accessories/7' },
  { id: 8, brand: 'Watson', name: 'Watson Individual Paper Tip', type: 'Individual Paper Tip', size: '50 leaves', imageUrl: '/products/accessories/12450c54dc9540d6b62da340e130681e.png', detailUrl: '/products/accessories/8' },
  { id: 9, brand: 'Watson', name: 'Watson Tubes Injector Micro Slim Blue', type: 'Tubes Injector', size: 'Micro Slim / 6,00mm', imageUrl: '/products/accessories/1957fb4c587a4b84b165786b6b85d396.png', detailUrl: '/products/accessories/9' },
  { id: 10, brand: 'Young Master', name: 'Young Master Individual Paper Tip', type: 'Individual Paper Tip', size: '50 leaves', imageUrl: '/products/accessories/c4667a45d7c24acea73c2de6ef809e1e.png', detailUrl: '/products/accessories/10' }
];

// 3. Static lists for the new filter dropdowns
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

const filterTypes = [
    { value: 'all', label: '- Type -' },
    { value: 'Tubes Injector', label: 'Tubes Injector' },
    { value: 'Individual Paper Tip', label: 'Individual Paper Tip' },
];

export default function AccessoriesPage() {
  // 4. State management updated for 'brand' and 'type'
  const [tempBrand, setTempBrand] = useState('all');
  const [tempType, setTempType] = useState('all');
  const [appliedBrand, setAppliedBrand] = useState('all');
  const [appliedType, setAppliedType] = useState('all');

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const brandMatch = appliedBrand === 'all' || product.brand === appliedBrand;
      const typeMatch = appliedType === 'all' || product.type === appliedType;
      return brandMatch && typeMatch;
    });
  }, [appliedBrand, appliedType]);

  const handleApplyFilters = () => {
    setAppliedBrand(tempBrand);
    setAppliedType(tempType);
  };

  return (
    <section className={styles.pageSection}>
      <Breadcrumb />
      <div className={styles.container}>
        
        {/* --- Filter Controls (UPDATED) --- */}
        <div className={styles.filterContainer}>
          {/* Brand Select */}
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

          {/* Type Select (replaces Size) */}
          <div className="flex-1">
            <select
              id="type-select"
              aria-label="Filter by type"
              value={tempType}
              onChange={(e) => setTempType(e.target.value)}
              className={styles.filterSelect}
            >
              {filterTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
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
                    <Link className='{styles.productNameLink}' href={product.detailUrl}>
                      {product.name}
                    </Link>
                  </h3>
                  <div className={styles.productMeta}>
                    <span>{product.brand}</span> • {product.size}
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