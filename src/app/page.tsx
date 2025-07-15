'use client'; // Required to use hooks like useLanguage

// Import your page components
import ProductGrid from './components/ProductGrid';
import DiscoverCags from './components/DiscoverCags';
import Slider from './components/Slider';
import StatsCounter from './components/StatsCounter';
import JourneySection from './components/JourneySection';
import JoinNetwork from './components/JoinNetwork';


// 1. REMOVE the static import for en.json
// import translations from './locales/en.json';

// 2. IMPORT the language hook
import { useLanguage } from './contexts/LanguageContext';

export default function Page() {
  // 3. CALL the hook to get the dynamic content object
  const { content } = useLanguage();

  // 4. ADD a loading state to prevent errors
  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Slider />
      {/* 5. USE the dynamic 'content' object for ALL components */}
      <DiscoverCags   content={content.discoverCags} />
      <StatsCounter   
      // content={content.statsCounter}   
      />
      <JourneySection 
      // content={content.journeySection} 
      />
      <ProductGrid    
      // content={content.productGrid} 
      />
      <JoinNetwork    
      // content={content.joinNetwork} 
      />
    </main>
  );
}