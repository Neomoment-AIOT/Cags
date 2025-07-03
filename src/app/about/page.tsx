import React from 'react';
import Breadcrumb from '../components/about/Breadcrumb';
import JourneySection from '../components/about/JourneySection';
import WeAreCagsSection from '../components/about/WeAreCagsSection';
import JoinNetwork from '../components/JoinNetwork';

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb />
      <JourneySection />
      <WeAreCagsSection />
      <JoinNetwork/>
    </main>
  );
};

export default AboutPage;