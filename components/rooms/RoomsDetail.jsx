"use client";

import Link from "next/link";
import React from "react";

export default function RoomsDetail({ room, language }) {
  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="my-24 room-detail">
      <img src={room.image} alt={room.title} className="room-image" />
      <h1>{room.title}</h1>
      <p>{room.details}</p>
      <p className="location">
        {language === "ge" ? "ლოკაცია" : "Location"}: {room.location}
      </p>
      <p className="score">
        {language === "ge" ? "რეიტინგი" : "Rating"}: {room.score}
      </p>
      <div className="statistics">
        {room.originalPrice && (
          <div className="previous-price">${room.originalPrice}</div>
        )}
        <div className="price">${room.price}</div>
      </div>
      <Link href={"/book"} className="book-button">
        {language === "ge" ? "დაჯავშნა" : "Book Now"}
      </Link>
    </div>
  );
}
