// app/home/HomeClient.tsx
"use client";

import { LanguageProvider } from "@/app/context/LanguageContext";
import ProductGrid from "@/app/components/ProductGrid";
import DiscoverCags from "@/app/components/DiscoverCags";
import Slider from "@/app/components/Slider";
import StatsCounter from "@/app/components/StatsCounter";
import JourneySection from "@/app/components/JourneySection";
import JoinNetwork from "@/app/components/JoinNetwork";
import translations from "@/app/locales/en.json";
import Footer from "@/app/components/Footer";

export default function HomeClient() {
  return (
    <LanguageProvider>
      <main>
        <Slider />
        <DiscoverCags content={translations.discoverCags} />
        <StatsCounter /> {/* ✅ hook stays safe here */}
        <JourneySection />
        <ProductGrid />
        <JoinNetwork />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
