"use client";

import React from "react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Homepage from "./home/page";

function MainContent() {
  const { content } = useLanguage();

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Homepage />
    </main>
  );
}

export default function PageClient() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
