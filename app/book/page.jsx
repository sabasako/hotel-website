"use client";

import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { useState } from "react";
import navigation from "@/data/navigation.json";
import footer from "@/data/footer.json";
import book from "@/data/book.json";
import BookForm from "@/components/book/BookForm";

export default function BookPage() {
  const [language, setLanguage] = useState("ge");

  function changeToEnglish() {
    setLanguage("en");
  }

  function changeToGeorgian() {
    setLanguage("ge");
  }

  const navigationContent = navigation[language];
  const footerContent = footer[language];
  const bookContent = book[language];

  return (
    <>
      <Navigation
        changeToEnglish={changeToEnglish}
        changeToGeorgian={changeToGeorgian}
        content={navigationContent}
        language={language}
      />
      <section className="max-w-[600px] mx-auto my-24 px-6">
        <h1 className="text-4xl font-bold mobile-lg:text-3xl sm:break-words">
          {language === "en" ? "Book a Room" : "დაჯავშნეთ ოთახი"}
        </h1>
        <BookForm content={bookContent} />
      </section>
      <Footer footer={footerContent} />
    </>
  );
}
