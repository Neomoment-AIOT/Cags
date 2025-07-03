import React from 'react';
import dynamic from 'next/dynamic';

// 1. Import all necessary page components directly into this file
import Slider from '../../components/Slider';
import DiscoverCags from '../../components/DiscoverCags';
import JourneySection from '../../components/JourneySection';
import ProductGrid from '../../components/ProductGrid';
import JoinNetwork from '../../components/JoinNetwork';

// 2. Import the Russian language data directly
import translations from '../../locales/ru.json';

// 3. Dynamically import StatsCounter to prevent hydration errors (this is crucial)
const StatsCounter = dynamic(() => import('../../components/StatsCounter'), {
  ssr: false,
});

/**
 * This is the self-contained Russian-version of the homepage.
 * It directly imports all components and Russian text, without using a separate template.
 */
export default function HomeRu() {
  return (
    <main>
      {/* 4. The full page structure is now defined directly inside this component */}
      <Slider />
      
      {/* Each component is fed the imported Russian translation data */}
      <DiscoverCags content={translations.discoverCags} />
      {/* <StatsCounter statsData={translations.statsCounter.stats} />
      <JourneySection content={translations.journeySection} />
      <ProductGrid products={translations.productGrid.products} />
      <JoinNetwork content={translations.joinNetwork} /> */}
    </main>
  );
}