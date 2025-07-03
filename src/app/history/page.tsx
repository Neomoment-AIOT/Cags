import React from 'react';
import Breadcrumb from '../components/history/Breadcrumb';
import HistorySection from '../components/history/HistorySection'; 
import CommitmentSection from '../components/history/CommitmentSection';
import TimelineSection from '../components/history/TimelineSection';

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb />
      <HistorySection />
      <TimelineSection/>
      <CommitmentSection/>
    </main>
  );
};

export default AboutPage;