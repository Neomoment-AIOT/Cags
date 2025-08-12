//import Image from "next/image";
// import Features from './components/Features';
import ProductGrid from '../components/ProductGrid';
import DiscoverCags from '../components/DiscoverCags';
import Slider from '../components/Slider';
import StatsCounter from '../components/StatsCounter';
import JourneySection from '../components/JourneySection';
import JoinNetwork from '../components/JoinNetwork';
import translations from '../locales/en.json';
import Footer from '../components/Footer';

export default function Homepage() {
  function handleConfirmAge(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <main>
      <Slider />
      <DiscoverCags content={translations.discoverCags} />
      <StatsCounter />
      <JourneySection/>
      <ProductGrid />
      <JoinNetwork/>
        <Footer />
    </main>
    
  );
}