import React from 'react';
import dynamic from 'next/dynamic';

import Slider from '../../components/Slider';
import DiscoverCagsRu from '../../components/DiscoverCagsRu';
import JourneySectionRu from '../../components/JourneySectionRu';
import ProductGridRu from '../../components/ProductGridRu';
import JoinNetworkRu from '../../components/JoinNetworkRu';
import StatsCounterRu from '../../components/StatsCounterRu';

// 2. Import the Russian language data directly
import FooterRu from '@/app/components/FooterRu';

export default function HomeRu() {
  return (
    <main>
      <Slider/>
      <DiscoverCagsRu />
      <StatsCounterRu />
      <JourneySectionRu/>
      <ProductGridRu />
      <JoinNetworkRu/>
      <FooterRu />
    </main>
    
  );
}