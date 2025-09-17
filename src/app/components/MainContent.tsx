"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { useEffect } from "react";

interface MainContentProps {
  initialLanguage: "en" | "fr" | "ru" | "ar";
}

export default function MainContent({ initialLanguage }: MainContentProps) {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage, setLanguage]);

  return <p>Current language: {language}</p>;
}
