"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "/public/hilton.jpg";
import BurgerMenu from "./BurgerMenu";
import BottomTopBtn from "../buttons/BottomTopBtn";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNavigation({
  isOpen,
  links,
  handleNavigation,
  handleMenu,
  shouldBeSmall,
  changeToEnglish,
  changeToGeorgian,
}) {
  return (
    <nav className="hidden md:flex max-w-[1440px] mx-auto justify-between gap-8 items-center">
      <Link href={"/"} className="relative z-50">
        <Image
          className={`h-auto transition-all duration-300 ${
            shouldBeSmall ? "w-12" : "w-16"
          }`}
          src={logo}
          alt="Hotel logo / სასტუმროს ლოგო"
        />
      </Link>

      <BurgerMenu isOpen={isOpen} onMenu={handleMenu} />

      <ul
        className={`flex gap-12 transition-all duration-300 ease-in-out flex-col fixed inset-0 bg-primary justify-center items-center overflow-y-auto ${
          !isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {links.navigation.map((link, i) => (
          <li
            key={link.href + i + link.label}
            className={`${
              link.sublinks.length > 0 ? "flex items-center gap-2 relative" : ""
            }`}
          >
            <NavLink link={link} handleNavigation={handleNavigation} />
          </li>
        ))}
        <div className="flex items-center gap-2">
          <BottomTopBtn className="py-5 text-xl px-14" href={"/contact"}>
            {links.contact}
          </BottomTopBtn>
          <div className="language-switcher">
            <button onClick={changeToEnglish}>🇺🇸</button>
            <button onClick={changeToGeorgian}>🇬🇪</button>
          </div>
        </div>
      </ul>
    </nav>
  );
}

function NavLink({ link, handleNavigation }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <Link
        onClick={(e) => handleNavigation(e, link.href)}
        className={`text-2xl font-medium ${
          path.startsWith(link.href)
            ? "text-neutral-dark"
            : "text-neutral-medium hover:text-neutral-dark duration-150 transition-all"
        }`}
        href={link.href}
      >
        {link.label}
      </Link>
      {link.sublinks.length > 0 && (
        <button
          type="button"
          aria-expanded={isDropdownOpen}
          aria-controls={`dropdown-${link.href}`}
          aria-label="ქვემენიუს ჩამოშლა"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className={`size-6 transition-transform duration-150 stroke-neutral-medium ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      )}
      {link.sublinks.length > 0 && isDropdownOpen && (
        <div className="absolute flex flex-col gap-4 p-8 -translate-x-1/2 translate-y-full bg-white border -bottom-2 rounded-xl border-neutral-dark left-1/2 bg-yellow w-72">
          {link.sublinks.map((sublink, i) => (
            <Link
              key={sublink.href + i + sublink.label}
              href={sublink.href}
              onClick={(e) => handleNavigation(e, sublink.href)}
              className="transition-colors duration-150 hover:opacity-70"
            >
              {sublink.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
