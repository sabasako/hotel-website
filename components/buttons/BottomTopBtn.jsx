import Link from "next/link";
import { cn } from "../../lib/utils";

export default function BottomTopBtn({
  children,
  href = "/",
  shouldBeButton = false,
  className = "",
  onClick,
  type,
}) {
  const defaultClassName =
    "relative px-8 font-semibold text-lg text-neutral-dark py-3 rounded-md bg-white isolation-auto z-10 border border-neutral-dark before:absolute before:w-full transition-all duration-300 before:transition-all before:duration-300 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden hover:border-secondary hover:text-primary before:hover:duration-700";

  if (shouldBeButton) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={cn(defaultClassName, className)}
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={cn(defaultClassName, className)}>
      {children}
    </Link>
  );
}
