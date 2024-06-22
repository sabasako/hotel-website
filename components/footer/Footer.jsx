import { cn } from "@/lib/utils";
import Link from "next/link";
// import footer from "@/data/footer.json";

const social = [
  {
    url: "https://motherfuckingwebsite.com",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
      >
        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
        <path
          fill="#fff"
          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
        />
      </svg>
    ),
  },
  {
    url: "https://motherfuckingwebsite.com/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#0288D1"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
        ></path>
        <path
          fill="#FFF"
          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
        ></path>
      </svg>
    ),
  },
  {
    url: "https://motherfuckingwebsite.com/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5"></stop>
          <stop offset=".328" stopColor="#ff543f"></stop>
          <stop offset=".348" stopColor="#fc5245"></stop>
          <stop offset=".504" stopColor="#e64771"></stop>
          <stop offset=".643" stopColor="#d53e91"></stop>
          <stop offset=".761" stopColor="#cc39a4"></stop>
          <stop offset=".841" stopColor="#c837ab"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4168c9"></stop>
          <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <path
          fill="#fff"
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        ></path>
        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
        <path
          fill="#fff"
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        ></path>
      </svg>
    ),
  },
];

export default function Footer({ footer }) {
  const headingClasses = "text-2xl font-semibold text-primary";
  const listClasses = "space-y-3 mt-4";
  const linkClasses =
    "text-primary/70 transition-colors duration-200 hover:text-primary/50";

  return (
    <footer className="px-6 py-12 bg-[#4f5052] dark:bg-background-dark">
      <div className="flex flex-wrap justify-between gap-4 mx-auto max-w-[1200px] mobile-lg:justify-start mobile-lg:gap-12">
        <div>
          <img
            className={`w-24 h-auto`}
            src={footer.logoUrl}
            alt="Hotel logo / სასტუმროს ლოგო"
          />
          <hr className="h-0.5 w-full text-primary/20 mt-3" />
          <p className="text-base mt-6 max-w-[300px] text-primary mobile:text-sm mobile:max-w-[200px]">
            {footer.title}
          </p>
        </div>

        {footer.data.map((el, i) => (
          <div key={el.title + i}>
            <h4 className={cn(headingClasses)}>{el.title}</h4>
            <ul className={cn(listClasses)}>
              {el.links.map((item, i) => (
                <li key={i + item.label}>
                  {item?.href ? (
                    <Link className={cn(linkClasses)} href={item.href}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-neutral-medium dark:text-primary/70">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className={cn(headingClasses, "")}>
            {" "}
            {footer.contact.contactHeading}
          </h4>
          <ul className={cn(listClasses, "space-y-6")}>
            {footer.contact.phone && (
              <li className="flex flex-col items-start gap-1">
                <p className="flex items-center gap-2 mb-0 text-neutral-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="size-6 stroke-neutral-dark dark:stroke-primary/70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <span className="dark:text-primary/70">
                    {footer.contact.phoneLabel}:
                  </span>
                </p>
                <a
                  className={cn(
                    linkClasses,
                    `underline underline-offset-2 text-neutral-dark hover:no-underline dark:text-primary`
                  )}
                  href={`tel:+${footer.contact.phone.replace(/\s+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footer.contact.phone}
                </a>
              </li>
            )}
            {footer.contact?.email && (
              <li className="flex flex-col items-start gap-1">
                <p className="flex items-center gap-2 mb-0 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="size-6 stroke-primary/70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="text-primary/70">
                    {footer.contact.emailLabel}:
                  </span>
                </p>
                <a
                  className={cn(
                    linkClasses,
                    `underline underline-offset-2 text-primary hover:no-underline`
                  )}
                  href={`mailto:${footer.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footer.contact.email}
                </a>
              </li>
            )}
            <li className="flex items-center gap-2">
              {social.map((item, i) => (
                <a
                  key={i + item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition-opacity duration-150 hover:opacity-80 grayscale"
                  href={item.url}
                >
                  {item?.svg ? (
                    item.svg
                  ) : (
                    <img src={item?.image || ""} className="size-[48px]" />
                  )}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <p className="text-lg text-center tracking-[0.125rem] text-neutral-medium mt-16 dark:text-primary/70">
        &copy; {new Date().getFullYear()} {footer.companyName}
      </p>
    </footer>
  );
}
