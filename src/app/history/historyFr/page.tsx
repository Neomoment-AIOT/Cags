import React from 'react';
import BreadcrumbFr from '@/app/components/history/historyFr/BreadcrumbFr';
import HistorySectionFr from '@/app/components/history/historyFr/HistorySectionFr'; 
import CommitmentSectionFr from '@/app/components/history/historyFr/CommitmentSectionFr';
import TimelineSectionFr from '@/app/components/history/historyFr/TimelineSectionFr';
import FooterFr from '@/app/components/FooterFr';

const AboutPageFr = () => {
  return (
    <main>
      <BreadcrumbFr />
      <HistorySectionFr />
      <TimelineSectionFr/>
      <CommitmentSectionFr/>
      <FooterFr />
    </main>
  );
};

export default AboutPageFr;