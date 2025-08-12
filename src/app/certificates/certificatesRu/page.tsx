'use client';
import { useState, useEffect } from 'react';

import Breadcrumb from '@/app/components/certificates/BreadcrumbRu';
import CertificateSection from '@/app/components/certificates/CertificateSectionRu'; 
import CommitmentSection from '@/app/components/certificates/CommitmentSectionRu';
import FooterRu from '@/app/components/FooterRu';

const certificates = () => {
  return (
    <main>
      <Breadcrumb /> 
      <CertificateSection />
      <CommitmentSection/>
      <FooterRu />
    </main>
  );
};

export default certificates;