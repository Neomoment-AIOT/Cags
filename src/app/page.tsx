import type { Metadata } from "next";
import PageClient from "./PageClient"; // 👈 new client-only component

export const metadata: Metadata = {
  title: "CAGS | Premium Rolling Papers, Cigarette Tubes & Tobacco",
  description:
    "Discover CAGS, a global tobacco company with 40+ years of expertise. Premium rolling papers, cigarette tubes, and waterpipe tobacco distributed worldwide.",
  alternates: {
    canonical: "https://cagsgrp.com",
    languages: {
      en: "https://cagsgrp.com",
      fr: "https://cagsgrp.com/home/HomeFr",
      ru: "https://cagsgrp.com/home/HomeRu",
      ar: "https://cagsgrp.com/home/HomeAr",
    },
  },
};

export default function Page() {
  return <PageClient />; // ✅ client logic is inside PageClient
}
