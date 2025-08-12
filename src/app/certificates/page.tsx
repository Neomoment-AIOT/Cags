'use client';
import { useState, useEffect } from 'react';

import Breadcrumb from '../components/certificates/Breadcrumb';
import CertificateSection from '../components/certificates/CertificateSection'; 
import CommitmentSection from '../components/certificates/CommitmentSection';
import Footer from '../components/Footer';

const certificates = () => {
  return (
    <main>
      <Breadcrumb /> 
      <CertificateSection />
      <CommitmentSection/>
      <Footer />
    </main>
  );
};

export default certificates;