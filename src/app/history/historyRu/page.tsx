import React from 'react';
import BreadcrumbRu from '@/app/components/history/historyRu/BreadcrumbRu';
import HistorySectionRu from '@/app/components/history/historyRu/HistorySectionRu'; 
import CommitmentSectionRu from '@/app/components/history/historyRu/CommitmentSectionRu';
import TimelineSectionRu from '@/app/components/history/historyRu/TimelineSectionRu';
import FooterRu from '@/app/components/FooterRu';

const AboutPageRu = () => {
  return (
    <main>
      <BreadcrumbRu />
      <HistorySectionRu />
      <TimelineSectionRu />
      <CommitmentSectionRu />
      <FooterRu />
    </main>
  );
};

export default AboutPageRu;