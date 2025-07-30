'use client'; // Required to use hooks like useLanguage

// Import your page components
import ProductGrid from './components/ProductGrid';
import DiscoverCags from './components/DiscoverCags';
import Slider from './components/Slider';
import StatsCounter from './components/StatsCounter';
import JourneySection from './components/JourneySection';
import JoinNetwork from './components/JoinNetwork';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Homepage from './home/page';

export default function Page() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

function MainContent() {
  const { content } = useLanguage();

  if (!content) {
    return <div>Loading...</div>;
  }

// export default function Page() {
//   // 3. CALL the hook to get the dynamic content object
//   const { content } = useLanguage();

//   // 4. ADD a loading state to prevent errors
//   if (!content) {
//     return <div>Loading...</div>;
//   }

  return (
    <main>
      {/* <Slider />
      <DiscoverCags/>
      <StatsCounter   
      // language={language}
       />
      <JourneySection 
      // content={content.journeySection} 
      />
      <ProductGrid    
      // content={content.productGrid} 
      />
      <JoinNetwork    
      // content={content.joinNetwork} 
      />*/}
      <Homepage/> 
    </main>
  );
}