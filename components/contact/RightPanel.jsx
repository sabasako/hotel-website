import BottomTopBtn from "../buttons/BottomTopBtn";

export default function RightPanel({
  shouldDisplayPanel,
  handleClose,
  isSuccessful,
}) {
  return (
    <>
      <div
        className={`fixed right-0 top-0 bottom-0 py-8 px-12 bg-primary z-[999] transition-all duration-300 ease-in-out mobile-lg:px-8 ${
          shouldDisplayPanel
            ? "translate-x-0 opacity-100 visible pointer-events-auto"
            : "translate-x-full opacity-0 invisible pointer-events-none"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mt-12 mobile-lg:text-2xl">
          დაგვიკავშირდით
        </h2>
        <hr className="bg-black/30 w-full mt-4 mb-20" />

        {isSuccessful ? (
          <>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                className="size-10 p-2 rounded-full bg-green-600 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>

            <p className="text-xl font-semibold text-center mt-12 mobile-lg:text-lg mobile-lg:max-w-[250px] mobile-lg:mt-8">
              მადლობა დაკავშირებისთვის!
            </p>
            <p className="text-center text-lg max-w-[350px] mt-4 mobile-lg:max-w-[250px] mobile-lg:text-base">
              თქვენი შეტყობინება მიღებულია და ჩვენც მალევე დაგვიკავშირდებით
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-20 fill-red-700"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold text-center mt-12">
              რაღაც არასწორად წავიდა :(
            </p>
            <p className="text-center text-lg max-w-[350px] mt-4">
              გთხოვთ სცადოთ თავიდან გამოგზავნოთ შეტყობინება ან დაგვიკავშირდით
              ტელეფონის ნომერზე ან მოგვწერეთ ფეისბუქზე
            </p>
          </>
        )}

        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <BottomTopBtn
          onClick={handleClose}
          className="inline-block text-primary bg-secondary self-start justify-self-start border-none before:hover:bg-neutral-dark w-[85%] absolute bottom-4 left-1/2 -translate-x-1/2"
          shouldBeButton={true}
          type="button"
        >
          დახურვა
        </BottomTopBtn>
      </div>
      {shouldDisplayPanel && (
        <div className="fixed inset-0 bg-black/30 z-[998]"></div>
      )}
    </>
  );
}
