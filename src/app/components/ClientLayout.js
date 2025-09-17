// app/components/ClientLayout.tsx
'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from "@/app/components/Header";
import AgeVerificationPopup from './AgeVerificationPopup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function ClientLayout({
  children,
} 
// Readonly<{
//   children: React.ReactNode;
// }>
) {
  // All your state and logic is now safely inside a client component
  const [isVerified, setIsVerified] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); 
    const ageVerifiedInStorage = localStorage.getItem('isAgeVerified');
    if (ageVerifiedInStorage === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleConfirmAge = () => {
    localStorage.setItem('isAgeVerified', 'true');
    setIsVerified(true);
  };

  return (
    <LanguageProvider>
      <Header />
      <main className="pt-20">
        {children}
      </main>
     
      
      {/* Your client-side age verification logic remains unchanged */}
      {hasMounted && !isVerified && <AgeVerificationPopup onConfirm={handleConfirmAge} />}
    </LanguageProvider>
  );
}