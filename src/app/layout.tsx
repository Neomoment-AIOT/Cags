// app/layout.tsx
"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Lato } from "next/font/google"; // Import font
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AgeVerificationPopup from './components/AgeVerificationPopup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LanguageProvider } from './context/LanguageContext';
import ClientLayout from "./components/ClientLayout";

// ✅ Fixed: Avoid name conflict, and correct subset
const latoFont = Lato({ 
  subsets: ["latin"], 
  weight: ['400', '700'], // Optional: include multiple weights
  display: 'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
    setShowPopup(true); // Show popup on each route change
  }, [pathname]); // Trigger on every page change

  const handleConfirmAge = () => {
    setShowPopup(false); // Hide popup only for this visit/page
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={latoFont.className}> 
        <LanguageProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          {hasMounted && showPopup && (
            <AgeVerificationPopup onConfirm={handleConfirmAge} />
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}
