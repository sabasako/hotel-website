"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Spinner from "../loading/Spinner";
import RightPanel from "./RightPanel";

export default function BookForm({ content }) {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shouldDisplayPanel, setShouldDisplayPanel] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    setTimeout(() => {
      const data = {
        success: true,
      };

      if (data.success) {
        setLoading(false);
        setIsSuccessful(true);
        setShouldDisplayPanel(true);
        e.target.reset();
      } else {
        setLoading(false);
        setIsSuccessful(false);
        setShouldDisplayPanel(true);
        console.log("Error", data);
      }
    }, 2000);
  }

  function handleClose() {
    setShouldDisplayPanel(false);
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
        type="email"
        name="_ელ-ფოსტა"
        placeholder={content.placeholder.email}
        required
      />

      <input
        className={cn(inputClasses, "")}
        type="number"
        name="_ტელეფონი"
        placeholder={content.placeholder.phone}
        required
      />

      <input
        className={cn(inputClasses, "")}
        type="text"
        name="_ოთახის_ნომერი"
        placeholder={content.placeholder.roomId}
        required
      />

      <input
        className={cn(inputClasses, "")}
        type="text"
        name="_ლოკაცია"
        placeholder={content.placeholder.location}
        required
      />

      <input
        className={cn(inputClasses, "")}
        type="date"
        name="_თარითი"
        placeholder={content.placeholder.date}
        required
      />

      <input
        className={cn(inputClasses, "")}
        type="date"
        name="_თარითი"
        placeholder={content.placeholder.date}
        required
      />

      <textarea
        className={cn(inputClasses, "resize-y h-52")}
        name="_შეტყობინება"
        placeholder={content.placeholder.message}
        required
      />

      <button
        className="flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-lg bg-blue-950 group text-primary"
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

      {loading && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-[999]">
          <Spinner />
        </div>
      )}

      <RightPanel
        isSuccessful={isSuccessful}
        handleClose={handleClose}
        shouldDisplayPanel={shouldDisplayPanel}
      />
    </form>
  );
}
