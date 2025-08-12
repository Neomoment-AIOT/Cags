import React from 'react';
import dynamic from 'next/dynamic';
import Slider from '../../components/SliderAr';
import DiscoverCagsAr from '../../components/DiscoverCagsAr';
import JourneySectionAr from '../../components/JourneySectionAr';
import ProductGridAr from '../../components/ProductGridAr';
import JoinNetworkAr from '../../components/JoinNetworkAr';
import FooterAr from '@/app/components/FooterAr';
import StatsCounterAr from '@/app/components/StatsCounterAr';



export default function HomeAr() {
  return (
    <main>
      <Slider/>
      <DiscoverCagsAr/>
      <StatsCounterAr/>
      <JourneySectionAr/>
      <ProductGridAr/>
      <JoinNetworkAr/>
      <FooterAr/>
    </main>
    
  );
}