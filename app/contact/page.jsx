"use client";

import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { useState } from "react";
import navigation from "@/data/navigation.json";
import footer from "@/data/footer.json";
import contact from "@/data/contact.json";

export default function ContactPage() {
  const [language, setLanguage] = useState("ge");

  function changeToEnglish() {
    setLanguage("en");
  }

  function changeToGeorgian() {
    setLanguage("ge");
  }

  const navigationContent = navigation[language];
  const footerContent = footer[language];
  const contactContent = contact[language];

  return (
    <>
      <Navigation
        changeToEnglish={changeToEnglish}
        changeToGeorgian={changeToGeorgian}
        content={navigationContent}
        language={language}
      />
      <Contact content={contactContent} />
      <Footer footer={footerContent} />
    </>
  );
}
