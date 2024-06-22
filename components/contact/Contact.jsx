import ContactForm from "@/components/contact/ContactForm";

export default function Contact({ content }) {
  return (
    <section
      style={{
        gridTemplateAreas: `"F1 F2"
                            "F1 F2"
                            "F1 F2"
                            "F1 F2"
                            "F1 F3"
                            "F1 F3"`,
      }}
      className="px-6 mt-44 mb-24 max-w-[1100px] mx-auto grid grid-cols-2 grid-rows-6 gap-6 md:block"
    >
      <div
        style={{ gridArea: "F1" }}
        className="rounded-xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] p-6"
      >
        <h1 className="text-4xl font-bold mobile-lg:text-3xl sm:break-words">
          {content.title}
        </h1>
        <p className="mt-4 text-lg mobile-lg:text-base">
          {content.description}
        </p>
        <hr className="w-full h-0.5 bg-black/20 mt-4" />

        <ContactForm content={content} />
      </div>
      <div
        style={{ gridArea: "F2" }}
        className="rounded-xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] md:hidden"
      >
        <img
          className="w-full h-full bg-center bg-cover rounded-xl"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/524271047.jpg?k=a54349ffa894665e7d93f7bcc6bb7eb10301b1ffed152ce3d9491f5cbbe29fa8&o=&hp=1"
          alt="hotel"
        />
      </div>
      <div
        style={{ gridArea: "F3" }}
        className="rounded-xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] md:mt-8 p-6 space-y-8 md:space-y-0 md:flex md:justify-between md:items-center md:flex-wrap md:gap-8"
      >
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="p-3 rounded-full size-12 stroke-secondary bg-secondary/30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <div className="flex flex-col gap-4">
            <span className="text-lg text-neutral-dark">
              {content.contact.phoneLabel}:
            </span>
            <a
              className={`underline underline-offset-2 text-neutral-medium hover:no-underline`}
              href="tel:+995599999999"
            >
              +995 599 999 999
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="p-3 rounded-full size-12 stroke-secondary bg-secondary/30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <div className="flex flex-col gap-4">
            <span className="text-lg text-neutral-dark">
              {content.contact.emailLabel}:
            </span>
            <a
              className={`underline underline-offset-2 text-neutral-medium hover:no-underline`}
              href="mailto:info@hotel.ge"
            >
              info@hotel.ge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
