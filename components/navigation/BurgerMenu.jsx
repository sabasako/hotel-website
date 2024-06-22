"use client";

import { cn } from "@/lib/utils";

export default function BurgerMenu({ isOpen, onMenu }) {
  const spanClasses =
    "block absolute h-[4px] w-full opacity-100 rotate-0 transition-all duration-300 ease-in-out rounded-[9px] left-0 bg-neutral-dark origin-[left_center]";

  return (
    <button
      className={`w-[32px] h-[23px] relative rotate-0 transition-all duration-500 ease-in-out cursor-pointer hidden md:inline-block z-50`}
      onClick={onMenu}
    >
      <span
        className={cn(
          spanClasses,
          isOpen ? "rotate-45 top-[2px] left-[8px]" : "top-0 "
        )}
      ></span>
      <span
        className={cn(spanClasses, isOpen ? "w-0 opacity-0" : "top-[10px]")}
      ></span>
      <span
        className={cn(
          spanClasses,
          isOpen ? "-rotate-45 left-[8px] top-[24px]" : "top-[20px]"
        )}
      ></span>
    </button>
  );
}
