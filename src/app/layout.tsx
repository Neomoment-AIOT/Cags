
import 'bootstrap/dist/css/bootstrap.min.css';
import { Lato } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ClientLayout from './components/ClientLayout';
import { LanguageProvider } from "@/app/contexts/LanguageContext";  // ✅ import provider
import type { Metadata } from 'next';
const latoFont = Lato({ 
  subsets: ["latin"], 
  weight: ['400', '700'], 
  display: 'swap'
});
export const metadata: Metadata = {
  title: 'CAGS | Premium Rolling Papers, Cigarette Tubes & Tobacco Accessories',
  description: 'Discover CAGS, a global tobacco company with 40+ years of expertise. Premium rolling papers, cigarette tubes, and waterpipe tobacco distributed worldwide.',
  icons: {
    icon: '/fav.png',       // default
    shortcut: '/fav.png',   // optional
    apple: '/fav.png', // optional (for iOS)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={latoFont.className} suppressHydrationWarning>
        <LanguageProvider>   {/* ✅ wrap here */}
          <ClientLayout>
            {children}
          </ClientLayout>
          
        </LanguageProvider>
      </body>
    </html>
  );
}
