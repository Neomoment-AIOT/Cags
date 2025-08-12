'use client';
import { useState, useEffect } from 'react';

import Breadcrumb from '@/app/components/certificates/BreadcrumbFr';
import CertificateSection from '@/app/components/certificates/CertificateSectionFr'; 
import CommitmentSection from '@/app/components/certificates/CommitmentSectionFr';
import FooterFr from '@/app/components/FooterFr';

const certificates = () => {
  return (
    <main>
      <Breadcrumb /> 
      <CertificateSection />
      <CommitmentSection/>
      <FooterFr />
    </main>
  );
};

export default certificates;