"use client";

import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { useState } from "react";
import navigation from "@/data/navigation.json";
import footer from "@/data/footer.json";
import rooms from "@/data/rooms.json";
import RoomsDetail from "@/components/rooms/RoomsDetail";

export default function RoomsDetailsPage({ params }) {
  const [language, setLanguage] = useState("ge");

  function changeToEnglish() {
    setLanguage("en");
  }

  function changeToGeorgian() {
    setLanguage("ge");
  }

  const navigationContent = navigation[language];
  const footerContent = footer[language];
  const roomsContent = rooms[language];

  const currentRoom = roomsContent.rooms.find(
    (room) => room.id === parseInt(params.slug)
  );

  return (
    <>
      <Navigation
        changeToEnglish={changeToEnglish}
        changeToGeorgian={changeToGeorgian}
        content={navigationContent}
        language={language}
      />
      <RoomsDetail language={language} room={currentRoom} />
      <Footer footer={footerContent} />
    </>
  );
}
