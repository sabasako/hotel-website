"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HotelRooms({ hotelRoomsData, language }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(hotelRoomsData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const handlePriceRange = (event) => {
    const range = event.target.value.split("-").map(Number);
    setPriceRange(range);
  };

  const handleLocationFilter = (event) => {
    setLocationFilter(event.target.value);
  };

  useEffect(() => {
    setFilteredRooms(hotelRoomsData);
  }, [hotelRoomsData]);

  useEffect(() => {
    let rooms = hotelRoomsData;

    if (searchTerm) {
      rooms = rooms.filter((room) =>
        room.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter) {
      rooms = rooms.filter((room) => room.location === locationFilter);
    }

    if (priceRange.length === 2) {
      rooms = rooms.filter(
        (room) => room.price >= priceRange[0] && room.price <= priceRange[1]
      );
    }

    if (sortOption === "priceAsc") {
      rooms.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      rooms.sort((a, b) => b.price - a.price);
    }

    setFilteredRooms(rooms);
  }, [searchTerm, sortOption, priceRange, locationFilter]);

  return (
    <div className="my-32 max-w-[1200px] mx-auto">
      <h1>{language === "ge" ? "სასტუმროს ოთახები" : "Hotel Rooms"}</h1>
      <div className="flex gap-6 mt-4">
        <input
          type="text"
          placeholder={language === "ge" ? "ოთახების ძიება" : "Search rooms"}
          className="px-4 py-2 text-gray-800 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="px-4 py-2 bg-transparent border border-gray-300 rounded-md cursor-pointer"
          value={sortOption}
          onChange={handleSort}
        >
          <option value="">{language === "ge" ? "დალაგება" : "Sort By"}</option>
          <option value="priceAsc">
            {language === "ge" ? "ფასები (ზრდადობით)" : "Price (Low to High)"}
          </option>
          <option value="priceDesc">
            {language === "ge" ? "ფასები (კლებადობით)" : "Price (High to Low)"}
          </option>
        </select>
        <select
          className="px-4 py-2 bg-transparent border border-gray-300 rounded-md cursor-pointer"
          value={priceRange.join("-")}
          onChange={handlePriceRange}
        >
          <option value="0-1000">
            {language === "ge" ? "ყველა ფასი" : "All Prices"}
          </option>
          <option value="0-50">$0 - $50</option>
          <option value="51-200">$51 - $200</option>
          <option value="201-500">$201 - $500</option>
        </select>
        <select
          className="px-4 py-2 bg-transparent border border-gray-300 rounded-md cursor-pointer"
          value={locationFilter}
          onChange={handleLocationFilter}
        >
          <option value="">
            {language === "ge" ? "ყველა ლოკაცია" : "All Locations"}
          </option>
          <option value="New York">
            {language === "ge" ? "ნიუ იორკი" : "New York"}{" "}
          </option>
          <option value="Boston">
            {language === "ge" ? "ბოსტონი" : "Boston"}
          </option>
          <option value="Miami">
            {language === "ge" ? "მაიამი" : "Miami"}
          </option>
        </select>
      </div>
      <section className="rooms">
        {filteredRooms.map((room) => (
          <div className="each-room" key={room.id}>
            {room.originalPrice && (
              <div className="sale-badge">
                {language === "ge" ? "ფასდაკლება" : "Sale"}
              </div>
            )}
            {!room.available && (
              <div className="unavailable-badge">
                {language === "ge" ? "მიუწვდომელია" : "Unavailable"}
              </div>
            )}
            <img src={room.image} alt={room.title} className="room-image" />
            <div className="room-info">
              <Link href={`/rooms/${room.id}`}>
                <h1>{room.title}</h1>
              </Link>
              <p className="location">{room.location}</p>
              <p className="details">{room.details}</p>
              <p className="score">
                {" "}
                {language === "ge" ? "რეიტინგი" : "Rating"}: {room.score}
              </p>
            </div>
            <div className="statistics">
              {room.originalPrice && (
                <div className="previous-price">${room.originalPrice}</div>
              )}
              <div className="price">${room.price}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
