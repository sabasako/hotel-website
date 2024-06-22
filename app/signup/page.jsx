"use client";

import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { useState } from "react";
import navigation from "@/data/navigation.json";
import footer from "@/data/footer.json";
import register from "@/data/register.json";
import SignupForm from "@/components/signup/SignupForm";

export default function RegisterPage() {
  const [language, setLanguage] = useState("ge");

  function changeToEnglish() {
    setLanguage("en");
  }

  function changeToGeorgian() {
    setLanguage("ge");
  }

  const navigationContent = navigation[language];
  const footerContent = footer[language];
  const registerContent = register[language];

  return (
    <>
      <Navigation
        changeToEnglish={changeToEnglish}
        changeToGeorgian={changeToGeorgian}
        content={navigationContent}
        language={language}
      />
      <section className="max-w-[600px] mx-auto my-24 px-6">
        <h1 className="text-3xl font-bold mobile-lg:text-3xl sm:break-words">
          {language === "en" ? "Sign Up" : "რეგისტრაცია"}
        </h1>
        <SignupForm content={registerContent} language={language} />
      </section>
      <Footer footer={footerContent} />
    </>
  );
}
