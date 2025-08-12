import React from 'react';
import dynamic from 'next/dynamic';

// 1. Import all necessary page components directly into this file
import Slider from '../../components/Slider';
import DiscoverCagsFr from '../../components/DiscoverCagsFr';
import JourneySectionFr from '../../components/JourneySectionFr';
import ProductGridFr from '../../components/ProductGridFr';
import JoinNetworkFr from '../../components/JoinNetworkFr';
import StatsCounterFr from '../../components/StatsCounterFr';

// 2. Import the French language data directly
import FooterFr from '@/app/components/FooterFr';

// const StatsCounterFr = dynamic(() => import('@/app/components/StatsCounterFr'), {
//   ssr: false,
// });

export default function HomeFr() {
  return (
    <main>
      <Slider/>
      <DiscoverCagsFr />
      <StatsCounterFr />
      <JourneySectionFr/>
      <ProductGridFr />
      <JoinNetworkFr/>
      <FooterFr />
    </main>
    
  );
}