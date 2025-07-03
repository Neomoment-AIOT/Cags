// app/layout.tsx
"use client";

import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AgeVerificationPopup from './components/AgeVerificationPopup';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          Key Change 1: The main layout is now rendered on both server and client.
          This fixes the main hydration error and preserves SSR benefits.
        */}
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        
        {/*
          Key Change 2: The client-side only component is conditionally rendered.
          It will not be rendered on the server or during the initial client render.
          It only appears *after* the component has mounted, preventing a mismatch.
        */}
        {hasMounted && !isVerified && <AgeVerificationPopup onConfirm={handleConfirmAge} />}
      </body>
    </html>
  );
}