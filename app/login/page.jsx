"use client";

import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { useState } from "react";
import navigation from "@/data/navigation.json";
import footer from "@/data/footer.json";
import login from "@/data/login.json";
import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  const [language, setLanguage] = useState("ge");

  function changeToEnglish() {
    setLanguage("en");
  }

  function changeToGeorgian() {
    setLanguage("ge");
  }

  const navigationContent = navigation[language];
  const footerContent = footer[language];
  const loginContent = login[language];

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
          {language === "en" ? "Log in" : "შესვლა"}
        </h1>
        <LoginForm content={loginContent} language={language} />
      </section>
      <Footer footer={footerContent} />
    </>
  );
}
