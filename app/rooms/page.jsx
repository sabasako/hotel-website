"use client";

import HotelRooms from "@/components/rooms/HotelRooms";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { useState } from "react";
import navigation from "@/data/navigation.json";
import footer from "@/data/footer.json";
import rooms from "@/data/rooms.json";

export default function RoomPage() {
  const [language, setLanguage] = useState("ge");

  function changeToEnglish() {
    setLanguage("en");
  }

  function changeToGeorgian() {
    setLanguage("ge");
  }

  const navigationContent = navigation[language];
  const footerContent = footer[language];
  const roomsContent = rooms[language].rooms;

  return (
    <>
      <Navigation
        changeToEnglish={changeToEnglish}
        changeToGeorgian={changeToGeorgian}
        content={navigationContent}
        language={language}
      />
      <HotelRooms language={language} hotelRoomsData={roomsContent} />
      <Footer footer={footerContent} />
    </>
  );
}
