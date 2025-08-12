'use client';
import { useState, useEffect } from 'react';

import Breadcrumb from '@/app/components/certificates/BreadcrumbAr';
import CertificateSection from '@/app/components/certificates/CertificateSectionAr'; 
import CommitmentSection from '@/app/components/certificates/CommitmentSectionAr';
import FooterAr from '@/app/components/FooterAr';

const certificates = () => {
  return (
    <main>
      <Breadcrumb /> 
      <CertificateSection />
      <CommitmentSection/>
      <FooterAr />
    </main>
  );
};

export default certificates;