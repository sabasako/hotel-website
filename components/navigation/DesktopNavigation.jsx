import Link from "next/link";
import BottomTopBtn from "../buttons/BottomTopBtn";
import logo from "/public/hilton.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DesktopNavigation({
  links,
  shouldBeSmall,
  changeToEnglish,
  changeToGeorgian,
}) {
  const path = usePathname();

  return (
    <nav className="max-w-[1440px] mx-auto flex justify-between gap-8 items-center md:hidden">
      <Link href={"/"}>
        <Image
          className={`h-auto transition-all duration-300 ${
            shouldBeSmall ? "w-14" : "w-20"
          }`}
          src={logo}
          alt="სასტუმრო"
        />
      </Link>

      <ul className={`flex gap-12 transition-all duration-300 ease-in-out`}>
        {links.navigation.map((link, i) => (
          <li
            key={link.href + i + link.label}
            className={`group py-2 ${
              link.sublinks.length > 0 ? "relative" : ""
            }`}
          >
            <Link
              className={`text-lg lg:text-sm font-medium ${
                link.sublinks.length > 0 ? "flex items-center gap-2" : ""
              } ${
                path.startsWith(link.href)
                  ? "text-neutral-dark"
                  : "text-neutral-medium hover:text-neutral-dark duration-150 transition-all"
              }`}
              href={link.href}
            >
              {link.label}
              {link.sublinks.length > 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="transition-transform duration-150 size-6 group-hover:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </Link>
            {link.sublinks.length > 0 && (
              <div className="absolute flex-col hidden gap-4 p-8 -translate-x-1/2 translate-y-full bg-white border group-hover:flex -bottom-0 rounded-xl border-neutral-dark left-1/2 bg-yellow w-72">
                {link.sublinks.map((sublink, i) => (
                  <Link
                    key={sublink.href + i + sublink.label}
                    href={sublink.href}
                    className="transition-colors duration-150 hover:opacity-70"
                  >
                    {sublink.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <BottomTopBtn href={"/contact"}>{links.contact}</BottomTopBtn>
        <div className="language-switcher">
          <button onClick={changeToEnglish}>🇺🇸</button>
          <button onClick={changeToGeorgian}>🇬🇪</button>
        </div>
      </div>
    </nav>
  );
}
