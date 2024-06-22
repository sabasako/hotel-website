"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Spinner from "../loading/Spinner";

export default function SignupForm({ content, language }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const data = {
        success: true,
      };

      if (data.success) {
        setLoading(false);
        e.target.reset();
      } else {
        setLoading(false);
        console.log("Error", data);
      }
    }, 2000);
  }

  const inputClasses =
    "bg-background-medium px-4 py-3 rounded-lg text-neutral-dark w-full";

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 py-8"
    >
      <div className="flex justify-between gap-2 mobile:flex-col mobile:gap-4">
        <input
          className={cn(inputClasses, "")}
          type="text"
          name="_სახელი"
          placeholder={content.placeholder.name}
          required
        />

        <input
          className={cn(inputClasses, "")}
          type="text"
          name="_გვარი"
          placeholder={content.placeholder.lastName}
          required
        />
      </div>

      <input
        className={cn(inputClasses, "")}
        type="number"
        name="_ტელეფონი"
        placeholder={content.placeholder.phone}
        required
      />

      <input
        className={cn(inputClasses, "")}
        type="email"
        name="_ელ-ფოსტა"
        placeholder={content.placeholder.email}
        required
      />

      <input
        className={cn(inputClasses, "")}
        type="password"
        name="_პაროლი"
        placeholder={content.placeholder.password}
        required
      />

      <input
        className={cn(inputClasses, "")}
        type="password"
        name="_გაიმეორეთ_პაროლი"
        placeholder={content.placeholder.repeatPassword}
        required
      />

      <button
        className="flex items-center justify-center gap-2 px-8 py-4 font-bold bg-green-800 rounded-lg group text-primary"
        type="submit"
      >
        {content.submit}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="transition duration-150 size-6 stroke-primary group-hover:translate-x-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </button>

      <p className="text-center text-neutral-medium">
        {language === "ge" ? "ან" : "OR"}
      </p>

      <button className="relative px-6 py-5 font-bold text-black bg-gray-100 rounded-lg shadow-md hover:opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
          className="absolute -translate-y-1/2 left-4 top-1/2"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        {language === "ge" ? "გუგლით რეგისტრაცია" : "Sing up with Google"}
      </button>

      <button className="relative px-6 py-5 font-bold text-white bg-blue-500 rounded-lg shadow-md hover:opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          className="absolute -translate-y-1/2 left-4 top-1/2"
          viewBox="0 0 48 48"
        >
          <path
            fill="#fff"
            d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
          ></path>
          <path
            fill="#039be5"
            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
          ></path>
        </svg>
        {language === "ge" ? "ფეისბუქით რეგისტრაცია" : "Sing up with Facebook"}
      </button>

      {loading && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-[999]">
          <Spinner />
        </div>
      )}
    </form>
  );
}
