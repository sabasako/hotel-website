"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
// import links from "@/data/navigation.json";
import useScroll from "@/hooks/useScroll";

export default function Navigation({
  content,
  changeToGeorgian,
  changeToEnglish,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollPosition = useScroll();
  const shouldBeSmall = scrollPosition > 0;

  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function handleMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleNavigation(e, link) {
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = "auto";
    router.push(link);
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-30 bg-primary px-6 border-b border-b-neutral-dark transition-all duration-300 ${
        shouldBeSmall ? "py-4 md:py-2" : "py-8 md:py-4"
      }`}
    >
      <DesktopNavigation
        shouldBeSmall={shouldBeSmall}
        links={content}
        changeToEnglish={changeToEnglish}
        changeToGeorgian={changeToGeorgian}
      />

      <MobileNavigation
        shouldBeSmall={shouldBeSmall}
        handleNavigation={handleNavigation}
        isOpen={isOpen}
        links={content}
        handleMenu={handleMenu}
        changeToEnglish={changeToEnglish}
        changeToGeorgian={changeToGeorgian}
      />
    </header>
  );
}
