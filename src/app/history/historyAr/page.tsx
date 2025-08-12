import React from 'react';
import BreadcrumbAr from '@/app/components/history/historyAr/BreadcrumbAr';
import HistorySectionAr from '@/app/components/history/historyAr/HistorySectionAr'; 
import CommitmentSectionAr from '@/app/components/history/historyAr/CommitmentSectionAr';
import TimelineSectionAr from '@/app/components/history/historyAr/TimelineSectionAr';
import FooterAr from '@/app/components/FooterAr';

const AboutPageAr = () => {
  return (
    <main>
      <BreadcrumbAr />
      <HistorySectionAr />
      <TimelineSectionAr/>
      <CommitmentSectionAr/>
      <FooterAr />
    </main>
  );
};

export default AboutPageAr;