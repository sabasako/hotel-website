"use client";

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import {
  FaWifi,
  FaConciergeBell,
  FaSwimmingPool,
  FaDumbbell,
  FaBusinessTime,
} from "react-icons/fa";
import Link from "next/link";

export default function Home({ content }) {
  return (
    <div className="mt-8 home">
      <section className="hero">
        <ImageSlider />
        <h1>{content.welcome}</h1>
        <p>{content.experience}</p>
      </section>
      <section className="photo-gallery">
        <h2>{content.gallery}</h2>
        <div className="photos">
          <img
            src="https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/65046bf150d1abb7e5911702_x-65046bcfdc4f0.webp
"
            alt="Hotel Lobby"
          />
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill
"
            alt="Hotel Room"
          />
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/160502155618-terranea-vista-pool.jpg?q=w_1600,h_900,x_0,y_0,c_fill
"
            alt="Hotel Pool"
          />
        </div>
      </section>
      <section className="general-info">
        <h2>{content.aboutUs}</h2>
        <p>{content.aboutUsText}</p>
      </section>
      <section className="amenities">
        <h2>{content.amenities}</h2>
        <ul>
          <li>
            <FaWifi /> {content.freeWiFi}
          </li>
          <li>
            <FaConciergeBell /> {content.roomService}
          </li>
          <li>
            <FaSwimmingPool /> {content.swimmingPool}
          </li>
          <li>
            <FaDumbbell /> {content.gymSpa}
          </li>
          <li>
            <FaBusinessTime /> {content.conferenceRooms}
          </li>
        </ul>
      </section>
      <section className="testimonials">
        <h2>{content.guestReviews}</h2>
        <div className="review">
          <p>"{content.review1}"</p>
          <span>- John Doe</span>
        </div>
        <div className="review">
          <p>"{content.review2}"</p>
          <span>- Jane Smith</span>
        </div>
      </section>
      <section className="call-to-action">
        <Link href="/book" className="reserve-button">
          {content.reserveNow}
        </Link>
      </section>
    </div>
  );
}
