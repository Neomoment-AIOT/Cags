//import Image from "next/image";
// import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import DiscoverCags from './components/DiscoverCags';
import Slider from './components/Slider';
import StatsCounter from './components/StatsCounter';
import JourneySection from './components/JourneySection';
import JoinNetwork from './components/JoinNetwork';

export default function page() {
  return (
    <main>
      <Slider />
      <DiscoverCags/>
      <StatsCounter />
      <JourneySection/>
      <ProductGrid />
      <JoinNetwork/>
    </main>
  
  );
}