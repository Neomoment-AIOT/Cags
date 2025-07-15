// app/layout.tsx
"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AgeVerificationPopup from './components/AgeVerificationPopup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LanguageProvider } from './contexts/LanguageContext'; // Import the provider
import ClientLayout from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  const [isVerified, setIsVerified] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // This effect now runs only on the client, after the initial render
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
    // suppressHydrationWarning is best placed on <html> for browser extension issues
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        {/*
          The LanguageProvider now wraps your entire application.
          This makes the language state and translation function (t)
          available to the Header, Footer, and all page content.
        */}
        <LanguageProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          
          {/*
            Your client-side age verification logic remains unchanged.
            It will correctly appear only after the component has mounted.
          */}
          {hasMounted && !isVerified && <AgeVerificationPopup onConfirm={handleConfirmAge} />}
        </LanguageProvider>
      </body>
    </html>
  );
}