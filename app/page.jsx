"use client";

import Footer from "@/components/footer/Footer";
import Home from "@/components/landing/Home";
import Navigation from "@/components/navigation/Navigation";
import { useState } from "react";
import translations from "@/data/homepage.json";
import navigation from "@/data/navigation.json";
import footer from "@/data/footer.json";

export default function HomePage() {
  const [language, setLanguage] = useState("ge");

  function changeToEnglish() {
    setLanguage("en");
  }

  function changeToGeorgian() {
    setLanguage("ge");
  }

  const content = translations[language];
  const navigationContent = navigation[language];
  const footerContent = footer[language];

  return (
    <>
      <Navigation
        changeToEnglish={changeToEnglish}
        changeToGeorgian={changeToGeorgian}
        content={navigationContent}
        language={language}
      />
      <Home content={content} />
      <Footer footer={footerContent} />
    </>
  );
}
